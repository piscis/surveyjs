﻿import {SurveyModel} from "../src/survey";
import {PageModel} from "../src/page";
import {QuestionFactory} from "../src/questionfactory";
import {Question} from "../src/question";
import {QuestionHtmlModel} from "../src/question_html";
import {SurveyTriggerVisible, SurveyTriggerComplete, SurveyTriggerSetValue} from "../src/trigger";
import {surveyLocalization} from "../src/surveyStrings";
import {EmailValidator} from "../src/validator";
import {JsonObject} from "../src/jsonobject";
import {QuestionTextModel} from "../src/question_text";
import {QuestionMultipleTextModel, MultipleTextItemModel} from "../src/question_multipletext";
import {QuestionMatrixModel} from "../src/question_matrix";
import {ISurvey} from "../src/base";
import {QuestionDropdownModel} from "../src/question_dropdown";
import {QuestionCheckboxModel} from "../src/question_checkbox";
import {QuestionRadiogroupModel} from "../src/question_radiogroup";
import {QuestionCommentModel} from "../src/question_comment";
import {QuestionFileModel} from "../src/question_file";
import {QuestionMatrixDropdownModel} from "../src/question_matrixdropdown";
import {QuestionMatrixDynamicModel} from "../src/question_matrixdynamic";
import {QuestionRatingModel} from "../src/question_rating";

QUnit.module("Survey");

QUnit.test("set data property", function (assert) {
    var survey = new SurveyModel();
    assert.deepEqual(survey.data, {}, "there is no data");
    survey.data = { strVal: 'item1', intVal: 5 };
    assert.deepEqual(survey.data, { strVal: 'item1', intVal: 5 }, "set the object");
    survey.data = null;
    assert.deepEqual(survey.data, { }, "clear data");
});
QUnit.test("Add two pages", function (assert) {
    var survey = new SurveyModel();
    survey.addPage(new PageModel("Page 1"));
    survey.addPage(new PageModel("Page 2"));
    assert.equal(survey.PageCount, 2, "Two pages");
});
QUnit.test("Current Page", function (assert) {
    var survey = new SurveyModel();
    survey.addPage(createPageWithQuestion("Page 1"));
    assert.equal(survey.currentPage, survey.pages[0], "the first page is  current");
    survey.currentPage = null;
    assert.equal(survey.currentPage, survey.pages[0], "can't set curent page to null");
    var sPage = createPageWithQuestion("new Page");
    survey.addPage(sPage);
    survey.currentPage = sPage;
    assert.equal(survey.currentPage, survey.pages[1], "second page is current");
    survey.pages.pop();
    assert.equal(survey.currentPage, survey.pages[0], "the first page is current after removing the current one");
});
QUnit.test("Remove Page", function (assert) {
    var survey = new SurveyModel();
    survey.mode = "designer";
    survey.addPage(new PageModel("Page 1"));
    survey.addPage(new PageModel("Page 2"));
    assert.equal(survey.PageCount, 2, "Two pages");
    assert.equal(survey.currentPage.name, "Page 1", "the first page is  current");

    survey.removePage(survey.pages[0]);
    assert.equal(survey.PageCount, 1, "One page left");
    assert.equal(survey.currentPage.name, "Page 2", "the second page is  current");
});

QUnit.test("Next, Prev, IsFirst and IsLast Page and progressText", function (assert) {
    var survey = new SurveyModel();
    assert.equal(survey.progressText, "", "there is pages");
    survey.addPage(createPageWithQuestion("Page 1"));
    survey.addPage(createPageWithQuestion("Second page"));
    survey.addPage(createPageWithQuestion("Third page"));
    assert.equal(survey.currentPage, survey.pages[0], "Current Page is  First");
    assert.equal(survey.isFirstPage, true, "Current Page is  First");
    assert.equal(survey.isLastPage, false, "Current Page is  First");
    assert.equal(survey.progressText, "Page 1 of 3", "Current Page is  First");
    survey.nextPage();
    assert.equal(survey.currentPage, survey.pages[1], "Current Page is  Second");
    assert.equal(survey.isFirstPage, false, "Current Page is  Second");
    assert.equal(survey.isLastPage, false, "Current Page is  Second");
    assert.equal(survey.progressText, "Page 2 of 3", "Current Page is  First");
    survey.nextPage();
    assert.equal(survey.currentPage, survey.pages[2], "Current Page is  Third");
    assert.equal(survey.isFirstPage, false, "Current Page is  Third");
    assert.equal(survey.isLastPage, true, "Current Page is  Third");
    assert.equal(survey.progressText, "Page 3 of 3", "Current Page is  First");
    survey.prevPage();
    assert.equal(survey.currentPage, survey.pages[1], "Current Page is  Second");
    assert.equal(survey.isFirstPage, false, "Current Page is  Second");
    assert.equal(survey.isLastPage, false, "Current Page is  Second");
    assert.equal(survey.progressText, "Page 2 of 3", "Current Page is  First");
    survey.prevPage();
    assert.equal(survey.currentPage, survey.pages[0], "Current Page is  First");
    assert.equal(survey.isFirstPage, true, "Current Page is  First");
    assert.equal(survey.isLastPage, false, "Current Page is  First");
    assert.equal(survey.progressText, "Page 1 of 3", "Current Page is  First");
});
QUnit.test("Next, Prev, Next", function (assert) {
    var survey = new SurveyModel();
    survey.addPage(createPageWithQuestion("Page 1"));
    survey.addPage(createPageWithQuestion("Page 2"));
    survey.addPage(createPageWithQuestion("Page 3"));
    assert.equal(survey.currentPage, survey.pages[0], "Initial page is  first");
    survey.nextPage();
    assert.equal(survey.currentPage, survey.pages[1], "After next the current page is  second");
    survey.prevPage();
    assert.equal(survey.currentPage, survey.pages[0], "After the prev the current page is again first");
    survey.nextPage();
    assert.equal(survey.currentPage, survey.pages[1], "After second next the current page is  second");
});
QUnit.test("Survey state", function (assert) {
    var survey = new SurveyModel();
    assert.equal(survey.state, "empty", "There is no a visible page");
    survey.addPage(createPageWithQuestion("Page 1"));
    survey.addPage(createPageWithQuestion("Page 2"));
    assert.equal(survey.state, "running", "Survey is in run mode");
    survey.nextPage();
    assert.equal(survey.state, "running", "Survey is in run mode");
    survey.completeLastPage();
    assert.equal(survey.state, "completed", "Survey is completed");
});
QUnit.test("Question Creator", function (assert) {
    var inst = QuestionFactory.Instance;
    inst.registerQuestion("question1", (name: string) => { return new Question(name); });
    inst.registerQuestion("question2", (name: string) => { return new Question(name); });
    assert.equal(inst.createQuestion("question1", "Q1").name, "Q1", "Create first type of question");
    assert.equal(inst.createQuestion("question2", "Q2").name, "Q2", "Create second type of question");
    assert.equal(inst.createQuestion("question3", "Q3"), null, "Create unexisting type of question");
});
QUnit.test("Question Creator getAllQuestions", function (assert) {
    var inst = QuestionFactory.Instance;
    inst.registerQuestion("question3", (name: string) => { return new Question(name); });
    inst.registerQuestion("question4", (name: string) => { return new Question(name); });
    var names = inst.getAllTypes();
    assert.ok(names.indexOf("question3") > -1, "contains a new type");
});
QUnit.test("Add questions to page", function (assert) {
    var page = new PageModel("Page 1");
    page.addNewQuestion("text", "Q1");
    page.addNewQuestion("checkbox", "Q2");
    assert.equal(page.questions.length, 2, "Two questions");
    assert.equal(page.questions[0].getType(), "text", "Text question");
    assert.equal(page.questions[1].getType(), "checkbox", "Checkbox question");
});
QUnit.test("Survey.getQuestionByName", function (assert) {
    var survey = new SurveyModel();
    var page = survey.addNewPage("Page 1");
    page.addNewQuestion("text", "Q1");
    page.addNewQuestion("checkbox", "Q2");
    page = survey.addNewPage("Page 1");
    page.addNewQuestion("text", "Q3");
    page.addNewQuestion("checkbox", "Q4");

    assert.equal(survey.getQuestionByName("Q2").name, "Q2", "find question on the first page");
    assert.equal(survey.getQuestionByName("Q3").name, "Q3", "find question on the second page");
    assert.equal(survey.getQuestionByName("Q0"), null, "return null");
});
QUnit.test("SurveyData interface implementation", function (assert) {
    var surveyData: ISurvey;
    surveyData = new SurveyModel();
    assert.equal(surveyData.getValue("test1"), null, "No data");
    assert.equal(surveyData.getValue("test2"), null, "No data");
    surveyData.setValue("test1", 1);
    surveyData.setValue("test2", "1");
    assert.equal(surveyData.getValue("test1"), 1, "Has value 1");
    assert.equal(surveyData.getValue("test2"), "1", "Has value '1'");
});
QUnit.test("Store question value in the survey", function (assert) {
    var survey = new SurveyModel();
    survey.addPage(new PageModel("Page 1"));
    var question = <Question>survey.pages[0].addNewQuestion("text", "question");
    assert.equal(survey.getValue("question"), null, "No value");
    assert.equal(question.value, null, "No value");

    question.value = "mytext";
    assert.equal(survey.getValue("question"), "mytext", "set value from question");
    assert.equal(question.value, "mytext", "set value from question");

    survey.setValue("question", "myNewtext");
    assert.equal(survey.getValue("question"), "myNewtext", "set value from survey");
    assert.equal(question.value, "myNewtext", "set value from survey");
});
QUnit.test("Store comments in the survey", function (assert) {
    var survey = new SurveyModel();
    survey.addPage(new PageModel("Page 1"));
    var question = <Question>survey.pages[0].addNewQuestion("text", "question");
    assert.equal(survey.getComment("question"), "", "Comment is empty");
    assert.equal(question.comment, "", "Comment is empty");

    question.comment = "myComment";
    assert.equal(survey.getComment("question"), "myComment", "set comment from question");
    assert.equal(question.comment, "myComment", "set comment from question");

    survey.setComment("question", "myNewComment");
    assert.equal(survey.getComment("question"), "myNewComment", "set comment from survey");
    assert.equal(question.comment, "myNewComment", "set comment from survey");
});
QUnit.test("Should set required questions before go on the  next page or finish", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.notEqual(survey, null, "Survey is not  null");
    (<Question>survey.pages[0].questions[0]).isRequired = true;
    (<Question>survey.pages[1].questions[0]).isRequired = true;

    assert.equal(survey.nextPage(), false, "Can not go to the next page");
    assert.equal(survey.pages[0].questions[0].hasErrors(), true, "The question is not filled out.");
    assert.equal(survey.pages[0].hasErrors(), true, "The page is not filled out.");

    (<Question>survey.pages[0].questions[0]).value = "Test";

    assert.equal(survey.nextPage(), true, "Can go to the next page");
    assert.equal(survey.pages[0].questions[0].hasErrors(), false, "The question is filled out.");
    assert.equal(survey.pages[0].hasErrors(), false, "The page is filled out.");
});
QUnit.test("Invisible required questions should not be take into account", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.notEqual(survey, null, "Survey is not  null");
    (<Question>survey.pages[0].questions[0]).isRequired = true;
    assert.equal(survey.nextPage(), false, "Can not go to the next page");
    survey.pages[0].questions[0].visible = false;
    assert.equal(survey.nextPage(), true, "You can go to the next page now.");
});
QUnit.test("onValueChanged event", function (assert) {
    var survey = twoPageSimplestSurvey();
    var name = "";
    var newValue = null;
    var counter = 0;
    survey.onValueChanged.add(function (sender: SurveyModel, options: any) {
        name = options.name; newValue = options.value; counter++;
    });
    survey.setValue("question1", "value1");
    assert.equal(name, "question1", "onValueChanged event, property name is correct");
    assert.equal(newValue, "value1", "onValueChanged event, property newValue is correct");
    assert.equal(counter, 1, "onValueChanged event is called one time");
    (<Question>survey.pages[0].questions[0]).value = "val";
    assert.equal(counter, 2, "onValueChanged event is called one time");
});
QUnit.test("onValueChanged event - do not call on equal value", function (assert) {
    var survey = new SurveyModel();
    var counter = 0;
    survey.onValueChanged.add(function (sender: SurveyModel, options: any) { counter++; });
    survey.setValue("name", 1);
    assert.equal(counter, 1, "onValueChanged event is called one time");
    survey.setValue("name", 1);
    assert.equal(counter, 1, "1 is the same value");
    survey.setValue("name", { col1: [1, { cel2: "2" }] });
    assert.equal(counter, 2, "onValueChanged event is called two times");
    survey.setValue("name", { col1: [1, { cel2: "2" }] });
    assert.equal(counter, 2, "2, the value is the same");
    survey.setValue("name", { col1: [1, { cel2: "2" }, 3] });
    assert.equal(counter, 3, "onValueChanged event is called three times");
    survey.setValue("name", { col1: [1, { cel2: "2" }, 3] });
    assert.equal(counter, 3, "3, the value is the same");
    var value = survey.getValue("name");
    value.col1.push(4);
    survey.setValue("name", value);
    assert.equal(counter, 4, "onValueChanged event is called fourth times");
});
QUnit.test("onValueChanged event is not called on changing matrix value", function (assert) {
    var survey = twoPageSimplestSurvey();
    var matrixQuestion = new QuestionMatrixModel("matrix");
    survey.pages[0].addQuestion(matrixQuestion);
    matrixQuestion.columns = ["col1", "col2"];
    matrixQuestion.rows = ["row1", "row2"];
    var name = "";
    var newValue = null;
    var counter = 0;
    survey.onValueChanged.add(function (sender: SurveyModel, options: any) {
        name = options.name; newValue = options.value; counter++;
    });
    matrixQuestion.visibleRows[0].value = "col2";
    assert.equal(counter, 1, "onValueChanged event is called one time");
    assert.equal(name, "matrix", "onValueChanged event, property name is correct");
    assert.deepEqual(newValue, { "row1": "col2" }, "onValueChanged event, property newValue is correct");
});
QUnit.test("onValueChanged event is not called on changing multi text value", function (assert) {
    var survey = twoPageSimplestSurvey();
    var multiTextQuestion = new QuestionMultipleTextModel("multitext");
    survey.pages[0].addQuestion(multiTextQuestion);
    multiTextQuestion.items.push(new MultipleTextItemModel("item1"));
    multiTextQuestion.items.push(new MultipleTextItemModel("item2"));
    var name = "";
    var newValue = null;
    var counter = 0;
    survey.onValueChanged.add(function (sender: SurveyModel, options: any) {
        name = options.name; newValue = options.value; counter++;
    });
    multiTextQuestion.items[1].value = "text1";
    assert.equal(counter, 1, "onValueChanged event is called one time");
    assert.equal(name, "multitext", "onValueChanged event, property name is correct");
    assert.deepEqual(newValue, { "item2": "text1" }, "onValueChanged event, property newValue is correct");
});
QUnit.test("onVisibleChanged event", function (assert) {
    var survey = twoPageSimplestSurvey();
    var name = "";
    var visibility = true;
    var counter = 0;
    survey.onVisibleChanged.add(function (sender: SurveyModel, options: any) {
        name = options.name; visibility = options.visible; counter++;
    });
    survey.getQuestionByName("question1").visible = false;

    assert.equal(name, "question1", "onVisibleChanged event, property name is correct");
    assert.equal(visibility, false, "onVisibleChanged event, property visibility is correct");
    assert.equal(counter, 1, "onVisibleChanged event is called one time");

    survey.getQuestionByName("question1").visible = true;
    assert.equal(name, "question1", "onVisibleChanged event, property name is correct");
    assert.equal(visibility, true, "onVisibleChanged event, property visibility is correct");
    assert.equal(counter, 2, "onVisibleChanged event is called two time");

    survey.getQuestionByName("question1").visible = true;
    assert.equal(counter, 2, "onVisibleChanged event is called two time");
});
QUnit.test("Question visibleIndex", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.equal((<Question>survey.getQuestionByName("question1")).visibleIndex, 0, "the first question");
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, 2, "the third question");
    survey.getQuestionByName("question1").visible = false;
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, 1, "the third question is now visible as second");
    survey.showQuestionNumbers = "off";
    assert.equal((<Question>survey.getQuestionByName("question1")).visibleIndex, -1, "off:the first question");
    assert.equal((<Question>survey.getQuestionByName("question2")).visibleIndex, -1, "off:the second question");
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, -1, "off:the third question");
    survey.showQuestionNumbers = "onPage";
    assert.equal((<Question>survey.getQuestionByName("question1")).visibleIndex, -1, "onPage:the first question");
    assert.equal((<Question>survey.getQuestionByName("question2")).visibleIndex, 0, "onPage:the second question");
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, 0, "onPage:the third question");
});
QUnit.test("showQuestionNumbers - question fullTitle", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.equal((<Question>survey.getQuestionByName("question1")).fullTitle, "1. question1", "the first question showQuestionNumbers=on");
    assert.equal((<Question>survey.getQuestionByName("question3")).fullTitle, "3. question3", "the thrid question showQuestionNumbers=on");
    survey.showQuestionNumbers = "onPage";
    assert.equal((<Question>survey.getQuestionByName("question1")).fullTitle, "1. question1", "the first question showQuestionNumbers=onPage");
    assert.equal((<Question>survey.getQuestionByName("question3")).fullTitle, "1. question3", "the thrid question showQuestionNumbers=onPage");
    survey.showQuestionNumbers = "off";
    assert.equal((<Question>survey.getQuestionByName("question1")).fullTitle, "question1", "the first question showQuestionNumbers=onPage");
    assert.equal((<Question>survey.getQuestionByName("question3")).fullTitle, "question3", "the thrid question showQuestionNumbers=onPage");
});
QUnit.test("Question visibleIndex and no title question", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.equal((<Question>survey.getQuestionByName("question1")).visibleIndex, 0, "the first question");
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, 2, "the third question");
    var question = new QuestionHtmlModel("html1");
    survey.pages[0].addQuestion(question, 0);
    assert.equal((<Question>survey.getQuestionByName("html1")).visibleIndex, -1, "html question");
    assert.equal((<Question>survey.getQuestionByName("question1")).visibleIndex, 0, "the first question + html question");
    assert.equal((<Question>survey.getQuestionByName("question3")).visibleIndex, 2, "the third question + html question");
});
QUnit.test("Pages visibleIndex and num", function (assert) {
    var survey = twoPageSimplestSurvey();
    survey.addNewPage("page 3").addNewQuestion("text", "q4");
    assert.equal(survey.pages[0].visibleIndex, 0, "start:page 1");
    assert.equal(survey.pages[1].visibleIndex, 1, "start:page 2");
    assert.equal(survey.pages[2].visibleIndex, 2, "start:page 3");
    assert.equal(survey.pages[0].num, -1, "start:page 1, num");
    assert.equal(survey.pages[1].num, -1, "start:page 2, num");
    assert.equal(survey.pages[2].num, -1, "start:page 3, num");

    survey.showPageNumbers = true;
    assert.equal(survey.pages[0].num, 1, "showPageNumbers:page 1, num");
    assert.equal(survey.pages[1].num, 2, "showPageNumbers:page 2, num");
    assert.equal(survey.pages[2].num, 3, "showPageNumbers:page 3, num");

    survey.pages[0].visible = false;
    assert.equal(survey.pages[0].visibleIndex, -1, "page[0].visible=false:page 1");
    assert.equal(survey.pages[1].visibleIndex, 0, "page[0].visible=false:page 2");
    assert.equal(survey.pages[2].visibleIndex, 1, "page[0].visible=false:page 3");
    assert.equal(survey.pages[0].num, -1, "page[0].visible=false:page 1, num");
    assert.equal(survey.pages[1].num, 1, "page[0].visible=false:page 2, num");
    assert.equal(survey.pages[2].num, 2, "page[0].visible=false:page 3, num");
});
QUnit.test("Pages num", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.equal(survey.pages[0].num, -1, "false:the first page");
    assert.equal(survey.pages[1].num, -1, "false:the second page");
    survey.showPageNumbers = true;
    assert.equal(survey.pages[0].num, 1, "true:the first page");
    assert.equal(survey.pages[1].num, 2, "true:the second page");
});
QUnit.test("onVisibleChanged event", function (assert) {
    var survey = twoPageSimplestSurvey();
    survey.onValidateQuestion.add(function (sender, options) {
        if (options.name == "question1" && options.value > 100) {
            options.error = "Question 1 should be higher than 100";
        }
    });
    assert.equal(survey.isCurrentPageHasErrors, false, "There is no error if the value is empty");
    survey.setValue("question1", 1);
    assert.equal(survey.isCurrentPageHasErrors, false, "the value is less than 100");
    survey.setValue("question1", 101);
    assert.equal(survey.isCurrentPageHasErrors, true, "the value is more than 100, no errors");
});
QUnit.test("Page visibility", function (assert) {
    var page = new PageModel("page");
    assert.equal(page.isVisible, false, "page is invisible if there is no questions in it");
    page.addNewQuestion("text", "q1");
    assert.equal(page.isVisible, true, "there is one question");
    page.visible = false;
    assert.equal(page.isVisible, false, "we made the page invisible");
    page.visible = true;
    assert.equal(page.isVisible, true, "we made the page visible");
    page.questions[0].visible = false;
    assert.equal(page.isVisible, false, "there is no visible questions on the page");
    page.questions[0].visible = true;
    assert.equal(page.isVisible, true, "we have made the question visible again");
});
QUnit.test("Survey visiblePages and start using them", function (assert) {
    var survey = twoPageSimplestSurvey();
    assert.equal(survey.visiblePages.length, 2, "All pages are visible");
    assert.equal(survey.currentPage.name, "Page 1", "the first page is current");
    survey.pages[0].visible = false;
    assert.equal(survey.visiblePages.length, 1, "The first page becomes invisible");
    assert.equal(survey.currentPage.name, "Page 2", "the second page is current, because the first is invisible");
});
QUnit.test("Survey visiblePages, make second and third invisbile and go the last page on next", function (assert) {
    var survey = twoPageSimplestSurvey();
    survey.currentPage = survey.pages[0];
    survey.addNewPage("Page 3").addNewQuestion("text", "p3q1");
    survey.addNewPage("Page 4").addNewQuestion("text", "p4q1");
    survey.pages[1].visible = false;
    survey.pages[2].questions[0].visible = false;
    survey.nextPage();
    assert.equal(survey.currentPage.name, "Page 4", "Bypass two invisible pages");
});
QUnit.test("Visible trigger test", function (assert) {
    var survey = twoPageSimplestSurvey();
    var trigger = new SurveyTriggerVisible();
    survey.triggers.push(trigger);
    trigger.name = "question1";
    trigger.value = "Hello";
    trigger.pages = ["Page 2"];
    trigger.questions = ["question2"];

    survey.setValue("question1", "H");
    assert.equal(survey.getQuestionByName("question2").visible, false, "It is invisible now");
    assert.equal(survey.pages[1].visible, false, "It is invisible now");

    survey.setValue("question1", "Hello");
    assert.equal(survey.getQuestionByName("question2").visible, true, "trigger makes it visible");
    assert.equal(survey.pages[1].visible, true, "trigger makes it visible");

    survey.setValue("question2", "He");
    assert.equal(survey.getQuestionByName("question2").visible, true, "trigger should not be called");
    assert.equal(survey.pages[1].visible, true, "trigger should not be called");
});
QUnit.test("Complete trigger test", function (assert) {
    var survey = twoPageSimplestSurvey();
    var trigger = new SurveyTriggerComplete();
    survey.triggers.push(trigger);
    trigger.name = "question1";
    trigger.value = "Hello";

    survey.setValue("question1", "H");
    assert.equal(survey.state, "running");

    survey.setValue("question1", "Hello");
    assert.equal(survey.state, "running");
    survey.nextPage();
    assert.equal(survey.state, "completed");
});
QUnit.test("Value trigger test", function (assert) {
    var survey = twoPageSimplestSurvey();
    var trigger = new SurveyTriggerSetValue();
    survey.triggers.push(trigger);
    trigger.name = "question1";
    trigger.value = "Hello";
    trigger.setToName = "name1";
    trigger.setValue = "val1";
    assert.equal(survey.getValue("name1"), null, "value is not set");
    survey.setValue("question1", "Hello");
    assert.equal(survey.getValue("name1"), "val1", "value is set");
});
QUnit.test("String format", function (assert) {
    var strResult = surveyLocalization.getString("textMinLength")["format"](10);
    assert.equal(strResult, "Please enter at least 10 symbols.", "The format string is working");
});
QUnit.test("Serialize email validator", function (assert) {
    var validator = new EmailValidator();
    var json = new JsonObject().toJsonObject(validator);
    assert.ok(json, "Convert to Json Successful");
    var newValidator = {};
    new JsonObject().toObject(json, newValidator);
    assert.ok(newValidator, "Convert from Json Successful");
});
QUnit.test("pre process title", function (assert) {
    var survey = twoPageSimplestSurvey();
    survey.pages[0].title = "Page {PageNo} from {PageCount}.";
    assert.equal(survey.pages[0].processedTitle, "Page 1 from 2.");
    survey.pages[0].addNewQuestion("text", "email");
    survey.setValue("email", "andrew.telnov@gmail.com");
    survey.setVariable("var1", "[it is var1]");
    survey.setValue("val1", "[it is val1]");
    survey.completedHtml = "<div>Your e-mail: <b>{email}</b>{var1}{val1}</div>";
    assert.equal(survey.processedCompletedHtml, "<div>Your e-mail: <b>andrew.telnov@gmail.com</b>[it is var1][it is val1]</div>");
});
QUnit.test("question fullTitle", function (assert) {
    var survey = twoPageSimplestSurvey();
    var question = <Question>survey.pages[0].questions[1];
    question.title = "My Title";
    assert.equal(question.fullTitle, "2. My Title");
    question.isRequired = true;
    assert.equal(question.fullTitle, "2. * My Title");
    survey.questionStartIndex = "100";
    assert.equal(question.fullTitle, "101. * My Title");
    survey.questionStartIndex = "A";
    assert.equal(question.fullTitle, "B. * My Title");
    survey.questionTitleTemplate = "{no}) {title} ({require})";
    assert.equal(question.fullTitle, "B) My Title (*)");
});
QUnit.test("clearInvisibleValues", function (assert) {
    var survey = twoPageSimplestSurvey();
    survey.clearInvisibleValues = true;
    var question1 = <Question>survey.pages[0].questions[0];
    question1.value = "myValue";
    var question2 = <Question>survey.pages[0].questions[1];
    question2.value = "myValue";
    question1.visible = false;
    survey.doComplete();
    assert.equal(question1.value, null, "Clear value of an invisible question");
    assert.equal(question2.value, "myValue", "Keep value of a visible question");
});
QUnit.test("merge values", function (assert) {
    class MySurvey extends SurveyModel {
        constructor() {
            super();
        }
        public doMergeValues(src: any, dest: any) {
            super.mergeValues(src, dest);
        }
    }
    var survey = new MySurvey();
    var dest = {};
    survey.doMergeValues({ val: 1 }, dest);
    assert.deepEqual(dest, { val: 1 });

    survey.doMergeValues({ val2: { val1: "str" } }, dest);
    assert.deepEqual({ val: 1, val2: { val1: "str" } }, dest);

    survey.doMergeValues({ val2: { val2: 2 } }, dest);
    assert.deepEqual({ val: 1, val2: { val1: "str", val2: 2 } }, dest);
});
QUnit.test("Several questions in one row", function (assert) {
    var page = new PageModel();
    for (var i = 0; i < 10; i++) {
        page.addQuestion(new QuestionTextModel("q" + (i + 1)));
    }
    assert.equal(page.rows.length, 10, "10 rows for each question");
    page.questions[0].startWithNewLine = false;
    assert.equal(page.rows.length, 10, "still 10 rows for each question");
    assert.equal(page.rows[0].questions[0].renderWidth, "100%", "the render width is 100%");
    for (var i = 0; i < 10; i++) {
        page.questions[i].startWithNewLine = i % 2 == 0;
    }
    assert.equal(page.rows.length, 10, "every second has startWithNewLine equals false, still 10 row");
    for (var i = 0; i < 10; i++) {
        assert.equal(page.rows[i].questions.length, i % 2 == 0 ? 2 : 0, "every second row has two question and another 0");
        assert.equal(page.rows[i].visible, i % 2 == 0 ? true : false, "every second row is visible");
        if (i % 2 == 0) {
            assert.equal(page.rows[i].questions[0].renderWidth, "50%", "the render width is 50%");
            assert.equal(page.rows[i].questions[0].rightIndent, 1, "the indent is 1");
            assert.equal(page.rows[i].questions[1].renderWidth, "50%", "the render width is 50%");
            assert.equal(page.rows[i].questions[1].rightIndent, 0, "the indent is 0");
        }
    }
});
QUnit.test("test goNextPageAutomatic property", function (assert) {
    var survey = twoPageSimplestSurvey();

    var dropDownQ = <QuestionDropdownModel>survey.pages[1].addNewQuestion("dropdown", "question5");
    dropDownQ.choices = [1, 2, 3];
    dropDownQ.hasOther = true;
    survey.goNextPageAutomatic = true;
    assert.equal(survey.currentPage.name, survey.pages[0].name, "the first page is default page");
    survey.setValue("question1", 1);
    survey.setValue("question2", 2);
    assert.equal(survey.currentPage.name, survey.pages[1].name, "go to the second page automatically");
    (<Question>survey.currentPage.questions[0]).value = "3";
    (<Question>survey.currentPage.questions[1]).value = "4";
    dropDownQ.value = dropDownQ.otherItem.value;
    assert.equal(survey.currentPage.name, survey.pages[1].name, "stay on the second page");
    assert.notEqual(survey.state, "completed", "survey is still running");
    dropDownQ.comment = "other value";
    assert.equal(survey.state, "completed", "complete the survey");
});
QUnit.test("test goNextPageAutomatic property", function (assert) {
    var survey = twoPageSimplestSurvey();

    var dropDownQ = <QuestionDropdownModel>survey.pages[1].addNewQuestion("dropdown", "question5");
    dropDownQ.choices = [1, 2, 3];
    dropDownQ.hasOther = true;
    survey.goNextPageAutomatic = true;
    assert.equal(survey.currentPage.name, survey.pages[0].name, "the first page is default page");
    survey.setValue("question1", 1);
    survey.setValue("question2", 2);
    assert.equal(survey.currentPage.name, survey.pages[1].name, "go to the second page automatically");
    (<Question>survey.currentPage.questions[0]).value = "3";
    (<Question>survey.currentPage.questions[1]).value = "4";
    dropDownQ.value = dropDownQ.otherItem.value;
    assert.equal(survey.currentPage.name, survey.pages[1].name, "stay on the second page");
    assert.notEqual(survey.state, "completed", "survey is still running");
    dropDownQ.comment = "other value";
    assert.equal(survey.state, "completed", "complete the survey");
});
QUnit.test("goNextPageAutomatic: should not work for complex questions like matrix, checkbox, multiple text", function (assert) {
    var questions = [];
    questions.push({ question: new QuestionCheckboxModel("check"), auto: false, value: [1] });
    questions.push({ question: new QuestionRadiogroupModel("radio"), auto: true, value: 1 });
    questions.push({ question: new QuestionDropdownModel("dropdown"), auto: true, value: 1 });
    questions.push({ question: new QuestionCommentModel("comment"), auto: false, value: "1" });
    questions.push({ question: new QuestionFileModel("file"), auto: false, value: "1" });
    questions.push({ question: new QuestionFileModel("html"), auto: false, value: null });
    questions.push({ question: new QuestionMatrixModel("matrix"), auto: false, value: [{ item1: 1 }] });
    questions.push({ question: new QuestionMatrixDropdownModel("matrixdropdown"), auto: false, value: [{ item1: 1 }] });
    questions.push({ question: new QuestionMatrixDynamicModel("matrixdynamic"), auto: false, value: [{ item1: 1 }] });
    questions.push({ question: new QuestionMultipleTextModel("multitext"), auto: false, value: [{ item1: "1" }] });
    questions.push({ question: new QuestionRatingModel("rating"), auto: true, value: 1 });
    questions.push({ question: new QuestionTextModel("text"), auto: true, value: "1" });
    var pageIndex = 0;
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var survey = new SurveyModel();
        var page = survey.addNewPage("firstpage");
        page.addQuestion(q.question);
        survey.goNextPageAutomatic = true;
        if (q.value) {
            q.question.value = q.value;
        }
        var state = q.auto ? "completed" : "running";
        assert.equal(survey.state, state, "goNextPageAutomatic is incorrect for question: " + q.question.name);
    }
});

