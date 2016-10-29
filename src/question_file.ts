﻿import {Question} from "./question";
import {JsonObject} from "./jsonobject";
import {QuestionFactory} from "./questionfactory";
import {SurveyError} from "./base";
import {CustomError, ExceedSizeError} from "./error";
import {surveyLocalization} from "./surveyStrings";

export class QuestionFileModel extends Question {
    private showPreviewValue: boolean = false;
    private isUploading: boolean = false;
    previewValueLoadedCallback: () => void;
    public imageHeight: string;
    public imageWidth: string;
    public storeDataAsText: boolean;
    public maxSize: number;
    constructor(public name: string) {
        super(name);
    }
    public getType(): string {
        return "file";
    }
    public get showPreview() { return this.showPreviewValue; }
    public set showPreview(value: boolean) { this.showPreviewValue = value; }
    public loadFile(file: File) {
        var self = this;
        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status: string) { self.isUploading = status == "uploading";  })) return;
        this.setFileValue(file);
    }
    public previewValue: any;
    protected setFileValue(file: File) {
        if (!FileReader) return;
        if (!this.showPreview && !this.storeDataAsText) return;
        if (this.checkFileForErrors(file)) return;
        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function (e) {
            if (self.showPreview) {
                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
                self.fireCallback(self.previewValueLoadedCallback);
            }
            if (self.storeDataAsText) {
                self.value = fileReader.result;
            }
        }
        fileReader.readAsDataURL(file);
    }
    protected onCheckForErrors(errors: Array<SurveyError>) {
        super.onCheckForErrors(errors);
        if (this.isUploading) {
            this.errors.push(new CustomError(surveyLocalization.getString("uploadingFile")));
        }
    }
    private checkFileForErrors(file: File): boolean {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.maxSize > 0 && file.size > this.maxSize) {
            this.errors.push(new ExceedSizeError(this.maxSize));
        }
        if (errorLength != this.errors.length || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        return this.errors.length > 0;
    }
    private isFileImage(file: File) {
        if (!file || !file.type) return;
        var str = file.type.toLowerCase();
        return str.indexOf("image") == 0;
    }
}
JsonObject.metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () { return new QuestionFileModel(""); }, "question");
QuestionFactory.Instance.registerQuestion("file", (name) => { return new QuestionFileModel(name); });