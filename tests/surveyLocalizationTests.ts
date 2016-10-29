﻿import {surveyLocalization} from "../src/surveyStrings";
import {SurveyModel} from "../src/survey";

QUnit.module("LocalizationsTests");

QUnit.test("get default strings", function (assert) {
    assert.equal(surveyLocalization.getString("pageNextText"), "Next");
    surveyLocalization.currentLocale = "en";
    assert.equal(surveyLocalization.getString("pageNextText"), "Next");
    surveyLocalization.currentLocale = "unknown";
    assert.equal(surveyLocalization.getString("pageNextText"), "Next");
    surveyLocalization.currentLocale = "";
});
QUnit.test("add new localization", function (assert) {
    var newLoc = { pageNextText: "Mynext" };
    surveyLocalization.locales["myen"] = newLoc;
    assert.equal(surveyLocalization.getString("pageNextText"), "Next");
    surveyLocalization.currentLocale = "myen";
    assert.equal(surveyLocalization.getString("pageNextText"), "Mynext");
    assert.equal(surveyLocalization.getString("pagePrevText"), "Previous");
    surveyLocalization.currentLocale = "";
});
QUnit.test("set german localization", function (assert) {
    var locales = surveyLocalization.getLocales();
    assert.ok(locales.indexOf("en") > -1, "has en");
    assert.ok(locales.indexOf("de") > -1, "has de");
});
QUnit.test("set german localization", function (assert) {
    var survey = new SurveyModel();
    survey.locale = "de";
    assert.equal(survey.completeText, "Fertig");
    surveyLocalization.currentLocale = "";
});
QUnit.test("set finnish localization", function (assert) {
    var locales = surveyLocalization.getLocales();
    assert.ok(locales.indexOf("en") > -1, "has en");
    assert.ok(locales.indexOf("fi") > -1, "has fi");
});
QUnit.test("set finnish localization", function (assert) {
    var survey = new SurveyModel();
    survey.locale = "fi";
    assert.equal(survey.completeText, "Valmis");
    surveyLocalization.currentLocale = "";
});