QUnit.test("simple condition test", function (assert) {
    var survey = new SurveyModel({
        pages: [{ name: "page1",
            questions: [
                { type: "checkbox", name: "q1", choices: ["yes", "no"] },
                { type: "checkbox", name: "q2", choices: ["yes", "no"] }]
        }, { name : "page2", visibleIf: "{q1} = 'yes' or {q2} = 'no'",
            questions: [
                { type: "text", name: "q3", visibleIf: "{q1} = 'yes' and {q2} = 'no'", },
                { type: "text", name: "q4" }]
        }
        ]
    });
    var q3 = survey.getQuestionByName("q3");
    assert.equal(survey.pages[1].visible, false, "initially the page becomes invisible");
    assert.equal(q3.visible, false, "initially q3 becomes invisible");
    survey.setValue("q1", "yes");
    survey.setValue("q2", "no");
    assert.equal(survey.pages[1].visible, true, "the page becomes visible, q1 = 'yes'");
    assert.equal(q3.visible, true, "q3 becomes visible, q1 = 'yes' and q2 = 'no'");
    survey.setValue("q2", "yes");
    assert.equal(survey.pages[1].visible, true, "the page becomes visible, q1 = 'yes'");
    assert.equal(q3.visible, false, "q3 becomes invisible, q1 = 'yes' and q2 = 'yes'");
    survey.setValue("q1", "no");
    assert.equal(survey.pages[1].visible, false, "the page becomes invisible, q1 = 'no'");
    assert.equal(q3.visible, false, "q3becomes invisible, q1 = 'no' and q2 = 'yes'");
});

