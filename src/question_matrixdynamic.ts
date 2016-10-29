﻿import {QuestionMatrixDropdownModelBase,
    MatrixDropdownRowModelBase, IMatrixDropdownData
} from "./question_matrixdropdownbase";
import {JsonObject} from "./jsonobject";
import {QuestionFactory} from "./questionfactory";
import {surveyLocalization} from "./surveyStrings";
import {SurveyError} from "./base";
import {CustomError} from "./error";

export class MatrixDynamicRowModel extends MatrixDropdownRowModelBase {
    constructor(public index: number, data: IMatrixDropdownData, value: any) {
        super(data, value);
    }
    public get rowName() { return "row" + this.index; }
}

export class QuestionMatrixDynamicModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    static MaxRowCount = 100;
    private rowCounter = 0;
    private rowCountValue: number = 2;
    private addRowTextValue: string = null;
    private removeRowTextValue: string = null;
    public minRowCount = 0;
    public rowCountChangedCallback: () => void;
    constructor(public name: string) {
        super(name);
    }
    public getType(): string {
        return "matrixdynamic";
    }
    public get rowCount() { return this.rowCountValue; }
    public set rowCount(val: number) {
        if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount) return;
        this.rowCountValue = val;
        if (this.value && this.value.length > val) {
            var qVal = this.value;
            qVal.splice(val);
            this.value = qVal;
        }
        this.fireCallback(this.rowCountChangedCallback);
    }
    public addRow() {
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows.push(this.createMatrixRow(null));
        }
        this.rowCount++;
    }
    public removeRow(index: number) {
        if (index < 0 || index >= this.rowCount) return;
        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
            this.generatedVisibleRows.splice(index, 1);
        }
        if (this.value) {
            var val = this.createNewValue(this.value);
            val.splice(index, 1);
            val = this.deleteRowValue(val, null);
            this.value = val;
        }
        this.rowCount--;
    }
    public get addRowText() { return this.addRowTextValue ? this.addRowTextValue : surveyLocalization.getString("addRow"); }
    public set addRowText(value: string) {
        this.addRowTextValue = value;
    }
    public get removeRowText() { return this.removeRowTextValue ? this.removeRowTextValue : surveyLocalization.getString("removeRow"); }
    public set removeRowText(value: string) {
        this.removeRowTextValue = value;
    }
    public get cachedVisibleRows(): Array<MatrixDropdownRowModelBase> {
        if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount) return this.generatedVisibleRows;
        return this.visibleRows;
    }
    protected onCheckForErrors(errors: Array<SurveyError>) {
        super.onCheckForErrors(errors);
        if (this.hasErrorInRows()) {
            errors.push(new CustomError(surveyLocalization.getString("minRowCountError")["format"](this.minRowCount)));
        }
    }
    private hasErrorInRows(): boolean {
        if (this.minRowCount <= 0 || !this.generatedVisibleRows) return false;
        var res = false;
        var setRowCount = 0;
        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
            var row = this.generatedVisibleRows[rowIndex];
            if (!row.isEmpty) setRowCount++;
        }
        return setRowCount < this.minRowCount;
    }
    protected generateRows(): Array<MatrixDynamicRowModel> {
        var result = new Array<MatrixDynamicRowModel>();
        if (this.rowCount === 0) return result;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.rowCount; i++) {
            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
        }
        return result;
    }
    protected createMatrixRow(value: any): MatrixDynamicRowModel {
        return new MatrixDynamicRowModel(this.rowCounter ++, this, value);
    }
    protected createNewValue(curValue: any): any {
        var result = curValue;
        if (!result) result = [];
        var r = [];
        if (result.length > this.rowCount) result.splice(this.rowCount - 1);
        for (var i = result.length; i < this.rowCount; i++) {
            result.push({});
        }
        return result;
    }
    protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any {
        var isEmpty = true;
        for (var i = 0; i < newValue.length; i++) {
            if (Object.keys(newValue[i]).length > 0) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty ? null : newValue;
    }

    private getRowValueByIndex(questionValue: any, index: number): any {
        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
    }
    protected getRowValue(row: MatrixDropdownRowModelBase, questionValue: any, create: boolean = false): any {
        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
    }
}

JsonObject.metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 },
        { name: "addRowText", onGetValue: function (obj: any) { return obj.addRowTextValue; } },
        { name: "removeRowText", onGetValue: function (obj: any) { return obj.removeRowTextValue; } }],
    function () { return new QuestionMatrixDynamicModel(""); }, "matrixdropdownbase");

QuestionFactory.Instance.registerQuestion("matrixdynamic", (name) => { var q = new QuestionMatrixDynamicModel(name); q.choices = [1, 2, 3, 4, 5]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });