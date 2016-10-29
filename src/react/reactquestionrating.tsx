import * as React from 'react';
import {SurveyQuestionCommentItem} from "./reactquestioncomment";
import {QuestionRatingModel} from "../question_rating";
import {ItemValue} from "../base";
import {ReactQuestionFactory} from "./reactquestionfactory";

export class SurveyQuestionRating extends React.Component<any, any> {
    private question: QuestionRatingModel;
    protected css: any;
    protected rootCss: any;
    constructor(props: any) {
        super(props);
        this.question = props.question;
        this.css = props.css;
        this.rootCss = props.rootCss;
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        this.question.value = event.target.value;
        this.setState({ value: this.question.value });
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
        this.css = nextProps.css;
        this.rootCss = nextProps.rootCss;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        var values = [];
        for (var i = 0; i < this.question.visibleRateValues.length; i++) {
            var minText = i == 0 ? this.question.mininumRateDescription + " " : null;
            var maxText = i == this.question.visibleRateValues.length - 1 ? " " + this.question.maximumRateDescription : null;
            values.push(this.renderItem("value" + i, this.question.visibleRateValues[i], minText, maxText));
        }
        var comment = this.question.hasOther ? this.renderOther() : null;
        return (
            <div className={this.css.root} data-toggle="buttons">
                {values}
                {comment}
            </div>
        );
    }
    protected renderItem(key: string, item: ItemValue, minText: string, maxText: string): JSX.Element {
        var isChecked = this.question.value == item.value;
        var className = this.css.item;
        if (isChecked) className += " active";
        var min = minText ? <span>{minText}</span> : null;
        var max = maxText ? <span>{maxText}</span> : null;
        return <label key={key} className={className}>
            <input type="radio" name={this.question.name} value={item.value} checked={this.question.value == item.value} onChange={this.handleOnChange} />
            {min}
            <span>{item.text}</span>
            {max}
            </label>;
    }
    protected renderOther(): JSX.Element {
        return (<div className={this.css.other}><SurveyQuestionCommentItem  question={this.question} css={this.rootCss} /></div>);
    }
}
ReactQuestionFactory.Instance.registerQuestion("rating", (props) => {
    return React.createElement(SurveyQuestionRating, props);
});