QUnit.test("multiple triger on checkbox stop working.", function (assert) {
    var survey = new SurveyModel({
        pages: [{
            questions: [
                { type: "checkbox", name: "question1", choices: ["one", "two", "three"] },
                { type: "text", name: "question2", visible: false },
                { type: "text", name: "question3", visible: false },
                { type: "text", name: "question4", visible: false }]
        }],
        triggers: [{ type: "visible", operator: "contains", value: "one", name: "question1", questions: ["question2"] },
            { type: "visible", operator: "contains", value: "two", name: "question1", questions: ["question3"] }]
    });

    var check = <QuestionCheckboxModel>survey.getQuestionByName("question1");
    var value = ["one"];
    check.value = value;
    assert.equal(survey.getQuestionByName("question2").visible, true, "The second question is visible");
    value.push("two");
    check.value = value;
    assert.equal(survey.getQuestionByName("question3").visible, true, "The third question is visible");
});

function twoPageSimplestSurvey() {
    var survey = new SurveyModel();
    var page = survey.addNewPage("Page 1");
    page.addNewQuestion("text", "question1");
    page.addNewQuestion("text", "question2");
    page = survey.addNewPage("Page 2");
    page.addNewQuestion("text", "question3");
    page.addNewQuestion("text", "question4");
    return survey;
}
function createPageWithQuestion(name: string) : PageModel {
    var page = new PageModel(name);
    page.addNewQuestion("text", "q1");
    return page;
}