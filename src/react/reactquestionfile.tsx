﻿import * as React from 'react';
import {QuestionFileModel} from "../question_file";
import {ReactQuestionFactory} from "./reactquestionfactory";

export class SurveyQuestionFile extends React.Component<any, any> {
    private question: QuestionFileModel;
    protected css: any;
    constructor(props: any) {
        super(props);
        this.question = props.question;
        this.css = props.css;
        this.state = { fileLoaded: 0 };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        var src = event.target || event.srcElement; 
        if (!window["FileReader"]) return;
        if (!src || !src.files || src.files.length < 1) return;
        this.question.loadFile(src.files[0]);
        this.setState({ fileLoaded: this.state.fileLoaded + 1 });
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        var img = this.renderImage();
        return (
            <div>
                <input type="file" onChange={this.handleOnChange}/>
                {img}
            </div>           
        );
    }
    protected renderImage(): JSX.Element {
        if (!this.question.previewValue) return null;
        return (<div>  <img src={this.question.previewValue} height={this.question.imageHeight} width={this.question.imageWidth} /></div>);
    }
}

ReactQuestionFactory.Instance.registerQuestion("file", (props) => {
    return React.createElement(SurveyQuestionFile, props);
});
