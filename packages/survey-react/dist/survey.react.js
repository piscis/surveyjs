/*!
* surveyjs - Survey JavaScript library v0.10.0
* (c) Andrew Telnov - http://surveyjs.org/
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["react"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("react"));
	else
		root["Survey"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.__extends = exports.ReactQuestionFactory = exports.SurveyWindow = exports.SurveyQuestionRating = exports.SurveyProgress = exports.SurveyQuestionMatrixDynamicRow = exports.SurveyQuestionMatrixDynamic = exports.SurveyQuestionText = exports.SurveyQuestionRadiogroup = exports.SurveyQuestionMultipleTextItem = exports.SurveyQuestionMultipleText = exports.SurveyQuestionFile = exports.SurveyQuestionHtml = exports.SurveyQuestionMatrixRow = exports.SurveyQuestionMatrix = exports.SurveyQuestionMatrixDropdownRow = exports.SurveyQuestionMatrixDropdown = exports.SurveyQuestionDropdown = exports.SurveyQuestionCheckboxItem = exports.SurveyQuestionCheckbox = exports.SurveyQuestionComment = exports.SurveyQuestionCommentItem = exports.SurveyQuestionErrors = exports.SurveyQuestion = exports.SurveyRow = exports.SurveyPage = exports.SurveyNavigation = exports.ReactSurveyModel = exports.Survey = exports.defaultStandardCss = undefined;
	
	var _model = __webpack_require__(1);
	
	Object.keys(_model).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _model[key];
	    }
	  });
	});
	
	var _cssstandard = __webpack_require__(34);
	
	Object.defineProperty(exports, "defaultStandardCss", {
	  enumerable: true,
	  get: function get() {
	    return _cssstandard.defaultStandardCss;
	  }
	});
	
	var _reactSurvey = __webpack_require__(35);
	
	Object.defineProperty(exports, "Survey", {
	  enumerable: true,
	  get: function get() {
	    return _reactSurvey.Survey;
	  }
	});
	
	var _reactsurveymodel = __webpack_require__(37);
	
	Object.defineProperty(exports, "ReactSurveyModel", {
	  enumerable: true,
	  get: function get() {
	    return _reactsurveymodel.ReactSurveyModel;
	  }
	});
	
	var _reactSurveyNavigation = __webpack_require__(42);
	
	Object.defineProperty(exports, "SurveyNavigation", {
	  enumerable: true,
	  get: function get() {
	    return _reactSurveyNavigation.SurveyNavigation;
	  }
	});
	
	var _reactpage = __webpack_require__(38);
	
	Object.defineProperty(exports, "SurveyPage", {
	  enumerable: true,
	  get: function get() {
	    return _reactpage.SurveyPage;
	  }
	});
	Object.defineProperty(exports, "SurveyRow", {
	  enumerable: true,
	  get: function get() {
	    return _reactpage.SurveyRow;
	  }
	});
	
	var _reactquestion = __webpack_require__(39);
	
	Object.defineProperty(exports, "SurveyQuestion", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestion.SurveyQuestion;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionErrors", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestion.SurveyQuestionErrors;
	  }
	});
	
	var _reactquestioncomment = __webpack_require__(40);
	
	Object.defineProperty(exports, "SurveyQuestionCommentItem", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestioncomment.SurveyQuestionCommentItem;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionComment", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestioncomment.SurveyQuestionComment;
	  }
	});
	
	var _reactquestioncheckbox = __webpack_require__(44);
	
	Object.defineProperty(exports, "SurveyQuestionCheckbox", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestioncheckbox.SurveyQuestionCheckbox;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionCheckboxItem", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestioncheckbox.SurveyQuestionCheckboxItem;
	  }
	});
	
	var _reactquestiondropdown = __webpack_require__(45);
	
	Object.defineProperty(exports, "SurveyQuestionDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestiondropdown.SurveyQuestionDropdown;
	  }
	});
	
	var _reactquestionmatrixdropdown = __webpack_require__(46);
	
	Object.defineProperty(exports, "SurveyQuestionMatrixDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrixdropdown.SurveyQuestionMatrixDropdown;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionMatrixDropdownRow", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrixdropdown.SurveyQuestionMatrixDropdownRow;
	  }
	});
	
	var _reactquestionmatrix = __webpack_require__(47);
	
	Object.defineProperty(exports, "SurveyQuestionMatrix", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrix.SurveyQuestionMatrix;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionMatrixRow", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrix.SurveyQuestionMatrixRow;
	  }
	});
	
	var _reactquestionhtml = __webpack_require__(48);
	
	Object.defineProperty(exports, "SurveyQuestionHtml", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionhtml.SurveyQuestionHtml;
	  }
	});
	
	var _reactquestionfile = __webpack_require__(49);
	
	Object.defineProperty(exports, "SurveyQuestionFile", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionfile.SurveyQuestionFile;
	  }
	});
	
	var _reactquestionmultipletext = __webpack_require__(50);
	
	Object.defineProperty(exports, "SurveyQuestionMultipleText", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmultipletext.SurveyQuestionMultipleText;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionMultipleTextItem", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmultipletext.SurveyQuestionMultipleTextItem;
	  }
	});
	
	var _reactquestionradiogroup = __webpack_require__(51);
	
	Object.defineProperty(exports, "SurveyQuestionRadiogroup", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionradiogroup.SurveyQuestionRadiogroup;
	  }
	});
	
	var _reactquestiontext = __webpack_require__(52);
	
	Object.defineProperty(exports, "SurveyQuestionText", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestiontext.SurveyQuestionText;
	  }
	});
	
	var _reactquestionmatrixdynamic = __webpack_require__(53);
	
	Object.defineProperty(exports, "SurveyQuestionMatrixDynamic", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrixdynamic.SurveyQuestionMatrixDynamic;
	  }
	});
	Object.defineProperty(exports, "SurveyQuestionMatrixDynamicRow", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionmatrixdynamic.SurveyQuestionMatrixDynamicRow;
	  }
	});
	
	var _reactSurveyProgress = __webpack_require__(43);
	
	Object.defineProperty(exports, "SurveyProgress", {
	  enumerable: true,
	  get: function get() {
	    return _reactSurveyProgress.SurveyProgress;
	  }
	});
	
	var _reactquestionrating = __webpack_require__(54);
	
	Object.defineProperty(exports, "SurveyQuestionRating", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionrating.SurveyQuestionRating;
	  }
	});
	
	var _reactSurveyWindow = __webpack_require__(55);
	
	Object.defineProperty(exports, "SurveyWindow", {
	  enumerable: true,
	  get: function get() {
	    return _reactSurveyWindow.SurveyWindow;
	  }
	});
	
	var _reactquestionfactory = __webpack_require__(41);
	
	Object.defineProperty(exports, "ReactQuestionFactory", {
	  enumerable: true,
	  get: function get() {
	    return _reactquestionfactory.ReactQuestionFactory;
	  }
	});
	
	var _extends = __webpack_require__(3);
	
	Object.defineProperty(exports, "__extends", {
	  enumerable: true,
	  get: function get() {
	    return _extends.__extends;
	  }
	});
	
	__webpack_require__(56);
	
	__webpack_require__(61);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _validator = __webpack_require__(2);
	
	Object.defineProperty(exports, "AnswerCountValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.AnswerCountValidator;
	  }
	});
	Object.defineProperty(exports, "EmailValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.EmailValidator;
	  }
	});
	Object.defineProperty(exports, "NumericValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.NumericValidator;
	  }
	});
	Object.defineProperty(exports, "RegexValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.RegexValidator;
	  }
	});
	Object.defineProperty(exports, "SurveyValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.SurveyValidator;
	  }
	});
	Object.defineProperty(exports, "TextValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.TextValidator;
	  }
	});
	Object.defineProperty(exports, "ValidatorResult", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorResult;
	  }
	});
	Object.defineProperty(exports, "ValidatorRunner", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorRunner;
	  }
	});
	
	var _base = __webpack_require__(4);
	
	Object.defineProperty(exports, "Base", {
	  enumerable: true,
	  get: function get() {
	    return _base.Base;
	  }
	});
	Object.defineProperty(exports, "Event", {
	  enumerable: true,
	  get: function get() {
	    return _base.Event;
	  }
	});
	Object.defineProperty(exports, "ItemValue", {
	  enumerable: true,
	  get: function get() {
	    return _base.ItemValue;
	  }
	});
	Object.defineProperty(exports, "SurveyError", {
	  enumerable: true,
	  get: function get() {
	    return _base.SurveyError;
	  }
	});
	
	var _choicesRestfull = __webpack_require__(8);
	
	Object.defineProperty(exports, "ChoicesRestfull", {
	  enumerable: true,
	  get: function get() {
	    return _choicesRestfull.ChoicesRestfull;
	  }
	});
	
	var _conditions = __webpack_require__(9);
	
	Object.defineProperty(exports, "Condition", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.Condition;
	  }
	});
	Object.defineProperty(exports, "ConditionNode", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionNode;
	  }
	});
	Object.defineProperty(exports, "ConditionRunner", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionRunner;
	  }
	});
	
	var _conditionsParser = __webpack_require__(10);
	
	Object.defineProperty(exports, "ConditionsParser", {
	  enumerable: true,
	  get: function get() {
	    return _conditionsParser.ConditionsParser;
	  }
	});
	
	var _error = __webpack_require__(5);
	
	Object.defineProperty(exports, "CustomError", {
	  enumerable: true,
	  get: function get() {
	    return _error.CustomError;
	  }
	});
	Object.defineProperty(exports, "ExceedSizeError", {
	  enumerable: true,
	  get: function get() {
	    return _error.ExceedSizeError;
	  }
	});
	Object.defineProperty(exports, "RequreNumericError", {
	  enumerable: true,
	  get: function get() {
	    return _error.RequreNumericError;
	  }
	});
	
	var _jsonobject = __webpack_require__(7);
	
	Object.defineProperty(exports, "JsonError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonError;
	  }
	});
	Object.defineProperty(exports, "JsonIncorrectTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonIncorrectTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMetadata", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadata;
	  }
	});
	Object.defineProperty(exports, "JsonMetadataClass", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadataClass;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeErrorBase", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeErrorBase;
	  }
	});
	Object.defineProperty(exports, "JsonObject", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObject;
	  }
	});
	Object.defineProperty(exports, "JsonObjectProperty", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObjectProperty;
	  }
	});
	Object.defineProperty(exports, "JsonRequiredPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonRequiredPropertyError;
	  }
	});
	Object.defineProperty(exports, "JsonUnknownPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonUnknownPropertyError;
	  }
	});
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	Object.defineProperty(exports, "MatrixDropdownCell", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownCell;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownColumn", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownColumn;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownRowModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownRowModelBase;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.QuestionMatrixDropdownModelBase;
	  }
	});
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	Object.defineProperty(exports, "MatrixDropdownRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.MatrixDropdownRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.QuestionMatrixDropdownModel;
	  }
	});
	
	var _question_matrixdynamic = __webpack_require__(18);
	
	Object.defineProperty(exports, "MatrixDynamicRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.MatrixDynamicRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDynamicModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.QuestionMatrixDynamicModel;
	  }
	});
	
	var _question_matrix = __webpack_require__(19);
	
	Object.defineProperty(exports, "MatrixRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.MatrixRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.QuestionMatrixModel;
	  }
	});
	
	var _question_multipletext = __webpack_require__(20);
	
	Object.defineProperty(exports, "MultipleTextItemModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.MultipleTextItemModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.QuestionMultipleTextModel;
	  }
	});
	
	var _page = __webpack_require__(21);
	
	Object.defineProperty(exports, "PageModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.PageModel;
	  }
	});
	Object.defineProperty(exports, "QuestionRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.QuestionRowModel;
	  }
	});
	
	var _question = __webpack_require__(12);
	
	Object.defineProperty(exports, "Question", {
	  enumerable: true,
	  get: function get() {
	    return _question.Question;
	  }
	});
	
	var _questionbase = __webpack_require__(13);
	
	Object.defineProperty(exports, "QuestionBase", {
	  enumerable: true,
	  get: function get() {
	    return _questionbase.QuestionBase;
	  }
	});
	
	var _question_baseselect = __webpack_require__(15);
	
	Object.defineProperty(exports, "QuestionCheckboxBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionCheckboxBase;
	  }
	});
	Object.defineProperty(exports, "QuestionSelectBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionSelectBase;
	  }
	});
	
	var _question_checkbox = __webpack_require__(22);
	
	Object.defineProperty(exports, "QuestionCheckboxModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_checkbox.QuestionCheckboxModel;
	  }
	});
	
	var _question_comment = __webpack_require__(23);
	
	Object.defineProperty(exports, "QuestionCommentModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_comment.QuestionCommentModel;
	  }
	});
	
	var _question_dropdown = __webpack_require__(24);
	
	Object.defineProperty(exports, "QuestionDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_dropdown.QuestionDropdownModel;
	  }
	});
	
	var _questionfactory = __webpack_require__(16);
	
	Object.defineProperty(exports, "QuestionFactory", {
	  enumerable: true,
	  get: function get() {
	    return _questionfactory.QuestionFactory;
	  }
	});
	
	var _question_file = __webpack_require__(25);
	
	Object.defineProperty(exports, "QuestionFileModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_file.QuestionFileModel;
	  }
	});
	
	var _question_html = __webpack_require__(26);
	
	Object.defineProperty(exports, "QuestionHtmlModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_html.QuestionHtmlModel;
	  }
	});
	
	var _question_radiogroup = __webpack_require__(27);
	
	Object.defineProperty(exports, "QuestionRadiogroupModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_radiogroup.QuestionRadiogroupModel;
	  }
	});
	
	var _question_rating = __webpack_require__(28);
	
	Object.defineProperty(exports, "QuestionRatingModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_rating.QuestionRatingModel;
	  }
	});
	
	var _question_text = __webpack_require__(29);
	
	Object.defineProperty(exports, "QuestionTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_text.QuestionTextModel;
	  }
	});
	
	var _survey = __webpack_require__(30);
	
	Object.defineProperty(exports, "SurveyModel", {
	  enumerable: true,
	  get: function get() {
	    return _survey.SurveyModel;
	  }
	});
	
	var _trigger = __webpack_require__(32);
	
	Object.defineProperty(exports, "SurveyTrigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTrigger;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerComplete", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerComplete;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerSetValue", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerSetValue;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerVisible", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerVisible;
	  }
	});
	Object.defineProperty(exports, "Trigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.Trigger;
	  }
	});
	
	var _surveyWindow = __webpack_require__(33);
	
	Object.defineProperty(exports, "SurveyWindowModel", {
	  enumerable: true,
	  get: function get() {
	    return _surveyWindow.SurveyWindowModel;
	  }
	});
	
	var _textPreProcessor = __webpack_require__(14);
	
	Object.defineProperty(exports, "TextPreProcessor", {
	  enumerable: true,
	  get: function get() {
	    return _textPreProcessor.TextPreProcessor;
	  }
	});
	
	var _dxSurveyService = __webpack_require__(31);
	
	Object.defineProperty(exports, "dxSurveyService", {
	  enumerable: true,
	  get: function get() {
	    return _dxSurveyService.dxSurveyService;
	  }
	});
	
	var _surveyStrings = __webpack_require__(6);
	
	Object.defineProperty(exports, "surveyLocalization", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyLocalization;
	  }
	});
	Object.defineProperty(exports, "surveyStrings", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyStrings;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.EmailValidator = exports.RegexValidator = exports.AnswerCountValidator = exports.TextValidator = exports.NumericValidator = exports.ValidatorRunner = exports.SurveyValidator = exports.ValidatorResult = undefined;
	
	var _base = __webpack_require__(4);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _jsonobject = __webpack_require__(7);
	
	var ValidatorResult = exports.ValidatorResult = function () {
	    function ValidatorResult(value, error) {
	        if (error === void 0) {
	            error = null;
	        }
	        this.value = value;
	        this.error = error;
	    }
	    return ValidatorResult;
	}();
	var SurveyValidator = exports.SurveyValidator = function (_super) {
	    __extends(SurveyValidator, _super);
	    function SurveyValidator() {
	        _super.call(this);
	        this.text = "";
	    }
	    SurveyValidator.prototype.getErrorText = function (name) {
	        if (this.text) return this.text;
	        return this.getDefaultErrorText(name);
	    };
	    SurveyValidator.prototype.getDefaultErrorText = function (name) {
	        return "";
	    };
	    SurveyValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        return null;
	    };
	    return SurveyValidator;
	}(_base.Base);
	var ValidatorRunner = exports.ValidatorRunner = function () {
	    function ValidatorRunner() {}
	    ValidatorRunner.prototype.run = function (owner) {
	        for (var i = 0; i < owner.validators.length; i++) {
	            var validatorResult = owner.validators[i].validate(owner.value, owner.getValidatorTitle());
	            if (validatorResult != null) {
	                if (validatorResult.error) return validatorResult.error;
	                if (validatorResult.value) {
	                    owner.value = validatorResult.value;
	                }
	            }
	        }
	        return null;
	    };
	    return ValidatorRunner;
	}();
	var NumericValidator = exports.NumericValidator = function (_super) {
	    __extends(NumericValidator, _super);
	    function NumericValidator(minValue, maxValue) {
	        if (minValue === void 0) {
	            minValue = null;
	        }
	        if (maxValue === void 0) {
	            maxValue = null;
	        }
	        _super.call(this);
	        this.minValue = minValue;
	        this.maxValue = maxValue;
	    }
	    NumericValidator.prototype.getType = function () {
	        return "numericvalidator";
	    };
	    NumericValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value || !this.isNumber(value)) {
	            return new ValidatorResult(null, new _error.RequreNumericError());
	        }
	        var result = new ValidatorResult(parseFloat(value));
	        if (this.minValue && this.minValue > result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        if (this.maxValue && this.maxValue < result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        return typeof value === 'number' ? null : result;
	    };
	    NumericValidator.prototype.getDefaultErrorText = function (name) {
	        var vName = name ? name : "value";
	        if (this.minValue && this.maxValue) {
	            return _surveyStrings.surveyLocalization.getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
	        } else {
	            if (this.minValue) {
	                return _surveyStrings.surveyLocalization.getString("numericMin")["format"](vName, this.minValue);
	            }
	            return _surveyStrings.surveyLocalization.getString("numericMax")["format"](vName, this.maxValue);
	        }
	    };
	    NumericValidator.prototype.isNumber = function (value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	    return NumericValidator;
	}(SurveyValidator);
	var TextValidator = exports.TextValidator = function (_super) {
	    __extends(TextValidator, _super);
	    function TextValidator(minLength) {
	        if (minLength === void 0) {
	            minLength = 0;
	        }
	        _super.call(this);
	        this.minLength = minLength;
	    }
	    TextValidator.prototype.getType = function () {
	        return "textvalidator";
	    };
	    TextValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (this.minLength <= 0) return;
	        if (value.length < this.minLength) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(name)));
	        }
	        return null;
	    };
	    TextValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("textMinLength")["format"](this.minLength);
	    };
	    return TextValidator;
	}(SurveyValidator);
	var AnswerCountValidator = exports.AnswerCountValidator = function (_super) {
	    __extends(AnswerCountValidator, _super);
	    function AnswerCountValidator(minCount, maxCount) {
	        if (minCount === void 0) {
	            minCount = null;
	        }
	        if (maxCount === void 0) {
	            maxCount = null;
	        }
	        _super.call(this);
	        this.minCount = minCount;
	        this.maxCount = maxCount;
	    }
	    AnswerCountValidator.prototype.getType = function () {
	        return "answercountvalidator";
	    };
	    AnswerCountValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (value == null || value.constructor != Array) return null;
	        var count = value.length;
	        if (this.minCount && count < this.minCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("minSelectError")["format"](this.minCount))));
	        }
	        if (this.maxCount && count > this.maxCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("maxSelectError")["format"](this.maxCount))));
	        }
	        return null;
	    };
	    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
	        return name;
	    };
	    return AnswerCountValidator;
	}(SurveyValidator);
	var RegexValidator = exports.RegexValidator = function (_super) {
	    __extends(RegexValidator, _super);
	    function RegexValidator(regex) {
	        if (regex === void 0) {
	            regex = null;
	        }
	        _super.call(this);
	        this.regex = regex;
	    }
	    RegexValidator.prototype.getType = function () {
	        return "regexvalidator";
	    };
	    RegexValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!this.regex || !value) return null;
	        var re = new RegExp(this.regex);
	        if (re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    return RegexValidator;
	}(SurveyValidator);
	var EmailValidator = exports.EmailValidator = function (_super) {
	    __extends(EmailValidator, _super);
	    function EmailValidator() {
	        _super.call(this);
	        this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	    }
	    EmailValidator.prototype.getType = function () {
	        return "emailvalidator";
	    };
	    EmailValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value) return null;
	        if (this.re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    EmailValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("invalidEmail");
	    };
	    return EmailValidator;
	}(SurveyValidator);
	_jsonobject.JsonObject.metaData.addClass("surveyvalidator", ["text"]);
	_jsonobject.JsonObject.metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () {
	    return new NumericValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("textvalidator", ["minLength:number"], function () {
	    return new TextValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () {
	    return new AnswerCountValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("regexvalidator", ["regex"], function () {
	    return new RegexValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("emailvalidator", [], function () {
	    return new EmailValidator();
	}, "surveyvalidator");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.__extends = __extends;
	function __extends(d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = __extends;
	}
	exports.__extends = __extends;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var ItemValue = exports.ItemValue = function () {
	    function ItemValue(value, text) {
	        if (text === void 0) {
	            text = null;
	        }
	        this.text = text;
	        this.value = value;
	    }
	    ItemValue.setData = function (items, values) {
	        items.length = 0;
	        for (var i = 0; i < values.length; i++) {
	            var value = values[i];
	            var item = new ItemValue(null);
	            if (typeof value.value !== 'undefined') {
	                item.text = typeof value.hasText !== 'undefined' ? value.itemText : value["text"];
	                item.value = value["value"];
	            } else {
	                item.value = value;
	            }
	            items.push(item);
	        }
	    };
	    ItemValue.getData = function (items) {
	        var result = new Array();
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item.hasText) {
	                result.push({ value: item.value, text: item.text });
	            } else {
	                result.push(item.value);
	            }
	        }
	        return result;
	    };
	    ItemValue.prototype.getType = function () {
	        return "itemvalue";
	    };
	    Object.defineProperty(ItemValue.prototype, "value", {
	        get: function get() {
	            return this.itemValue;
	        },
	        set: function set(newValue) {
	            this.itemValue = newValue;
	            if (!this.itemValue) return;
	            var str = this.itemValue.toString();
	            var index = str.indexOf(ItemValue.Separator);
	            if (index > -1) {
	                this.itemValue = str.slice(0, index);
	                this.text = str.slice(index + 1);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "hasText", {
	        get: function get() {
	            return this.itemText ? true : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "text", {
	        get: function get() {
	            if (this.hasText) return this.itemText;
	            if (this.value) return this.value.toString();
	            return null;
	        },
	        set: function set(newText) {
	            this.itemText = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ItemValue.Separator = '|';
	    return ItemValue;
	}();
	var Base = exports.Base = function () {
	    function Base() {}
	    Base.prototype.getType = function () {
	        throw new Error('This method is abstract');
	    };
	    return Base;
	}();
	var SurveyError = exports.SurveyError = function () {
	    function SurveyError() {}
	    SurveyError.prototype.getText = function () {
	        throw new Error('This method is abstract');
	    };
	    return SurveyError;
	}();
	var Event = exports.Event = function () {
	    function Event() {}
	    Object.defineProperty(Event.prototype, "isEmpty", {
	        get: function get() {
	            return this.callbacks == null || this.callbacks.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Event.prototype.fire = function (sender, options) {
	        if (this.callbacks == null) return;
	        for (var i = 0; i < this.callbacks.length; i++) {
	            var callResult = this.callbacks[i](sender, options);
	        }
	    };
	    Event.prototype.add = function (func) {
	        if (this.callbacks == null) {
	            this.callbacks = new Array();
	        }
	        this.callbacks.push(func);
	    };
	    Event.prototype.remove = function (func) {
	        if (this.callbacks == null) return;
	        var index = this.callbacks.indexOf(func, 0);
	        if (index != undefined) {
	            this.callbacks.splice(index, 1);
	        }
	    };
	    return Event;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.CustomError = exports.ExceedSizeError = exports.RequreNumericError = exports.AnswerRequiredError = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var _base = __webpack_require__(4);
	
	var AnswerRequiredError = exports.AnswerRequiredError = function (_super) {
	    __extends(AnswerRequiredError, _super);
	    function AnswerRequiredError() {
	        _super.call(this);
	    }
	    AnswerRequiredError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("requiredError");
	    };
	    return AnswerRequiredError;
	}(_base.SurveyError);
	var RequreNumericError = exports.RequreNumericError = function (_super) {
	    __extends(RequreNumericError, _super);
	    function RequreNumericError() {
	        _super.call(this);
	    }
	    RequreNumericError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("numericError");
	    };
	    return RequreNumericError;
	}(_base.SurveyError);
	var ExceedSizeError = exports.ExceedSizeError = function (_super) {
	    __extends(ExceedSizeError, _super);
	    function ExceedSizeError(maxSize) {
	        _super.call(this);
	        this.maxSize = maxSize;
	    }
	    ExceedSizeError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("exceedMaxSize")["format"](this.getTextSize());
	    };
	    ExceedSizeError.prototype.getTextSize = function () {
	        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	        var fixed = [0, 0, 2, 3, 3];
	        if (this.maxSize == 0) return '0 Byte';
	        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
	        var value = this.maxSize / Math.pow(1024, i);
	        return value.toFixed(fixed[i]) + ' ' + sizes[i];
	    };
	    return ExceedSizeError;
	}(_base.SurveyError);
	var CustomError = exports.CustomError = function (_super) {
	    __extends(CustomError, _super);
	    function CustomError(text) {
	        _super.call(this);
	        this.text = text;
	    }
	    CustomError.prototype.getText = function () {
	        return this.text;
	    };
	    return CustomError;
	}(_base.SurveyError);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyLocalization = exports.surveyLocalization = {
	    currentLocale: "",
	    locales: {},
	    getString: function getString(strName) {
	        var loc = this.currentLocale ? this.locales[this.currentLocale] : surveyStrings;
	        if (!loc || !loc[strName]) loc = surveyStrings;
	        return loc[strName];
	    },
	    getLocales: function getLocales() {
	        var res = [];
	        res.push("");
	        for (var key in this.locales) {
	            res.push(key);
	        }
	        res.sort();
	        return res;
	    }
	};
	var surveyStrings = exports.surveyStrings = {
	    pagePrevText: "Previous",
	    pageNextText: "Next",
	    completeText: "Complete",
	    otherItemText: "Other (describe)",
	    progressText: "Page {0} of {1}",
	    emptySurvey: "There is no any visible page or visible question in the survey.",
	    completingSurvey: "Thank You for Completing the Survey!",
	    loadingSurvey: "Survey is loading from the server...",
	    optionsCaption: "Choose...",
	    requiredError: "Please answer the question.",
	    requiredInAllRowsError: "Please answer questions in all rows.",
	    numericError: "The value should be a numeric.",
	    textMinLength: "Please enter at least {0} symbols.",
	    minRowCountError: "Please fill at least {0} rows.",
	    minSelectError: "Please select at least {0} variants.",
	    maxSelectError: "Please select not more than {0} variants.",
	    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
	    numericMin: "The '{0}' should be equal or more than {1}",
	    numericMax: "The '{0}' should be equal or less than {1}",
	    invalidEmail: "Please enter a valid e-mail.",
	    urlRequestError: "The request return error '{0}'. {1}",
	    urlGetChoicesError: "The request returns empty data or the 'path' property is incorrect",
	    exceedMaxSize: "The file size should not exceed {0}.",
	    otherRequiredError: "Please enter the others value.",
	    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
	    addRow: "Add Row",
	    removeRow: "Remove"
	};
	surveyLocalization.locales["en"] = surveyStrings;
	if (!String.prototype["format"]) {
	    String.prototype["format"] = function () {
	        var args = arguments;
	        return this.replace(/{(\d+)}/g, function (match, number) {
	            return typeof args[number] != 'undefined' ? args[number] : match;
	        });
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var JsonObjectProperty = exports.JsonObjectProperty = function () {
	    function JsonObjectProperty(name) {
	        this.name = name;
	        this.typeValue = null;
	        this.choicesValue = null;
	        this.choicesfunc = null;
	        this.className = null;
	        this.classNamePart = null;
	        this.baseClassName = null;
	        this.defaultValue = null;
	        this.onGetValue = null;
	    }
	    Object.defineProperty(JsonObjectProperty.prototype, "type", {
	        get: function get() {
	            return this.typeValue ? this.typeValue : "string";
	        },
	        set: function set(value) {
	            this.typeValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
	        get: function get() {
	            return this.onGetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.isDefaultValue = function (value) {
	        return this.defaultValue ? this.defaultValue == value : !value;
	    };
	    JsonObjectProperty.prototype.getValue = function (obj) {
	        if (this.onGetValue) return this.onGetValue(obj);
	        return null;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
	        get: function get() {
	            return this.onSetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
	        if (this.onSetValue) {
	            this.onSetValue(obj, value, jsonConv);
	        }
	    };
	    JsonObjectProperty.prototype.getObjType = function (objType) {
	        if (!this.classNamePart) return objType;
	        return objType.replace(this.classNamePart, "");
	    };
	    JsonObjectProperty.prototype.getClassName = function (className) {
	        return this.classNamePart && className.indexOf(this.classNamePart) < 0 ? className + this.classNamePart : className;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
	        get: function get() {
	            if (this.choicesValue != null) return this.choicesValue;
	            if (this.choicesfunc != null) return this.choicesfunc();
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
	        this.choicesValue = value;
	        this.choicesfunc = valueFunc;
	    };
	    return JsonObjectProperty;
	}();
	var JsonMetadataClass = exports.JsonMetadataClass = function () {
	    function JsonMetadataClass(name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        this.name = name;
	        this.creator = creator;
	        this.parentName = parentName;
	        this.properties = null;
	        this.requiredProperties = null;
	        this.properties = new Array();
	        for (var i = 0; i < properties.length; i++) {
	            var prop = this.createProperty(properties[i]);
	            if (prop) {
	                this.properties.push(prop);
	            }
	        }
	    }
	    JsonMetadataClass.prototype.find = function (name) {
	        for (var i = 0; i < this.properties.length; i++) {
	            if (this.properties[i].name == name) return this.properties[i];
	        }
	        return null;
	    };
	    JsonMetadataClass.prototype.createProperty = function (propInfo) {
	        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
	        if (!propertyName) return;
	        var propertyType = null;
	        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
	        if (typeIndex > -1) {
	            propertyType = propertyName.substring(typeIndex + 1);
	            propertyName = propertyName.substring(0, typeIndex);
	        }
	        propertyName = this.getPropertyName(propertyName);
	        var prop = new JsonObjectProperty(propertyName);
	        if (propertyType) {
	            prop.type = propertyType;
	        }
	        if ((typeof propInfo === "undefined" ? "undefined" : _typeof(propInfo)) === "object") {
	            if (propInfo.type) {
	                prop.type = propInfo.type;
	            }
	            if (propInfo.default) {
	                prop.defaultValue = propInfo.default;
	            }
	            if (propInfo.isRequired) {
	                this.makePropertyRequired(prop.name);
	            }
	            if (propInfo.choices) {
	                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
	                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
	                prop.setChoices(choicesValue, choicesFunc);
	            }
	            if (propInfo.onGetValue) {
	                prop.onGetValue = propInfo.onGetValue;
	            }
	            if (propInfo.onSetValue) {
	                prop.onSetValue = propInfo.onSetValue;
	            }
	            if (propInfo.className) {
	                prop.className = propInfo.className;
	            }
	            if (propInfo.baseClassName) {
	                prop.baseClassName = propInfo.baseClassName;
	            }
	            if (propInfo.classNamePart) {
	                prop.classNamePart = propInfo.classNamePart;
	            }
	        }
	        return prop;
	    };
	    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
	        if (propertyName.length == 0 || propertyName[0] != JsonMetadataClass.requiredSymbol) return propertyName;
	        propertyName = propertyName.slice(1);
	        this.makePropertyRequired(propertyName);
	        return propertyName;
	    };
	    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
	        if (!this.requiredProperties) {
	            this.requiredProperties = new Array();
	        }
	        this.requiredProperties.push(propertyName);
	    };
	    JsonMetadataClass.requiredSymbol = '!';
	    JsonMetadataClass.typeSymbol = ':';
	    return JsonMetadataClass;
	}();
	var JsonMetadata = exports.JsonMetadata = function () {
	    function JsonMetadata() {
	        this.classes = {};
	        this.childrenClasses = {};
	        this.classProperties = {};
	        this.classRequiredProperties = {};
	    }
	    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
	        this.classes[name] = metaDataClass;
	        if (parentName) {
	            var children = this.childrenClasses[parentName];
	            if (!children) {
	                this.childrenClasses[parentName] = [];
	            }
	            this.childrenClasses[parentName].push(metaDataClass);
	        }
	        return metaDataClass;
	    };
	    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
	        var metaDataClass = this.findClass(name);
	        if (metaDataClass) {
	            metaDataClass.creator = creator;
	        }
	    };
	    JsonMetadata.prototype.getProperties = function (name) {
	        var properties = this.classProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillProperties(name, properties);
	            this.classProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.createClass = function (name) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return null;
	        return metaDataClass.creator();
	    };
	    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
	        if (canBeCreated === void 0) {
	            canBeCreated = false;
	        }
	        var result = [];
	        this.fillChildrenClasses(name, canBeCreated, result);
	        return result;
	    };
	    JsonMetadata.prototype.getRequiredProperties = function (name) {
	        var properties = this.classRequiredProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillRequiredProperties(name, properties);
	            this.classRequiredProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
	        var children = this.childrenClasses[name];
	        if (!children) return;
	        for (var i = 0; i < children.length; i++) {
	            if (!canBeCreated || children[i].creator) {
	                result.push(children[i]);
	            }
	            this.fillChildrenClasses(children[i].name, canBeCreated, result);
	        }
	    };
	    JsonMetadata.prototype.findClass = function (name) {
	        return this.classes[name];
	    };
	    JsonMetadata.prototype.fillProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.parentName) {
	            this.fillProperties(metaDataClass.parentName, list);
	        }
	        for (var i = 0; i < metaDataClass.properties.length; i++) {
	            this.addProperty(metaDataClass.properties[i], list, list.length);
	        }
	    };
	    JsonMetadata.prototype.addProperty = function (property, list, endIndex) {
	        var index = -1;
	        for (var i = 0; i < endIndex; i++) {
	            if (list[i].name == property.name) {
	                index = i;
	                break;
	            }
	        }
	        if (index < 0) {
	            list.push(property);
	        } else {
	            list[index] = property;
	        }
	    };
	    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.requiredProperties) {
	            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
	        }
	        if (metaDataClass.parentName) {
	            this.fillRequiredProperties(metaDataClass.parentName, list);
	        }
	    };
	    return JsonMetadata;
	}();
	var JsonError = exports.JsonError = function () {
	    function JsonError(type, message) {
	        this.type = type;
	        this.message = message;
	        this.description = "";
	        this.at = -1;
	    }
	    JsonError.prototype.getFullDescription = function () {
	        return this.message + (this.description ? "\n" + this.description : "");
	    };
	    return JsonError;
	}();
	var JsonUnknownPropertyError = exports.JsonUnknownPropertyError = function (_super) {
	    __extends(JsonUnknownPropertyError, _super);
	    function JsonUnknownPropertyError(propertyName, className) {
	        _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.");
	        this.propertyName = propertyName;
	        this.className = className;
	        var properties = JsonObject.metaData.getProperties(className);
	        if (properties) {
	            this.description = "The list of available properties are: ";
	            for (var i = 0; i < properties.length; i++) {
	                if (i > 0) this.description += ", ";
	                this.description += properties[i].name;
	            }
	            this.description += '.';
	        }
	    }
	    return JsonUnknownPropertyError;
	}(JsonError);
	var JsonMissingTypeErrorBase = exports.JsonMissingTypeErrorBase = function (_super) {
	    __extends(JsonMissingTypeErrorBase, _super);
	    function JsonMissingTypeErrorBase(baseClassName, type, message) {
	        _super.call(this, type, message);
	        this.baseClassName = baseClassName;
	        this.type = type;
	        this.message = message;
	        this.description = "The following types are available: ";
	        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
	        for (var i = 0; i < types.length; i++) {
	            if (i > 0) this.description += ", ";
	            this.description += "'" + types[i].name + "'";
	        }
	        this.description += ".";
	    }
	    return JsonMissingTypeErrorBase;
	}(JsonError);
	var JsonMissingTypeError = exports.JsonMissingTypeError = function (_super) {
	    __extends(JsonMissingTypeError, _super);
	    function JsonMissingTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonMissingTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonIncorrectTypeError = exports.JsonIncorrectTypeError = function (_super) {
	    __extends(JsonIncorrectTypeError, _super);
	    function JsonIncorrectTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonIncorrectTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonRequiredPropertyError = exports.JsonRequiredPropertyError = function (_super) {
	    __extends(JsonRequiredPropertyError, _super);
	    function JsonRequiredPropertyError(propertyName, className) {
	        _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.");
	        this.propertyName = propertyName;
	        this.className = className;
	    }
	    return JsonRequiredPropertyError;
	}(JsonError);
	var JsonObject = exports.JsonObject = function () {
	    function JsonObject() {
	        this.errors = new Array();
	    }
	    Object.defineProperty(JsonObject, "metaData", {
	        get: function get() {
	            return JsonObject.metaDataValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObject.prototype.toJsonObject = function (obj) {
	        return this.toJsonObjectCore(obj, null);
	    };
	    JsonObject.prototype.toObject = function (jsonObj, obj) {
	        if (!jsonObj) return;
	        var properties = null;
	        if (obj.getType) {
	            properties = JsonObject.metaData.getProperties(obj.getType());
	        }
	        if (!properties) return;
	        for (var key in jsonObj) {
	            if (key == JsonObject.typePropertyName) continue;
	            if (key == JsonObject.positionPropertyName) {
	                obj[key] = jsonObj[key];
	                continue;
	            }
	            var property = this.findProperty(properties, key);
	            if (!property) {
	                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
	                continue;
	            }
	            this.valueToObj(jsonObj[key], obj, key, property);
	        }
	    };
	    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
	        if (!obj.getType) return obj;
	        var result = {};
	        if (property != null && !property.className) {
	            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
	        }
	        var properties = JsonObject.metaData.getProperties(obj.getType());
	        for (var i = 0; i < properties.length; i++) {
	            this.valueToJson(obj, result, properties[i]);
	        }
	        return result;
	    };
	    JsonObject.prototype.valueToJson = function (obj, result, property) {
	        var value = null;
	        if (property.hasToUseGetValue) {
	            value = property.getValue(obj);
	        } else {
	            value = obj[property.name];
	        }
	        if (property.isDefaultValue(value)) return;
	        if (this.isValueArray(value)) {
	            var arrValue = [];
	            for (var i = 0; i < value.length; i++) {
	                arrValue.push(this.toJsonObjectCore(value[i], property));
	            }
	            value = arrValue.length > 0 ? arrValue : null;
	        } else {
	            value = this.toJsonObjectCore(value, property);
	        }
	        if (!property.isDefaultValue(value)) {
	            result[property.name] = value;
	        }
	    };
	    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
	        if (value == null) return;
	        if (property != null && property.hasToUseSetValue) {
	            property.setValue(obj, value, this);
	            return;
	        }
	        if (this.isValueArray(value)) {
	            this.valueToArray(value, obj, key, property);
	            return;
	        }
	        var newObj = this.createNewObj(value, property);
	        if (newObj.newObj) {
	            this.toObject(value, newObj.newObj);
	            value = newObj.newObj;
	        }
	        if (!newObj.error) {
	            obj[key] = value;
	        }
	    };
	    JsonObject.prototype.isValueArray = function (value) {
	        return value.constructor.toString().indexOf("Array") > -1;
	    };
	    JsonObject.prototype.createNewObj = function (value, property) {
	        var result = { newObj: null, error: null };
	        var className = value[JsonObject.typePropertyName];
	        if (!className && property != null && property.className) {
	            className = property.className;
	        }
	        className = property.getClassName(className);
	        result.newObj = className ? JsonObject.metaData.createClass(className) : null;
	        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
	        return result;
	    };
	    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
	        var error = null;
	        if (newObj) {
	            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
	            if (requiredProperties) {
	                for (var i = 0; i < requiredProperties.length; i++) {
	                    if (!value[requiredProperties[i]]) {
	                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
	                        break;
	                    }
	                }
	            }
	        } else {
	            if (property.baseClassName) {
	                if (!className) {
	                    error = new JsonMissingTypeError(property.name, property.baseClassName);
	                } else {
	                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
	                }
	            }
	        }
	        if (error) {
	            this.addNewError(error, value);
	        }
	        return error;
	    };
	    JsonObject.prototype.addNewError = function (error, jsonObj) {
	        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
	            error.at = jsonObj[JsonObject.positionPropertyName].start;
	        }
	        this.errors.push(error);
	    };
	    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
	        if (!this.isValueArray(obj[key])) {
	            obj[key] = [];
	        }
	        for (var i = 0; i < value.length; i++) {
	            var newValue = this.createNewObj(value[i], property);
	            if (newValue.newObj) {
	                obj[key].push(newValue.newObj);
	                this.toObject(value[i], newValue.newObj);
	            } else {
	                if (!newValue.error) {
	                    obj[key].push(value[i]);
	                }
	            }
	        }
	    };
	    JsonObject.prototype.findProperty = function (properties, key) {
	        if (!properties) return null;
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].name == key) return properties[i];
	        }
	        return null;
	    };
	    JsonObject.typePropertyName = "type";
	    JsonObject.positionPropertyName = "pos";
	    JsonObject.metaDataValue = new JsonMetadata();
	    return JsonObject;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.ChoicesRestfull = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var ChoicesRestfull = exports.ChoicesRestfull = function (_super) {
	    __extends(ChoicesRestfull, _super);
	    function ChoicesRestfull() {
	        _super.call(this);
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	        this.error = null;
	    }
	    ChoicesRestfull.prototype.run = function () {
	        if (!this.url || !this.getResultCallback) return;
	        this.error = null;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', this.url);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            if (xhr.status == 200) {
	                self.onLoad(JSON.parse(xhr.response));
	            } else {
	                self.onError(xhr.statusText, xhr.responseText);
	            }
	        };
	        xhr.send();
	    };
	    ChoicesRestfull.prototype.getType = function () {
	        return "choicesByUrl";
	    };
	    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
	        get: function get() {
	            return !this.url && !this.path && !this.valueName && !this.titleName;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ChoicesRestfull.prototype.setData = function (json) {
	        this.clear();
	        if (json.url) this.url = json.url;
	        if (json.path) this.path = json.path;
	        if (json.valueName) this.valueName = json.valueName;
	        if (json.titleName) this.titleName = json.titleName;
	    };
	    ChoicesRestfull.prototype.clear = function () {
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	    };
	    ChoicesRestfull.prototype.onLoad = function (result) {
	        var items = [];
	        result = this.getResultAfterPath(result);
	        if (result && result["length"]) {
	            for (var i = 0; i < result.length; i++) {
	                var itemValue = result[i];
	                if (!itemValue) continue;
	                var value = this.getValue(itemValue);
	                var title = this.getTitle(itemValue);
	                items.push(new _base.ItemValue(value, title));
	            }
	        } else {
	            this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlGetChoicesError"));
	        }
	        this.getResultCallback(items);
	    };
	    ChoicesRestfull.prototype.onError = function (status, response) {
	        this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlRequestError")["format"](status, response));
	        this.getResultCallback([]);
	    };
	    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
	        if (!result) return result;
	        if (!this.path) return result;
	        var pathes = this.getPathes();
	        for (var i = 0; i < pathes.length; i++) {
	            result = result[pathes[i]];
	            if (!result) return null;
	        }
	        return result;
	    };
	    ChoicesRestfull.prototype.getPathes = function () {
	        var pathes = [];
	        if (this.path.indexOf(';') > -1) {
	            pathes = this.path.split(';');
	        } else {
	            pathes = this.path.split(',');
	        }
	        if (pathes.length == 0) pathes.push(this.path);
	        return pathes;
	    };
	    ChoicesRestfull.prototype.getValue = function (item) {
	        if (this.valueName) return item[this.valueName];
	        var len = Object.keys(item).length;
	        if (len < 1) return null;
	        return item[Object.keys(item)[0]];
	    };
	    ChoicesRestfull.prototype.getTitle = function (item) {
	        if (!this.titleName) return null;
	        return item[this.titleName];
	    };
	    return ChoicesRestfull;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () {
	    return new ChoicesRestfull();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionRunner = exports.ConditionNode = exports.Condition = undefined;
	
	var _conditionsParser = __webpack_require__(10);
	
	var Condition = exports.Condition = function () {
	    function Condition() {
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Condition, "operators", {
	        get: function get() {
	            if (Condition.operatorsValue != null) return Condition.operatorsValue;
	            Condition.operatorsValue = {
	                empty: function empty(left, right) {
	                    return !left;
	                },
	                notempty: function notempty(left, right) {
	                    return !!left;
	                },
	                equal: function equal(left, right) {
	                    return left == right;
	                },
	                notequal: function notequal(left, right) {
	                    return left != right;
	                },
	                contains: function contains(left, right) {
	                    return left && left["indexOf"] && left.indexOf(right) > -1;
	                },
	                notcontains: function notcontains(left, right) {
	                    return !left || !left["indexOf"] || left.indexOf(right) == -1;
	                },
	                greater: function greater(left, right) {
	                    return left > right;
	                },
	                less: function less(left, right) {
	                    return left < right;
	                },
	                greaterorequal: function greaterorequal(left, right) {
	                    return left >= right;
	                },
	                lessorequal: function lessorequal(left, right) {
	                    return left <= right;
	                }
	            };
	            return Condition.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Condition.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Condition.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Condition.prototype.perform = function (left, right) {
	        if (left === void 0) {
	            left = null;
	        }
	        if (right === void 0) {
	            right = null;
	        }
	        if (!left) left = this.left;
	        if (!right) right = this.right;
	        return Condition.operators[this.operator](this.getPureValue(left), this.getPureValue(right));
	    };
	    Condition.prototype.getPureValue = function (val) {
	        if (!val || typeof val != "string") return val;
	        var str = "";
	        if (val.length > 0 && (val[0] == "'" || val[0] == '"')) val = val.substr(1);
	        var len = val.length;
	        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"')) val = val.substr(0, len - 1);
	        return val;
	    };
	    Condition.operatorsValue = null;
	    return Condition;
	}();
	var ConditionNode = exports.ConditionNode = function () {
	    function ConditionNode() {
	        this.connectiveValue = "and";
	        this.children = [];
	    }
	    Object.defineProperty(ConditionNode.prototype, "connective", {
	        get: function get() {
	            return this.connectiveValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (value == "&" || value == "&&") value = "and";
	            if (value == "|" || value == "||") value = "or";
	            if (value != "and" && value != "or") return;
	            this.connectiveValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
	        get: function get() {
	            return this.children.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionNode.prototype.clear = function () {
	        this.children = [];
	        this.connective = "and";
	    };
	    return ConditionNode;
	}();
	var ConditionRunner = exports.ConditionRunner = function () {
	    function ConditionRunner(expression) {
	        this.root = new ConditionNode();
	        this.expression = expression;
	    }
	    Object.defineProperty(ConditionRunner.prototype, "expression", {
	        get: function get() {
	            return this.expressionValue;
	        },
	        set: function set(value) {
	            if (this.expression == value) return;
	            this.expressionValue = value;
	            new _conditionsParser.ConditionsParser().parse(this.expressionValue, this.root);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionRunner.prototype.run = function (values) {
	        this.values = values;
	        return this.runNode(this.root);
	    };
	    ConditionRunner.prototype.runNode = function (node) {
	        var onFirstFail = node.connective == "and";
	        for (var i = 0; i < node.children.length; i++) {
	            var res = this.runNodeCondition(node.children[i]);
	            if (!res && onFirstFail) return false;
	            if (res && !onFirstFail) return true;
	        }
	        return onFirstFail;
	    };
	    ConditionRunner.prototype.runNodeCondition = function (value) {
	        if (!value) return false;
	        if (value["children"]) return this.runNode(value);
	        if (value["left"]) return this.runCondition(value);
	        return false;
	    };
	    ConditionRunner.prototype.runCondition = function (condition) {
	        var left = condition.left;
	        var name = this.getValueName(left);
	        if (name) {
	            if (!(name in this.values)) return false;
	            left = this.values[name];
	        }
	        var right = condition.right;
	        name = this.getValueName(right);
	        if (name) {
	            if (!(name in this.values)) return false;
	            right = this.values[name];
	        }
	        return condition.perform(left, right);
	    };
	    ConditionRunner.prototype.getValueName = function (nodeValue) {
	        if (!nodeValue) return null;
	        if (typeof nodeValue !== 'string') return null;
	        if (nodeValue.length < 3 || nodeValue[0] != '{' || nodeValue[nodeValue.length - 1] != '}') return null;
	        return nodeValue.substr(1, nodeValue.length - 2);
	    };
	    return ConditionRunner;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionsParser = undefined;
	
	var _conditions = __webpack_require__(9);
	
	var ConditionsParser = exports.ConditionsParser = function () {
	    function ConditionsParser() {}
	    ConditionsParser.prototype.parse = function (text, root) {
	        this.text = text;
	        this.root = root;
	        this.root.clear();
	        this.at = 0;
	        this.length = this.text.length;
	        var res = this.parseText();
	        return res;
	    };
	    ConditionsParser.prototype.toString = function (root) {
	        this.root = root;
	        return this.nodeToString(root);
	    };
	    ConditionsParser.prototype.toStringCore = function (value) {
	        if (!value) return "";
	        if (value["children"]) return this.nodeToString(value);
	        if (value["left"]) return this.conditionToString(value);
	        return "";
	    };
	    ConditionsParser.prototype.nodeToString = function (node) {
	        if (node.isEmpty) return "";
	        var res = "";
	        for (var i = 0; i < node.children.length; i++) {
	            var nodeText = this.toStringCore(node.children[i]);
	            if (nodeText) {
	                if (res) res += ' ' + node.connective + ' ';
	                res += nodeText;
	            }
	        }
	        if (node != this.root && node.children.length > 1) {
	            res = '(' + res + ')';
	        }
	        return res;
	    };
	    ConditionsParser.prototype.conditionToString = function (condition) {
	        if (!condition.right || !condition.operator) return "";
	        var left = condition.left;
	        if (left && !this.isNumeric(left)) left = "'" + left + "'";
	        var res = left + ' ' + this.operationToString(condition.operator);
	        if (this.isNoRightOperation(condition.operator)) return res;
	        var right = condition.right;
	        if (right && !this.isNumeric(right)) right = "'" + right + "'";
	        return res + ' ' + right;
	    };
	    ConditionsParser.prototype.operationToString = function (op) {
	        if (op == "equal") return "=";
	        if (op == "notequal") return "!=";
	        if (op == "greater") return ">";
	        if (op == "less") return "<";
	        if (op == "greaterorequal") return ">=";
	        if (op == "lessorequal") return "<=";
	        return op;
	    };
	    ConditionsParser.prototype.isNumeric = function (value) {
	        var val = parseFloat(value);
	        if (isNaN(val)) return false;
	        return isFinite(val);
	    };
	    ConditionsParser.prototype.parseText = function () {
	        this.node = this.root;
	        this.expressionNodes = [];
	        this.expressionNodes.push(this.node);
	        var res = this.readConditions();
	        return res && this.at >= this.length;
	    };
	    ConditionsParser.prototype.readConditions = function () {
	        var res = this.readCondition();
	        if (!res) return res;
	        var connective = this.readConnective();
	        if (connective) {
	            this.addConnective(connective);
	            return this.readConditions();
	        }
	        return true;
	    };
	    ConditionsParser.prototype.readCondition = function () {
	        if (!this.readExpression()) return false;
	        var left = this.readString();
	        if (!left) return false;
	        var op = this.readOperator();
	        if (!op) return false;
	        var c = new _conditions.Condition();
	        c.left = left;
	        c.operator = op;
	        if (!this.isNoRightOperation(op)) {
	            var right = this.readString();
	            if (!right) return false;
	            c.right = right;
	        }
	        this.addCondition(c);
	        return true;
	    };
	    ConditionsParser.prototype.readExpression = function () {
	        this.skip();
	        if (this.at >= this.length || this.ch != '(') return true;
	        this.at++;
	        this.pushExpression();
	        var res = this.readConditions();
	        if (res) {
	            this.skip();
	            res = this.ch == ')';
	            this.at++;
	            this.popExpression();
	        }
	        return res;
	    };
	    Object.defineProperty(ConditionsParser.prototype, "ch", {
	        get: function get() {
	            return this.text.charAt(this.at);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionsParser.prototype.skip = function () {
	        while (this.at < this.length && this.isSpace(this.ch)) {
	            this.at++;
	        }
	    };
	    ConditionsParser.prototype.isSpace = function (c) {
	        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
	    };
	    ConditionsParser.prototype.isQuotes = function (c) {
	        return c == "'" || c == '"';
	    };
	    ConditionsParser.prototype.isOperatorChar = function (c) {
	        return c == '>' || c == '<' || c == '=' || c == '!';
	    };
	    ConditionsParser.prototype.isBrackets = function (c) {
	        return c == '(' || c == ')';
	    };
	    ConditionsParser.prototype.readString = function () {
	        this.skip();
	        if (this.at >= this.length) return null;
	        var start = this.at;
	        var hasQuotes = this.isQuotes(this.ch);
	        if (hasQuotes) this.at++;
	        var isFirstOpCh = this.isOperatorChar(this.ch);
	        while (this.at < this.length) {
	            if (!hasQuotes && this.isSpace(this.ch)) break;
	            if (this.isQuotes(this.ch)) {
	                if (hasQuotes) this.at++;
	                break;
	            }
	            if (!hasQuotes) {
	                if (isFirstOpCh != this.isOperatorChar(this.ch)) break;
	                if (this.isBrackets(this.ch)) break;
	            }
	            this.at++;
	        }
	        if (this.at <= start) return null;
	        var res = this.text.substr(start, this.at - start);
	        if (res) {
	            if (res.length > 1 && this.isQuotes(res[0])) {
	                var len = res.length - 1;
	                if (this.isQuotes(res[res.length - 1])) len--;
	                res = res.substr(1, len);
	            }
	        }
	        return res;
	    };
	    ConditionsParser.prototype.isNoRightOperation = function (op) {
	        return op == "empty" || op == "notempty";
	    };
	    ConditionsParser.prototype.readOperator = function () {
	        var op = this.readString();
	        if (!op) return null;
	        op = op.toLowerCase();
	        if (op == '>') op = "greater";
	        if (op == '<') op = "less";
	        if (op == '>=' || op == '=>') op = "greaterorequal";
	        if (op == '<=' || op == '=<') op = "lessorequal";
	        if (op == '=' || op == '==') op = "equal";
	        if (op == '<>' || op == '!=') op = "notequal";
	        if (op == 'contain') op = "contains";
	        if (op == 'notcontain') op = "notcontains";
	        return op;
	    };
	    ConditionsParser.prototype.readConnective = function () {
	        var con = this.readString();
	        if (!con) return null;
	        con = con.toLowerCase();
	        if (con == "&" || con == "&&") con = "and";
	        if (con == "|" || con == "||") con = "or";
	        if (con != "and" && con != "or") con = null;
	        return con;
	    };
	    ConditionsParser.prototype.pushExpression = function () {
	        var node = new _conditions.ConditionNode();
	        this.expressionNodes.push(node);
	        this.node = node;
	    };
	    ConditionsParser.prototype.popExpression = function () {
	        var node = this.expressionNodes.pop();
	        this.node = this.expressionNodes[this.expressionNodes.length - 1];
	        this.node.children.push(node);
	    };
	    ConditionsParser.prototype.addCondition = function (c) {
	        this.node.children.push(c);
	    };
	    ConditionsParser.prototype.addConnective = function (con) {
	        if (this.node.children.length < 2) {
	            this.node.connective = con;
	        } else {
	            if (this.node.connective != con) {
	                var oldCon = this.node.connective;
	                var oldChildren = this.node.children;
	                this.node.clear();
	                this.node.connective = con;
	                var oldNode = new _conditions.ConditionNode();
	                oldNode.connective = oldCon;
	                oldNode.children = oldChildren;
	                this.node.children.push(oldNode);
	                var newNode = new _conditions.ConditionNode();
	                this.node.children.push(newNode);
	                this.node = newNode;
	            }
	        }
	    };
	    return ConditionsParser;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModelBase = exports.MatrixDropdownRowModelBase = exports.MatrixDropdownCell = exports.MatrixDropdownColumn = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownColumn = exports.MatrixDropdownColumn = function (_super) {
	    __extends(MatrixDropdownColumn, _super);
	    function MatrixDropdownColumn(name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.choicesValue = [];
	        this.isRequired = false;
	        this.hasOther = false;
	        this.minWidth = "";
	        this.cellType = "default";
	        this.colCountValue = -1;
	    }
	    MatrixDropdownColumn.prototype.getType = function () {
	        return "matrixdropdowncolumn";
	    };
	    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < -1 || value > 4) return;
	            this.colCountValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownColumn;
	}(_base.Base);
	var MatrixDropdownCell = exports.MatrixDropdownCell = function () {
	    function MatrixDropdownCell(column, row, data) {
	        this.column = column;
	        this.row = row;
	        this.questionValue = data.createQuestion(this.row, this.column);
	        this.questionValue.setData(row);
	    }
	    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
	        get: function get() {
	            return this.questionValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
	        get: function get() {
	            return this.question.value;
	        },
	        set: function set(value) {
	            this.question.value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownCell;
	}();
	var MatrixDropdownRowModelBase = exports.MatrixDropdownRowModelBase = function () {
	    function MatrixDropdownRowModelBase(data, value) {
	        this.rowValues = {};
	        this.rowComments = {};
	        this.isSettingValue = false;
	        this.cells = [];
	        this.data = data;
	        this.value = value;
	        this.buildCells();
	    }
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
	        get: function get() {
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
	        get: function get() {
	            return this.rowValues;
	        },
	        set: function set(value) {
	            this.isSettingValue = true;
	            this.rowValues = {};
	            if (value != null) {
	                for (var key in value) {
	                    this.rowValues[key] = value[key];
	                }
	            }
	            for (var i = 0; i < this.cells.length; i++) {
	                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
	            }
	            this.isSettingValue = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
	        return this.rowValues[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
	        if (this.isSettingValue) return;
	        if (newValue === "") newValue = null;
	        if (newValue != null) {
	            this.rowValues[name] = newValue;
	        } else {
	            delete this.rowValues[name];
	        }
	        this.data.onRowChanged(this, this.value);
	    };
	    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
	        return this.rowComments[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
	        this.rowComments[name] = newValue;
	    };
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
	        get: function get() {
	            var val = this.value;
	            if (!val) return true;
	            for (var key in val) {
	                return false;
	            }return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.buildCells = function () {
	        var columns = this.data.columns;
	        for (var i = 0; i < columns.length; i++) {
	            var column = columns[i];
	            this.cells.push(this.createCell(column));
	        }
	    };
	    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
	        return new MatrixDropdownCell(column, this, this.data);
	    };
	    return MatrixDropdownRowModelBase;
	}();
	var QuestionMatrixDropdownModelBase = exports.QuestionMatrixDropdownModelBase = function (_super) {
	    __extends(QuestionMatrixDropdownModelBase, _super);
	    function QuestionMatrixDropdownModelBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.choicesValue = [];
	        this.isRowChanging = false;
	        this.cellTypeValue = "dropdown";
	        this.columnColCountValue = 0;
	        this.columnMinWidth = "";
	        this.horizontalScroll = false;
	    }
	    QuestionMatrixDropdownModelBase.prototype.getType = function () {
	        return "matrixdropdownbase";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(value) {
	            this.columnsValue = value;
	            this.fireCallback(this.columnsChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
	        get: function get() {
	            return this.cellTypeValue;
	        },
	        set: function set(newValue) {
	            if (this.cellType == newValue) return;
	            this.cellTypeValue = newValue;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
	        get: function get() {
	            return this.columnColCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.columnColCountValue = value;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.getColumnTitle = function (column) {
	        var result = column.title;
	        if (column.isRequired && this.survey) {
	            var requireText = this.survey.requiredText;
	            if (requireText) requireText += " ";
	            result = requireText + result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
	        return column.minWidth ? column.minWidth : this.columnMinWidth;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var column = new MatrixDropdownColumn(name, title);
	        this.columnsValue.push(column);
	        return column;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
	        get: function get() {
	            this.generatedVisibleRows = this.generateRows();
	            return this.generatedVisibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.generateRows = function () {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createMatrixRow = function (name, text, value) {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) {
	        return !curValue ? {} : curValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
	        if (!result && create) {
	            result = {};
	            questionValue[row.rowName] = result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	            var row = this.generatedVisibleRows[i];
	            this.generatedVisibleRows[i].value = this.getRowValue(row, val);
	        }
	        this.isRowChanging = false;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        var errosInColumns = this.hasErrorInColumns(fireCallback);
	        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
	        if (!this.generatedVisibleRows) return false;
	        var res = false;
	        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var cells = this.generatedVisibleRows[i].cells;
	                res = cells && cells[colIndex] && cells[colIndex].question && cells[colIndex].question.hasErrors(fireCallback) || res;
	            }
	        }
	        return res;
	    };
	    //IMatrixDropdownData
	    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
	        var question = this.createQuestionCore(row, column);
	        question.name = column.name;
	        question.isRequired = column.isRequired;
	        question.hasOther = column.hasOther;
	        if (column.hasOther) {
	            if (question instanceof _question_baseselect.QuestionSelectBase) {
	                question.storeOthersAsComment = false;
	            }
	        }
	        return question;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
	        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
	        var name = this.getQuestionName(row, column);
	        if (cellType == "checkbox") return this.createCheckbox(name, column);
	        if (cellType == "radiogroup") return this.createRadiogroup(name, column);
	        if (cellType == "text") return this.createText(name, column);
	        if (cellType == "comment") return this.createComment(name, column);
	        return this.createDropdown(name, column);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getQuestionName = function (row, column) {
	        return row.rowName + "_" + column.name;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
	        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
	        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createDropdown = function (name, column) {
	        var q = this.createCellQuestion("dropdown", name);
	        q.choices = this.getColumnChoices(column);
	        q.optionsCaption = this.getColumnOptionsCaption(column);
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCheckbox = function (name, column) {
	        var q = this.createCellQuestion("checkbox", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createRadiogroup = function (name, column) {
	        var q = this.createCellQuestion("radiogroup", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createText = function (name, column) {
	        return this.createCellQuestion("text", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createComment = function (name, column) {
	        return this.createCellQuestion("comment", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
	        return _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
	        delete newValue[row.rowName];
	        return Object.keys(newValue).length == 0 ? null : newValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, newRowValue) {
	        var newValue = this.createNewValue(this.value);
	        var rowValue = this.getRowValue(row, newValue, true);
	        for (var key in rowValue) {
	            delete rowValue[key];
	        }if (newRowValue) {
	            newRowValue = JSON.parse(JSON.stringify(newRowValue));
	            for (var key in newRowValue) {
	                rowValue[key] = newRowValue[key];
	            }
	        }
	        if (Object.keys(rowValue).length == 0) {
	            newValue = this.deleteRowValue(newValue, row);
	        }
	        this.isRowChanging = true;
	        this.setNewValue(newValue);
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixDropdownModelBase;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, "optionsCaption", { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth"], function () {
	    return new MatrixDropdownColumn("");
	});
	_jsonobject.JsonObject.metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" }, "horizontalScroll:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }, { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () {
	    return new QuestionMatrixDropdownModelBase("");
	}, "question");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.Question = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionbase = __webpack_require__(13);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _validator = __webpack_require__(2);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var Question = exports.Question = function (_super) {
	    __extends(Question, _super);
	    function Question(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.titleValue = null;
	        this.isRequiredValue = false;
	        this.hasCommentValue = false;
	        this.hasOtherValue = false;
	        this.commentTextValue = "";
	        this.errors = [];
	        this.validators = new Array();
	        this.isValueChangedInSurvey = false;
	    }
	    Object.defineProperty(Question.prototype, "hasTitle", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newValue) {
	            this.titleValue = newValue;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "processedTitle", {
	        get: function get() {
	            return this.survey != null ? this.survey.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "fullTitle", {
	        get: function get() {
	            if (this.survey && this.survey.questionTitleTemplate) {
	                if (!this.textPreProcessor) {
	                    var self = this;
	                    this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	                    this.textPreProcessor.onHasValue = function (name) {
	                        return self.canProcessedTextValues(name.toLowerCase());
	                    };
	                    this.textPreProcessor.onProcess = function (name) {
	                        return self.getProcessedTextValue(name);
	                    };
	                }
	                return this.textPreProcessor.process(this.survey.questionTitleTemplate);
	            }
	            var requireText = this.requiredText;
	            if (requireText) requireText += " ";
	            var no = this.no;
	            if (no) no += ". ";
	            return no + requireText + this.processedTitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.canProcessedTextValues = function (name) {
	        return name == "no" || name == "title" || name == "require";
	    };
	    Question.prototype.getProcessedTextValue = function (name) {
	        if (name == "no") return this.no;
	        if (name == "title") return this.processedTitle;
	        if (name == "require") return this.requiredText;
	        return null;
	    };
	    Question.prototype.supportComment = function () {
	        return false;
	    };
	    Question.prototype.supportOther = function () {
	        return false;
	    };
	    Object.defineProperty(Question.prototype, "isRequired", {
	        get: function get() {
	            return this.isRequiredValue;
	        },
	        set: function set(val) {
	            if (this.isRequired == val) return;
	            this.isRequiredValue = val;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasComment", {
	        get: function get() {
	            return this.hasCommentValue;
	        },
	        set: function set(val) {
	            if (!this.supportComment()) return;
	            this.hasCommentValue = val;
	            if (this.hasComment) this.hasOther = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "commentText", {
	        get: function get() {
	            return this.commentTextValue ? this.commentTextValue : _surveyStrings.surveyLocalization.getString("otherItemText");
	        },
	        set: function set(value) {
	            this.commentTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasOther", {
	        get: function get() {
	            return this.hasOtherValue;
	        },
	        set: function set(val) {
	            if (!this.supportOther() || this.hasOther == val) return;
	            this.hasOtherValue = val;
	            if (this.hasOther) this.hasComment = false;
	            this.hasOtherChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.hasOtherChanged = function () {};
	    Object.defineProperty(Question.prototype, "no", {
	        get: function get() {
	            if (this.visibleIndex < 0) return "";
	            var startIndex = 1;
	            var isNumeric = true;
	            var str = "";
	            if (this.survey && this.survey.questionStartIndex) {
	                str = this.survey.questionStartIndex;
	                if (parseInt(str)) startIndex = parseInt(str);else if (str.length == 1) isNumeric = false;
	            }
	            if (isNumeric) return (this.visibleIndex + startIndex).toString();
	            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.onSetData = function () {
	        _super.prototype.onSetData.call(this);
	        this.onSurveyValueChanged(this.value);
	    };
	    Object.defineProperty(Question.prototype, "value", {
	        get: function get() {
	            return this.valueFromData(this.getValueCore());
	        },
	        set: function set(newValue) {
	            this.setNewValue(newValue);
	            this.fireCallback(this.valueChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "comment", {
	        get: function get() {
	            return this.getComment();
	        },
	        set: function set(newValue) {
	            if (this.comment == newValue) return;
	            this.setComment(newValue);
	            this.fireCallback(this.commentChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.getComment = function () {
	        return this.data != null ? this.data.getComment(this.name) : this.questionComment;
	    };
	    Question.prototype.setComment = function (newValue) {
	        this.setNewComment(newValue);
	    };
	    Question.prototype.isEmpty = function () {
	        return this.value == null;
	    };
	    Question.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        this.checkForErrors(fireCallback);
	        return this.errors.length > 0;
	    };
	    Object.defineProperty(Question.prototype, "requiredText", {
	        get: function get() {
	            return this.survey != null && this.isRequired ? this.survey.requiredText : "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.checkForErrors = function (fireCallback) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        this.onCheckForErrors(this.errors);
	        if (this.errors.length == 0 && this.value) {
	            var error = this.runValidators();
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (this.survey && this.errors.length == 0) {
	            var error = this.survey.validateQuestion(this.name);
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	    };
	    Question.prototype.onCheckForErrors = function (errors) {
	        if (this.hasRequiredError()) {
	            this.errors.push(new _error.AnswerRequiredError());
	        }
	    };
	    Question.prototype.hasRequiredError = function () {
	        return this.isRequired && this.isEmpty();
	    };
	    Question.prototype.runValidators = function () {
	        return new _validator.ValidatorRunner().run(this);
	    };
	    Question.prototype.setNewValue = function (newValue) {
	        this.setNewValueInData(newValue);
	        this.onValueChanged();
	    };
	    Question.prototype.setNewValueInData = function (newValue) {
	        if (!this.isValueChangedInSurvey) {
	            newValue = this.valueToData(newValue);
	            this.setValueCore(newValue);
	        }
	    };
	    Question.prototype.getValueCore = function () {
	        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
	    };
	    Question.prototype.setValueCore = function (newValue) {
	        if (this.data != null) {
	            this.data.setValue(this.name, newValue);
	        } else {
	            this.questionValue = newValue;
	        }
	    };
	    Question.prototype.valueFromData = function (val) {
	        return val;
	    };
	    Question.prototype.valueToData = function (val) {
	        return val;
	    };
	    Question.prototype.onValueChanged = function () {};
	    Question.prototype.setNewComment = function (newValue) {
	        if (this.data != null) {
	            this.data.setComment(this.name, newValue);
	        } else this.questionComment = newValue;
	    };
	    //IQuestion
	    Question.prototype.onSurveyValueChanged = function (newValue) {
	        this.isValueChangedInSurvey = true;
	        this.value = this.valueFromData(newValue);
	        this.fireCallback(this.commentChangedCallback);
	        this.isValueChangedInSurvey = false;
	    };
	    //IValidatorOwner
	    Question.prototype.getValidatorTitle = function () {
	        return null;
	    };
	    return Question;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("question", [{ name: "title:text", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "commentText", onGetValue: function onGetValue(obj) {
	        return obj.commentTextValue;
	    } }, "isRequired:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.QuestionBase = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _conditions = __webpack_require__(9);
	
	var QuestionBase = exports.QuestionBase = function (_super) {
	    __extends(QuestionBase, _super);
	    function QuestionBase(name) {
	        _super.call(this);
	        this.name = name;
	        this.conditionRunner = null;
	        this.visibleIf = "";
	        this.visibleValue = true;
	        this.startWithNewLine = true;
	        this.visibleIndexValue = -1;
	        this.width = "";
	        this.renderWidthValue = "";
	        this.rightIndentValue = 0;
	        this.indent = 0;
	        this.idValue = QuestionBase.getQuestionId();
	        this.onCreating();
	    }
	    QuestionBase.getQuestionId = function () {
	        return "sq_" + QuestionBase.questionCounter++;
	    };
	    Object.defineProperty(QuestionBase.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.fireCallback(this.visibilityChangedCallback);
	            this.fireCallback(this.rowVisibilityChangedCallback);
	            if (this.survey) {
	                this.survey.questionVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
	        get: function get() {
	            return this.visibleIndexValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        return false;
	    };
	    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasComment", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "id", {
	        get: function get() {
	            return this.idValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
	        get: function get() {
	            return this.renderWidthValue;
	        },
	        set: function set(val) {
	            if (val == this.renderWidth) return;
	            this.renderWidthValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
	        get: function get() {
	            return this.rightIndentValue;
	        },
	        set: function set(val) {
	            if (val == this.rightIndent) return;
	            this.rightIndentValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.focus = function () {
	        var el = document.getElementById(this.id);
	        if (!el || !el.scrollIntoView) return;
	        var elemTop = el.getBoundingClientRect().top;
	        if (elemTop < 0) {
	            el.scrollIntoView();
	            this.fireCallback(this.focusCallback);
	        }
	    };
	    QuestionBase.prototype.setData = function (newValue) {
	        this.data = newValue;
	        this.survey = newValue && newValue["questionAdded"] ? newValue : null;
	        this.onSetData();
	    };
	    QuestionBase.prototype.fireCallback = function (callback) {
	        if (callback) callback();
	    };
	    QuestionBase.prototype.onSetData = function () {};
	    QuestionBase.prototype.onCreating = function () {};
	    QuestionBase.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    //IQuestion
	    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {};
	    QuestionBase.prototype.onSurveyLoad = function () {};
	    QuestionBase.prototype.setVisibleIndex = function (value) {
	        if (this.visibleIndexValue == value) return;
	        this.visibleIndexValue = value;
	        this.fireCallback(this.visibleIndexChangedCallback);
	    };
	    QuestionBase.prototype.supportGoNextPageAutomatic = function () {
	        return false;
	    };
	    QuestionBase.questionCounter = 100;
	    return QuestionBase;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:text", { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var TextPreProcessorItem = exports.TextPreProcessorItem = function () {
	    function TextPreProcessorItem() {}
	    return TextPreProcessorItem;
	}();
	var TextPreProcessor = exports.TextPreProcessor = function () {
	    function TextPreProcessor() {}
	    TextPreProcessor.prototype.process = function (text) {
	        if (!text) return text;
	        if (!this.onProcess) return text;
	        var items = this.getItems(text);
	        for (var i = items.length - 1; i >= 0; i--) {
	            var item = items[i];
	            var name = this.getName(text.substring(item.start + 1, item.end));
	            if (!this.canProcessName(name)) continue;
	            if (this.onHasValue && !this.onHasValue(name)) continue;
	            var value = this.onProcess(name);
	            if (value == null) value = "";
	            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
	        }
	        return text;
	    };
	    TextPreProcessor.prototype.getItems = function (text) {
	        var items = [];
	        var length = text.length;
	        var start = -1;
	        var ch = '';
	        for (var i = 0; i < length; i++) {
	            ch = text[i];
	            if (ch == '{') start = i;
	            if (ch == '}') {
	                if (start > -1) {
	                    var item = new TextPreProcessorItem();
	                    item.start = start;
	                    item.end = i;
	                    items.push(item);
	                }
	                start = -1;
	            }
	        }
	        return items;
	    };
	    TextPreProcessor.prototype.getName = function (name) {
	        if (!name) return;
	        return name.trim();
	    };
	    TextPreProcessor.prototype.canProcessName = function (name) {
	        if (!name) return false;
	        for (var i = 0; i < name.length; i++) {
	            var ch = name[i];
	            //TODO
	            if (ch == ' ' || ch == '-' || ch == '&') return false;
	        }
	        return true;
	    };
	    return TextPreProcessor;
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBase = exports.QuestionSelectBase = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _choicesRestfull = __webpack_require__(8);
	
	var QuestionSelectBase = exports.QuestionSelectBase = function (_super) {
	    __extends(QuestionSelectBase, _super);
	    function QuestionSelectBase(name) {
	        _super.call(this, name);
	        this.otherItem = new _base.ItemValue("other", _surveyStrings.surveyLocalization.getString("otherItemText"));
	        this.choicesFromUrl = null;
	        this.choicesValues = new Array();
	        this.otherErrorText = null;
	        this.storeOthersAsComment = true;
	        this.choicesOrderValue = "none";
	        this.isSettingComment = false;
	        this.choicesByUrl = this.createRestfull();
	        var self = this;
	        this.choicesByUrl.getResultCallback = function (items) {
	            self.onLoadChoicesFromUrl(items);
	        };
	    }
	    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
	        get: function get() {
	            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.getHasOther = function (val) {
	        return val == this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.createRestfull = function () {
	        return new _choicesRestfull.ChoicesRestfull();
	    };
	    QuestionSelectBase.prototype.getComment = function () {
	        if (this.getStoreOthersAsComment()) return _super.prototype.getComment.call(this);
	        return this.commentValue;
	    };
	    QuestionSelectBase.prototype.setComment = function (newValue) {
	        if (this.getStoreOthersAsComment()) _super.prototype.setComment.call(this, newValue);else {
	            if (!this.isSettingComment && newValue != this.commentValue) {
	                this.isSettingComment = true;
	                this.commentValue = newValue;
	                if (this.isOtherSelected) {
	                    this.setNewValueInData(this.cachedValue);
	                }
	                this.isSettingComment = false;
	            }
	        }
	    };
	    QuestionSelectBase.prototype.valueFromData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueFromData.call(this, val);
	        this.cachedValue = this.valueFromDataCore(val);
	        return this.cachedValue;
	    };
	    QuestionSelectBase.prototype.valueToData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueToData.call(this, val);
	        this.cachedValue = val;
	        return this.valueToDataCore(val);
	    };
	    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
	        if (!this.hasUnknownValue(val)) return val;
	        if (val == this.otherItem.value) return val;
	        this.comment = val;
	        return this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.valueToDataCore = function (val) {
	        if (val == this.otherItem.value && this.getComment()) {
	            val = this.getComment();
	        }
	        return val;
	    };
	    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
	        if (!val) return false;
	        var items = this.activeChoices;
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].value == val) return false;
	        }
	        return true;
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValues;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValues, newValue);
	            this.fireCallback(this.choicesChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.hasOtherChanged = function () {
	        this.fireCallback(this.choicesChangedCallback);
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
	        get: function get() {
	            return this.choicesOrderValue;
	        },
	        set: function set(newValue) {
	            if (newValue == this.choicesOrderValue) return;
	            this.choicesOrderValue = newValue;
	            this.fireCallback(this.choicesChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
	        get: function get() {
	            return this.otherItem.text;
	        },
	        set: function set(value) {
	            this.otherItem.text = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
	        get: function get() {
	            if (!this.hasOther && this.choicesOrder == "none") return this.activeChoices;
	            var result = this.sortVisibleChoices(this.activeChoices.slice());
	            if (this.hasOther) {
	                result.push(this.otherItem);
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
	        get: function get() {
	            return this.choicesFromUrl ? this.choicesFromUrl : this.choices;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (!this.isOtherSelected || this.comment) return;
	        var text = this.otherErrorText;
	        if (!text) {
	            text = _surveyStrings.surveyLocalization.getString("otherRequiredError");
	        }
	        errors.push(new _error.CustomError(text));
	    };
	    QuestionSelectBase.prototype.getStoreOthersAsComment = function () {
	        return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true);
	    };
	    QuestionSelectBase.prototype.onSurveyLoad = function () {
	        if (this.choicesByUrl) this.choicesByUrl.run();
	    };
	    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
	        var errorCount = this.errors.length;
	        this.errors = [];
	        if (this.choicesByUrl && this.choicesByUrl.error) {
	            this.errors.push(this.choicesByUrl.error);
	        }
	        if (errorCount > 0 || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        var newChoices = null;
	        if (array && array.length > 0) {
	            newChoices = new Array();
	            _base.ItemValue.setData(newChoices, array);
	        }
	        this.choicesFromUrl = newChoices;
	        this.fireCallback(this.choicesChangedCallback);
	    };
	    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
	        var order = this.choicesOrder.toLowerCase();
	        if (order == "asc") return this.sortArray(array, 1);
	        if (order == "desc") return this.sortArray(array, -1);
	        if (order == "random") return this.randomizeArray(array);
	        return array;
	    };
	    QuestionSelectBase.prototype.sortArray = function (array, mult) {
	        return array.sort(function (a, b) {
	            if (a.text < b.text) return -1 * mult;
	            if (a.text > b.text) return 1 * mult;
	            return 0;
	        });
	    };
	    QuestionSelectBase.prototype.randomizeArray = function (array) {
	        for (var i = array.length - 1; i > 0; i--) {
	            var j = Math.floor(Math.random() * (i + 1));
	            var temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	        return array;
	    };
	    return QuestionSelectBase;
	}(_question.Question);
	var QuestionCheckboxBase = exports.QuestionCheckboxBase = function (_super) {
	    __extends(QuestionCheckboxBase, _super);
	    function QuestionCheckboxBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	    }
	    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionCheckboxBase;
	}(QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] }, { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function onGetValue(obj) {
	        return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl;
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choicesByUrl.setData(value);
	    } }, { name: "otherText", default: _surveyStrings.surveyLocalization.getString("otherItemText") }, "otherErrorText", { name: "storeOthersAsComment:boolean", default: true }], null, "question");
	_jsonobject.JsonObject.metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var QuestionFactory = exports.QuestionFactory = function () {
	    function QuestionFactory() {
	        this.creatorHash = {};
	    }
	    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
	        this.creatorHash[questionType] = questionCreator;
	    };
	    QuestionFactory.prototype.getAllTypes = function () {
	        var result = new Array();
	        for (var key in this.creatorHash) {
	            result.push(key);
	        }
	        return result.sort();
	    };
	    QuestionFactory.prototype.createQuestion = function (questionType, name) {
	        var creator = this.creatorHash[questionType];
	        if (creator == null) return null;
	        return creator(name);
	    };
	    QuestionFactory.Instance = new QuestionFactory();
	    QuestionFactory.DefaultChoices = ["one", "two|second value", "three|third value"];
	    return QuestionFactory;
	}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModel = exports.MatrixDropdownRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownRowModel = exports.MatrixDropdownRowModel = function (_super) {
	    __extends(MatrixDropdownRowModel, _super);
	    function MatrixDropdownRowModel(name, text, data, value) {
	        _super.call(this, data, value);
	        this.name = name;
	        this.text = text;
	    }
	    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
	        get: function get() {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDropdownModel = exports.QuestionMatrixDropdownModel = function (_super) {
	    __extends(QuestionMatrixDropdownModel, _super);
	    function QuestionMatrixDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowsValue = [];
	    }
	    QuestionMatrixDropdownModel.prototype.getType = function () {
	        return "matrixdropdown";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (!this.rows || this.rows.length === 0) return result;
	        var val = this.value;
	        if (!val) val = {};
	        for (var i = 0; i < this.rows.length; i++) {
	            if (!this.rows[i].value) continue;
	            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (name, text, value) {
	        return new MatrixDropdownRowModel(name, text, this, value);
	    };
	    return QuestionMatrixDropdownModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }], function () {
	    return new QuestionMatrixDropdownModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdropdown", function (name) {
	    var q = new QuestionMatrixDropdownModel(name);q.choices = [1, 2, 3, 4, 5];q.rows = ["Row 1", "Row 2"];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamicModel = exports.MatrixDynamicRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var MatrixDynamicRowModel = exports.MatrixDynamicRowModel = function (_super) {
	    __extends(MatrixDynamicRowModel, _super);
	    function MatrixDynamicRowModel(index, data, value) {
	        _super.call(this, data, value);
	        this.index = index;
	    }
	    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
	        get: function get() {
	            return "row" + this.index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDynamicRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDynamicModel = exports.QuestionMatrixDynamicModel = function (_super) {
	    __extends(QuestionMatrixDynamicModel, _super);
	    function QuestionMatrixDynamicModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowCounter = 0;
	        this.rowCountValue = 2;
	        this.addRowTextValue = null;
	        this.removeRowTextValue = null;
	        this.minRowCount = 0;
	    }
	    QuestionMatrixDynamicModel.prototype.getType = function () {
	        return "matrixdynamic";
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
	        get: function get() {
	            return this.rowCountValue;
	        },
	        set: function set(val) {
	            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount) return;
	            this.rowCountValue = val;
	            if (this.value && this.value.length > val) {
	                var qVal = this.value;
	                qVal.splice(val);
	                this.value = qVal;
	            }
	            this.fireCallback(this.rowCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.addRow = function () {
	        if (this.generatedVisibleRows) {
	            this.generatedVisibleRows.push(this.createMatrixRow(null));
	        }
	        this.rowCount++;
	    };
	    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
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
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
	        get: function get() {
	            return this.addRowTextValue ? this.addRowTextValue : _surveyStrings.surveyLocalization.getString("addRow");
	        },
	        set: function set(value) {
	            this.addRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
	        get: function get() {
	            return this.removeRowTextValue ? this.removeRowTextValue : _surveyStrings.surveyLocalization.getString("removeRow");
	        },
	        set: function set(value) {
	            this.removeRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "cachedVisibleRows", {
	        get: function get() {
	            if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount) return this.generatedVisibleRows;
	            return this.visibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("minRowCountError")["format"](this.minRowCount)));
	        }
	    };
	    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
	        if (this.minRowCount <= 0 || !this.generatedVisibleRows) return false;
	        var res = false;
	        var setRowCount = 0;
	        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
	            var row = this.generatedVisibleRows[rowIndex];
	            if (!row.isEmpty) setRowCount++;
	        }
	        return setRowCount < this.minRowCount;
	    };
	    QuestionMatrixDynamicModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (this.rowCount === 0) return result;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.rowCount; i++) {
	            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
	        return new MatrixDynamicRowModel(this.rowCounter++, this, value);
	    };
	    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
	        var result = curValue;
	        if (!result) result = [];
	        var r = [];
	        if (result.length > this.rowCount) result.splice(this.rowCount - 1);
	        for (var i = result.length; i < this.rowCount; i++) {
	            result.push({});
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
	        var isEmpty = true;
	        for (var i = 0; i < newValue.length; i++) {
	            if (Object.keys(newValue[i]).length > 0) {
	                isEmpty = false;
	                break;
	            }
	        }
	        return isEmpty ? null : newValue;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
	        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
	    };
	    QuestionMatrixDynamicModel.MaxRowCount = 100;
	    return QuestionMatrixDynamicModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 }, { name: "addRowText", onGetValue: function onGetValue(obj) {
	        return obj.addRowTextValue;
	    } }, { name: "removeRowText", onGetValue: function onGetValue(obj) {
	        return obj.removeRowTextValue;
	    } }], function () {
	    return new QuestionMatrixDynamicModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdynamic", function (name) {
	    var q = new QuestionMatrixDynamicModel(name);q.choices = [1, 2, 3, 4, 5];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixModel = exports.MatrixRowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixRowModel = exports.MatrixRowModel = function (_super) {
	    __extends(MatrixRowModel, _super);
	    function MatrixRowModel(name, text, fullName, data, value) {
	        _super.call(this);
	        this.name = name;
	        this.text = text;
	        this.fullName = fullName;
	        this.data = data;
	        this.rowValue = value;
	    }
	    Object.defineProperty(MatrixRowModel.prototype, "value", {
	        get: function get() {
	            return this.rowValue;
	        },
	        set: function set(newValue) {
	            this.rowValue = newValue;
	            if (this.data) this.data.onMatrixRowChanged(this);
	            this.onValueChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixRowModel.prototype.onValueChanged = function () {};
	    return MatrixRowModel;
	}(_base.Base);
	var QuestionMatrixModel = exports.QuestionMatrixModel = function (_super) {
	    __extends(QuestionMatrixModel, _super);
	    function QuestionMatrixModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.rowsValue = [];
	        this.isRowChanging = false;
	        this.isAllRowRequired = true;
	    }
	    QuestionMatrixModel.prototype.getType = function () {
	        return "matrix";
	    };
	    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
	        get: function get() {
	            return this.rowsValue.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.columnsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
	        get: function get() {
	            var result = new Array();
	            var val = this.value;
	            if (!val) val = {};
	            for (var i = 0; i < this.rows.length; i++) {
	                if (!this.rows[i].value) continue;
	                result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
	            }
	            if (result.length == 0) {
	                result.push(this.createMatrixRow(null, "", this.name, val));
	            }
	            this.generatedVisibleRows = result;
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("requiredInAllRowsError")));
	        }
	    };
	    QuestionMatrixModel.prototype.hasErrorInRows = function () {
	        if (!this.isAllRowRequired) return false;
	        var rows = this.generatedVisibleRows;
	        if (!rows) rows = this.visibleRows;
	        if (!rows) return false;
	        for (var i = 0; i < rows.length; i++) {
	            var val = rows[i].value;
	            if (!val) return true;
	        }
	        return false;
	    };
	    QuestionMatrixModel.prototype.createMatrixRow = function (name, text, fullName, value) {
	        return new MatrixRowModel(name, text, fullName, this, value);
	    };
	    QuestionMatrixModel.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.value;
	        if (!val) val = {};
	        if (this.rows.length == 0) {
	            this.generatedVisibleRows[0].value = val;
	        } else {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var row = this.generatedVisibleRows[i];
	                var rowVal = val[row.name] ? val[row.name] : null;
	                this.generatedVisibleRows[i].value = rowVal;
	            }
	        }
	        this.isRowChanging = false;
	    };
	    //IMatrixData
	    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
	        if (this.isRowChanging) return;
	        this.isRowChanging = true;
	        if (!this.hasRows) {
	            this.setNewValue(row.value);
	        } else {
	            var newValue = this.value;
	            if (!newValue) {
	                newValue = {};
	            }
	            newValue[row.name] = row.value;
	            this.setNewValue(newValue);
	        }
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.columns);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.columns = value;
	    } }, { name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }], function () {
	    return new QuestionMatrixModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrix", function (name) {
	    var q = new QuestionMatrixModel(name);q.rows = ["Row 1", "Row 2"];q.columns = ["Column 1", "Column 2", "Column 3"];return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleTextModel = exports.MultipleTextItemModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _validator = __webpack_require__(2);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var MultipleTextItemModel = exports.MultipleTextItemModel = function (_super) {
	    __extends(MultipleTextItemModel, _super);
	    function MultipleTextItemModel(name, title) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.validators = new Array();
	        this.title = title;
	    }
	    MultipleTextItemModel.prototype.getType = function () {
	        return "multipletextitem";
	    };
	    MultipleTextItemModel.prototype.setData = function (data) {
	        this.data = data;
	    };
	    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newText) {
	            this.titleValue = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
	        get: function get() {
	            return this.data ? this.data.getMultipleTextValue(this.name) : null;
	        },
	        set: function set(value) {
	            if (this.data != null) {
	                this.data.setMultipleTextValue(this.name, value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {};
	    //IValidatorOwner
	    MultipleTextItemModel.prototype.getValidatorTitle = function () {
	        return this.title;
	    };
	    return MultipleTextItemModel;
	}(_base.Base);
	var QuestionMultipleTextModel = exports.QuestionMultipleTextModel = function (_super) {
	    __extends(QuestionMultipleTextModel, _super);
	    function QuestionMultipleTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	        this.itemSize = 25;
	        this.itemsValues = new Array();
	        this.isMultipleItemValueChanging = false;
	        var self = this;
	        this.items.push = function (value) {
	            value.setData(self);
	            var result = Array.prototype.push.call(this, value);
	            self.fireCallback(self.colCountChangedCallback);
	            return result;
	        };
	    }
	    QuestionMultipleTextModel.prototype.getType = function () {
	        return "multipletext";
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
	        get: function get() {
	            return this.itemsValues;
	        },
	        set: function set(value) {
	            this.itemsValues = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.AddItem = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var item = this.createTextItem(name, title);
	        this.items.push(item);
	        return item;
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 1 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.getRows = function () {
	        var colCount = this.colCount;
	        var items = this.items;
	        var rows = [];
	        var index = 0;
	        for (var i = 0; i < items.length; i++) {
	            if (index == 0) {
	                rows.push([]);
	            }
	            rows[rows.length - 1].push(items[i]);
	            index++;
	            if (index >= colCount) {
	                index = 0;
	            }
	        }
	        return rows;
	    };
	    QuestionMultipleTextModel.prototype.onValueChanged = function () {
	        _super.prototype.onValueChanged.call(this);
	        this.onItemValueChanged();
	    };
	    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
	        return new MultipleTextItemModel(name, title);
	    };
	    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
	        if (this.isMultipleItemValueChanging) return;
	        for (var i = 0; i < this.items.length; i++) {
	            var itemValue = null;
	            if (this.value && this.items[i].name in this.value) {
	                itemValue = this.value[this.items[i].name];
	            }
	            this.items[i].onValueChanged(itemValue);
	        }
	    };
	    QuestionMultipleTextModel.prototype.runValidators = function () {
	        var error = _super.prototype.runValidators.call(this);
	        if (error != null) return error;
	        for (var i = 0; i < this.items.length; i++) {
	            error = new _validator.ValidatorRunner().run(this.items[i]);
	            if (error != null) return error;
	        }
	        return null;
	    };
	    //IMultipleTextData
	    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
	        if (!this.value) return null;
	        return this.value[name];
	    };
	    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
	        this.isMultipleItemValueChanging = true;
	        var newValue = this.value;
	        if (!newValue) {
	            newValue = {};
	        }
	        newValue[name] = value;
	        this.setNewValue(newValue);
	        this.isMultipleItemValueChanging = false;
	    };
	    return QuestionMultipleTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("multipletextitem", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () {
	    return new MultipleTextItemModel("");
	});
	_jsonobject.JsonObject.metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" }, { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () {
	    return new QuestionMultipleTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("multipletext", function (name) {
	    var q = new QuestionMultipleTextModel(name);q.AddItem("text1");q.AddItem("text2");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.PageModel = exports.QuestionRowModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _conditions = __webpack_require__(9);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRowModel = exports.QuestionRowModel = function () {
	    function QuestionRowModel(page, question) {
	        this.page = page;
	        this.question = question;
	        this.visibleValue = false;
	        this.questions = [];
	        var self = this;
	        this.question.rowVisibilityChangedCallback = function () {
	            self.onRowVisibilityChanged();
	        };
	    }
	    Object.defineProperty(QuestionRowModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.onVisibleChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRowModel.prototype.updateVisible = function () {
	        this.visible = this.calcVisible();
	        this.setWidth();
	    };
	    QuestionRowModel.prototype.addQuestion = function (q) {
	        this.questions.push(q);
	        this.updateVisible();
	    };
	    QuestionRowModel.prototype.onVisibleChanged = function () {
	        if (this.visibilityChangedCallback) this.visibilityChangedCallback();
	    };
	    QuestionRowModel.prototype.setWidth = function () {
	        var visCount = this.getVisibleCount();
	        if (visCount == 0) return;
	        var counter = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) {
	                this.questions[i].renderWidth = this.question.width ? this.question.width : Math.floor(100 / visCount) + '%';
	                this.questions[i].rightIndent = counter < visCount - 1 ? 1 : 0;
	                counter++;
	            }
	        }
	    };
	    QuestionRowModel.prototype.onRowVisibilityChanged = function () {
	        this.page.onRowVisibilityChanged(this);
	    };
	    QuestionRowModel.prototype.getVisibleCount = function () {
	        var res = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) res++;
	        }
	        return res;
	    };
	    QuestionRowModel.prototype.isQuestionVisible = function (q) {
	        return this.page.isQuestionVisible(q);
	    };
	    QuestionRowModel.prototype.calcVisible = function () {
	        return this.getVisibleCount() > 0;
	    };
	    return QuestionRowModel;
	}();
	var PageModel = exports.PageModel = function (_super) {
	    __extends(PageModel, _super);
	    function PageModel(name) {
	        if (name === void 0) {
	            name = "";
	        }
	        _super.call(this);
	        this.name = name;
	        this.rowValues = null;
	        this.conditionRunner = null;
	        this.questions = new Array();
	        this.data = null;
	        this.visibleIf = "";
	        this.title = "";
	        this.visibleIndex = -1;
	        this.numValue = -1;
	        this.visibleValue = true;
	        var self = this;
	        this.questions.push = function (value) {
	            if (self.data != null) {
	                value.setData(self.data);
	            }
	            return Array.prototype.push.call(this, value);
	        };
	    }
	    Object.defineProperty(PageModel.prototype, "rows", {
	        get: function get() {
	            this.rowValues = this.buildRows();
	            return this.rowValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "isActive", {
	        get: function get() {
	            return !this.data || this.data.currentPage == this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.isQuestionVisible = function (question) {
	        return question.visible || this.isDesignMode;
	    };
	    PageModel.prototype.createRow = function (question) {
	        return new QuestionRowModel(this, question);
	    };
	    Object.defineProperty(PageModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.data && this.data.isDesignMode;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.buildRows = function () {
	        var result = new Array();
	        var lastRowVisibleIndex = -1;
	        var self = this;
	        for (var i = 0; i < this.questions.length; i++) {
	            var q = this.questions[i];
	            result.push(this.createRow(q));
	            if (q.startWithNewLine) {
	                lastRowVisibleIndex = i;
	                result[i].addQuestion(q);
	            } else {
	                if (lastRowVisibleIndex < 0) lastRowVisibleIndex = i;
	                result[lastRowVisibleIndex].addQuestion(q);
	            }
	        }
	        for (var i = 0; i < result.length; i++) {
	            result[i].setWidth();
	        }
	        return result;
	    };
	    PageModel.prototype.onRowVisibilityChanged = function (row) {
	        if (!this.isActive || !this.rowValues) return;
	        var index = this.rowValues.indexOf(row);
	        for (var i = index; i >= 0; i--) {
	            if (this.rowValues[i].questions.indexOf(row.question) > -1) {
	                this.rowValues[i].updateVisible();
	                break;
	            }
	        }
	    };
	    Object.defineProperty(PageModel.prototype, "processedTitle", {
	        get: function get() {
	            return this.data != null ? this.data.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "num", {
	        get: function get() {
	            return this.numValue;
	        },
	        set: function set(value) {
	            if (this.numValue == value) return;
	            this.numValue = value;
	            this.onNumChanged(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(value) {
	            if (value === this.visible) return;
	            this.visibleValue = value;
	            if (this.data != null) {
	                this.data.pageVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.getType = function () {
	        return "page";
	    };
	    Object.defineProperty(PageModel.prototype, "isVisible", {
	        get: function get() {
	            if (!this.visible) return false;
	            for (var i = 0; i < this.questions.length; i++) {
	                if (this.questions[i].visible) return true;
	            }
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.addQuestion = function (question, index) {
	        if (index === void 0) {
	            index = -1;
	        }
	        if (question == null) return;
	        if (index < 0 || index >= this.questions.length) {
	            this.questions.push(question);
	        } else {
	            this.questions.splice(index, 0, question);
	        }
	        if (this.data != null) {
	            question.setData(this.data);
	            this.data.questionAdded(question, index);
	        }
	    };
	    PageModel.prototype.addNewQuestion = function (questionType, name) {
	        var question = _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	        this.addQuestion(question);
	        return question;
	    };
	    PageModel.prototype.removeQuestion = function (question) {
	        var index = this.questions.indexOf(question);
	        if (index < 0) return;
	        this.questions.splice(index, 1);
	        if (this.data != null) this.data.questionRemoved(question);
	    };
	    PageModel.prototype.scrollToFirstQuestion = function () {
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i].visible) {
	                this.questions[i].focus();
	                break;
	            }
	        }
	    };
	    PageModel.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        if (focuseOnFirstError === void 0) {
	            focuseOnFirstError = false;
	        }
	        var result = false;
	        var firstErrorQuestion = null;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i].visible && this.questions[i].hasErrors(fireCallback)) {
	                if (focuseOnFirstError && firstErrorQuestion == null) {
	                    firstErrorQuestion = this.questions[i];
	                }
	                result = true;
	            }
	        }
	        if (firstErrorQuestion) firstErrorQuestion.focus();
	        return result;
	    };
	    PageModel.prototype.addQuestionsToList = function (list, visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        if (visibleOnly && !this.visible) return;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (visibleOnly && !this.questions[i].visible) continue;
	            list.push(this.questions[i]);
	        }
	    };
	    PageModel.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    PageModel.prototype.onNumChanged = function (value) {};
	    return PageModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("page", ["name", { name: "questions", baseClassName: "question" }, { name: "visible:boolean", default: true }, "visibleIf", "title"], function () {
	    return new PageModel();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionCheckboxModel = exports.QuestionCheckboxModel = function (_super) {
	    __extends(QuestionCheckboxModel, _super);
	    function QuestionCheckboxModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionCheckboxModel.prototype.getHasOther = function (val) {
	        if (!val) return false;
	        return val.indexOf(this.otherItem.value) >= 0;
	    };
	    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) return val;
	            if (this.hasUnknownValue(val[i])) {
	                this.comment = val[i];
	                var newVal = val.slice();
	                newVal[i] = this.otherItem.value;
	                return newVal;
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) {
	                if (this.getComment()) {
	                    var newVal = val.slice();
	                    newVal[i] = this.getComment();
	                    return newVal;
	                }
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.getType = function () {
	        return "checkbox";
	    };
	    return QuestionCheckboxModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("checkbox", [], function () {
	    return new QuestionCheckboxModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("checkbox", function (name) {
	    var q = new QuestionCheckboxModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCommentModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionCommentModel = exports.QuestionCommentModel = function (_super) {
	    __extends(QuestionCommentModel, _super);
	    function QuestionCommentModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rows = 4;
	        this.cols = 50;
	    }
	    QuestionCommentModel.prototype.getType = function () {
	        return "comment";
	    };
	    QuestionCommentModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    return QuestionCommentModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 }], function () {
	    return new QuestionCommentModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("comment", function (name) {
	    return new QuestionCommentModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdownModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionDropdownModel = exports.QuestionDropdownModel = function (_super) {
	    __extends(QuestionDropdownModel, _super);
	    function QuestionDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionDropdownModel.prototype.getType = function () {
	        return "dropdown";
	    };
	    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionDropdownModel;
	}(_question_baseselect.QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("dropdown", [{ name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }], function () {
	    return new QuestionDropdownModel("");
	}, "selectbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("dropdown", function (name) {
	    var q = new QuestionDropdownModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFileModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionFileModel = exports.QuestionFileModel = function (_super) {
	    __extends(QuestionFileModel, _super);
	    function QuestionFileModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.showPreviewValue = false;
	        this.isUploading = false;
	    }
	    QuestionFileModel.prototype.getType = function () {
	        return "file";
	    };
	    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
	        get: function get() {
	            return this.showPreviewValue;
	        },
	        set: function set(value) {
	            this.showPreviewValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionFileModel.prototype.loadFile = function (file) {
	        var self = this;
	        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) {
	            self.isUploading = status == "uploading";
	        })) return;
	        this.setFileValue(file);
	    };
	    QuestionFileModel.prototype.setFileValue = function (file) {
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
	        };
	        fileReader.readAsDataURL(file);
	    };
	    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.isUploading) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("uploadingFile")));
	        }
	    };
	    QuestionFileModel.prototype.checkFileForErrors = function (file) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        if (this.maxSize > 0 && file.size > this.maxSize) {
	            this.errors.push(new _error.ExceedSizeError(this.maxSize));
	        }
	        if (errorLength != this.errors.length || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        return this.errors.length > 0;
	    };
	    QuestionFileModel.prototype.isFileImage = function (file) {
	        if (!file || !file.type) return;
	        var str = file.type.toLowerCase();
	        return str.indexOf("image") == 0;
	    };
	    return QuestionFileModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () {
	    return new QuestionFileModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("file", function (name) {
	    return new QuestionFileModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtmlModel = undefined;
	
	var _questionbase = __webpack_require__(13);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionHtmlModel = exports.QuestionHtmlModel = function (_super) {
	    __extends(QuestionHtmlModel, _super);
	    function QuestionHtmlModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionHtmlModel.prototype.getType = function () {
	        return "html";
	    };
	    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
	        get: function get() {
	            return this.htmlValue;
	        },
	        set: function set(value) {
	            this.htmlValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
	        get: function get() {
	            return this.survey ? this.survey.processHtml(this.html) : this.html;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionHtmlModel;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("html", ["html:html"], function () {
	    return new QuestionHtmlModel("");
	}, "questionbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("html", function (name) {
	    return new QuestionHtmlModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroupModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionRadiogroupModel = exports.QuestionRadiogroupModel = function (_super) {
	    __extends(QuestionRadiogroupModel, _super);
	    function QuestionRadiogroupModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionRadiogroupModel.prototype.getType = function () {
	        return "radiogroup";
	    };
	    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionRadiogroupModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("radiogroup", [], function () {
	    return new QuestionRadiogroupModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("radiogroup", function (name) {
	    var q = new QuestionRadiogroupModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRatingModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRatingModel = exports.QuestionRatingModel = function (_super) {
	    __extends(QuestionRatingModel, _super);
	    function QuestionRatingModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rates = [];
	        this.mininumRateDescription = null;
	        this.maximumRateDescription = null;
	    }
	    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
	        get: function get() {
	            return this.rates;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rates, newValue);
	            this.fireCallback(this.rateValuesChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
	        get: function get() {
	            if (this.rateValues.length > 0) return this.rateValues;
	            return QuestionRatingModel.defaultRateValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRatingModel.prototype.getType = function () {
	        return "rating";
	    };
	    QuestionRatingModel.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    QuestionRatingModel.defaultRateValues = [];
	    return QuestionRatingModel;
	}(_question.Question);
	_base.ItemValue.setData(QuestionRatingModel.defaultRateValues, [1, 2, 3, 4, 5]);
	_jsonobject.JsonObject.metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rateValues);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rateValues = value;
	    } }, "mininumRateDescription", "maximumRateDescription"], function () {
	    return new QuestionRatingModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("rating", function (name) {
	    return new QuestionRatingModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionTextModel = undefined;
	
	var _questionfactory = __webpack_require__(16);
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var QuestionTextModel = exports.QuestionTextModel = function (_super) {
	    __extends(QuestionTextModel, _super);
	    function QuestionTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.size = 25;
	    }
	    QuestionTextModel.prototype.getType = function () {
	        return "text";
	    };
	    QuestionTextModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("text", [{ name: "size:number", default: 25 }], function () {
	    return new QuestionTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("text", function (name) {
	    return new QuestionTextModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyModel = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _page = __webpack_require__(21);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var _dxSurveyService = __webpack_require__(31);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var SurveyModel = exports.SurveyModel = function (_super) {
	    __extends(SurveyModel, _super);
	    function SurveyModel(jsonObj) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        _super.call(this);
	        this.surveyId = null;
	        this.surveyPostId = null;
	        this.clientId = null;
	        this.cookieName = null;
	        this.sendResultOnPageNext = false;
	        this.commentPrefix = "-Comment";
	        this.title = "";
	        this.showNavigationButtons = true;
	        this.showTitle = true;
	        this.showPageTitles = true;
	        this.completedHtml = "";
	        this.requiredText = "*";
	        this.questionStartIndex = "";
	        this.questionTitleTemplate = "";
	        this.showProgressBar = "off";
	        this.storeOthersAsComment = true;
	        this.goNextPageAutomatic = false;
	        this.pages = new Array();
	        this.triggers = new Array();
	        this.clearInvisibleValues = false;
	        this.currentPageValue = null;
	        this.valuesHash = {};
	        this.variablesHash = {};
	        this.showPageNumbersValue = false;
	        this.showQuestionNumbersValue = "on";
	        this.questionTitleLocationValue = "top";
	        this.localeValue = "";
	        this.isCompleted = false;
	        this.isLoading = false;
	        this.processedTextValues = {};
	        this.onComplete = new _base.Event();
	        this.onCurrentPageChanged = new _base.Event();
	        this.onValueChanged = new _base.Event();
	        this.onVisibleChanged = new _base.Event();
	        this.onPageVisibleChanged = new _base.Event();
	        this.onQuestionAdded = new _base.Event();
	        this.onQuestionRemoved = new _base.Event();
	        this.onValidateQuestion = new _base.Event();
	        this.onProcessHtml = new _base.Event();
	        this.onSendResult = new _base.Event();
	        this.onGetResult = new _base.Event();
	        this.onUploadFile = new _base.Event();
	        this.jsonErrors = null;
	        this.mode = "normal";
	        var self = this;
	        this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	        this.textPreProcessor.onHasValue = function (name) {
	            return self.processedTextValues[name.toLowerCase()];
	        };
	        this.textPreProcessor.onProcess = function (name) {
	            return self.getProcessedTextValue(name);
	        };
	        this.pages.push = function (value) {
	            value.data = self;
	            return Array.prototype.push.call(this, value);
	        };
	        this.triggers.push = function (value) {
	            value.setOwner(self);
	            return Array.prototype.push.call(this, value);
	        };
	        this.updateProcessedTextValues();
	        this.onBeforeCreating();
	        if (jsonObj) {
	            this.setJsonObject(jsonObj);
	            if (this.surveyId) {
	                this.loadSurveyFromService(this.surveyId);
	            }
	        }
	        this.onCreating();
	    }
	    SurveyModel.prototype.getType = function () {
	        return "survey";
	    };
	    Object.defineProperty(SurveyModel.prototype, "locale", {
	        get: function get() {
	            return this.localeValue;
	        },
	        set: function set(value) {
	            this.localeValue = value;
	            _surveyStrings.surveyLocalization.currentLocale = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.getLocString = function (str) {
	        return _surveyStrings.surveyLocalization.getString(str);
	    };
	    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
	        get: function get() {
	            return this.getLocString("emptySurvey");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
	        get: function get() {
	            return this.pagePrevTextValue ? this.pagePrevTextValue : this.getLocString("pagePrevText");
	        },
	        set: function set(newValue) {
	            this.pagePrevTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
	        get: function get() {
	            return this.pageNextTextValue ? this.pageNextTextValue : this.getLocString("pageNextText");
	        },
	        set: function set(newValue) {
	            this.pageNextTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "completeText", {
	        get: function get() {
	            return this.completeTextValue ? this.completeTextValue : this.getLocString("completeText");
	        },
	        set: function set(newValue) {
	            this.completeTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
	        get: function get() {
	            return this.showPageNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showPageNumbers) return;
	            this.showPageNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
	        get: function get() {
	            return this.showQuestionNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showQuestionNumbers) return;
	            this.showQuestionNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
	        get: function get() {
	            return this.questionTitleLocationValue;
	        },
	        set: function set(value) {
	            if (value === this.questionTitleLocationValue) return;
	            this.questionTitleLocationValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "data", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                result[key] = this.valuesHash[key];
	            }
	            return result;
	        },
	        set: function set(data) {
	            this.valuesHash = {};
	            if (data) {
	                for (var key in data) {
	                    this.valuesHash[key] = data[key];
	                    this.checkTriggers(key, data[key], false);
	                }
	            }
	            this.notifyAllQuestionsOnValueChanged();
	            this.runConditions();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "comments", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                if (key.indexOf(this.commentPrefix) > 0) {
	                    result[key] = this.valuesHash[key];
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
	        get: function get() {
	            if (this.isDesignMode) return this.pages;
	            var result = new Array();
	            for (var i = 0; i < this.pages.length; i++) {
	                if (this.pages[i].isVisible) {
	                    result.push(this.pages[i]);
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
	        get: function get() {
	            return this.pages.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "PageCount", {
	        get: function get() {
	            return this.pages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
	        get: function get() {
	            return this.visiblePages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "currentPage", {
	        get: function get() {
	            var vPages = this.visiblePages;
	            if (this.currentPageValue != null) {
	                if (vPages.indexOf(this.currentPageValue) < 0) {
	                    this.currentPage = null;
	                }
	            }
	            if (this.currentPageValue == null && vPages.length > 0) {
	                this.currentPage = vPages[0];
	            }
	            return this.currentPageValue;
	        },
	        set: function set(value) {
	            var vPages = this.visiblePages;
	            if (value != null && vPages.indexOf(value) < 0) return;
	            if (value == this.currentPageValue) return;
	            var oldValue = this.currentPageValue;
	            this.currentPageValue = value;
	            this.currentPageChanged(value, oldValue);
	            if (this.currentPageValue) {
	                this.currentPageValue.scrollToFirstQuestion();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "state", {
	        get: function get() {
	            if (this.isLoading) return "loading";
	            if (this.isCompleted) return "completed";
	            return this.currentPage ? "running" : "empty";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.clear = function () {
	        this.data = null;
	        this.variablesHash = {};
	        this.isCompleted = false;
	        if (this.visiblePageCount > 0) {
	            this.currentPage = this.visiblePages[0];
	        }
	    };
	    SurveyModel.prototype.mergeValues = function (src, dest) {
	        if (!dest || !src) return;
	        for (var key in src) {
	            var value = src[key];
	            if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	                if (!dest[key]) dest[key] = {};
	                this.mergeValues(value, dest[key]);
	            } else {
	                dest[key] = value;
	            }
	        }
	    };
	    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
	        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
	    };
	    SurveyModel.prototype.getProgress = function () {
	        if (this.currentPage == null) return 0;
	        var index = this.visiblePages.indexOf(this.currentPage) + 1;
	        return Math.ceil(index * 100 / this.visiblePageCount);
	    };
	    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.mode == "designer";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
	        get: function get() {
	            if (!this.cookieName) return false;
	            var cookies = document.cookie;
	            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.setCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
	    };
	    SurveyModel.prototype.deleteCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=;";
	    };
	    SurveyModel.prototype.nextPage = function () {
	        if (this.isLastPage) return false;
	        if (this.isCurrentPageHasErrors) return false;
	        this.checkOnPageTriggers();
	        if (this.sendResultOnPageNext && this.clientId) {
	            this.sendResult(this.surveyPostId, this.clientId, true);
	        }
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index + 1];
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.currentPage.hasErrors(true, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.prevPage = function () {
	        if (this.isFirstPage) return false;
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index - 1];
	    };
	    SurveyModel.prototype.completeLastPage = function () {
	        if (this.isCurrentPageHasErrors) return false;
	        this.doComplete();
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.visiblePages.indexOf(this.currentPage) == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            var vPages = this.visiblePages;
	            return vPages.indexOf(this.currentPage) == vPages.length - 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.doComplete = function () {
	        if (this.clearInvisibleValues) {
	            this.clearInvisibleQuestionValues();
	        }
	        this.setCookie();
	        this.setCompleted();
	        this.onComplete.fire(this, null);
	        if (this.surveyPostId) {
	            this.sendResult();
	        }
	    };
	    SurveyModel.prototype.setCompleted = function () {
	        this.isCompleted = true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
	        get: function get() {
	            if (this.completedHtml) {
	                return this.processHtml(this.completedHtml);
	            }
	            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
	        get: function get() {
	            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "progressText", {
	        get: function get() {
	            if (this.currentPage == null) return "";
	            var vPages = this.visiblePages;
	            var index = vPages.indexOf(this.currentPage) + 1;
	            return this.getLocString("progressText")["format"](index, vPages.length);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
	        var accept = true;
	        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
	        if (!accept) return false;
	        if (!storeDataAsText && this.surveyPostId) {
	            this.uploadFileCore(name, file, uploadingCallback);
	        }
	        return true;
	    };
	    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
	        var self = this;
	        if (uploadingCallback) uploadingCallback("uploading");
	        new _dxSurveyService.dxSurveyService().sendFile(this.surveyPostId, file, function (success, response) {
	            if (uploadingCallback) uploadingCallback(success ? "success" : "error");
	            if (success) {
	                self.setValue(name, response);
	            }
	        });
	    };
	    SurveyModel.prototype.getPage = function (index) {
	        return this.pages[index];
	    };
	    SurveyModel.prototype.addPage = function (page) {
	        if (page == null) return;
	        this.pages.push(page);
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.addNewPage = function (name) {
	        var page = this.createNewPage(name);
	        this.addPage(page);
	        return page;
	    };
	    SurveyModel.prototype.removePage = function (page) {
	        var index = this.pages.indexOf(page);
	        if (index < 0) return;
	        this.pages.splice(index, 1);
	        if (this.currentPageValue == page) {
	            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
	        }
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var questions = this.getAllQuestions();
	        if (caseInsensitive) name = name.toLowerCase();
	        for (var i = 0; i < questions.length; i++) {
	            var questionName = questions[i].name;
	            if (caseInsensitive) questionName = questionName.toLowerCase();
	            if (questionName == name) return questions[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var question = this.getQuestionByName(names[i], caseInsensitive);
	            if (question) result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getPageByQuestion = function (question) {
	        for (var i = 0; i < this.pages.length; i++) {
	            var page = this.pages[i];
	            if (page.questions.indexOf(question) > -1) return page;
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPageByName = function (name) {
	        for (var i = 0; i < this.pages.length; i++) {
	            if (this.pages[i].name == name) return this.pages[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPagesByNames = function (names) {
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var page = this.getPageByName(names[i]);
	            if (page) result.push(page);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getAllQuestions = function (visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        var result = new Array();
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].addQuestionsToList(result, visibleOnly);
	        }
	        return result;
	    };
	    SurveyModel.prototype.createNewPage = function (name) {
	        return new _page.PageModel(name);
	    };
	    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
	        var questions = this.getAllQuestions();
	        var question = null;
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].name != name) continue;
	            question = questions[i];
	            this.doSurveyValueChanged(question, newValue);
	        }
	        this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
	    };
	    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
	        }
	    };
	    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
	        question.onSurveyValueChanged(newValue);
	    };
	    SurveyModel.prototype.checkOnPageTriggers = function () {
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            var question = questions[i];
	            var value = this.getValue(question.name);
	            this.checkTriggers(question.name, value, true);
	        }
	    };
	    SurveyModel.prototype.getCurrentPageQuestions = function () {
	        var result = [];
	        var page = this.currentPage;
	        if (!page) return result;
	        for (var i = 0; i < page.questions.length; i++) {
	            var question = page.questions[i];
	            if (!question.visible || !question.name) continue;
	            result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
	        for (var i = 0; i < this.triggers.length; i++) {
	            var trigger = this.triggers[i];
	            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
	                trigger.check(newValue);
	            }
	        }
	    };
	    SurveyModel.prototype.doQuestionsOnLoad = function () {
	        var questions = this.getAllQuestions(false);
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].onSurveyLoad();
	        }
	    };
	    SurveyModel.prototype.runConditions = function () {
	        this.runConditionsForList(this.getAllQuestions(false));
	        this.runConditionsForList(this.pages);
	    };
	    SurveyModel.prototype.runConditionsForList = function (list) {
	        for (var i = 0; i < list.length; i++) {
	            list[i].runCondition(this.valuesHash);
	        }
	    };
	    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
	        if (postId === void 0) {
	            postId = null;
	        }
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        if (!postId && this.surveyPostId) {
	            postId = this.surveyPostId;
	        }
	        if (!postId) return;
	        if (clientId) {
	            this.clientId = clientId;
	        }
	        var self = this;
	        new _dxSurveyService.dxSurveyService().sendResult(postId, this.data, function (success, response) {
	            self.onSendResult.fire(self, { success: success, response: response });
	        }, this.clientId, isPartialCompleted);
	    };
	    SurveyModel.prototype.getResult = function (resultId, name) {
	        var self = this;
	        new _dxSurveyService.dxSurveyService().getResult(resultId, name, function (success, data, dataList, response) {
	            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
	        });
	    };
	    SurveyModel.prototype.loadSurveyFromService = function (surveyId) {
	        if (surveyId === void 0) {
	            surveyId = null;
	        }
	        if (surveyId) {
	            this.surveyId = surveyId;
	        }
	        var self = this;
	        this.isLoading = true;
	        this.onLoadingSurveyFromService();
	        new _dxSurveyService.dxSurveyService().loadSurvey(this.surveyId, function (success, result, response) {
	            self.isLoading = false;
	            if (success && result) {
	                self.setJsonObject(result);
	                self.notifyAllQuestionsOnValueChanged();
	                self.onLoadSurveyFromService();
	            }
	        });
	    };
	    SurveyModel.prototype.onLoadingSurveyFromService = function () {};
	    SurveyModel.prototype.onLoadSurveyFromService = function () {};
	    SurveyModel.prototype.updateVisibleIndexes = function () {
	        this.updatePageVisibleIndexes(this.showPageNumbers);
	        if (this.showQuestionNumbers == "onPage") {
	            var visPages = this.visiblePages;
	            for (var i = 0; i < visPages.length; i++) {
	                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
	            }
	        } else {
	            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
	        }
	    };
	    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
	        var index = 0;
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].visibleIndex = this.pages[i].visible ? index++ : -1;
	            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
	        }
	    };
	    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
	        var index = 0;
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].setVisibleIndex(showIndex && questions[i].visible && questions[i].hasTitle ? index++ : -1);
	        }
	    };
	    SurveyModel.prototype.setJsonObject = function (jsonObj) {
	        if (!jsonObj) return;
	        this.jsonErrors = null;
	        var jsonConverter = new _jsonobject.JsonObject();
	        jsonConverter.toObject(jsonObj, this);
	        if (jsonConverter.errors.length > 0) {
	            this.jsonErrors = jsonConverter.errors;
	        }
	        this.updateProcessedTextValues();
	        if (this.hasCookie) {
	            this.doComplete();
	        }
	        this.doQuestionsOnLoad();
	        this.runConditions();
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.onBeforeCreating = function () {};
	    SurveyModel.prototype.onCreating = function () {};
	    SurveyModel.prototype.updateProcessedTextValues = function () {
	        this.processedTextValues = {};
	        var self = this;
	        this.processedTextValues["pageno"] = function (name) {
	            return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0;
	        };
	        this.processedTextValues["pagecount"] = function (name) {
	            return self.visiblePageCount;
	        };
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.addQuestionToProcessedTextValues(questions[i]);
	        }
	    };
	    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
	        this.processedTextValues[question.name.toLowerCase()] = "question";
	    };
	    SurveyModel.prototype.getProcessedTextValue = function (name) {
	        var name = name.toLowerCase();
	        var val = this.processedTextValues[name];
	        if (!val) return null;
	        if (val == "question") {
	            var question = this.getQuestionByName(name, true);
	            return question != null ? this.getValue(question.name) : null;
	        }
	        if (val == "value") {
	            return this.getValue(name);
	        }
	        if (val == "variable") {
	            return this.getVariable(name);
	        }
	        return val(name);
	    };
	    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].visible) continue;
	            this.setValue(questions[i].name, null);
	        }
	    };
	    SurveyModel.prototype.getVariable = function (name) {
	        if (!name) return null;
	        return this.variablesHash[name];
	    };
	    SurveyModel.prototype.setVariable = function (name, newValue) {
	        if (!name) return;
	        this.variablesHash[name] = newValue;
	        this.processedTextValues[name.toLowerCase()] = "variable";
	    };
	    //ISurvey data
	    SurveyModel.prototype.getUnbindValue = function (value) {
	        if (value && value instanceof Object) {
	            //do not return the same object instance!!!
	            return JSON.parse(JSON.stringify(value));
	        }
	        return value;
	    };
	    SurveyModel.prototype.getValue = function (name) {
	        if (!name || name.length == 0) return null;
	        var value = this.valuesHash[name];
	        return this.getUnbindValue(value);
	    };
	    SurveyModel.prototype.setValue = function (name, newValue) {
	        if (this.isValueEqual(name, newValue)) return;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            newValue = this.getUnbindValue(newValue);
	            this.valuesHash[name] = newValue;
	            this.processedTextValues[name.toLowerCase()] = "value";
	        }
	        this.notifyQuestionOnValueChanged(name, newValue);
	        this.checkTriggers(name, newValue, false);
	        this.runConditions();
	        this.tryGoNextPageAutomatic(name);
	    };
	    SurveyModel.prototype.isValueEqual = function (name, newValue) {
	        if (newValue == "") newValue = null;
	        var oldValue = this.getValue(name);
	        if (newValue === null || oldValue === null) return newValue === oldValue;
	        return this.isTwoValueEquals(newValue, oldValue);
	    };
	    SurveyModel.prototype.isTwoValueEquals = function (x, y) {
	        if (x === y) return true;
	        if (!(x instanceof Object) || !(y instanceof Object)) return false;
	        for (var p in x) {
	            if (!x.hasOwnProperty(p)) continue;
	            if (!y.hasOwnProperty(p)) return false;
	            if (x[p] === y[p]) continue;
	            if (_typeof(x[p]) !== "object") return false;
	            if (!this.isTwoValueEquals(x[p], y[p])) return false;
	        }
	        for (p in y) {
	            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
	        }
	        return true;
	    };
	    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
	        if (!this.goNextPageAutomatic || !this.currentPage) return;
	        var question = this.getQuestionByName(name);
	        if (question && !question.supportGoNextPageAutomatic()) return;
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (!this.getValue(questions[i].name)) return;
	        }
	        if (!this.currentPage.hasErrors(false, false)) {
	            if (!this.isLastPage) {
	                this.nextPage();
	            } else {
	                this.doComplete();
	            }
	        }
	    };
	    SurveyModel.prototype.getComment = function (name) {
	        var result = this.data[name + this.commentPrefix];
	        if (result == null) result = "";
	        return result;
	    };
	    SurveyModel.prototype.setComment = function (name, newValue) {
	        name = name + this.commentPrefix;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            this.valuesHash[name] = newValue;
	            this.tryGoNextPageAutomatic(name);
	        }
	    };
	    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
	        this.updateVisibleIndexes();
	        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
	    };
	    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
	        this.updateVisibleIndexes();
	        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
	    };
	    SurveyModel.prototype.questionAdded = function (question, index) {
	        this.updateVisibleIndexes();
	        this.addQuestionToProcessedTextValues(question);
	        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index });
	    };
	    SurveyModel.prototype.questionRemoved = function (question) {
	        this.updateVisibleIndexes();
	        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
	    };
	    SurveyModel.prototype.validateQuestion = function (name) {
	        if (this.onValidateQuestion.isEmpty) return null;
	        var options = { name: name, value: this.getValue(name), error: null };
	        this.onValidateQuestion.fire(this, options);
	        return options.error ? new _error.CustomError(options.error) : null;
	    };
	    SurveyModel.prototype.processHtml = function (html) {
	        var options = { html: html };
	        this.onProcessHtml.fire(this, options);
	        return this.processText(options.html);
	    };
	    SurveyModel.prototype.processText = function (text) {
	        return this.textPreProcessor.process(text);
	    };
	    //ISurveyTriggerOwner
	    SurveyModel.prototype.getObjects = function (pages, questions) {
	        var result = [];
	        Array.prototype.push.apply(result, this.getPagesByNames(pages));
	        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
	        return result;
	    };
	    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
	        if (!name) return;
	        if (isVariable) {
	            this.setVariable(name, value);
	        } else {
	            this.setValue(name, value);
	        }
	    };
	    return SurveyModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("survey", [{ name: "locale", choices: function choices() {
	        return _surveyStrings.surveyLocalization.getLocales();
	    } }, "title", "completedHtml:html", { name: "pages", className: "page" }, { name: "questions", baseClassName: "question", onGetValue: function onGetValue(obj) {
	        return null;
	    }, onSetValue: function onSetValue(obj, value, jsonConverter) {
	        var page = obj.addNewPage("");jsonConverter.toObject({ questions: value }, page);
	    } }, { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" }, "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean", { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true }, { name: "showPageTitles:boolean", default: true }, "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] }, { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] }, { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }, { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean", { name: "pagePrevText", onGetValue: function onGetValue(obj) {
	        return obj.pagePrevTextValue;
	    } }, { name: "pageNextText", onGetValue: function onGetValue(obj) {
	        return obj.pageNextTextValue;
	    } }, { name: "completeText", onGetValue: function onGetValue(obj) {
	        return obj.completeTextValue;
	    } }, { name: "requiredText", default: "*" }, "questionStartIndex", "questionTitleTemplate"]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var dxSurveyService = exports.dxSurveyService = function () {
	    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
	    function dxSurveyService() {}
	    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        xhr.onload = function () {
	            var result = JSON.parse(xhr.response);
	            onLoad(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
	        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	        var data = { postId: postId, surveyResult: JSON.stringify(result) };
	        if (clientId) data['clientId'] = clientId;
	        if (isPartialCompleted) data['isPartialCompleted'] = true;
	        var dataStringify = JSON.stringify(data);
	        var self = this;
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendResult) return;
	            onSendResult(xhr.status == 200, xhr.response);
	        };
	        xhr.send(dataStringify);
	    };
	    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
	        var xhr = new XMLHttpRequest();
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendFile) return;
	            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
	        };
	        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
	        var formData = new FormData();
	        formData.append("file", file);
	        formData.append("postId", postId);
	        xhr.send(formData);
	    };
	    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&name=' + name;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            var list = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	                list = [];
	                for (var key in result.QuestionResult) {
	                    var el = { name: key, value: result.QuestionResult[key] };
	                    list.push(el);
	                }
	            }
	            onGetResult(xhr.status == 200, result, list, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&clientId=' + clientId;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	            }
	            onIsCompleted(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";
	    return dxSurveyService;
	}();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyTriggerSetValue = exports.SurveyTriggerComplete = exports.SurveyTriggerVisible = exports.SurveyTrigger = exports.Trigger = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var Trigger = exports.Trigger = function (_super) {
	    __extends(Trigger, _super);
	    function Trigger() {
	        _super.call(this);
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Trigger, "operators", {
	        get: function get() {
	            if (Trigger.operatorsValue != null) return Trigger.operatorsValue;
	            Trigger.operatorsValue = {
	                empty: function empty(value, expectedValue) {
	                    return !value;
	                },
	                notempty: function notempty(value, expectedValue) {
	                    return !!value;
	                },
	                equal: function equal(value, expectedValue) {
	                    return value == expectedValue;
	                },
	                notequal: function notequal(value, expectedValue) {
	                    return value != expectedValue;
	                },
	                contains: function contains(value, expectedValue) {
	                    return value && value["indexOf"] && value.indexOf(expectedValue) > -1;
	                },
	                notcontains: function notcontains(value, expectedValue) {
	                    return !value || !value["indexOf"] || value.indexOf(expectedValue) == -1;
	                },
	                greater: function greater(value, expectedValue) {
	                    return value > expectedValue;
	                },
	                less: function less(value, expectedValue) {
	                    return value < expectedValue;
	                },
	                greaterorequal: function greaterorequal(value, expectedValue) {
	                    return value >= expectedValue;
	                },
	                lessorequal: function lessorequal(value, expectedValue) {
	                    return value <= expectedValue;
	                }
	            };
	            return Trigger.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Trigger.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Trigger.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Trigger.prototype.check = function (value) {
	        if (Trigger.operators[this.operator](value, this.value)) {
	            this.onSuccess();
	        } else {
	            this.onFailure();
	        }
	    };
	    Trigger.prototype.onSuccess = function () {};
	    Trigger.prototype.onFailure = function () {};
	    Trigger.operatorsValue = null;
	    return Trigger;
	}(_base.Base);
	var SurveyTrigger = exports.SurveyTrigger = function (_super) {
	    __extends(SurveyTrigger, _super);
	    function SurveyTrigger() {
	        _super.call(this);
	        this.owner = null;
	    }
	    SurveyTrigger.prototype.setOwner = function (owner) {
	        this.owner = owner;
	    };
	    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyTrigger;
	}(Trigger);
	var SurveyTriggerVisible = exports.SurveyTriggerVisible = function (_super) {
	    __extends(SurveyTriggerVisible, _super);
	    function SurveyTriggerVisible() {
	        _super.call(this);
	        this.pages = [];
	        this.questions = [];
	    }
	    SurveyTriggerVisible.prototype.getType = function () {
	        return "visibletrigger";
	    };
	    SurveyTriggerVisible.prototype.onSuccess = function () {
	        this.onTrigger(this.onItemSuccess);
	    };
	    SurveyTriggerVisible.prototype.onFailure = function () {
	        this.onTrigger(this.onItemFailure);
	    };
	    SurveyTriggerVisible.prototype.onTrigger = function (func) {
	        if (!this.owner) return;
	        var objects = this.owner.getObjects(this.pages, this.questions);
	        for (var i = 0; i < objects.length; i++) {
	            func(objects[i]);
	        }
	    };
	    SurveyTriggerVisible.prototype.onItemSuccess = function (item) {
	        item.visible = true;
	    };
	    SurveyTriggerVisible.prototype.onItemFailure = function (item) {
	        item.visible = false;
	    };
	    return SurveyTriggerVisible;
	}(SurveyTrigger);
	var SurveyTriggerComplete = exports.SurveyTriggerComplete = function (_super) {
	    __extends(SurveyTriggerComplete, _super);
	    function SurveyTriggerComplete() {
	        _super.call(this);
	    }
	    SurveyTriggerComplete.prototype.getType = function () {
	        return "completetrigger";
	    };
	    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyTriggerComplete.prototype.onSuccess = function () {
	        if (this.owner) this.owner.doComplete();
	    };
	    return SurveyTriggerComplete;
	}(SurveyTrigger);
	var SurveyTriggerSetValue = exports.SurveyTriggerSetValue = function (_super) {
	    __extends(SurveyTriggerSetValue, _super);
	    function SurveyTriggerSetValue() {
	        _super.call(this);
	    }
	    SurveyTriggerSetValue.prototype.getType = function () {
	        return "setvaluetrigger";
	    };
	    SurveyTriggerSetValue.prototype.onSuccess = function () {
	        if (!this.setToName || !this.owner) return;
	        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
	    };
	    return SurveyTriggerSetValue;
	}(SurveyTrigger);
	_jsonobject.JsonObject.metaData.addClass("trigger", ["operator", "!value"]);
	_jsonobject.JsonObject.metaData.addClass("surveytrigger", ["!name"], null, "trigger");
	_jsonobject.JsonObject.metaData.addClass("visibletrigger", ["pages", "questions"], function () {
	    return new SurveyTriggerVisible();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("completetrigger", [], function () {
	    return new SurveyTriggerComplete();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () {
	    return new SurveyTriggerSetValue();
	}, "surveytrigger");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _survey = __webpack_require__(30);
	
	var SurveyWindowModel = exports.SurveyWindowModel = function (_super) {
	    __extends(SurveyWindowModel, _super);
	    function SurveyWindowModel(jsonObj) {
	        _super.call(this);
	        this.surveyValue = this.createSurvey(jsonObj);
	        this.surveyValue.showTitle = false;
	        this.windowElement = document.createElement("div");
	    }
	    SurveyWindowModel.prototype.getType = function () {
	        return "window";
	    };
	    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
	        get: function get() {
	            return this.isShowingValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
	        get: function get() {
	            return this.isExpandedValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.survey.title;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindowModel.prototype.expand = function () {
	        this.expandcollapse(true);
	    };
	    SurveyWindowModel.prototype.collapse = function () {
	        this.expandcollapse(false);
	    };
	    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
	        return new _survey.SurveyModel(jsonObj);
	    };
	    SurveyWindowModel.prototype.expandcollapse = function (value) {
	        this.isExpandedValue = value;
	    };
	    SurveyWindowModel.surveyElementName = "windowSurveyJS";
	    return SurveyWindowModel;
	}(_base.Base);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyCss = exports.surveyCss = {
	    currentType: "",
	    getCss: function getCss() {
	        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
	        if (!loc) loc = defaultStandardCss;
	        return loc;
	    }
	};
	var defaultStandardCss = exports.defaultStandardCss = {
	    root: "sv_main",
	    header: "",
	    body: "sv_body",
	    footer: "sv_nav",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "sv_progress", progressBar: "",
	    pageTitle: "sv_p_title",
	    row: "sv_row",
	    question: { root: "sv_q", title: "sv_q_title", comment: "", indent: 20 },
	    error: { root: "sv_q_erbox", icon: "", item: "" },
	    checkbox: { root: "sv_qcbc", item: "sv_q_checkbox", other: "sv_q_other" },
	    comment: "",
	    dropdown: "",
	    matrix: { root: "sv_q_matrix" },
	    matrixdropdown: { root: "sv_q_matrix" },
	    matrixdynamic: { root: "table", button: "" },
	    multipletext: { root: "", itemTitle: "", itemValue: "" },
	    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", other: "sv_q_other" },
	    rating: { root: "sv_q_rating", item: "sv_q_rating_item" },
	    text: "",
	    window: {
	        root: "sv_window", body: "sv_window_content",
	        header: {
	            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
	        }
	    }
	};
	surveyCss["standard"] = defaultStandardCss;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Survey = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactsurveymodel = __webpack_require__(37);
	
	var _reactpage = __webpack_require__(38);
	
	var _reactSurveyNavigation = __webpack_require__(42);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	var _cssstandard = __webpack_require__(34);
	
	var _reactSurveyProgress = __webpack_require__(43);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Survey = exports.Survey = function (_super) {
	    __extends(Survey, _super);
	    function Survey(props) {
	        _super.call(this, props);
	        this.updateSurvey(props);
	    }
	    Object.defineProperty(Survey, "cssType", {
	        get: function get() {
	            return _cssstandard.surveyCss.currentType;
	        },
	        set: function set(value) {
	            _cssstandard.surveyCss.currentType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateSurvey(nextProps);
	    };
	    Survey.prototype.render = function () {
	        if (this.survey.state == "completed") return this.renderCompleted();
	        if (this.survey.state == "loading") return this.renderLoading();
	        return this.renderSurvey();
	    };
	    Object.defineProperty(Survey.prototype, "css", {
	        get: function get() {
	            return _cssstandard.surveyCss.getCss();
	        },
	        set: function set(value) {
	            this.survey.mergeCss(value, this.css);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.renderCompleted = function () {
	        var htmlValue = { __html: this.survey.processedCompletedHtml };
	        return React.createElement("div", { dangerouslySetInnerHTML: htmlValue });
	    };
	    Survey.prototype.renderLoading = function () {
	        var htmlValue = { __html: this.survey.processedLoadingHtml };
	        return React.createElement("div", { dangerouslySetInnerHTML: htmlValue });
	    };
	    Survey.prototype.renderSurvey = function () {
	        var title = this.survey.title && this.survey.showTitle ? this.renderTitle() : null;
	        var currentPage = this.survey.currentPage ? this.renderPage() : null;
	        var topProgress = this.survey.showProgressBar == "top" ? this.renderProgress(true) : null;
	        var bottomProgress = this.survey.showProgressBar == "bottom" ? this.renderProgress(false) : null;
	        var buttons = currentPage && this.survey.showNavigationButtons ? this.renderNavigation() : null;
	        if (!currentPage) {
	            currentPage = this.renderEmptySurvey();
	        }
	        return React.createElement("div", { className: this.css.root }, title, React.createElement("div", { className: this.css.body }, topProgress, currentPage, bottomProgress), buttons);
	    };
	    Survey.prototype.renderTitle = function () {
	        return React.createElement("div", { className: this.css.header }, React.createElement("h3", null, this.survey.title));
	    };
	    Survey.prototype.renderPage = function () {
	        return React.createElement(_reactpage.SurveyPage, { survey: this.survey, page: this.survey.currentPage, css: this.css, creator: this });
	    };
	    Survey.prototype.renderProgress = function (isTop) {
	        return React.createElement(_reactSurveyProgress.SurveyProgress, { survey: this.survey, css: this.css, isTop: isTop });
	    };
	    Survey.prototype.renderNavigation = function () {
	        return React.createElement(_reactSurveyNavigation.SurveyNavigation, { survey: this.survey, css: this.css });
	    };
	    Survey.prototype.renderEmptySurvey = function () {
	        return React.createElement("span", null, this.survey.emptySurveyText);
	    };
	    Survey.prototype.updateSurvey = function (newProps) {
	        if (newProps) {
	            if (newProps.model) {
	                this.survey = newProps.model;
	            } else {
	                if (newProps.json) {
	                    this.survey = new _reactsurveymodel.ReactSurveyModel(newProps.json);
	                }
	            }
	        } else {
	            this.survey = new _reactsurveymodel.ReactSurveyModel();
	        }
	        if (newProps) {
	            if (newProps.clientId) this.survey.clientId = newProps.clientId;
	            if (newProps.data) this.survey.data = newProps.data;
	            if (newProps.css) this.survey.mergeCss(newProps.css, this.css);
	        }
	        //set the first page
	        var dummy = this.survey.currentPage;
	        this.state = { pageIndexChange: 0, isCompleted: false, modelChanged: 0 };
	        this.setSurveyEvents(newProps);
	    };
	    Survey.prototype.setSurveyEvents = function (newProps) {
	        var self = this;
	        this.survey.renderCallback = function () {
	            self.state.modelChanged = self.state.modelChanged + 1;
	            self.setState(self.state);
	        };
	        this.survey.onComplete.add(function (sender) {
	            self.state.isCompleted = true;self.setState(self.state);
	        });
	        this.survey.onCurrentPageChanged.add(function (sender, options) {
	            self.state.pageIndexChange = self.state.pageIndexChange + 1;
	            self.setState(self.state);
	            if (newProps && newProps.onCurrentPageChanged) newProps.onCurrentPageChanged(sender, options);
	        });
	        this.survey.onVisibleChanged.add(function (sender, options) {
	            if (options.question && options.question.react) {
	                var state = options.question.react.state;
	                state.visible = options.question.visible;
	                options.question.react.setState(state);
	            }
	        });
	        this.survey.onValueChanged.add(function (sender, options) {
	            if (options.question && options.question.react) {
	                var state = options.question.react.state;
	                state.value = options.value;
	                options.question.react.setState(state);
	            }
	        });
	        if (!newProps) return;
	        this.survey.onValueChanged.add(function (sender, options) {
	            if (newProps.data) newProps.data[options.name] = options.value;
	            if (newProps.onValueChanged) newProps.onValueChanged(sender, options);
	        });
	        if (newProps.onComplete) {
	            this.survey.onComplete.add(function (sender) {
	                newProps.onComplete(sender);
	            });
	        }
	        this.survey.onPageVisibleChanged.add(function (sender, options) {
	            if (newProps.onPageVisibleChanged) newProps.onPageVisibleChanged(sender, options);
	        });
	        if (newProps.onQuestionAdded) {
	            this.survey.onQuestionAdded.add(function (sender, options) {
	                newProps.onQuestionAdded(sender, options);
	            });
	        }
	        if (newProps.onQuestionRemoved) {
	            this.survey.onQuestionRemoved.add(function (sender, options) {
	                newProps.onQuestionRemoved(sender, options);
	            });
	        }
	        if (newProps.onValidateQuestion) {
	            this.survey.onValidateQuestion.add(function (sender, options) {
	                newProps.onValidateQuestion(sender, options);
	            });
	        }
	        if (newProps.onSendResult) {
	            this.survey.onSendResult.add(function (sender, options) {
	                newProps.onSendResult(sender, options);
	            });
	        }
	        if (newProps.onGetResult) {
	            this.survey.onGetResult.add(function (sender, options) {
	                newProps.onGetResult(sender, options);
	            });
	        }
	        if (newProps.onProcessHtml) {
	            this.survey.onProcessHtml.add(function (sender, options) {
	                newProps.onProcessHtml(sender, options);
	            });
	        }
	    };
	    //ISurveyCreator
	    Survey.prototype.createQuestionElement = function (question) {
	        var questionCss = this.css[question.getType()];
	        return _reactquestionfactory.ReactQuestionFactory.Instance.createQuestion(question.getType(), {
	            question: question, css: questionCss, rootCss: this.css, creator: this
	        });
	    };
	    Survey.prototype.renderError = function (key, errorText) {
	        return React.createElement("div", { key: key, className: this.css.error.item }, errorText);
	    };
	    Survey.prototype.questionTitleLocation = function () {
	        return this.survey.questionTitleLocation;
	    };
	    return Survey;
	}(React.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.ReactSurveyModel = undefined;
	
	var _survey = __webpack_require__(30);
	
	var ReactSurveyModel = exports.ReactSurveyModel = function (_super) {
	    __extends(ReactSurveyModel, _super);
	    function ReactSurveyModel(jsonObj) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        _super.call(this, jsonObj);
	    }
	    ReactSurveyModel.prototype.render = function () {
	        if (this.renderCallback) {
	            this.renderCallback();
	        }
	    };
	    ReactSurveyModel.prototype.mergeCss = function (src, dest) {
	        this.mergeValues(src, dest);
	    };
	    ReactSurveyModel.prototype.onLoadSurveyFromService = function () {
	        this.render();
	    };
	    ReactSurveyModel.prototype.onLoadingSurveyFromService = function () {
	        this.render();
	    };
	    return ReactSurveyModel;
	}(_survey.SurveyModel);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.SurveyRow = exports.SurveyPage = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestion = __webpack_require__(39);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyPage = exports.SurveyPage = function (_super) {
	    __extends(SurveyPage, _super);
	    function SurveyPage(props) {
	        _super.call(this, props);
	        this.page = props.page;
	        this.survey = props.survey;
	        this.creator = props.creator;
	        this.css = props.css;
	    }
	    SurveyPage.prototype.componentWillReceiveProps = function (nextProps) {
	        this.page = nextProps.page;
	        this.survey = nextProps.survey;
	        this.creator = nextProps.creator;
	        this.css = nextProps.css;
	    };
	    SurveyPage.prototype.render = function () {
	        if (this.page == null || this.survey == null || this.creator == null) return null;
	        var title = this.renderTitle();
	        var rows = [];
	        var questionRows = this.page.rows;
	        for (var i = 0; i < questionRows.length; i++) {
	            rows.push(this.createRow(questionRows[i], i));
	        }
	        return React.createElement("div", null, title, rows);
	    };
	    SurveyPage.prototype.createRow = function (row, index) {
	        var rowName = "row" + (index + 1);
	        return React.createElement(SurveyRow, { key: rowName, row: row, survey: this.survey, creator: this.creator, css: this.css });
	    };
	    SurveyPage.prototype.renderTitle = function () {
	        if (!this.page.title || !this.survey.showPageTitles) return null;
	        var text = this.page.processedTitle;
	        if (this.page.num > 0) {
	            text = this.page.num + ". " + text;
	        }
	        return React.createElement("h4", { className: this.css.pageTitle }, text);
	    };
	    return SurveyPage;
	}(React.Component);
	var SurveyRow = exports.SurveyRow = function (_super) {
	    __extends(SurveyRow, _super);
	    function SurveyRow(props) {
	        _super.call(this, props);
	        this.setProperties(props);
	    }
	    SurveyRow.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setProperties(nextProps);
	    };
	    SurveyRow.prototype.setProperties = function (props) {
	        this.row = props.row;
	        if (this.row) {
	            var self = this;
	            this.row.visibilityChangedCallback = function () {
	                self.setState({ visible: self.row.visible });
	            };
	        }
	        this.survey = props.survey;
	        this.creator = props.creator;
	        this.css = props.css;
	    };
	    SurveyRow.prototype.render = function () {
	        if (this.row == null || this.survey == null || this.creator == null) return null;
	        if (!this.row.visible) return null;
	        var questions = [];
	        for (var i = 0; i < this.row.questions.length; i++) {
	            var question = this.row.questions[i];
	            questions.push(this.createQuestion(question));
	        }
	        return React.createElement("div", { className: this.css.row }, questions);
	    };
	    SurveyRow.prototype.createQuestion = function (question) {
	        return React.createElement(_reactquestion.SurveyQuestion, { key: question.name, question: question, creator: this.creator, css: this.css });
	    };
	    return SurveyRow;
	}(React.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.SurveyQuestionErrors = exports.SurveyQuestion = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _question = __webpack_require__(12);
	
	var _reactquestioncomment = __webpack_require__(40);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestion = exports.SurveyQuestion = function (_super) {
	    __extends(SurveyQuestion, _super);
	    function SurveyQuestion(props) {
	        _super.call(this, props);
	        this.setQuestion(props.question);
	        this.creator = props.creator;
	        this.css = props.css;
	    }
	    SurveyQuestion.prototype.componentWillReceiveProps = function (nextProps) {
	        this.creator = nextProps.creator;
	        this.css = nextProps.css;
	        this.setQuestion(nextProps.question);
	    };
	    SurveyQuestion.prototype.setQuestion = function (question) {
	        this.questionBase = question;
	        this.question = question instanceof _question.Question ? question : null;
	        var value = this.question ? this.question.value : null;
	        this.state = { visible: this.questionBase.visible, value: value, error: 0, renderWidth: 0 };
	        var self = this;
	        if (this.questionBase) {
	            this.questionBase.renderWidthChangedCallback = function () {
	                self.state.renderWidth = self.state.renderWidth + 1;
	                self.setState(self.state);
	            };
	        }
	    };
	    SurveyQuestion.prototype.componentDidMount = function () {
	        if (this.questionBase) this.questionBase["react"] = this;
	    };
	    SurveyQuestion.prototype.componentWillUnmount = function () {
	        if (this.questionBase) this.questionBase["react"] = null;
	    };
	    SurveyQuestion.prototype.render = function () {
	        if (!this.questionBase || !this.creator) return null;
	        if (!this.questionBase.visible) return null;
	        var questionRender = this.creator.createQuestionElement(this.questionBase);
	        var title = this.questionBase.hasTitle ? this.renderTitle() : null;
	        var titleTop = this.creator.questionTitleLocation() == "top" ? title : null;
	        var titleBottom = this.creator.questionTitleLocation() == "bottom" ? title : null;
	        var comment = this.question && this.question.hasComment ? this.renderComment() : null;
	        var errors = this.renderErrors();
	        var marginLeft = this.questionBase.indent > 0 ? this.questionBase.indent * this.css.question.indent + "px" : null;
	        var paddingRight = this.questionBase.rightIndent > 0 ? this.questionBase.rightIndent * this.css.question.indent + "px" : null;
	        var rootStyle = { display: 'inline-block', verticalAlign: 'top' };
	        if (this.questionBase.renderWidth) rootStyle["width"] = this.questionBase.renderWidth;
	        if (marginLeft) rootStyle["marginLeft"] = marginLeft;
	        if (paddingRight) rootStyle["paddingRight"] = paddingRight;
	        return React.createElement("div", { id: this.questionBase.id, className: this.css.question.root, style: rootStyle }, titleTop, errors, questionRender, comment, titleBottom);
	    };
	    SurveyQuestion.prototype.renderTitle = function () {
	        var titleText = this.question.fullTitle;
	        return React.createElement("h5", { className: this.css.question.title }, titleText);
	    };
	    SurveyQuestion.prototype.renderComment = function () {
	        return React.createElement("div", null, React.createElement("div", null, this.question.commentText), React.createElement("div", { className: this.css.question.comment }, React.createElement(_reactquestioncomment.SurveyQuestionCommentItem, { question: this.question })));
	    };
	    SurveyQuestion.prototype.renderErrors = function () {
	        return React.createElement(SurveyQuestionErrors, { question: this.question, css: this.css, creator: this.creator });
	    };
	    return SurveyQuestion;
	}(React.Component);
	var SurveyQuestionErrors = exports.SurveyQuestionErrors = function (_super) {
	    __extends(SurveyQuestionErrors, _super);
	    function SurveyQuestionErrors(props) {
	        _super.call(this, props);
	        this.setQuestion(props.question);
	        this.creator = props.creator;
	        this.css = props.css;
	    }
	    SurveyQuestionErrors.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setQuestion(nextProps.question);
	        this.creator = nextProps.creator;
	        this.css = nextProps.css;
	    };
	    SurveyQuestionErrors.prototype.setQuestion = function (question) {
	        this.question = question instanceof _question.Question ? question : null;
	        if (this.question) {
	            var self = this;
	            this.question.errorsChangedCallback = function () {
	                self.state.error = self.state.error + 1;
	                self.setState(self.state);
	            };
	        }
	        this.state = { error: 0 };
	    };
	    SurveyQuestionErrors.prototype.render = function () {
	        if (!this.question || this.question.errors.length == 0) return null;
	        var errors = [];
	        for (var i = 0; i < this.question.errors.length; i++) {
	            var errorText = this.question.errors[i].getText();
	            var key = "error" + i;
	            errors.push(this.creator.renderError(key, errorText));
	        }
	        return React.createElement("div", { className: this.css.error.root }, errors);
	    };
	    return SurveyQuestionErrors;
	}(React.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionCommentItem = exports.SurveyQuestionComment = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionComment = exports.SurveyQuestionComment = function (_super) {
	    __extends(SurveyQuestionComment, _super);
	    function SurveyQuestionComment(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.state = { value: this.question.value };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionComment.prototype.handleOnChange = function (event) {
	        this.question.value = event.target.value;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionComment.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	    };
	    SurveyQuestionComment.prototype.render = function () {
	        if (!this.question) return null;
	        return React.createElement("textarea", { className: this.css, type: "text", value: this.state.value, onChange: this.handleOnChange, cols: this.question.cols, rows: this.question.rows });
	    };
	    return SurveyQuestionComment;
	}(React.Component);
	var SurveyQuestionCommentItem = exports.SurveyQuestionCommentItem = function (_super) {
	    __extends(SurveyQuestionCommentItem, _super);
	    function SurveyQuestionCommentItem(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.comment = this.question.comment;
	        this.state = { value: this.comment };
	        this.handleOnChange = this.handleOnChange.bind(this);
	        this.handleOnBlur = this.handleOnBlur.bind(this);
	    }
	    SurveyQuestionCommentItem.prototype.handleOnChange = function (event) {
	        this.comment = event.target.value;
	        this.setState({ value: this.comment });
	    };
	    SurveyQuestionCommentItem.prototype.handleOnBlur = function (event) {
	        this.question.comment = this.comment;
	    };
	    SurveyQuestionCommentItem.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	    };
	    SurveyQuestionCommentItem.prototype.render = function () {
	        if (!this.question) return null;
	        return React.createElement("input", { type: "text", className: this.css.question.comment, value: this.state.value, onChange: this.handleOnChange, onBlur: this.handleOnBlur });
	    };
	    return SurveyQuestionCommentItem;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("comment", function (props) {
	    return React.createElement(SurveyQuestionComment, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var ReactQuestionFactory = exports.ReactQuestionFactory = function () {
	    function ReactQuestionFactory() {
	        this.creatorHash = {};
	    }
	    ReactQuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
	        this.creatorHash[questionType] = questionCreator;
	    };
	    ReactQuestionFactory.prototype.getAllTypes = function () {
	        var result = new Array();
	        for (var key in this.creatorHash) {
	            result.push(key);
	        }
	        return result.sort();
	    };
	    ReactQuestionFactory.prototype.createQuestion = function (questionType, params) {
	        var creator = this.creatorHash[questionType];
	        if (creator == null) return null;
	        return creator(params);
	    };
	    ReactQuestionFactory.Instance = new ReactQuestionFactory();
	    ReactQuestionFactory.DefaultChoices = ["one", "two|second value", "three|third value"];
	    return ReactQuestionFactory;
	}();

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyNavigation = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyNavigation = exports.SurveyNavigation = function (_super) {
	    __extends(SurveyNavigation, _super);
	    function SurveyNavigation(props) {
	        _super.call(this, props);
	        this.survey = props.survey;
	        this.css = props.css;
	        this.handlePrevClick = this.handlePrevClick.bind(this);
	        this.handleNextClick = this.handleNextClick.bind(this);
	        this.handleCompleteClick = this.handleCompleteClick.bind(this);
	    }
	    SurveyNavigation.prototype.componentWillReceiveProps = function (nextProps) {
	        this.survey = nextProps.survey;
	        this.css = nextProps.css;
	    };
	    SurveyNavigation.prototype.handlePrevClick = function (event) {
	        this.survey.prevPage();
	    };
	    SurveyNavigation.prototype.handleNextClick = function (event) {
	        this.survey.nextPage();
	    };
	    SurveyNavigation.prototype.handleCompleteClick = function (event) {
	        this.survey.completeLastPage();
	    };
	    SurveyNavigation.prototype.render = function () {
	        if (!this.survey) return null;
	        var prevButton = !this.survey.isFirstPage ? this.renderButton(this.handlePrevClick, this.survey.pagePrevText, this.css.navigation.prev) : null;
	        var nextButton = !this.survey.isLastPage ? this.renderButton(this.handleNextClick, this.survey.pageNextText, this.css.navigation.next) : null;
	        var completeButton = this.survey.isLastPage ? this.renderButton(this.handleCompleteClick, this.survey.completeText, this.css.navigation.complete) : null;
	        return React.createElement("div", { className: this.css.footer }, prevButton, nextButton, completeButton);
	    };
	    SurveyNavigation.prototype.renderButton = function (click, text, btnClassName) {
	        var style = { marginRight: "5px" };
	        var className = this.css.navigationButton + (btnClassName ? ' ' + btnClassName : "");
	        return React.createElement("input", { className: className, style: style, type: "button", onClick: click, value: text });
	    };
	    return SurveyNavigation;
	}(React.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyProgress = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyProgress = exports.SurveyProgress = function (_super) {
	    __extends(SurveyProgress, _super);
	    function SurveyProgress(props) {
	        _super.call(this, props);
	        this.survey = props.survey;
	        this.css = props.css;
	        this.isTop = props.isTop;
	    }
	    SurveyProgress.prototype.componentWillReceiveProps = function (nextProps) {
	        this.survey = nextProps.survey;
	        this.css = nextProps.css;
	        this.isTop = nextProps.isTop;
	    };
	    Object.defineProperty(SurveyProgress.prototype, "progress", {
	        get: function get() {
	            return this.survey.getProgress();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyProgress.prototype, "progressText", {
	        get: function get() {
	            return this.survey.progressText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyProgress.prototype.render = function () {
	        var style = this.isTop ? { width: "60%" } : { width: "60%", marginTop: "10px" };
	        var progressStyle = { width: this.progress + "%" };
	        return React.createElement("div", { className: this.css.progress, style: style }, React.createElement("div", { style: progressStyle, className: this.css.progressBar, role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100" }, React.createElement("span", null, this.progressText)));
	    };
	    return SurveyProgress;
	}(React.Component);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionCheckboxItem = exports.SurveyQuestionCheckbox = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestioncomment = __webpack_require__(40);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionCheckbox = exports.SurveyQuestionCheckbox = function (_super) {
	    __extends(SurveyQuestionCheckbox, _super);
	    function SurveyQuestionCheckbox(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.rootCss = props.rootCss;
	        this.state = { choicesChanged: 0 };
	        var self = this;
	        this.question.choicesChangedCallback = function () {
	            self.state.choicesChanged = self.state.choicesChanged + 1;
	            self.setState(self.state);
	        };
	    }
	    SurveyQuestionCheckbox.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	    };
	    SurveyQuestionCheckbox.prototype.render = function () {
	        if (!this.question) return null;
	        return React.createElement("form", { className: this.css.root }, this.getItems());
	    };
	    SurveyQuestionCheckbox.prototype.getItems = function () {
	        var items = [];
	        for (var i = 0; i < this.question.visibleChoices.length; i++) {
	            var item = this.question.visibleChoices[i];
	            var key = "item" + i;
	            items.push(this.renderItem(key, item));
	        }
	        return items;
	    };
	    Object.defineProperty(SurveyQuestionCheckbox.prototype, "textStyle", {
	        get: function get() {
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyQuestionCheckbox.prototype.renderItem = function (key, item) {
	        return React.createElement(SurveyQuestionCheckboxItem, { key: key, question: this.question, css: this.css, rootCss: this.rootCss, item: item, textStyle: this.textStyle });
	    };
	    return SurveyQuestionCheckbox;
	}(React.Component);
	var SurveyQuestionCheckboxItem = exports.SurveyQuestionCheckboxItem = function (_super) {
	    __extends(SurveyQuestionCheckboxItem, _super);
	    function SurveyQuestionCheckboxItem(props) {
	        _super.call(this, props);
	        this.item = props.item;
	        this.question = props.question;
	        this.css = props.css;
	        this.rootCss = props.rootCss;
	        this.textStyle = props.textStyle;
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionCheckboxItem.prototype.componentWillReceiveProps = function (nextProps) {
	        this.item = nextProps.item;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.textStyle = nextProps.textStyle;
	        this.question = nextProps.question;
	    };
	    SurveyQuestionCheckboxItem.prototype.handleOnChange = function (event) {
	        var newValue = this.question.value;
	        if (!newValue) {
	            newValue = [];
	        }
	        var index = newValue.indexOf(this.item.value);
	        if (event.target.checked) {
	            if (index < 0) {
	                newValue.push(this.item.value);
	            }
	        } else {
	            if (index > -1) {
	                newValue.splice(index, 1);
	            }
	        }
	        this.question.value = newValue;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionCheckboxItem.prototype.render = function () {
	        if (!this.item || !this.question) return null;
	        var itemWidth = this.question.colCount > 0 ? 100 / this.question.colCount + "%" : "";
	        var marginRight = this.question.colCount == 0 ? "5px" : "0px";
	        var divStyle = { marginRight: marginRight };
	        if (itemWidth) {
	            divStyle["width"] = itemWidth;
	        }
	        var isChecked = this.question.value && this.question.value.indexOf(this.item.value) > -1;
	        var otherItem = this.item.value === this.question.otherItem.value && isChecked ? this.renderOther() : null;
	        return this.renderCheckbox(isChecked, divStyle, otherItem);
	    };
	    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "inputStyle", {
	        get: function get() {
	            return { marginRight: "3px" };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyQuestionCheckboxItem.prototype.renderCheckbox = function (isChecked, divStyle, otherItem) {
	        return React.createElement("div", { className: this.css.item, style: divStyle }, React.createElement("label", { className: this.css.item }, React.createElement("input", { type: "checkbox", style: this.inputStyle, checked: isChecked, onChange: this.handleOnChange }), React.createElement("span", null, this.item.text)), otherItem);
	    };
	    SurveyQuestionCheckboxItem.prototype.renderOther = function () {
	        return React.createElement("div", { className: this.css.other }, React.createElement(_reactquestioncomment.SurveyQuestionCommentItem, { question: this.question, css: this.rootCss }));
	    };
	    return SurveyQuestionCheckboxItem;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("checkbox", function (props) {
	    return React.createElement(SurveyQuestionCheckbox, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionDropdown = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestioncomment = __webpack_require__(40);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionDropdown = exports.SurveyQuestionDropdown = function (_super) {
	    __extends(SurveyQuestionDropdown, _super);
	    function SurveyQuestionDropdown(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.rootCss = props.rootCss;
	        this.state = { value: this.question.value, choicesChanged: 0 };
	        var self = this;
	        this.question.choicesChangedCallback = function () {
	            self.state.choicesChanged = self.state.choicesChanged + 1;
	            self.setState(self.state);
	        };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionDropdown.prototype.handleOnChange = function (event) {
	        this.question.value = event.target.value;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionDropdown.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	    };
	    SurveyQuestionDropdown.prototype.render = function () {
	        if (!this.question) return null;
	        var options = [];
	        for (var i = 0; i < this.question.visibleChoices.length; i++) {
	            var item = this.question.visibleChoices[i];
	            var key = "item" + i;
	            var option = React.createElement("option", { key: key, value: item.value }, item.text);
	            options.push(option);
	        }
	        var comment = this.question.value === this.question.otherItem.value ? this.renderOther() : null;
	        return React.createElement("div", null, React.createElement("select", { className: this.css, value: this.state.value, onChange: this.handleOnChange }, React.createElement("option", { value: "" }, this.question.optionsCaption), options), comment);
	    };
	    SurveyQuestionDropdown.prototype.renderOther = function () {
	        var style = { marginTop: "3px" };
	        return React.createElement("div", { style: style }, React.createElement(_reactquestioncomment.SurveyQuestionCommentItem, { question: this.question, css: this.rootCss }));
	    };
	    return SurveyQuestionDropdown;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("dropdown", function (props) {
	    return React.createElement(SurveyQuestionDropdown, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionMatrixDropdownRow = exports.SurveyQuestionMatrixDropdown = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestion = __webpack_require__(39);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionMatrixDropdown = exports.SurveyQuestionMatrixDropdown = function (_super) {
	    __extends(SurveyQuestionMatrixDropdown, _super);
	    function SurveyQuestionMatrixDropdown(props) {
	        _super.call(this, props);
	        this.setProperties(props);
	    }
	    SurveyQuestionMatrixDropdown.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setProperties(nextProps);
	    };
	    SurveyQuestionMatrixDropdown.prototype.setProperties = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.creator = nextProps.creator;
	    };
	    SurveyQuestionMatrixDropdown.prototype.render = function () {
	        if (!this.question) return null;
	        var headers = [];
	        for (var i = 0; i < this.question.columns.length; i++) {
	            var column = this.question.columns[i];
	            var key = "column" + i;
	            var minWidth = this.question.getColumnWidth(column);
	            var columnStyle = minWidth ? { minWidth: minWidth } : {};
	            headers.push(React.createElement("th", { key: key, style: columnStyle }, this.question.getColumnTitle(column)));
	        }
	        var rows = [];
	        var visibleRows = this.question.visibleRows;
	        for (var i = 0; i < visibleRows.length; i++) {
	            var row = visibleRows[i];
	            var key = "row" + i;
	            rows.push(React.createElement(SurveyQuestionMatrixDropdownRow, { key: key, row: row, css: this.css, rootCss: this.rootCss, creator: this.creator }));
	        }
	        var divStyle = this.question.horizontalScroll ? { overflowX: 'scroll' } : {};
	        return React.createElement("div", { style: divStyle }, React.createElement("table", { className: this.css.root }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), headers)), React.createElement("tbody", null, rows)));
	    };
	    return SurveyQuestionMatrixDropdown;
	}(React.Component);
	var SurveyQuestionMatrixDropdownRow = exports.SurveyQuestionMatrixDropdownRow = function (_super) {
	    __extends(SurveyQuestionMatrixDropdownRow, _super);
	    function SurveyQuestionMatrixDropdownRow(props) {
	        _super.call(this, props);
	        this.setProperties(props);
	    }
	    SurveyQuestionMatrixDropdownRow.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setProperties(nextProps);
	    };
	    SurveyQuestionMatrixDropdownRow.prototype.setProperties = function (nextProps) {
	        this.row = nextProps.row;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.creator = nextProps.creator;
	    };
	    SurveyQuestionMatrixDropdownRow.prototype.render = function () {
	        if (!this.row) return null;
	        var tds = [];
	        for (var i = 0; i < this.row.cells.length; i++) {
	            var cell = this.row.cells[i];
	            var errors = React.createElement(_reactquestion.SurveyQuestionErrors, { question: cell.question, css: this.rootCss, creator: this.creator });
	            var select = this.renderSelect(cell);
	            tds.push(React.createElement("td", { key: "row" + i }, errors, select));
	        }
	        return React.createElement("tr", null, React.createElement("td", null, this.row.text), tds);
	    };
	    SurveyQuestionMatrixDropdownRow.prototype.renderSelect = function (cell) {
	        return this.creator.createQuestionElement(cell.question);
	    };
	    return SurveyQuestionMatrixDropdownRow;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("matrixdropdown", function (props) {
	    return React.createElement(SurveyQuestionMatrixDropdown, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionMatrixRow = exports.SurveyQuestionMatrix = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionMatrix = exports.SurveyQuestionMatrix = function (_super) {
	    __extends(SurveyQuestionMatrix, _super);
	    function SurveyQuestionMatrix(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	    }
	    SurveyQuestionMatrix.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	    };
	    SurveyQuestionMatrix.prototype.render = function () {
	        if (!this.question) return null;
	        var firstTH = this.question.hasRows ? React.createElement("th", null) : null;
	        var headers = [];
	        for (var i = 0; i < this.question.columns.length; i++) {
	            var column = this.question.columns[i];
	            var key = "column" + i;
	            headers.push(React.createElement("th", { key: key }, column.text));
	        }
	        var rows = [];
	        var visibleRows = this.question.visibleRows;
	        for (var i = 0; i < visibleRows.length; i++) {
	            var row = visibleRows[i];
	            var key = "row" + i;
	            rows.push(React.createElement(SurveyQuestionMatrixRow, { key: key, question: this.question, row: row }));
	        }
	        return React.createElement("table", { className: this.css.root }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement("div", { className: "mood-icon mood-icon--good" })), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null, React.createElement("div", { className: "mood-icon mood-icon--bad" }))), React.createElement("tr", null, firstTH, headers)), React.createElement("tbody", null, rows));
	    };
	    return SurveyQuestionMatrix;
	}(React.Component);
	var SurveyQuestionMatrixRow = exports.SurveyQuestionMatrixRow = function (_super) {
	    __extends(SurveyQuestionMatrixRow, _super);
	    function SurveyQuestionMatrixRow(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.row = props.row;
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionMatrixRow.prototype.handleOnChange = function (event) {
	        this.row.value = event.target.value;
	        this.setState({ value: this.row.value });
	    };
	    SurveyQuestionMatrixRow.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.row = nextProps.row;
	    };
	    SurveyQuestionMatrixRow.prototype.render = function () {
	        if (!this.row) return null;
	        var firstTD = this.question.hasRows ? React.createElement("td", null, this.row.text) : null;
	        var tds = [];
	        for (var i = 0; i < this.question.columns.length; i++) {
	            var column = this.question.columns[i];
	            var key = "value" + i;
	            var isChecked = this.row.value == column.value;
	            var td = React.createElement("td", { key: key }, React.createElement("input", { type: "radio", name: this.row.fullName, value: column.value, checked: isChecked, onChange: this.handleOnChange }));
	            tds.push(td);
	        }
	        return React.createElement("tr", null, firstTD, tds);
	    };
	    return SurveyQuestionMatrixRow;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("matrix", function (props) {
	    return React.createElement(SurveyQuestionMatrix, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionHtml = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionHtml = exports.SurveyQuestionHtml = function (_super) {
	    __extends(SurveyQuestionHtml, _super);
	    function SurveyQuestionHtml(props) {
	        _super.call(this, props);
	        this.question = props.question;
	    }
	    SurveyQuestionHtml.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	    };
	    SurveyQuestionHtml.prototype.render = function () {
	        if (!this.question || !this.question.html) return null;
	        var htmlValue = { __html: this.question.processedHtml };
	        return React.createElement("div", { dangerouslySetInnerHTML: htmlValue });
	    };
	    return SurveyQuestionHtml;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("html", function (props) {
	    return React.createElement(SurveyQuestionHtml, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionFile = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionFile = exports.SurveyQuestionFile = function (_super) {
	    __extends(SurveyQuestionFile, _super);
	    function SurveyQuestionFile(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.state = { fileLoaded: 0 };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionFile.prototype.handleOnChange = function (event) {
	        var src = event.target || event.srcElement;
	        if (!window["FileReader"]) return;
	        if (!src || !src.files || src.files.length < 1) return;
	        this.question.loadFile(src.files[0]);
	        this.setState({ fileLoaded: this.state.fileLoaded + 1 });
	    };
	    SurveyQuestionFile.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	    };
	    SurveyQuestionFile.prototype.render = function () {
	        if (!this.question) return null;
	        var img = this.renderImage();
	        return React.createElement("div", null, React.createElement("input", { type: "file", onChange: this.handleOnChange }), img);
	    };
	    SurveyQuestionFile.prototype.renderImage = function () {
	        if (!this.question.previewValue) return null;
	        return React.createElement("div", null, "  ", React.createElement("img", { src: this.question.previewValue, height: this.question.imageHeight, width: this.question.imageWidth }));
	    };
	    return SurveyQuestionFile;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("file", function (props) {
	    return React.createElement(SurveyQuestionFile, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionMultipleTextItem = exports.SurveyQuestionMultipleText = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionMultipleText = exports.SurveyQuestionMultipleText = function (_super) {
	    __extends(SurveyQuestionMultipleText, _super);
	    function SurveyQuestionMultipleText(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	    }
	    SurveyQuestionMultipleText.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	    };
	    SurveyQuestionMultipleText.prototype.render = function () {
	        if (!this.question) return null;
	        var tableRows = this.question.getRows();
	        var rows = [];
	        for (var i = 0; i < tableRows.length; i++) {
	            rows.push(this.renderRow("item" + i, tableRows[i]));
	        }
	        return React.createElement("table", { className: this.css.root }, React.createElement("tbody", null, rows));
	    };
	    SurveyQuestionMultipleText.prototype.renderRow = function (key, items) {
	        var tds = [];
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            tds.push(React.createElement("td", { key: "label" + i }, React.createElement("span", { className: this.css.itemTitle }, item.title)));
	            tds.push(React.createElement("td", { key: "value" + i }, this.renderItem(item)));
	        }
	        return React.createElement("tr", { key: key }, tds);
	    };
	    SurveyQuestionMultipleText.prototype.renderItem = function (item) {
	        return React.createElement(SurveyQuestionMultipleTextItem, { item: item, css: this.css });
	    };
	    return SurveyQuestionMultipleText;
	}(React.Component);
	var SurveyQuestionMultipleTextItem = exports.SurveyQuestionMultipleTextItem = function (_super) {
	    __extends(SurveyQuestionMultipleTextItem, _super);
	    function SurveyQuestionMultipleTextItem(props) {
	        _super.call(this, props);
	        this.item = props.item;
	        this.css = props.css;
	        this.state = { value: this.item.value };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionMultipleTextItem.prototype.handleOnChange = function (event) {
	        this.item.value = event.target.value;
	        this.setState({ value: this.item.value });
	    };
	    SurveyQuestionMultipleTextItem.prototype.componentWillReceiveProps = function (nextProps) {
	        this.item = nextProps.item;
	        this.css = nextProps.css;
	    };
	    SurveyQuestionMultipleTextItem.prototype.render = function () {
	        if (!this.item) return null;
	        var style = { float: "left" };
	        return React.createElement("input", { className: this.css.itemValue, style: style, type: "text", value: this.state.value, onChange: this.handleOnChange });
	    };
	    Object.defineProperty(SurveyQuestionMultipleTextItem.prototype, "mainClassName", {
	        get: function get() {
	            return "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyQuestionMultipleTextItem;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("multipletext", function (props) {
	    return React.createElement(SurveyQuestionMultipleText, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionRadiogroup = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestioncomment = __webpack_require__(40);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionRadiogroup = exports.SurveyQuestionRadiogroup = function (_super) {
	    __extends(SurveyQuestionRadiogroup, _super);
	    function SurveyQuestionRadiogroup(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.rootCss = props.rootCss;
	        this.state = { choicesChanged: 0 };
	        var self = this;
	        this.question.choicesChangedCallback = function () {
	            self.state.choicesChanged = self.state.choicesChanged + 1;
	            self.setState(self.state);
	        };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionRadiogroup.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.handleOnChange = this.handleOnChange.bind(this);
	    };
	    SurveyQuestionRadiogroup.prototype.handleOnChange = function (event) {
	        this.question.value = event.target.value;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionRadiogroup.prototype.render = function () {
	        if (!this.question) return null;
	        return React.createElement("form", { className: this.css.root }, this.getItems());
	    };
	    SurveyQuestionRadiogroup.prototype.getItems = function () {
	        var items = [];
	        for (var i = 0; i < this.question.visibleChoices.length; i++) {
	            var item = this.question.visibleChoices[i];
	            var key = "item" + i;
	            items.push(this.renderItem(key, item));
	        }
	        return items;
	    };
	    Object.defineProperty(SurveyQuestionRadiogroup.prototype, "textStyle", {
	        get: function get() {
	            return { marginLeft: "3px" };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyQuestionRadiogroup.prototype.renderItem = function (key, item) {
	        var itemWidth = this.question.colCount > 0 ? 100 / this.question.colCount + "%" : "";
	        var marginRight = this.question.colCount == 0 ? "5px" : "0px";
	        var divStyle = { marginRight: marginRight };
	        if (itemWidth) {
	            divStyle["width"] = itemWidth;
	        }
	        var isChecked = this.question.value == item.value;
	        var otherItem = isChecked && item.value === this.question.otherItem.value ? this.renderOther() : null;
	        return this.renderRadio(key, item, isChecked, divStyle, otherItem);
	    };
	    SurveyQuestionRadiogroup.prototype.renderRadio = function (key, item, isChecked, divStyle, otherItem) {
	        return React.createElement("div", { key: key, className: this.css.item, style: divStyle }, React.createElement("label", { className: this.css.item }, React.createElement("input", { type: "radio", checked: isChecked, value: item.value, onChange: this.handleOnChange }), React.createElement("span", { style: this.textStyle }, item.text)), otherItem);
	    };
	    SurveyQuestionRadiogroup.prototype.renderOther = function () {
	        return React.createElement("div", { className: this.css.other }, React.createElement(_reactquestioncomment.SurveyQuestionCommentItem, { question: this.question, css: this.rootCss }));
	    };
	    return SurveyQuestionRadiogroup;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("radiogroup", function (props) {
	    return React.createElement(SurveyQuestionRadiogroup, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionText = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionText = exports.SurveyQuestionText = function (_super) {
	    __extends(SurveyQuestionText, _super);
	    function SurveyQuestionText(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.state = { value: this.question.value };
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionText.prototype.handleOnChange = function (event) {
	        this.question.value = event.target.value;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionText.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	    };
	    SurveyQuestionText.prototype.render = function () {
	        if (!this.question) return null;
	        return React.createElement("input", { className: this.css, type: "text", value: this.question.value || '', onChange: this.handleOnChange });
	    };
	    return SurveyQuestionText;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("text", function (props) {
	    return React.createElement(SurveyQuestionText, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionMatrixDynamicRow = exports.SurveyQuestionMatrixDynamic = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestion = __webpack_require__(39);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionMatrixDynamic = exports.SurveyQuestionMatrixDynamic = function (_super) {
	    __extends(SurveyQuestionMatrixDynamic, _super);
	    function SurveyQuestionMatrixDynamic(props) {
	        _super.call(this, props);
	        this.setProperties(props);
	    }
	    SurveyQuestionMatrixDynamic.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setProperties(nextProps);
	    };
	    SurveyQuestionMatrixDynamic.prototype.setProperties = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.creator = nextProps.creator;
	        var self = this;
	        this.state = { rowCounter: 0 };
	        this.question.rowCountChangedCallback = function () {
	            self.state.rowCounter = self.state.rowCounter + 1;
	            self.setState(self.state);
	        };
	        this.handleOnRowAddClick = this.handleOnRowAddClick.bind(this);
	    };
	    SurveyQuestionMatrixDynamic.prototype.handleOnRowAddClick = function (event) {
	        this.question.addRow();
	    };
	    SurveyQuestionMatrixDynamic.prototype.render = function () {
	        if (!this.question) return null;
	        var headers = [];
	        for (var i = 0; i < this.question.columns.length; i++) {
	            var column = this.question.columns[i];
	            var key = "column" + i;
	            var minWidth = this.question.getColumnWidth(column);
	            var columnStyle = minWidth ? { minWidth: minWidth } : {};
	            headers.push(React.createElement("th", { key: key, style: columnStyle }, this.question.getColumnTitle(column)));
	        }
	        var rows = [];
	        var visibleRows = this.question.visibleRows;
	        for (var i = 0; i < visibleRows.length; i++) {
	            var row = visibleRows[i];
	            var key = "row" + i;
	            rows.push(React.createElement(SurveyQuestionMatrixDynamicRow, { key: key, row: row, question: this.question, index: i, css: this.css, rootCss: this.rootCss, creator: this.creator }));
	        }
	        var divStyle = this.question.horizontalScroll ? { overflowX: 'scroll' } : {};
	        return React.createElement("div", null, React.createElement("div", { style: divStyle }, React.createElement("table", { className: this.css.root }, React.createElement("thead", null, React.createElement("tr", null, headers, React.createElement("th", null))), React.createElement("tbody", null, rows))), this.renderAddRowButton());
	    };
	    SurveyQuestionMatrixDynamic.prototype.renderAddRowButton = function () {
	        return React.createElement("input", { className: this.css.button, type: "button", onClick: this.handleOnRowAddClick, value: this.question.addRowText });
	    };
	    return SurveyQuestionMatrixDynamic;
	}(React.Component);
	var SurveyQuestionMatrixDynamicRow = exports.SurveyQuestionMatrixDynamicRow = function (_super) {
	    __extends(SurveyQuestionMatrixDynamicRow, _super);
	    function SurveyQuestionMatrixDynamicRow(props) {
	        _super.call(this, props);
	        this.setProperties(props);
	    }
	    SurveyQuestionMatrixDynamicRow.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setProperties(nextProps);
	    };
	    SurveyQuestionMatrixDynamicRow.prototype.setProperties = function (nextProps) {
	        this.row = nextProps.row;
	        this.question = nextProps.question;
	        this.index = nextProps.index;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	        this.creator = nextProps.creator;
	        this.handleOnRowRemoveClick = this.handleOnRowRemoveClick.bind(this);
	    };
	    SurveyQuestionMatrixDynamicRow.prototype.handleOnRowRemoveClick = function (event) {
	        this.question.removeRow(this.index);
	    };
	    SurveyQuestionMatrixDynamicRow.prototype.render = function () {
	        if (!this.row) return null;
	        var tds = [];
	        for (var i = 0; i < this.row.cells.length; i++) {
	            var cell = this.row.cells[i];
	            var errors = React.createElement(_reactquestion.SurveyQuestionErrors, { question: cell.question, css: this.rootCss, creator: this.creator });
	            var select = this.renderQuestion(cell);
	            tds.push(React.createElement("td", { key: "row" + i }, errors, select));
	        }
	        var removeButton = this.renderButton();
	        tds.push(React.createElement("td", { key: "row" + this.row.cells.length + 1 }, removeButton));
	        return React.createElement("tr", null, tds);
	    };
	    SurveyQuestionMatrixDynamicRow.prototype.renderQuestion = function (cell) {
	        return this.creator.createQuestionElement(cell.question);
	    };
	    SurveyQuestionMatrixDynamicRow.prototype.renderButton = function () {
	        return React.createElement("input", { className: this.css.button, type: "button", onClick: this.handleOnRowRemoveClick, value: this.question.removeRowText });
	    };
	    return SurveyQuestionMatrixDynamicRow;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("matrixdynamic", function (props) {
	    return React.createElement(SurveyQuestionMatrixDynamic, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyQuestionRating = undefined;
	
	var _react = __webpack_require__(36);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactquestioncomment = __webpack_require__(40);
	
	var _reactquestionfactory = __webpack_require__(41);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyQuestionRating = exports.SurveyQuestionRating = function (_super) {
	    __extends(SurveyQuestionRating, _super);
	    function SurveyQuestionRating(props) {
	        _super.call(this, props);
	        this.question = props.question;
	        this.css = props.css;
	        this.rootCss = props.rootCss;
	        this.handleOnChange = this.handleOnChange.bind(this);
	    }
	    SurveyQuestionRating.prototype.handleOnChange = function (event) {
	        this.question.value = event.target.value;
	        this.setState({ value: this.question.value });
	    };
	    SurveyQuestionRating.prototype.componentWillReceiveProps = function (nextProps) {
	        this.question = nextProps.question;
	        this.css = nextProps.css;
	        this.rootCss = nextProps.rootCss;
	    };
	    SurveyQuestionRating.prototype.render = function () {
	        if (!this.question) return null;
	        var values = [];
	        for (var i = 0; i < this.question.visibleRateValues.length; i++) {
	            var minText = i == 0 ? this.question.mininumRateDescription + " " : null;
	            var maxText = i == this.question.visibleRateValues.length - 1 ? " " + this.question.maximumRateDescription : null;
	            values.push(this.renderItem("value" + i, this.question.visibleRateValues[i], minText, maxText));
	        }
	        var comment = this.question.hasOther ? this.renderOther() : null;
	        return React.createElement("div", { className: this.css.root, "data-toggle": "buttons" }, values, comment);
	    };
	    SurveyQuestionRating.prototype.renderItem = function (key, item, minText, maxText) {
	        var isChecked = this.question.value == item.value;
	        var className = this.css.item;
	        if (isChecked) className += " active";
	        var min = minText ? React.createElement("span", null, minText) : null;
	        var max = maxText ? React.createElement("span", null, maxText) : null;
	        return React.createElement("label", { key: key, className: className }, React.createElement("input", { type: "radio", name: this.question.name, value: item.value, checked: this.question.value == item.value, onChange: this.handleOnChange }), min, React.createElement("span", null, item.text), max);
	    };
	    SurveyQuestionRating.prototype.renderOther = function () {
	        return React.createElement("div", { className: this.css.other }, React.createElement(_reactquestioncomment.SurveyQuestionCommentItem, { question: this.question, css: this.rootCss }));
	    };
	    return SurveyQuestionRating;
	}(React.Component);
	_reactquestionfactory.ReactQuestionFactory.Instance.registerQuestion("rating", function (props) {
	    return React.createElement(SurveyQuestionRating, props);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindow = undefined;
	
	var _reactSurvey = __webpack_require__(35);
	
	var SurveyWindow = exports.SurveyWindow = function (_super) {
	    __extends(SurveyWindow, _super);
	    function SurveyWindow(props) {
	        _super.call(this, props);
	        this.handleOnExpanded = this.handleOnExpanded.bind(this);
	    }
	    SurveyWindow.prototype.handleOnExpanded = function (event) {
	        this.state.expanded = !this.state.expanded;
	        this.setState(this.state);
	    };
	    SurveyWindow.prototype.render = function () {
	        if (this.state.hidden) return null;
	        var header = this.renderHeader();
	        var body = this.state.expanded ? this.renderBody() : null;
	        var style = { position: "fixed", bottom: "3px", right: "10px" };
	        return React.createElement("div", { className: this.css.window.root, style: style }, header, body);
	    };
	    SurveyWindow.prototype.renderHeader = function () {
	        var styleA = { width: "100%" };
	        var styleTitle = { paddingRight: "10px" };
	        var glyphClassName = this.state.expanded ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
	        glyphClassName = "glyphicon pull-right " + glyphClassName;
	        return React.createElement("div", { className: this.css.window.header.root }, React.createElement("a", { href: "#", onClick: this.handleOnExpanded, style: styleA }, React.createElement("span", { className: this.css.window.header.title, style: styleTitle }, this.title), React.createElement("span", { className: glyphClassName, "aria-hidden": "true" })));
	    };
	    SurveyWindow.prototype.renderBody = function () {
	        return React.createElement("div", { class: this.css.window.body }, this.renderSurvey());
	    };
	    SurveyWindow.prototype.updateSurvey = function (newProps) {
	        _super.prototype.updateSurvey.call(this, newProps);
	        this.title = newProps.title ? newProps.title : this.survey.title;
	        var hasExpanded = newProps["expanded"] ? newProps.expanded : false;
	        this.state = { expanded: hasExpanded, hidden: false };
	        var self = this;
	        this.survey.onComplete.add(function (s) {
	            self.state.hidden = true;
	            self.setState(self.state);
	        });
	    };
	    return SurveyWindow;
	}(_reactSurvey.Survey);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.russianSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var russianSurveyStrings = exports.russianSurveyStrings = {
	    pagePrevText: "Назад",
	    pageNextText: "Далее",
	    completeText: "Готово",
	    progressText: "Страница {0} из {1}",
	    emptySurvey: "Нет ни одного вопроса.",
	    completingSurvey: "Благодарим Вас за заполнение анкеты!",
	    loadingSurvey: "Загрузка с сервера...",
	    otherItemText: "Другое (пожалуйста, опишите)",
	    optionsCaption: "Выбрать...",
	    requiredError: "Пожалуйста, ответьте на вопрос.",
	    numericError: "Ответ должен быть числом.",
	    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
	    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
	    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
	    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
	    numericMin: "'{0}' должно быть равным или больше, чем {1}",
	    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
	    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
	    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
	};
	_surveyStrings.surveyLocalization.locales["ru"] = russianSurveyStrings;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.frenchSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var frenchSurveyStrings = exports.frenchSurveyStrings = {
	    pagePrevText: "Pr\xE9c\xE9dent",
	    pageNextText: "Suivant",
	    completeText: "Terminer",
	    otherItemText: "Autre (pr\xE9ciser)",
	    progressText: "Page {0} sur {1}",
	    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
	    completingSurvey: "Merci d'avoir r\xE9pondu au questionnaire!",
	    loadingSurvey: "Le questionnaire est en cours de chargement...",
	    optionsCaption: "Choisissez...",
	    requiredError: "La r\xE9ponse \xE0 cette question est obligatoire.",
	    numericError: "La r\xE9ponse doit \xEAtre un nombre.",
	    textMinLength: "Merci d'entrer au moins {0} symboles.",
	    minSelectError: "Merci de s\xE9lectionner au moins {0}r\xE9ponses.",
	    maxSelectError: "Merci de s\xE9lectionner au plus {0}r\xE9ponses.",
	    numericMinMax: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1} et inf\xE9rieure ou\xE9gale \xE0 {2}",
	    numericMin: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1}",
	    numericMax: "Votre r\xE9ponse '{0}' doit \xEAtreinf\xE9rieure ou \xE9gale \xE0 {1}",
	    invalidEmail: "Merci d'entrer une adresse mail valide.",
	    exceedMaxSize: "La taille du fichier ne doit pas exc\xE9der {0}.",
	    otherRequiredError: "Merci de pr\xE9ciser le champ 'Autre'."
	};
	_surveyStrings.surveyLocalization.locales["fr"] = frenchSurveyStrings;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.finnishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var finnishSurveyStrings = exports.finnishSurveyStrings = {
	    pagePrevText: "Edellinen",
	    pageNextText: "Seuraava",
	    completeText: "Valmis",
	    otherItemText: "Muu (kuvaile)",
	    progressText: "Sivu {0}/{1}",
	    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
	    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
	    loadingSurvey: "Kyselyä ladataan palvelimelta...",
	    optionsCaption: "Valitse...",
	    requiredError: "Vastaa kysymykseen, kiitos.",
	    numericError: "Arvon tulee olla numeerinen.",
	    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
	    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
	    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
	    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
	    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
	    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
	    invalidEmail: "Syötä validi sähköpostiosoite.",
	    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
	};
	_surveyStrings.surveyLocalization.locales["fi"] = finnishSurveyStrings;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.germanSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var germanSurveyStrings = exports.germanSurveyStrings = {
	    pagePrevText: "Zurück",
	    pageNextText: "Weiter",
	    completeText: "Fertig",
	    progressText: "Seite {0} von {1}",
	    emptySurvey: "Es gibt keine sichtbare Frage.",
	    completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
	    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
	    otherItemText: "Benutzerdefinierte Antwort...",
	    optionsCaption: "Wählen...",
	    requiredError: "Bitte antworten Sie auf die Frage.",
	    numericError: "Der Wert sollte eine Zahl sein.",
	    textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
	    minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
	    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
	    numericMinMax: "'{0}' solte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
	    numericMin: "'{0}' solte gleich oder größer sein als {1}",
	    numericMax: "'{0}' solte gleich oder kleiner als {1}",
	    invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
	    exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
	    otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
	};
	_surveyStrings.surveyLocalization.locales["de"] = germanSurveyStrings;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultBootstrapCss = undefined;
	
	var _cssstandard = __webpack_require__(34);
	
	var defaultBootstrapCss = exports.defaultBootstrapCss = {
	    root: "",
	    header: "panel-heading",
	    body: "panel-body",
	    footer: "panel-footer",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "progress center-block", progressBar: "progress-bar",
	    pageTitle: "",
	    row: "",
	    question: { root: "", title: "", comment: "form-control", indent: 20 },
	    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
	    checkbox: { root: "form-inline", item: "checkbox", other: "" },
	    comment: "form-control",
	    dropdown: "form-control",
	    matrix: { root: "table" },
	    matrixdropdown: { root: "table" },
	    matrixdynamic: { root: "table", button: "button" },
	    multipletext: { root: "table", itemTitle: "", itemValue: "form-control" },
	    radiogroup: { root: "form-inline", item: "radio", other: "" },
	    rating: { root: "btn-group", item: "btn btn-default" },
	    text: "form-control",
	    window: {
	        root: "modal-content", body: "modal-body",
	        header: {
	            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
	            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
	        }
	    }
	};
	_cssstandard.surveyCss["bootstrap"] = defaultBootstrapCss;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMzhiYjgwMWQ5YzY5MDU3ODBmYyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9yZWFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVua3MvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleVN0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb25vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9uc1BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0UHJlUHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX211bHRpcGxldGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHhTdXJ2ZXlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmlnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0U3VydmV5LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvcmVhY3RzdXJ2ZXltb2RlbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9uY29tbWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25mYWN0b3J5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvcmVhY3RTdXJ2ZXlOYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvcmVhY3RTdXJ2ZXlQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25jaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25kcm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25tYXRyaXhkcm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25tYXRyaXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9uaHRtbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbm11bHRpcGxldGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25yYWRpb2dyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9ubWF0cml4ZHluYW1pYy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25yYXRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9yZWFjdFN1cnZleVdpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvY2h1bmtzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9maW5uaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9sb2NhbGl6YXRpb24vZ2VybWFuLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWZhdWx0Q3NzL2Nzc2Jvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckMrQjs7Ozs7Ozs7Ozs7Ozs7O3lCQU04Qjs7Ozs7Ozs7O3lCQU03RDs7Ozs7Ozs7OzhCQUNBOzs7Ozs7Ozs7bUNBQ0E7Ozs7Ozs7Ozt1QkFBa0I7Ozs7Ozt1QkFDbEI7Ozs7Ozs7OzsyQkFBc0I7Ozs7OzsyQkFDdEI7Ozs7Ozs7OztrQ0FBaUM7Ozs7OztrQ0FDakM7Ozs7Ozs7OzttQ0FBOEI7Ozs7OzttQ0FDOUI7Ozs7Ozs7OzttQ0FDQTs7Ozs7Ozs7O3lDQUFvQzs7Ozs7O3lDQUNwQzs7Ozs7Ozs7O2lDQUE0Qjs7Ozs7O2lDQUM1Qjs7Ozs7Ozs7OytCQUNBOzs7Ozs7Ozs7K0JBQ0E7Ozs7Ozs7Ozt1Q0FBa0M7Ozs7Ozt1Q0FDbEM7Ozs7Ozs7OztxQ0FDQTs7Ozs7Ozs7OytCQUNBOzs7Ozs7Ozs7d0NBQW1DOzs7Ozs7d0NBQ25DOzs7Ozs7Ozs7aUNBQ0E7Ozs7Ozs7OztpQ0FDQTs7Ozs7Ozs7OytCQUNBOzs7Ozs7Ozs7a0NBRUE7Ozs7Ozs7OztxQkFFZ0c7Ozs7QUE1QmhHOztBQUtBLHlCOzs7Ozs7Ozs7Ozs7Ozs7dUJDWHdCOzs7Ozs7dUJBQWdCOzs7Ozs7dUJBQWtCOzs7Ozs7dUJBQWdCOzs7Ozs7dUJBQ3ZEOzs7Ozs7dUJB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QU0sTUFBTTtBQUM5RCxlQUF5Qix5QkFBYSxhQUFnQjtBQUNyRCxnQkFBSTtBQUNWLFVBQUk7QUFDQyxlQUFFLEVBQU0sTUFBSSxJQUFPLE9BQUksSUFBUyxTQUFnQixnQkFBUSxRQUFNO0FBQ2pFLFlBQUUsRUFBTSxNQUFzQixzQkFBTSxNQUF3Qyx3Q0FBTSxNQUFNO0FBRXJGLGVBQUUsRUFBTSxNQUFlLGVBQU0sTUFBWSxZQUFPLE9BQU07QUFDdkQsY0FBZ0I7QUFDZixlQUFnQjtBQUNsQixhQUFFLEVBQU0sTUFBVztBQUNYLHFCQUFFLEVBQU0sTUFBVztBQUNwQixvQkFBRSxFQUFNLE1BQVMsU0FBUSxRQUFZO0FBQ3RDLG1CQUFFLEVBQU0sTUFBUyxTQUFXLFdBQUksSUFBVyxXQUFrQjtBQUMvRCxpQkFBRSxFQUFNLE1BQWUsZUFBTSxNQUFTLFNBQU8sT0FBTTtBQUN2RCxhQUFFLEVBQU0sTUFBYSxhQUFNLE1BQXFCO0FBQ2xELFdBQWdCO0FBQ2Q7QUFDRSxlQUFpQixpQkFBTSxNQUFjO0FBQ25DO0FBQ0UsbUJBQTRCLDRCQUFPLE9BQWEsYUFBUSxRQUF3QjtBQUN0RSw2QkFBNkMsNkNBQWlCLGlCQUd0RjtBQUxjO0FBRko7QUF0QnFCO0FBOEJ4Qix3QkFBYSxlQUF1QixvQiIsImZpbGUiOiJzdXJ2ZXkucmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleVwiLCBbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmMzhiYjgwMWQ5YzY5MDU3ODBmY1xuICoqLyIsIi8vIG1vZGVsXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVua3MvbW9kZWxcIjtcblxuLy8gbG9jYWxpemF0aW9uXG5pbXBvcnQgJy4vY2h1bmtzL2xvY2FsaXphdGlvbic7XG5cbi8vIGNzcyBzdGFuZGFyZFxuZXhwb3J0IHtkZWZhdWx0U3RhbmRhcmRDc3N9IGZyb20gXCIuLi9kZWZhdWx0Q3NzL2Nzc3N0YW5kYXJkXCI7XG4vL2NzcyBmcmFtZXdvcmtzXG5pbXBvcnQgJy4vY2h1bmtzL2Nzc0ZyYW1ld29ya3MnO1xuXG4vLyByZWFjdFxuZXhwb3J0IHtTdXJ2ZXl9IGZyb20gXCIuLi9yZWFjdC9yZWFjdFN1cnZleVwiO1xuZXhwb3J0IHtSZWFjdFN1cnZleU1vZGVsfSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RzdXJ2ZXltb2RlbFwiO1xuZXhwb3J0IHtTdXJ2ZXlOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RTdXJ2ZXlOYXZpZ2F0aW9uXCI7XG5leHBvcnQge1N1cnZleVBhZ2UsIFN1cnZleVJvd30gZnJvbSBcIi4uL3JlYWN0L3JlYWN0cGFnZVwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbiwgIFN1cnZleVF1ZXN0aW9uRXJyb3JzfSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RxdWVzdGlvblwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtLCBTdXJ2ZXlRdWVzdGlvbkNvbW1lbnR9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9uY29tbWVudFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkNoZWNrYm94LCBTdXJ2ZXlRdWVzdGlvbkNoZWNrYm94SXRlbX0gZnJvbSBcIi4uL3JlYWN0L3JlYWN0cXVlc3Rpb25jaGVja2JveFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkRyb3Bkb3dufSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RxdWVzdGlvbmRyb3Bkb3duXCI7XG5leHBvcnQge1N1cnZleVF1ZXN0aW9uTWF0cml4RHJvcGRvd24sIFN1cnZleVF1ZXN0aW9uTWF0cml4RHJvcGRvd25Sb3d9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9ubWF0cml4ZHJvcGRvd25cIjtcbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25NYXRyaXgsIFN1cnZleVF1ZXN0aW9uTWF0cml4Um93fSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RxdWVzdGlvbm1hdHJpeFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkh0bWx9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9uaHRtbFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbkZpbGV9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9uZmlsZVwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbk11bHRpcGxlVGV4dCwgU3VydmV5UXVlc3Rpb25NdWx0aXBsZVRleHRJdGVtfSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RxdWVzdGlvbm11bHRpcGxldGV4dFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvblJhZGlvZ3JvdXB9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9ucmFkaW9ncm91cFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvblRleHR9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9udGV4dFwiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvbk1hdHJpeER5bmFtaWMsIFN1cnZleVF1ZXN0aW9uTWF0cml4RHluYW1pY1Jvd30gZnJvbSBcIi4uL3JlYWN0L3JlYWN0cXVlc3Rpb25tYXRyaXhkeW5hbWljXCI7XG5leHBvcnQge1N1cnZleVByb2dyZXNzfSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RTdXJ2ZXlQcm9ncmVzc1wiO1xuZXhwb3J0IHtTdXJ2ZXlRdWVzdGlvblJhdGluZ30gZnJvbSBcIi4uL3JlYWN0L3JlYWN0cXVlc3Rpb25yYXRpbmdcIjtcbmV4cG9ydCB7U3VydmV5V2luZG93fSBmcm9tIFwiLi4vcmVhY3QvcmVhY3RTdXJ2ZXlXaW5kb3dcIjtcbmV4cG9ydCB7UmVhY3RRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9yZWFjdC9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQge19fZXh0ZW5kc30gZnJvbSBcIi4uL2V4dGVuZHNcIjtcblxuLy9leHBvcnQge2RlZmF1bHQgYXMgU3VydmV5UXVlc3Rpb25EYXRlfSBmcm9tIFwiLi4vcGx1Z2lucy9xdWVzdGlvbmRhdGUvcmVhY3QvcmVhY3RxdWVzdGlvbmRhdGVcIjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbnRyaWVzL3JlYWN0LnRzXG4gKiovIiwiZXhwb3J0IHtcbiAgICBBbnN3ZXJDb3VudFZhbGlkYXRvciwgRW1haWxWYWxpZGF0b3IsIE51bWVyaWNWYWxpZGF0b3IsIFJlZ2V4VmFsaWRhdG9yLFxuICAgIFN1cnZleVZhbGlkYXRvciwgVGV4dFZhbGlkYXRvciwgVmFsaWRhdG9yUmVzdWx0LCBWYWxpZGF0b3JSdW5uZXJcbn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xuZXhwb3J0IHtCYXNlLCBFdmVudCwgSXRlbVZhbHVlLCBTdXJ2ZXlFcnJvciwgSVN1cnZleX0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmV4cG9ydCB7Q2hvaWNlc1Jlc3RmdWxsfSBmcm9tIFwiLi4vLi4vY2hvaWNlc1Jlc3RmdWxsXCI7XG5leHBvcnQge0NvbmRpdGlvbiwgQ29uZGl0aW9uTm9kZSwgQ29uZGl0aW9uUnVubmVyfSBmcm9tIFwiLi4vLi4vY29uZGl0aW9uc1wiO1xuZXhwb3J0IHtDb25kaXRpb25zUGFyc2VyfSBmcm9tIFwiLi4vLi4vY29uZGl0aW9uc1BhcnNlclwiO1xuZXhwb3J0IHtDdXN0b21FcnJvciwgRXhjZWVkU2l6ZUVycm9yLCBSZXF1cmVOdW1lcmljRXJyb3J9IGZyb20gXCIuLi8uLi9lcnJvclwiO1xuZXhwb3J0IHtcbiAgICBKc29uRXJyb3IsIEpzb25JbmNvcnJlY3RUeXBlRXJyb3IsIEpzb25NZXRhZGF0YSwgSnNvbk1ldGFkYXRhQ2xhc3MsXG4gICAgSnNvbk1pc3NpbmdUeXBlRXJyb3IsIEpzb25NaXNzaW5nVHlwZUVycm9yQmFzZSwgSnNvbk9iamVjdCwgSnNvbk9iamVjdFByb3BlcnR5LFxuICAgIEpzb25SZXF1aXJlZFByb3BlcnR5RXJyb3IsIEpzb25Vbmtub3duUHJvcGVydHlFcnJvclxufSBmcm9tIFwiLi4vLi4vanNvbm9iamVjdFwiO1xuZXhwb3J0IHtcbiAgICBNYXRyaXhEcm9wZG93bkNlbGwsIE1hdHJpeERyb3Bkb3duQ29sdW1uLCBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSxcbiAgICBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlXG59IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcbmV4cG9ydCB7TWF0cml4RHJvcGRvd25Sb3dNb2RlbCwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25cIjtcbmV4cG9ydCB7TWF0cml4RHluYW1pY1Jvd01vZGVsLCBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX21hdHJpeGR5bmFtaWNcIjtcbmV4cG9ydCB7TWF0cml4Um93TW9kZWwsIFF1ZXN0aW9uTWF0cml4TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9tYXRyaXhcIjtcbmV4cG9ydCB7TXVsdGlwbGVUZXh0SXRlbU1vZGVsLCBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbXVsdGlwbGV0ZXh0XCI7XG5leHBvcnQge1BhZ2VNb2RlbCwgUXVlc3Rpb25Sb3dNb2RlbH0gZnJvbSBcIi4uLy4uL3BhZ2VcIjtcbmV4cG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi8uLi9xdWVzdGlvblwiO1xuZXhwb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi8uLi9xdWVzdGlvbmJhc2VcIjtcbmV4cG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2UsIFF1ZXN0aW9uU2VsZWN0QmFzZX0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcbmV4cG9ydCB7UXVlc3Rpb25DaGVja2JveE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fY2hlY2tib3hcIjtcbmV4cG9ydCB7UXVlc3Rpb25Db21tZW50TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9jb21tZW50XCI7XG5leHBvcnQgeyBRdWVzdGlvbkRyb3Bkb3duTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9kcm9wZG93blwiO1xuZXhwb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi8uLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmV4cG9ydCB7UXVlc3Rpb25GaWxlTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9maWxlXCI7XG5leHBvcnQge1F1ZXN0aW9uSHRtbE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25faHRtbFwiO1xuZXhwb3J0IHtRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX3JhZGlvZ3JvdXBcIjtcbmV4cG9ydCB7UXVlc3Rpb25SYXRpbmdNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX3JhdGluZ1wiO1xuZXhwb3J0IHtRdWVzdGlvblRleHRNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX3RleHRcIjtcbmV4cG9ydCB7U3VydmV5TW9kZWx9IGZyb20gXCIuLi8uLi9zdXJ2ZXlcIjtcbmV4cG9ydCB7XG4gICAgU3VydmV5VHJpZ2dlciwgU3VydmV5VHJpZ2dlckNvbXBsZXRlLCBTdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUsIFN1cnZleVRyaWdnZXJWaXNpYmxlLFxuICAgIFRyaWdnZXJcbn0gZnJvbSBcIi4uLy4uL3RyaWdnZXJcIjtcbmV4cG9ydCB7U3VydmV5V2luZG93TW9kZWx9IGZyb20gXCIuLi8uLi9zdXJ2ZXlXaW5kb3dcIjtcbmV4cG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4uLy4uL3RleHRQcmVQcm9jZXNzb3JcIjtcblxuZXhwb3J0IHtkeFN1cnZleVNlcnZpY2V9IGZyb20gXCIuLi8uLi9keFN1cnZleVNlcnZpY2VcIjtcbmV4cG9ydCB7c3VydmV5TG9jYWxpemF0aW9uLCBzdXJ2ZXlTdHJpbmdzfSBmcm9tIFwiLi4vLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VudHJpZXMvY2h1bmtzL21vZGVsLnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtDdXN0b21FcnJvciwgUmVxdXJlTnVtZXJpY0Vycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBhbnksIHB1YmxpYyBlcnJvcjogU3VydmV5RXJyb3IgPSBudWxsKSB7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VmFsaWRhdG9yIGV4dGVuZHMgQmFzZSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRFcnJvclRleHQobmFtZTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnRleHQpIHJldHVybiB0aGlzLnRleHQ7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRFcnJvclRleHQobmFtZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0RXJyb3JUZXh0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRvck93bmVyIHtcbiAgICB2YWxpZGF0b3JzOiBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+O1xuICAgIHZhbHVlOiBhbnk7XG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJ1bm5lciB7XG4gICAgcHVibGljIHJ1bihvd25lcjogSVZhbGlkYXRvck93bmVyKTogU3VydmV5RXJyb3Ige1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG93bmVyLnZhbGlkYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3JSZXN1bHQgPSBvd25lci52YWxpZGF0b3JzW2ldLnZhbGlkYXRlKG93bmVyLnZhbHVlLCBvd25lci5nZXRWYWxpZGF0b3JUaXRsZSgpKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQuZXJyb3IpIHJldHVybiB2YWxpZGF0b3JSZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvclJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvd25lci52YWx1ZSA9IHZhbGlkYXRvclJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTnVtZXJpY1ZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1pblZhbHVlOiBudW1iZXIgPSBudWxsLCBwdWJsaWMgbWF4VmFsdWU6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibnVtZXJpY3ZhbGlkYXRvclwiOyB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICBpZiAoIXZhbHVlIHx8ICF0aGlzLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IFJlcXVyZU51bWVyaWNFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWluVmFsdWUgPiByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heFZhbHVlICYmIHRoaXMubWF4VmFsdWUgPCByZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5lcnJvciA9IG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgPyBudWxsIDogcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHZOYW1lID0gbmFtZSA/IG5hbWUgOiBcInZhbHVlXCI7XG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibnVtZXJpY01pbk1heFwiKVtcImZvcm1hdFwiXSh2TmFtZSwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibnVtZXJpY01pblwiKVtcImZvcm1hdFwiXSh2TmFtZSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNNYXhcIilbXCJmb3JtYXRcIl0odk5hbWUsIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaXNOdW1iZXIodmFsdWUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidGV4dHZhbGlkYXRvclwiOyB9XG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xuICAgICAgICBpZiAodGhpcy5taW5MZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ0ZXh0TWluTGVuZ3RoXCIpW1wiZm9ybWF0XCJdKHRoaXMubWluTGVuZ3RoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJDb3VudFZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1pbkNvdW50OiBudW1iZXIgPSBudWxsLCBwdWJsaWMgbWF4Q291bnQ6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiYW5zd2VyY291bnR2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUuY29uc3RydWN0b3IgIT0gQXJyYXkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgY291bnQgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLm1pbkNvdW50ICYmIGNvdW50IDwgdGhpcy5taW5Db3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtaW5TZWxlY3RFcnJvclwiKVtcImZvcm1hdFwiXSh0aGlzLm1pbkNvdW50KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXhDb3VudCAmJiBjb3VudCA+IHRoaXMubWF4Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KG51bGwsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWF4U2VsZWN0RXJyb3JcIilbXCJmb3JtYXRcIl0odGhpcy5tYXhDb3VudCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0RXJyb3JUZXh0KG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdleFZhbGlkYXRvciBleHRlbmRzIFN1cnZleVZhbGlkYXRvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlZ2V4OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlZ2V4dmFsaWRhdG9yXCI7IH1cbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XG4gICAgICAgIGlmICghdGhpcy5yZWdleCB8fCAhdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHRoaXMucmVnZXgpO1xuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdCh2YWx1ZSwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KG5hbWUpKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHJlID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZW1haWx2YWxpZGF0b3JcIjsgfVxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJlLnRlc3QodmFsdWUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQodmFsdWUsIG5ldyBDdXN0b21FcnJvcih0aGlzLmdldEVycm9yVGV4dChuYW1lKSkpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJpbnZhbGlkRW1haWxcIik7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic3VydmV5dmFsaWRhdG9yXCIsIFtcInRleHRcIl0pO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm51bWVyaWN2YWxpZGF0b3JcIiwgW1wibWluVmFsdWU6bnVtYmVyXCIsIFwibWF4VmFsdWU6bnVtYmVyXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTnVtZXJpY1ZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0ZXh0dmFsaWRhdG9yXCIsIFtcIm1pbkxlbmd0aDpudW1iZXJcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBUZXh0VmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImFuc3dlcmNvdW50dmFsaWRhdG9yXCIsIFtcIm1pbkNvdW50Om51bWJlclwiLCBcIm1heENvdW50Om51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEFuc3dlckNvdW50VmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInJlZ2V4dmFsaWRhdG9yXCIsIFtcInJlZ2V4XCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUmVnZXhWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZW1haWx2YWxpZGF0b3JcIiwgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBFbWFpbFZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWxpZGF0b3IudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gX19leHRlbmRzIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX2V4dGVuZHM7XG59XG5cbmV4cG9ydHMuX19leHRlbmRzID0gX19leHRlbmRzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4dGVuZHMudHNcbiAqKi8iLCJleHBvcnQgaW50ZXJmYWNlIEhhc2hUYWJsZTxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleURhdGEge1xuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueTtcbiAgICBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpO1xuICAgIGdldENvbW1lbnQobmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleSBleHRlbmRzIElTdXJ2ZXlEYXRhIHtcbiAgICBjdXJyZW50UGFnZTogSVBhZ2U7XG4gICAgcGFnZVZpc2liaWxpdHlDaGFuZ2VkKHBhZ2U6IElQYWdlLCBuZXdWYWx1ZTogYm9vbGVhbik7XG4gICAgcXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBuZXdWYWx1ZTogYm9vbGVhbik7XG4gICAgcXVlc3Rpb25BZGRlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBpbmRleDogbnVtYmVyKTtcbiAgICBxdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IElRdWVzdGlvbik7XG4gICAgdmFsaWRhdGVRdWVzdGlvbihuYW1lOiBzdHJpbmcpOiBTdXJ2ZXlFcnJvcjtcbiAgICBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGlzRGVzaWduTW9kZTogYm9vbGVhbjtcbiAgICByZXF1aXJlZFRleHQ6IHN0cmluZztcbiAgICBxdWVzdGlvblN0YXJ0SW5kZXg6IHN0cmluZztcbiAgICBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHN0cmluZztcbiAgICBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbjtcbiAgICB1cGxvYWRGaWxlKG5hbWU6IHN0cmluZywgZmlsZTogRmlsZSwgc3RvcmVEYXRhQXNUZXh0OiBib29sZWFuLCB1cGxvYWRpbmdDYWxsYmFjazogKHN0YXR1czogc3RyaW5nKSA9PiBhbnkpOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ29uZGl0aW9uUnVubmVyIHtcbiAgICBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pik7XG59XG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdGlvbiBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGhhc1RpdGxlOiBib29sZWFuO1xuICAgIHNldFZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKTtcbiAgICBvblN1cnZleVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KTtcbiAgICBvblN1cnZleUxvYWQoKTtcbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJUGFnZSBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtVmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgU2VwYXJhdG9yID0gJ3wnO1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGF0YShpdGVtczogQXJyYXk8SXRlbVZhbHVlPiwgdmFsdWVzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBJdGVtVmFsdWUobnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mICh2YWx1ZS52YWx1ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0ID0gdHlwZW9mICh2YWx1ZS5oYXNUZXh0KSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZS5pdGVtVGV4dCA6IHZhbHVlW1widGV4dFwiXTtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWVbXCJ2YWx1ZVwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGEoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4pOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyB2YWx1ZTogaXRlbS52YWx1ZSwgdGV4dDogaXRlbS50ZXh0IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGl0ZW1WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgaXRlbVRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCB0ZXh0OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiaXRlbXZhbHVlXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLml0ZW1WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLml0ZW1WYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBzdHI6IHN0cmluZyA9IHRoaXMuaXRlbVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBpbmRleCA9IHN0ci5pbmRleE9mKEl0ZW1WYWx1ZS5TZXBhcmF0b3IpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtVmFsdWUgPSBzdHIuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gc3RyLnNsaWNlKGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNUZXh0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pdGVtVGV4dCA/IHRydWUgOiBmYWxzZTsgfVxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5oYXNUZXh0KSByZXR1cm4gdGhpcy5pdGVtVGV4dDtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQobmV3VGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbVRleHQgPSBuZXdUZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QnKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5RXJyb3Ige1xuICAgIHB1YmxpYyBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudDxUIGV4dGVuZHMgRnVuY3Rpb24sIE9wdGlvbnM+ICB7XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IEFycmF5PFQ+O1xuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY2FsbGJhY2tzID09IG51bGwgfHwgdGhpcy5jYWxsYmFja3MubGVuZ3RoID09IDA7IH1cbiAgICBwdWJsaWMgZmlyZShzZW5kZXI6IGFueSwgb3B0aW9uczogT3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FsbGJhY2tzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdmFyIGNhbGxSZXN1bHQgPSB0aGlzLmNhbGxiYWNrc1tpXShzZW5kZXIsIG9wdGlvbnMpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFkZChmdW5jOiBUKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmUoZnVuYzogVCkge1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNhbGxiYWNrcy5pbmRleE9mKGZ1bmMsIDApO1xuICAgICAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Jhc2UudHNcbiAqKi8iLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSAnLi9zdXJ2ZXlTdHJpbmdzJztcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEFuc3dlclJlcXVpcmVkRXJyb3IgZXh0ZW5kcyBTdXJ2ZXlFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSAge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkRXJyb3JcIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlcXVyZU51bWVyaWNFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJudW1lcmljRXJyb3JcIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEV4Y2VlZFNpemVFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBwcml2YXRlIG1heFNpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihtYXhTaXplOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJleGNlZWRNYXhTaXplXCIpW1wiZm9ybWF0XCJdKHRoaXMuZ2V0VGV4dFNpemUoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dFNpemUoKSB7XG4gICAgICAgIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICAgICAgdmFyIGZpeGVkID0gWzAsIDAsIDIsIDMsIDNdO1xuICAgICAgICBpZiAodGhpcy5tYXhTaXplID09IDApIHJldHVybiAnMCBCeXRlJztcbiAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKHRoaXMubWF4U2l6ZSkgLyBNYXRoLmxvZygxMDI0KSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubWF4U2l6ZSAvIE1hdGgucG93KDEwMjQsIGkpO1xuICAgICAgICByZXR1cm4gdmFsdWUudG9GaXhlZChmaXhlZFtpXSkgKyAnICcgKyBzaXplc1tpXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXJyb3IudHNcbiAqKi8iLCJleHBvcnQgdmFyIHN1cnZleUxvY2FsaXphdGlvbiA9IHtcbiAgICBjdXJyZW50TG9jYWxlOiBcIlwiLFxuICAgIGxvY2FsZXM6IHt9LFxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50TG9jYWxlID8gdGhpcy5sb2NhbGVzW3RoaXMuY3VycmVudExvY2FsZV0gOiBzdXJ2ZXlTdHJpbmdzO1xuICAgICAgICBpZiAoIWxvYyB8fCAhbG9jW3N0ck5hbWVdKSBsb2MgPSBzdXJ2ZXlTdHJpbmdzO1xuICAgICAgICByZXR1cm4gbG9jW3N0ck5hbWVdO1xuICAgIH0sXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zb3J0KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IHtcbiAgICBwYWdlUHJldlRleHQ6IFwiUHJldmlvdXNcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiTmV4dFwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCJDb21wbGV0ZVwiLFxuICAgIG90aGVySXRlbVRleHQ6IFwiT3RoZXIgKGRlc2NyaWJlKVwiLFxuICAgIHByb2dyZXNzVGV4dDogXCJQYWdlIHswfSBvZiB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJUaGVyZSBpcyBubyBhbnkgdmlzaWJsZSBwYWdlIG9yIHZpc2libGUgcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIlRoYW5rIFlvdSBmb3IgQ29tcGxldGluZyB0aGUgU3VydmV5IVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiU3VydmV5IGlzIGxvYWRpbmcgZnJvbSB0aGUgc2VydmVyLi4uXCIsXG4gICAgb3B0aW9uc0NhcHRpb246IFwiQ2hvb3NlLi4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCJQbGVhc2UgYW5zd2VyIHRoZSBxdWVzdGlvbi5cIixcbiAgICByZXF1aXJlZEluQWxsUm93c0Vycm9yOiBcIlBsZWFzZSBhbnN3ZXIgcXVlc3Rpb25zIGluIGFsbCByb3dzLlwiLFxuICAgIG51bWVyaWNFcnJvcjogXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgbnVtZXJpYy5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gc3ltYm9scy5cIixcbiAgICBtaW5Sb3dDb3VudEVycm9yOiBcIlBsZWFzZSBmaWxsIGF0IGxlYXN0IHswfSByb3dzLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3QgezB9IHZhcmlhbnRzLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIlBsZWFzZSBzZWxlY3Qgbm90IG1vcmUgdGhhbiB7MH0gdmFyaWFudHMuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCJUaGUgJ3swfScgc2hvdWxkIGJlIGVxdWFsIG9yIG1vcmUgdGhhbiB7MX0gYW5kIGVxdWFsIG9yIGxlc3MgdGhhbiB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIlRoZSAnezB9JyBzaG91bGQgYmUgZXF1YWwgb3IgbW9yZSB0aGFuIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBsZXNzIHRoYW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGUtbWFpbC5cIixcbiAgICB1cmxSZXF1ZXN0RXJyb3I6IFwiVGhlIHJlcXVlc3QgcmV0dXJuIGVycm9yICd7MH0nLiB7MX1cIixcbiAgICB1cmxHZXRDaG9pY2VzRXJyb3I6IFwiVGhlIHJlcXVlc3QgcmV0dXJucyBlbXB0eSBkYXRhIG9yIHRoZSAncGF0aCcgcHJvcGVydHkgaXMgaW5jb3JyZWN0XCIsXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJUaGUgZmlsZSBzaXplIHNob3VsZCBub3QgZXhjZWVkIHswfS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiUGxlYXNlIGVudGVyIHRoZSBvdGhlcnMgdmFsdWUuXCIsXG4gICAgdXBsb2FkaW5nRmlsZTogXCJZb3VyIGZpbGUgaXMgdXBsb2FkaW5nLiBQbGVhc2Ugd2FpdCBzZXZlcmFsIHNlY29uZHMgYW5kIHRyeSBhZ2Fpbi5cIixcbiAgICBhZGRSb3c6IFwiQWRkIFJvd1wiLFxuICAgIHJlbW92ZVJvdzogXCJSZW1vdmVcIlxufTtcbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZW5cIl0gPSBzdXJ2ZXlTdHJpbmdzO1xuXG5pZiAoIVN0cmluZy5wcm90b3R5cGVbXCJmb3JtYXRcIl0pIHtcbiAgICBTdHJpbmcucHJvdG90eXBlW1wiZm9ybWF0XCJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgveyhcXGQrKX0vZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJnc1tudW1iZXJdICE9ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBhcmdzW251bWJlcl1cbiAgICAgICAgICAgICAgICA6IG1hdGNoXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cnZleVN0cmluZ3MudHNcbiAqKi8iLCJpbXBvcnQge0hhc2hUYWJsZX0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNsYXNzIEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgcHJpdmF0ZSB0eXBlVmFsdWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWU6IEFycmF5PGFueT4gPSBudWxsO1xuICAgIHByaXZhdGUgY2hvaWNlc2Z1bmM6ICgpID0+IEFycmF5PGFueT4gPSBudWxsO1xuICAgIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGNsYXNzTmFtZVBhcnQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGJhc2VDbGFzc05hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgb25HZXRWYWx1ZTogKG9iajogYW55KSA9PiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBvblNldFZhbHVlOiAob2JqOiBhbnksIHZhbHVlOiBhbnksIGpzb25Db252OiBKc29uT2JqZWN0KSA9PiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnR5cGVWYWx1ZSA/IHRoaXMudHlwZVZhbHVlIDogXCJzdHJpbmdcIjsgfVxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudHlwZVZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGhhc1RvVXNlR2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLm9uR2V0VmFsdWU7IH1cbiAgICBwdWJsaWMgaXNEZWZhdWx0VmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGVmYXVsdFZhbHVlKSA/ICh0aGlzLmRlZmF1bHRWYWx1ZSA9PSB2YWx1ZSkgOiAhKHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldFZhbHVlKG9iajogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMub25HZXRWYWx1ZSkgcmV0dXJuIHRoaXMub25HZXRWYWx1ZShvYmopO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNUb1VzZVNldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5vblNldFZhbHVlOyB9XG4gICAgcHVibGljIHNldFZhbHVlKG9iajogYW55LCB2YWx1ZTogYW55LCBqc29uQ29udjogSnNvbk9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5vblNldFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2V0VmFsdWUob2JqLCB2YWx1ZSwganNvbkNvbnYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXRPYmpUeXBlKG9ialR5cGU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuY2xhc3NOYW1lUGFydCkgcmV0dXJuIG9ialR5cGU7XG4gICAgICAgIHJldHVybiBvYmpUeXBlLnJlcGxhY2UodGhpcy5jbGFzc05hbWVQYXJ0LCBcIlwiKTtcbiAgICB9XG4gICAgcHVibGljIGdldENsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5jbGFzc05hbWVQYXJ0ICYmIGNsYXNzTmFtZS5pbmRleE9mKHRoaXMuY2xhc3NOYW1lUGFydCkgPCAwKSA/IGNsYXNzTmFtZSArIHRoaXMuY2xhc3NOYW1lUGFydCA6IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjaG9pY2VzKCk6IEFycmF5PGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzVmFsdWUgIT0gbnVsbCkgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzZnVuYyAhPSBudWxsKSByZXR1cm4gdGhpcy5jaG9pY2VzZnVuYygpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIHNldENob2ljZXModmFsdWU6IEFycmF5PGFueT4sIHZhbHVlRnVuYzogKCkgPT4gQXJyYXk8YW55Pikge1xuICAgICAgICB0aGlzLmNob2ljZXNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNob2ljZXNmdW5jID0gdmFsdWVGdW5jO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uTWV0YWRhdGFDbGFzcyB7XG4gICAgc3RhdGljIHJlcXVpcmVkU3ltYm9sID0gJyEnO1xuICAgIHN0YXRpYyB0eXBlU3ltYm9sID0gJzonO1xuICAgIHByb3BlcnRpZXM6IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4gPSBudWxsO1xuICAgIHJlcXVpcmVkUHJvcGVydGllczogQXJyYXk8c3RyaW5nPiA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHJvcGVydGllczogQXJyYXk8YW55PiwgcHVibGljIGNyZWF0b3I6ICgpID0+IGFueSA9IG51bGwsIHB1YmxpYyBwYXJlbnROYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHByb3BlcnRpZXNbaV0pO1xuICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZmluZChuYW1lOiBzdHJpbmcpOiBKc29uT2JqZWN0UHJvcGVydHkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlUHJvcGVydHkocHJvcEluZm86IGFueSk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB0eXBlb2YgcHJvcEluZm8gPT09IFwic3RyaW5nXCIgPyBwcm9wSW5mbyA6IHByb3BJbmZvLm5hbWU7XG4gICAgICAgIGlmICghcHJvcGVydHlOYW1lKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9wZXJ0eVR5cGUgPSBudWxsO1xuICAgICAgICB2YXIgdHlwZUluZGV4ID0gcHJvcGVydHlOYW1lLmluZGV4T2YoSnNvbk1ldGFkYXRhQ2xhc3MudHlwZVN5bWJvbCk7XG4gICAgICAgIGlmICh0eXBlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cmluZyh0eXBlSW5kZXggKyAxKTtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcoMCwgdHlwZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLmdldFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB2YXIgcHJvcCA9IG5ldyBKc29uT2JqZWN0UHJvcGVydHkocHJvcGVydHlOYW1lKTtcbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZSkge1xuICAgICAgICAgICAgcHJvcC50eXBlID0gcHJvcGVydHlUeXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcEluZm8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wSW5mby50eXBlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC50eXBlID0gcHJvcEluZm8udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgcHJvcC5kZWZhdWx0VmFsdWUgPSBwcm9wSW5mby5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3AubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uY2hvaWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBjaG9pY2VzRnVuYyA9IHR5cGVvZiBwcm9wSW5mby5jaG9pY2VzID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wSW5mby5jaG9pY2VzIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgY2hvaWNlc1ZhbHVlID0gdHlwZW9mIHByb3BJbmZvLmNob2ljZXMgIT09IFwiZnVuY3Rpb25cIiA/IHByb3BJbmZvLmNob2ljZXMgOiBudWxsO1xuICAgICAgICAgICAgICAgIHByb3Auc2V0Q2hvaWNlcyhjaG9pY2VzVmFsdWUsIGNob2ljZXNGdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5vbkdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5vbkdldFZhbHVlID0gcHJvcEluZm8ub25HZXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5vblNldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5vblNldFZhbHVlID0gcHJvcEluZm8ub25TZXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wLmNsYXNzTmFtZSA9IHByb3BJbmZvLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5iYXNlQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvcC5iYXNlQ2xhc3NOYW1lID0gcHJvcEluZm8uYmFzZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5jbGFzc05hbWVQYXJ0KSB7XG4gICAgICAgICAgICAgICAgcHJvcC5jbGFzc05hbWVQYXJ0ID0gcHJvcEluZm8uY2xhc3NOYW1lUGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lLmxlbmd0aCA9PSAwIHx8IHByb3BlcnR5TmFtZVswXSAhPSBKc29uTWV0YWRhdGFDbGFzcy5yZXF1aXJlZFN5bWJvbCkgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lLnNsaWNlKDEpO1xuICAgICAgICB0aGlzLm1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuICAgIHByaXZhdGUgbWFrZVByb3BlcnR5UmVxdWlyZWQocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlcXVpcmVkUHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZFByb3BlcnRpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWlyZWRQcm9wZXJ0aWVzLnB1c2gocHJvcGVydHlOYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvbk1ldGFkYXRhIHtcbiAgICBwcml2YXRlIGNsYXNzZXM6IEhhc2hUYWJsZTxKc29uTWV0YWRhdGFDbGFzcz4gPSB7fTtcbiAgICBwcml2YXRlIGNoaWxkcmVuQ2xhc3NlczogSGFzaFRhYmxlPEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPj4gPSB7fTtcbiAgICBwcml2YXRlIGNsYXNzUHJvcGVydGllczogSGFzaFRhYmxlPEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4+ID0ge307XG4gICAgcHJpdmF0ZSBjbGFzc1JlcXVpcmVkUHJvcGVydGllczogSGFzaFRhYmxlPEFycmF5PHN0cmluZz4+ID0ge307XG4gICAgcHVibGljIGFkZENsYXNzKG5hbWU6IHN0cmluZywgcHJvcGVydGllczogQXJyYXk8YW55PiwgY3JlYXRvcjogKCkgPT4gYW55ID0gbnVsbCwgcGFyZW50TmFtZTogc3RyaW5nID0gbnVsbCk6IEpzb25NZXRhZGF0YUNsYXNzIHtcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSBuZXcgSnNvbk1ldGFkYXRhQ2xhc3MobmFtZSwgcHJvcGVydGllcywgY3JlYXRvciwgcGFyZW50TmFtZSk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1tuYW1lXSA9IG1ldGFEYXRhQ2xhc3M7XG4gICAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuQ2xhc3Nlc1twYXJlbnROYW1lXTtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuQ2xhc3Nlc1twYXJlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV0ucHVzaChtZXRhRGF0YUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YURhdGFDbGFzcztcbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlQ2xhc3NDcmVhdG9yZShuYW1lOiBzdHJpbmcsIGNyZWF0b3I6ICgpID0+IGFueSkge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcykge1xuICAgICAgICAgICAgbWV0YURhdGFDbGFzcy5jcmVhdG9yID0gY3JlYXRvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydGllcyhuYW1lOiBzdHJpbmcpOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmNsYXNzUHJvcGVydGllc1tuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbmV3IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4oKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFByb3BlcnRpZXMobmFtZSwgcHJvcGVydGllcyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzUHJvcGVydGllc1tuYW1lXSA9IHByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBjcmVhdGVDbGFzcyhuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbWV0YURhdGFDbGFzcy5jcmVhdG9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDaGlsZHJlbkNsYXNzZXMobmFtZTogc3RyaW5nLCBjYW5CZUNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdGhpcy5maWxsQ2hpbGRyZW5DbGFzc2VzKG5hbWUsIGNhbkJlQ3JlYXRlZCwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldFJlcXVpcmVkUHJvcGVydGllcyhuYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmNsYXNzUmVxdWlyZWRQcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgdGhpcy5maWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG5hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc1JlcXVpcmVkUHJvcGVydGllc1tuYW1lXSA9IHByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZmlsbENoaWxkcmVuQ2xhc3NlcyhuYW1lOiBzdHJpbmcsIGNhbkJlQ3JlYXRlZDogYm9vbGVhbiwgcmVzdWx0OiBBcnJheTxKc29uTWV0YWRhdGFDbGFzcz4pIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbkNsYXNzZXNbbmFtZV07XG4gICAgICAgIGlmICghY2hpbGRyZW4pIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjYW5CZUNyZWF0ZWQgfHwgY2hpbGRyZW5baV0uY3JlYXRvcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsbENoaWxkcmVuQ2xhc3NlcyhjaGlsZHJlbltpXS5uYW1lLCBjYW5CZUNyZWF0ZWQsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBmaW5kQ2xhc3MobmFtZTogc3RyaW5nKTogSnNvbk1ldGFkYXRhQ2xhc3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2VzW25hbWVdO1xuICAgIH1cbiAgICBwcml2YXRlIGZpbGxQcm9wZXJ0aWVzKG5hbWU6IHN0cmluZywgbGlzdDogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5Pikge1xuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybjtcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5maWxsUHJvcGVydGllcyhtZXRhRGF0YUNsYXNzLnBhcmVudE5hbWUsIGxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFByb3BlcnR5KG1ldGFEYXRhQ2xhc3MucHJvcGVydGllc1tpXSwgbGlzdCwgbGlzdC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYWRkUHJvcGVydHkocHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSwgbGlzdDogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PiwgZW5kSW5kZXg6IG51bWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobGlzdFtpXS5uYW1lID09IHByb3BlcnR5Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgbGlzdC5wdXNoKHByb3BlcnR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdFtpbmRleF0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbGxSZXF1aXJlZFByb3BlcnRpZXMobmFtZTogc3RyaW5nLCBsaXN0OiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MobmFtZSk7XG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuO1xuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5yZXF1aXJlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGxpc3QsIG1ldGFEYXRhQ2xhc3MucmVxdWlyZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxSZXF1aXJlZFByb3BlcnRpZXMobWV0YURhdGFDbGFzcy5wYXJlbnROYW1lLCBsaXN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uRXJyb3Ige1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgYXQ6IE51bWJlciA9IC0xO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB9XG4gICAgcHVibGljIGdldEZ1bGxEZXNjcmlwdGlvbigpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZSArICh0aGlzLmRlc2NyaXB0aW9uID8gXCJcXG5cIiArIHRoaXMuZGVzY3JpcHRpb24gOiBcIlwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSnNvblVua25vd25Qcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcInVua25vd25wcm9wZXJ0eVwiLCBcIlRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgaW4gY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInIGlzIHVua25vd24uXCIpO1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgYXJlOiBcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkgdGhpcy5kZXNjcmlwdGlvbiArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBwcm9wZXJ0aWVzW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uICs9ICcuJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2UgZXh0ZW5kcyBKc29uRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgbWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRoZSBmb2xsb3dpbmcgdHlwZXMgYXJlIGF2YWlsYWJsZTogXCI7XG4gICAgICAgIHZhciB0eXBlcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKGJhc2VDbGFzc05hbWUsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHRoaXMuZGVzY3JpcHRpb24gKz0gXCIsIFwiO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBcIidcIiArIHR5cGVzW2ldLm5hbWUgKyBcIidcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uICs9IFwiLlwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uTWlzc2luZ1R5cGVFcnJvciBleHRlbmRzIEpzb25NaXNzaW5nVHlwZUVycm9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGJhc2VDbGFzc05hbWUsIFwibWlzc2luZ3R5cGVwcm9wZXJ0eVwiLCBcIlRoZSBwcm9wZXJ0eSB0eXBlIGlzIG1pc3NpbmcgaW4gdGhlIG9iamVjdC4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHByb3BlcnR5OiAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uSW5jb3JyZWN0VHlwZUVycm9yIGV4dGVuZHMgSnNvbk1pc3NpbmdUeXBlRXJyb3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYmFzZUNsYXNzTmFtZSwgXCJpbmNvcnJlY3R0eXBlcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgdHlwZSBpcyBpbmNvcnJlY3QgaW4gdGhlIG9iamVjdC4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHByb3BlcnR5OiAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcInJlcXVpcmVkcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGlzIHJlcXVpcmVkIGluIGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJy5cIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSnNvbk9iamVjdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVByb3BlcnR5TmFtZSA9IFwidHlwZVwiO1xuICAgIHByaXZhdGUgc3RhdGljIHBvc2l0aW9uUHJvcGVydHlOYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhRGF0YVZhbHVlID0gbmV3IEpzb25NZXRhZGF0YSgpO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1ldGFEYXRhKCkgeyByZXR1cm4gSnNvbk9iamVjdC5tZXRhRGF0YVZhbHVlOyB9XG4gICAgcHVibGljIGVycm9ycyA9IG5ldyBBcnJheTxKc29uRXJyb3I+KCk7XG4gICAgcHVibGljIHRvSnNvbk9iamVjdChvYmo6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvSnNvbk9iamVjdENvcmUob2JqLCBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIHRvT2JqZWN0KGpzb25PYmo6IGFueSwgb2JqOiBhbnkpIHtcbiAgICAgICAgaWYgKCFqc29uT2JqKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbDtcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKG9iai5nZXRUeXBlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbk9iaikge1xuICAgICAgICAgICAgaWYgKGtleSA9PSBKc29uT2JqZWN0LnR5cGVQcm9wZXJ0eU5hbWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGtleSA9PSBKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLmZpbmRQcm9wZXJ0eShwcm9wZXJ0aWVzLCBrZXkpO1xuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IobmV3IEpzb25Vbmtub3duUHJvcGVydHlFcnJvcihrZXkudG9TdHJpbmcoKSwgb2JqLmdldFR5cGUoKSksIGpzb25PYmopO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZVRvT2JqKGpzb25PYmpba2V5XSwgb2JqLCBrZXksIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdG9Kc29uT2JqZWN0Q29yZShvYmo6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSk6IGFueSB7XG4gICAgICAgIGlmICghb2JqLmdldFR5cGUpIHJldHVybiBvYmo7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9IG51bGwgJiYgKCFwcm9wZXJ0eS5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHRbSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lXSA9IHByb3BlcnR5LmdldE9ialR5cGUob2JqLmdldFR5cGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVG9Kc29uKG9iaiwgcmVzdWx0LCBwcm9wZXJ0aWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0pzb24ob2JqOiBhbnksIHJlc3VsdDogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5LmdldFZhbHVlKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG9ialtwcm9wZXJ0eS5uYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuaXNEZWZhdWx0VmFsdWUodmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBhcnJWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyclZhbHVlLnB1c2godGhpcy50b0pzb25PYmplY3RDb3JlKHZhbHVlW2ldLCBwcm9wZXJ0eSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBhcnJWYWx1ZS5sZW5ndGggPiAwID8gYXJyVmFsdWUgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnRvSnNvbk9iamVjdENvcmUodmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5Lm5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9PYmoodmFsdWU6IGFueSwgb2JqOiBhbnksIGtleTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5Lmhhc1RvVXNlU2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5LnNldFZhbHVlKG9iaiwgdmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVUb0FycmF5KHZhbHVlLCBvYmosIGtleSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdPYmogPSB0aGlzLmNyZWF0ZU5ld09iaih2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICBpZiAobmV3T2JqLm5ld09iaikge1xuICAgICAgICAgICAgdGhpcy50b09iamVjdCh2YWx1ZSwgbmV3T2JqLm5ld09iaik7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld09iai5uZXdPYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuZXdPYmouZXJyb3IpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlQXJyYXkodmFsdWU6IGFueSk6IGJvb2xlYW4geyByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IudG9TdHJpbmcoKS5pbmRleE9mKFwiQXJyYXlcIikgPiAtMTsgfVxuICAgIHByaXZhdGUgY3JlYXRlTmV3T2JqKHZhbHVlOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyBuZXdPYmo6IG51bGwsIGVycm9yOiBudWxsIH07XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSB2YWx1ZVtKc29uT2JqZWN0LnR5cGVQcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSAmJiBwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5LmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvcGVydHkuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BlcnR5LmdldENsYXNzTmFtZShjbGFzc05hbWUpO1xuICAgICAgICByZXN1bHQubmV3T2JqID0gKGNsYXNzTmFtZSkgPyBKc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGNsYXNzTmFtZSkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZXJyb3IgPSB0aGlzLmNoZWNrTmV3T2JqZWN0T25FcnJvcnMocmVzdWx0Lm5ld09iaiwgdmFsdWUsIHByb3BlcnR5LCBjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrTmV3T2JqZWN0T25FcnJvcnMobmV3T2JqOiBhbnksIHZhbHVlOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHksIGNsYXNzTmFtZTogc3RyaW5nKTogSnNvbkVycm9yIHtcbiAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVkUHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UmVxdWlyZWRQcm9wZXJ0aWVzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAocmVxdWlyZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXF1aXJlZFByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZVtyZXF1aXJlZFByb3BlcnRpZXNbaV1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yKHJlcXVpcmVkUHJvcGVydGllc1tpXSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmJhc2VDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uTWlzc2luZ1R5cGVFcnJvcihwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS5iYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uSW5jb3JyZWN0VHlwZUVycm9yKHByb3BlcnR5Lm5hbWUsIHByb3BlcnR5LmJhc2VDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IoZXJyb3IsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgYWRkTmV3RXJyb3IoZXJyb3I6IEpzb25FcnJvciwganNvbk9iajogYW55KSB7XG4gICAgICAgIGlmIChqc29uT2JqICYmIGpzb25PYmpbSnNvbk9iamVjdC5wb3NpdGlvblByb3BlcnR5TmFtZV0pIHtcbiAgICAgICAgICAgIGVycm9yLmF0ID0ganNvbk9ialtKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lXS5zdGFydDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZVRvQXJyYXkodmFsdWU6IEFycmF5PGFueT4sIG9iajogYW55LCBrZXk6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWx1ZUFycmF5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNyZWF0ZU5ld09iaih2YWx1ZVtpXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLm5ld09iaikge1xuICAgICAgICAgICAgICAgIG9ialtrZXldLnB1c2gobmV3VmFsdWUubmV3T2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvT2JqZWN0KHZhbHVlW2ldLCBuZXdWYWx1ZS5uZXdPYmopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldLnB1c2godmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGZpbmRQcm9wZXJ0eShwcm9wZXJ0aWVzOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+LCBrZXk6IGFueSk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNbaV0ubmFtZSA9PSBrZXkpIHJldHVybiBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qc29ub2JqZWN0LnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBJdGVtVmFsdWUsIFN1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgQ2hvaWNlc1Jlc3RmdWxsIGV4dGVuZHMgQmFzZSB7XG4gICAgcHVibGljIHVybDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgdmFsdWVOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyB0aXRsZU5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGdldFJlc3VsdENhbGxiYWNrOiAoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4pID0+IHZvaWQ7XG4gICAgcHVibGljIGVycm9yOiBTdXJ2ZXlFcnJvciA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBydW4oKSB7XG4gICAgICAgIGlmICghdGhpcy51cmwgfHwgIXRoaXMuZ2V0UmVzdWx0Q2FsbGJhY2spIHJldHVybjtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMudXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkxvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKHhoci5zdGF0dXNUZXh0LCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2hvaWNlc0J5VXJsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy51cmwgJiYgIXRoaXMucGF0aCAmJiAhdGhpcy52YWx1ZU5hbWUgJiYgIXRoaXMudGl0bGVOYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RGF0YShqc29uOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBpZiAoanNvbi51cmwpIHRoaXMudXJsID0ganNvbi51cmw7XG4gICAgICAgIGlmIChqc29uLnBhdGgpIHRoaXMucGF0aCA9IGpzb24ucGF0aDtcbiAgICAgICAgaWYgKGpzb24udmFsdWVOYW1lKSB0aGlzLnZhbHVlTmFtZSA9IGpzb24udmFsdWVOYW1lO1xuICAgICAgICBpZiAoanNvbi50aXRsZU5hbWUpIHRoaXMudGl0bGVOYW1lID0ganNvbi50aXRsZU5hbWU7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy51cmwgPSBcIlwiO1xuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xuICAgICAgICB0aGlzLnZhbHVlTmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gXCJcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uTG9hZChyZXN1bHQ6IGFueSkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRSZXN1bHRBZnRlclBhdGgocmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbXCJsZW5ndGhcIl0pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1WYWx1ZSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShpdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoaXRlbVZhbHVlKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG5ldyBJdGVtVmFsdWUodmFsdWUsIHRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1cmxHZXRDaG9pY2VzRXJyb3JcIikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0Q2FsbGJhY2soaXRlbXMpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uRXJyb3Ioc3RhdHVzOiBzdHJpbmcsIHJlc3BvbnNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidXJsUmVxdWVzdEVycm9yXCIpW1wiZm9ybWF0XCJdKHN0YXR1cywgcmVzcG9uc2UpKTtcbiAgICAgICAgdGhpcy5nZXRSZXN1bHRDYWxsYmFjayhbXSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVzdWx0QWZ0ZXJQYXRoKHJlc3VsdDogYW55KSB7XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgICBpZiAoIXRoaXMucGF0aCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdmFyIHBhdGhlcyA9IHRoaXMuZ2V0UGF0aGVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbcGF0aGVzW2ldXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldFBhdGhlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgdmFyIHBhdGhlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wYXRoLmluZGV4T2YoJzsnKSA+IC0xKSB7XG4gICAgICAgICAgICBwYXRoZXMgPSB0aGlzLnBhdGguc3BsaXQoJzsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGhlcyA9IHRoaXMucGF0aC5zcGxpdCgnLCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoZXMubGVuZ3RoID09IDApIHBhdGhlcy5wdXNoKHRoaXMucGF0aCk7XG4gICAgICAgIHJldHVybiBwYXRoZXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWUoaXRlbTogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVOYW1lKSByZXR1cm4gaXRlbVt0aGlzLnZhbHVlTmFtZV07XG4gICAgICAgIHZhciBsZW4gPSBPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAxKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGl0ZW1bT2JqZWN0LmtleXMoaXRlbSlbMF1dO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFRpdGxlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy50aXRsZU5hbWUpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gaXRlbVt0aGlzLnRpdGxlTmFtZV07XG4gICAgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNob2ljZXNCeVVybFwiLCBbXCJ1cmxcIiwgXCJwYXRoXCIsIFwidmFsdWVOYW1lXCIsIFwidGl0bGVOYW1lXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQ2hvaWNlc1Jlc3RmdWxsKCk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50c1xuICoqLyIsImltcG9ydCB7SGFzaFRhYmxlfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtDb25kaXRpb25zUGFyc2VyfSBmcm9tICcuL2NvbmRpdGlvbnNQYXJzZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uIHtcbiAgICBzdGF0aWMgb3BlcmF0b3JzVmFsdWU6IEhhc2hUYWJsZTxGdW5jdGlvbj4gPSBudWxsO1xuICAgIHN0YXRpYyBnZXQgb3BlcmF0b3JzKCkge1xuICAgICAgICBpZiAoQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlICE9IG51bGwpIHJldHVybiBDb25kaXRpb24ub3BlcmF0b3JzVmFsdWU7XG4gICAgICAgIENvbmRpdGlvbi5vcGVyYXRvcnNWYWx1ZSA9IHtcbiAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuICFsZWZ0OyB9LFxuICAgICAgICAgICAgbm90ZW1wdHk6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gISghbGVmdCk7IH0sXG4gICAgICAgICAgICBlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ID09IHJpZ2h0OyB9LFxuICAgICAgICAgICAgbm90ZXF1YWw6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCAhPSByaWdodDsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgJiYgbGVmdFtcImluZGV4T2ZcIl0gJiYgbGVmdC5pbmRleE9mKHJpZ2h0KSA+IC0xOyB9LFxuICAgICAgICAgICAgbm90Y29udGFpbnM6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gIWxlZnQgfHwgIWxlZnRbXCJpbmRleE9mXCJdIHx8IGxlZnQuaW5kZXhPZihyaWdodCkgPT0gLTE7IH0sXG4gICAgICAgICAgICBncmVhdGVyOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPiByaWdodDsgfSxcbiAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA8IHJpZ2h0OyB9LFxuICAgICAgICAgICAgZ3JlYXRlcm9yZXF1YWw6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA+PSByaWdodDsgfSxcbiAgICAgICAgICAgIGxlc3NvcmVxdWFsOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPD0gcmlnaHQ7IH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbi5vcGVyYXRvcnNWYWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcFZhbHVlOiBzdHJpbmcgPSBcImVxdWFsXCI7XG4gICAgcHVibGljIGxlZnQ6IGFueTtcbiAgICBwdWJsaWMgcmlnaHQ6IGFueTtcbiAgICBwdWJsaWMgZ2V0IG9wZXJhdG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IG9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghQ29uZGl0aW9uLm9wZXJhdG9yc1t2YWx1ZV0pIHJldHVybjtcbiAgICAgICAgdGhpcy5vcFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBwZXJmb3JtKGxlZnQ6IGFueSA9IG51bGwsIHJpZ2h0OiBhbnkgPSBudWxsKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghbGVmdCkgbGVmdCA9IHRoaXMubGVmdDtcbiAgICAgICAgaWYgKCFyaWdodCkgcmlnaHQgPSB0aGlzLnJpZ2h0O1xuXG4gICAgICAgIHJldHVybiBDb25kaXRpb24ub3BlcmF0b3JzW3RoaXMub3BlcmF0b3JdKHRoaXMuZ2V0UHVyZVZhbHVlKGxlZnQpLCB0aGlzLmdldFB1cmVWYWx1ZShyaWdodCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFB1cmVWYWx1ZSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdmFsIHx8ICh0eXBlb2YgdmFsICE9IFwic3RyaW5nXCIpKSByZXR1cm4gdmFsO1xuICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPiAwICYmICh2YWxbMF0gPT0gXCInXCIgfHwgdmFsWzBdID09ICdcIicpKSAgdmFsID0gdmFsLnN1YnN0cigxKTtcbiAgICAgICAgdmFyIGxlbiA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwICYmICh2YWxbbGVuIC0gMV0gPT0gXCInXCIgfHwgdmFsW2xlbiAtIDFdID09ICdcIicpKSAgdmFsID0gdmFsLnN1YnN0cigwLCBsZW4gLSAxKTtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uTm9kZSB7XG4gICAgcHJpdmF0ZSBjb25uZWN0aXZlVmFsdWU6IHN0cmluZyA9IFwiYW5kXCI7XG4gICAgcHVibGljIGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgcHVibGljIGdldCBjb25uZWN0aXZlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbm5lY3RpdmVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29ubmVjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodmFsdWUgPT0gXCImXCIgfHwgdmFsdWUgPT0gXCImJlwiKSB2YWx1ZSA9IFwiYW5kXCI7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBcInxcIiB8fCB2YWx1ZSA9PSBcInx8XCIpIHZhbHVlID0gXCJvclwiO1xuICAgICAgICBpZiAodmFsdWUgIT0gXCJhbmRcIiAmJiB2YWx1ZSAhPSBcIm9yXCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb25uZWN0aXZlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0VtcHR5KCkgeyByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggPT0gMDsgfVxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RpdmUgPSBcImFuZFwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25SdW5uZXIge1xuICAgIHByaXZhdGUgZXhwcmVzc2lvblZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb290OiBDb25kaXRpb25Ob2RlO1xuICAgIHByaXZhdGUgdmFsdWVzOiBIYXNoVGFibGU8YW55PjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBDb25kaXRpb25Ob2RlKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5leHByZXNzaW9uVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvblZhbHVlID0gdmFsdWU7XG4gICAgICAgIG5ldyBDb25kaXRpb25zUGFyc2VyKCkucGFyc2UodGhpcy5leHByZXNzaW9uVmFsdWUsIHRoaXMucm9vdCk7XG4gICAgfVxuICAgIHB1YmxpYyBydW4odmFsdWVzOiBIYXNoVGFibGU8YW55Pik6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuTm9kZSh0aGlzLnJvb3QpO1xuICAgIH1cbiAgICBwcml2YXRlIHJ1bk5vZGUobm9kZTogQ29uZGl0aW9uTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgb25GaXJzdEZhaWwgPSBub2RlLmNvbm5lY3RpdmUgPT0gXCJhbmRcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5ydW5Ob2RlQ29uZGl0aW9uKG5vZGUuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKCFyZXMgJiYgb25GaXJzdEZhaWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgIW9uRmlyc3RGYWlsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25GaXJzdEZhaWw7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuTm9kZUNvbmRpdGlvbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlW1wiY2hpbGRyZW5cIl0pIHJldHVybiB0aGlzLnJ1bk5vZGUodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVbXCJsZWZ0XCJdKSByZXR1cm4gdGhpcy5ydW5Db25kaXRpb24odmFsdWUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuQ29uZGl0aW9uKGNvbmRpdGlvbjogQ29uZGl0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBsZWZ0ID0gY29uZGl0aW9uLmxlZnQ7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRWYWx1ZU5hbWUobGVmdCk7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMudmFsdWVzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMudmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciByaWdodCA9IGNvbmRpdGlvbi5yaWdodDtcbiAgICAgICAgbmFtZSA9IHRoaXMuZ2V0VmFsdWVOYW1lKHJpZ2h0KTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy52YWx1ZXMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByaWdodCA9IHRoaXMudmFsdWVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25kaXRpb24ucGVyZm9ybShsZWZ0LCByaWdodCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VmFsdWVOYW1lKG5vZGVWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICghbm9kZVZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlVmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKG5vZGVWYWx1ZS5sZW5ndGggPCAzIHx8IG5vZGVWYWx1ZVswXSAhPSAneycgfHwgbm9kZVZhbHVlW25vZGVWYWx1ZS5sZW5ndGggLSAxXSAhPSAnfScpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbm9kZVZhbHVlLnN1YnN0cigxLCBub2RlVmFsdWUubGVuZ3RoIC0gMik7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmRpdGlvbnMudHNcbiAqKi8iLCJpbXBvcnQge0NvbmRpdGlvbiwgQ29uZGl0aW9uTm9kZX0gZnJvbSBcIi4vY29uZGl0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uc1BhcnNlciB7XG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb290OiBDb25kaXRpb25Ob2RlO1xuICAgIHByaXZhdGUgZXhwcmVzc2lvbk5vZGVzOiBBcnJheTxDb25kaXRpb25Ob2RlPjtcbiAgICBwcml2YXRlIG5vZGU6IENvbmRpdGlvbk5vZGU7XG4gICAgcHJpdmF0ZSBhdDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXI7XG4gICAgcHVibGljIHBhcnNlKHRleHQ6IHN0cmluZywgcm9vdDogQ29uZGl0aW9uTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLnJvb3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hdCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucGFyc2VUZXh0KCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHB1YmxpYyB0b1N0cmluZyhyb290OiBDb25kaXRpb25Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVRvU3RyaW5nKHJvb3QpO1xuICAgIH1cbiAgICBwcml2YXRlIHRvU3RyaW5nQ29yZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIGlmICh2YWx1ZVtcImNoaWxkcmVuXCJdKSByZXR1cm4gdGhpcy5ub2RlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVbXCJsZWZ0XCJdKSByZXR1cm4gdGhpcy5jb25kaXRpb25Ub1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIG5vZGVUb1N0cmluZyhub2RlOiBDb25kaXRpb25Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5vZGUuaXNFbXB0eSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciByZXMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlVGV4dCA9IHRoaXMudG9TdHJpbmdDb3JlKG5vZGUuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgaWYgKG5vZGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykgcmVzICs9ICcgJyArIG5vZGUuY29ubmVjdGl2ZSArICcgJztcbiAgICAgICAgICAgICAgICByZXMgKz0gbm9kZVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT0gdGhpcy5yb290ICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmVzID0gJygnICsgcmVzICsgJyknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHByaXZhdGUgY29uZGl0aW9uVG9TdHJpbmcoY29uZGl0aW9uOiBDb25kaXRpb24pOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWNvbmRpdGlvbi5yaWdodCB8fCAhY29uZGl0aW9uLm9wZXJhdG9yKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdmFyIGxlZnQgPSBjb25kaXRpb24ubGVmdDtcbiAgICAgICAgaWYgKGxlZnQgJiYgIXRoaXMuaXNOdW1lcmljKGxlZnQpKSBsZWZ0ID0gXCInXCIgKyBsZWZ0ICsgXCInXCI7XG4gICAgICAgIHZhciByZXMgPSBsZWZ0ICsgJyAnICsgdGhpcy5vcGVyYXRpb25Ub1N0cmluZyhjb25kaXRpb24ub3BlcmF0b3IpO1xuICAgICAgICBpZiAodGhpcy5pc05vUmlnaHRPcGVyYXRpb24oY29uZGl0aW9uLm9wZXJhdG9yKSkgcmV0dXJuIHJlcztcbiAgICAgICAgdmFyIHJpZ2h0ID0gY29uZGl0aW9uLnJpZ2h0O1xuICAgICAgICBpZiAocmlnaHQgJiYgIXRoaXMuaXNOdW1lcmljKHJpZ2h0KSkgcmlnaHQgPSBcIidcIiArIHJpZ2h0ICsgXCInXCI7XG4gICAgICAgIHJldHVybiByZXMgKyAnICcgKyByaWdodDtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcGVyYXRpb25Ub1N0cmluZyhvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9wID09IFwiZXF1YWxcIikgcmV0dXJuIFwiPVwiO1xuICAgICAgICBpZiAob3AgPT0gXCJub3RlcXVhbFwiKSByZXR1cm4gXCIhPVwiO1xuICAgICAgICBpZiAob3AgPT0gXCJncmVhdGVyXCIpIHJldHVybiBcIj5cIjtcbiAgICAgICAgaWYgKG9wID09IFwibGVzc1wiKSByZXR1cm4gXCI8XCI7XG4gICAgICAgIGlmIChvcCA9PSBcImdyZWF0ZXJvcmVxdWFsXCIpIHJldHVybiBcIj49XCI7XG4gICAgICAgIGlmIChvcCA9PSBcImxlc3NvcmVxdWFsXCIpIHJldHVybiBcIjw9XCI7XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc051bWVyaWModmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIGlmIChpc05hTih2YWwpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWwpO1xuICAgIH1cbiAgICBwcml2YXRlIHBhcnNlVGV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5ub2RlID0gdGhpcy5yb290O1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2Rlcy5wdXNoKHRoaXMubm9kZSk7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnJlYWRDb25kaXRpb25zKCk7XG4gICAgICAgIHJldHVybiByZXMgJiYgdGhpcy5hdCA+PSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkQ29uZGl0aW9ucygpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVhZENvbmRpdGlvbigpO1xuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIHJlcztcbiAgICAgICAgdmFyIGNvbm5lY3RpdmUgPSB0aGlzLnJlYWRDb25uZWN0aXZlKCk7XG4gICAgICAgIGlmIChjb25uZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3RpdmUoY29ubmVjdGl2ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkQ29uZGl0aW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRDb25kaXRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkRXhwcmVzc2lvbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWFkU3RyaW5nKCk7XG4gICAgICAgIGlmICghbGVmdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgb3AgPSB0aGlzLnJlYWRPcGVyYXRvcigpO1xuICAgICAgICBpZiAoIW9wKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBjID0gbmV3IENvbmRpdGlvbigpO1xuICAgICAgICBjLmxlZnQgPSBsZWZ0OyBjLm9wZXJhdG9yID0gb3A7XG4gICAgICAgIGlmICghdGhpcy5pc05vUmlnaHRPcGVyYXRpb24ob3ApKSB7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICghcmlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGMucmlnaHQgPSByaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZENvbmRpdGlvbihjKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZEV4cHJlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICBpZiAodGhpcy5hdCA+PSB0aGlzLmxlbmd0aCB8fCB0aGlzLmNoICE9ICcoJykgcmV0dXJuIHRydWU7XG4gICAgICAgIHRoaXMuYXQrKztcbiAgICAgICAgdGhpcy5wdXNoRXhwcmVzc2lvbigpO1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5yZWFkQ29uZGl0aW9ucygpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuY2ggPT0gJyknO1xuICAgICAgICAgICAgdGhpcy5hdCsrO1xuICAgICAgICAgICAgdGhpcy5wb3BFeHByZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgY2goKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQodGhpcy5hdCk7IH1cbiAgICBwcml2YXRlIHNraXAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmF0IDwgdGhpcy5sZW5ndGggJiYgdGhpcy5pc1NwYWNlKHRoaXMuY2gpKSB0aGlzLmF0Kys7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTcGFjZShjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPT0gJyAnIHx8IGMgPT0gJ1xcbicgfHwgYyA9PSAnXFx0JyB8fCBjID09ICdcXHInO1xuICAgIH1cbiAgICBwcml2YXRlIGlzUXVvdGVzKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYyA9PSBcIidcIiB8fCBjID09ICdcIidcbiAgICB9XG4gICAgcHJpdmF0ZSBpc09wZXJhdG9yQ2hhcihjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGMgPT0gJz4nIHx8IGMgPT0gJzwnIHx8IGMgPT0gJz0nIHx8IGMgPT0gJyEnO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQnJhY2tldHMoYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjID09ICcoJyB8fCBjID09ICcpJztcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICBpZiAodGhpcy5hdCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuYXQ7XG4gICAgICAgIHZhciBoYXNRdW90ZXMgPSB0aGlzLmlzUXVvdGVzKHRoaXMuY2gpO1xuICAgICAgICBpZiAoaGFzUXVvdGVzKSB0aGlzLmF0Kys7XG4gICAgICAgIHZhciBpc0ZpcnN0T3BDaCA9IHRoaXMuaXNPcGVyYXRvckNoYXIodGhpcy5jaCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmF0IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghaGFzUXVvdGVzICYmIHRoaXMuaXNTcGFjZSh0aGlzLmNoKSkgYnJlYWs7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1b3Rlcyh0aGlzLmNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNRdW90ZXMpIHRoaXMuYXQrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGFzUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RPcENoICE9IHRoaXMuaXNPcGVyYXRvckNoYXIodGhpcy5jaCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQnJhY2tldHModGhpcy5jaCkpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0IDw9IHN0YXJ0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMudGV4dC5zdWJzdHIoc3RhcnQsIHRoaXMuYXQgLSBzdGFydCk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gMSAmJiB0aGlzLmlzUXVvdGVzKHJlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNRdW90ZXMocmVzW3Jlcy5sZW5ndGggLSAxXSkpIGxlbi0tO1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5zdWJzdHIoMSwgbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzTm9SaWdodE9wZXJhdGlvbihvcDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBvcCA9PSBcImVtcHR5XCIgfHwgb3AgPT0gXCJub3RlbXB0eVwiO1xuICAgIH1cbiAgICBwcml2YXRlIHJlYWRPcGVyYXRvcigpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3AgPSB0aGlzLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgaWYgKCFvcCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG9wID0gb3AudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKG9wID09ICc+Jykgb3AgPSBcImdyZWF0ZXJcIjtcbiAgICAgICAgaWYgKG9wID09ICc8Jykgb3AgPSBcImxlc3NcIjtcbiAgICAgICAgaWYgKG9wID09ICc+PScgfHwgb3AgPT0gJz0+Jykgb3AgPSBcImdyZWF0ZXJvcmVxdWFsXCI7XG4gICAgICAgIGlmIChvcCA9PSAnPD0nIHx8IG9wID09ICc9PCcpIG9wID0gXCJsZXNzb3JlcXVhbFwiO1xuICAgICAgICBpZiAob3AgPT0gJz0nIHx8IG9wID09ICc9PScpIG9wID0gXCJlcXVhbFwiO1xuICAgICAgICBpZiAob3AgPT0gJzw+JyB8fCBvcCA9PSAnIT0nKSBvcCA9IFwibm90ZXF1YWxcIjtcbiAgICAgICAgaWYgKG9wID09ICdjb250YWluJykgb3AgPSBcImNvbnRhaW5zXCI7XG4gICAgICAgIGlmIChvcCA9PSAnbm90Y29udGFpbicpIG9wID0gXCJub3Rjb250YWluc1wiO1xuICAgICAgICByZXR1cm4gb3A7XG4gICAgfVxuICAgIHByaXZhdGUgcmVhZENvbm5lY3RpdmUoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGNvbiA9IHRoaXMucmVhZFN0cmluZygpO1xuICAgICAgICBpZiAoIWNvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbiA9IGNvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY29uID09IFwiJlwiIHx8IGNvbiA9PSBcIiYmXCIpIGNvbiA9IFwiYW5kXCI7XG4gICAgICAgIGlmIChjb24gPT0gXCJ8XCIgfHwgY29uID09IFwifHxcIikgY29uID0gXCJvclwiO1xuICAgICAgICBpZiAoY29uICE9IFwiYW5kXCIgJiYgY29uICE9IFwib3JcIikgY29uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbjtcbiAgICB9XG4gICAgcHJpdmF0ZSBwdXNoRXhwcmVzc2lvbigpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQ29uZGl0aW9uTm9kZSgpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cbiAgICBwcml2YXRlIHBvcEV4cHJlc3Npb24oKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5leHByZXNzaW9uTm9kZXMucG9wKCk7XG4gICAgICAgIHRoaXMubm9kZSA9IHRoaXMuZXhwcmVzc2lvbk5vZGVzW3RoaXMuZXhwcmVzc2lvbk5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRDb25kaXRpb24oYzogQ29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKGMpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZENvbm5lY3RpdmUoY29uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY29ubmVjdGl2ZSA9IGNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuY29ubmVjdGl2ZSAhPSBjb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQ29uID0gdGhpcy5ub2RlLmNvbm5lY3RpdmU7XG4gICAgICAgICAgICAgICAgdmFyIG9sZENoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb25uZWN0aXZlID0gY29uO1xuICAgICAgICAgICAgICAgIHZhciBvbGROb2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgICAgICAgICBvbGROb2RlLmNvbm5lY3RpdmUgPSBvbGRDb247XG4gICAgICAgICAgICAgICAgb2xkTm9kZS5jaGlsZHJlbiA9IG9sZENoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKG9sZE5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmRpdGlvbnNQYXJzZXIudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0Jhc2UsIEl0ZW1WYWx1ZSwgSVN1cnZleURhdGEsIEhhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlfSBmcm9tIFwiLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fZHJvcGRvd25cIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveE1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl9jaGVja2JveFwiO1xuaW1wb3J0IHtRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xuaW1wb3J0IHtRdWVzdGlvblRleHRNb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fdGV4dFwiO1xuaW1wb3J0IHtRdWVzdGlvbkNvbW1lbnRNb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fY29tbWVudFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhEcm9wZG93bkRhdGEge1xuICAgIG9uUm93Q2hhbmdlZChjZWxsOiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgbmV3Um93VmFsdWU6IGFueSk7XG4gICAgY29sdW1uczogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+O1xuICAgIGNyZWF0ZVF1ZXN0aW9uKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duQ29sdW1uIGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSB0aXRsZVZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIG9wdGlvbnNDYXB0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaGFzT3RoZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbWluV2lkdGg6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGNlbGxUeXBlOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcbiAgICBwcml2YXRlIGNvbENvdW50VmFsdWU6IG51bWJlciA9IC0xO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCkgeyByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmNvbHVtblwiIH1cbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCkgeyByZXR1cm4gdGhpcy50aXRsZVZhbHVlID8gdGhpcy50aXRsZVZhbHVlIDogdGhpcy5uYW1lOyB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBjaG9pY2VzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5jaG9pY2VzVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbENvdW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgLTEgfHwgdmFsdWUgPiA0KSByZXR1cm47XG4gICAgICAgIHRoaXMuY29sQ291bnRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNob2ljZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5jaG9pY2VzVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93bkNlbGwge1xuICAgIHByaXZhdGUgcXVlc3Rpb25WYWx1ZTogUXVlc3Rpb247XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4sIHB1YmxpYyByb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBkYXRhOiBJTWF0cml4RHJvcGRvd25EYXRhKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25WYWx1ZSA9IGRhdGEuY3JlYXRlUXVlc3Rpb24odGhpcy5yb3csIHRoaXMuY29sdW1uKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvblZhbHVlLnNldERhdGEocm93KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBxdWVzdGlvbigpOiBRdWVzdGlvbiB7IHJldHVybiB0aGlzLnF1ZXN0aW9uVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnF1ZXN0aW9uLnZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSBpbXBsZW1lbnRzIElTdXJ2ZXlEYXRhIHtcbiAgICBwcm90ZWN0ZWQgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YTtcbiAgICBwcml2YXRlIHJvd1ZhbHVlczogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHJvd0NvbW1lbnRzOiBIYXNoVGFibGU8YW55PiA9IHt9O1xuICAgIHByaXZhdGUgaXNTZXR0aW5nVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBjZWxsczogQXJyYXk8TWF0cml4RHJvcGRvd25DZWxsPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRDZWxscygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd05hbWUoKSB7IHJldHVybiBudWxsOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMucm93VmFsdWVzOyB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nVmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvd1ZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dWYWx1ZXNba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldLnF1ZXN0aW9uLm9uU3VydmV5VmFsdWVDaGFuZ2VkKHRoaXMuZ2V0VmFsdWUodGhpcy5jZWxsc1tpXS5jb2x1bW4ubmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd1ZhbHVlc1tuYW1lXTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc1NldHRpbmdWYWx1ZSkgcmV0dXJuO1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IFwiXCIpIG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm93VmFsdWVzW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yb3dWYWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLm9uUm93Q2hhbmdlZCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldENvbW1lbnQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93Q29tbWVudHNbbmFtZV07XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDb21tZW50KG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd0NvbW1lbnRzW25hbWVdID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdmFsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZENlbGxzKCkge1xuICAgICAgICB2YXIgY29sdW1ucyA9IHRoaXMuZGF0YS5jb2x1bW5zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2ldO1xuICAgICAgICAgICAgdGhpcy5jZWxscy5wdXNoKHRoaXMuY3JlYXRlQ2VsbChjb2x1bW4pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2VsbChjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogTWF0cml4RHJvcGRvd25DZWxsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhEcm9wZG93bkNlbGwoY29sdW1uLCB0aGlzLCB0aGlzLmRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgZXh0ZW5kcyBRdWVzdGlvbiBpbXBsZW1lbnRzIElNYXRyaXhEcm9wZG93bkRhdGEge1xuICAgIHByaXZhdGUgY29sdW1uc1ZhbHVlOiBBcnJheTxNYXRyaXhEcm9wZG93bkNvbHVtbj4gPSBbXTtcbiAgICBwcml2YXRlIGNob2ljZXNWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIG9wdGlvbnNDYXB0aW9uVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIGlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVkVmlzaWJsZVJvd3M6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPjtcbiAgICBwcml2YXRlIGNlbGxUeXBlVmFsdWU6IHN0cmluZyA9IFwiZHJvcGRvd25cIjtcbiAgICBwcml2YXRlIGNvbHVtbkNvbENvdW50VmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbHVtbk1pbldpZHRoOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBob3Jpem9udGFsU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGNvbHVtbnNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIHVwZGF0ZUNlbGxzQ2FsbGJhazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbHVtbnMoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+IHsgcmV0dXJuIHRoaXMuY29sdW1uc1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjb2x1bW5zKHZhbHVlOiBBcnJheTxNYXRyaXhEcm9wZG93bkNvbHVtbj4pIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb2x1bW5zQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjZWxsVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jZWxsVHlwZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjZWxsVHlwZShuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNlbGxUeXBlID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuY2VsbFR5cGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnVwZGF0ZUNlbGxzQ2FsbGJhayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29sdW1uQ29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29sdW1uQ29sQ291bnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29sdW1uQ29sQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gNCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbHVtbkNvbENvdW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy51cGRhdGVDZWxsc0NhbGxiYWspO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q29sdW1uVGl0bGUoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjb2x1bW4udGl0bGU7XG4gICAgICAgIGlmIChjb2x1bW4uaXNSZXF1aXJlZCAmJiB0aGlzLnN1cnZleSkge1xuICAgICAgICAgICAgdmFyIHJlcXVpcmVUZXh0ID0gdGhpcy5zdXJ2ZXkucmVxdWlyZWRUZXh0O1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVUZXh0KSByZXF1aXJlVGV4dCArPSBcIiBcIjtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcXVpcmVUZXh0ICsgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDb2x1bW5XaWR0aChjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5taW5XaWR0aCA/IGNvbHVtbi5taW5XaWR0aCA6IHRoaXMuY29sdW1uTWluV2lkdGg7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCBjaG9pY2VzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY2hvaWNlc1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0NhcHRpb24oKSB7IHJldHVybiAodGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlKSA/IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvcHRpb25zQ2FwdGlvblwiKTsgfVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0NhcHRpb24obmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUgPSBuZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBhZGRDb2x1bW4obmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gbnVsbCk6IE1hdHJpeERyb3Bkb3duQ29sdW1uIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IG5ldyBNYXRyaXhEcm9wZG93bkNvbHVtbihuYW1lLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuY29sdW1uc1ZhbHVlLnB1c2goY29sdW1uKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPiB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgPSB0aGlzLmdlbmVyYXRlUm93cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlUm93cygpOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT4geyByZXR1cm4gbnVsbDsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3cobmFtZTogYW55LCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3VmFsdWUoY3VyVmFsdWU6IGFueSk6IGFueSB7IHJldHVybiAhY3VyVmFsdWUgPyB7fSA6IGN1clZhbHVlOyB9XG4gICAgcHJvdGVjdGVkIGdldFJvd1ZhbHVlKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIHF1ZXN0aW9uVmFsdWU6IGFueSwgY3JlYXRlOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcXVlc3Rpb25WYWx1ZVtyb3cucm93TmFtZV0gPyBxdWVzdGlvblZhbHVlW3Jvdy5yb3dOYW1lXSA6IG51bGw7XG4gICAgICAgIGlmICghcmVzdWx0ICYmIGNyZWF0ZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBxdWVzdGlvblZhbHVlW3Jvdy5yb3dOYW1lXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcgfHwgISh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSB8fCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLmNyZWF0ZU5ld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldO1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXS52YWx1ZSA9IHRoaXMuZ2V0Um93VmFsdWUocm93LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGVycm9zSW5Db2x1bW5zID0gdGhpcy5oYXNFcnJvckluQ29sdW1ucyhmaXJlQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc3VwZXIuaGFzRXJyb3JzKGZpcmVDYWxsYmFjaykgfHwgZXJyb3NJbkNvbHVtbnM7XG4gICAgfVxuICAgIHByaXZhdGUgaGFzRXJyb3JJbkNvbHVtbnMoZmlyZUNhbGxiYWNrOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcmVzID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbHMgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldLmNlbGxzO1xuICAgICAgICAgICAgICAgIHJlcyA9IGNlbGxzICYmIGNlbGxzW2NvbEluZGV4XSAmJiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb24gJiYgY2VsbHNbY29sSW5kZXhdLnF1ZXN0aW9uLmhhc0Vycm9ycyhmaXJlQ2FsbGJhY2spIHx8IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICAvL0lNYXRyaXhEcm9wZG93bkRhdGFcbiAgICBwdWJsaWMgY3JlYXRlUXVlc3Rpb24ocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5jcmVhdGVRdWVzdGlvbkNvcmUocm93LCBjb2x1bW4pO1xuICAgICAgICBxdWVzdGlvbi5uYW1lID0gY29sdW1uLm5hbWU7XG4gICAgICAgIHF1ZXN0aW9uLmlzUmVxdWlyZWQgPSBjb2x1bW4uaXNSZXF1aXJlZDtcbiAgICAgICAgcXVlc3Rpb24uaGFzT3RoZXIgPSBjb2x1bW4uaGFzT3RoZXI7XG4gICAgICAgIGlmIChjb2x1bW4uaGFzT3RoZXIpIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbiBpbnN0YW5jZW9mIFF1ZXN0aW9uU2VsZWN0QmFzZSkge1xuICAgICAgICAgICAgICAgICg8UXVlc3Rpb25TZWxlY3RCYXNlPnF1ZXN0aW9uKS5zdG9yZU90aGVyc0FzQ29tbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVzdGlvbjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVF1ZXN0aW9uQ29yZShyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb24ge1xuICAgICAgICB2YXIgY2VsbFR5cGUgPSBjb2x1bW4uY2VsbFR5cGUgPT0gXCJkZWZhdWx0XCIgPyB0aGlzLmNlbGxUeXBlIDogY29sdW1uLmNlbGxUeXBlO1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZ2V0UXVlc3Rpb25OYW1lKHJvdywgY29sdW1uKTtcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwiY2hlY2tib3hcIikgcmV0dXJuIHRoaXMuY3JlYXRlQ2hlY2tib3gobmFtZSwgY29sdW1uKTtcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwicmFkaW9ncm91cFwiKSByZXR1cm4gdGhpcy5jcmVhdGVSYWRpb2dyb3VwKG5hbWUsIGNvbHVtbik7XG4gICAgICAgIGlmIChjZWxsVHlwZSA9PSBcInRleHRcIikgcmV0dXJuIHRoaXMuY3JlYXRlVGV4dChuYW1lLCBjb2x1bW4pO1xuICAgICAgICBpZiAoY2VsbFR5cGUgPT0gXCJjb21tZW50XCIpIHJldHVybiB0aGlzLmNyZWF0ZUNvbW1lbnQobmFtZSwgY29sdW1uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRHJvcGRvd24obmFtZSwgY29sdW1uKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFF1ZXN0aW9uTmFtZShyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogc3RyaW5nIHsgcmV0dXJuIHJvdy5yb3dOYW1lICsgXCJfXCIgKyBjb2x1bW4ubmFtZTsgfVxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5DaG9pY2VzKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBBcnJheTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5jaG9pY2VzICYmIGNvbHVtbi5jaG9pY2VzLmxlbmd0aCA+IDAgPyBjb2x1bW4uY2hvaWNlcyA6IHRoaXMuY2hvaWNlcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvbHVtbk9wdGlvbnNDYXB0aW9uKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29sdW1uLm9wdGlvbnNDYXB0aW9uID8gY29sdW1uLm9wdGlvbnNDYXB0aW9uIDogdGhpcy5vcHRpb25zQ2FwdGlvbjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyb3Bkb3duKG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbCB7XG4gICAgICAgIHZhciBxID0gPFF1ZXN0aW9uRHJvcGRvd25Nb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcImRyb3Bkb3duXCIsIG5hbWUpO1xuICAgICAgICBxLmNob2ljZXMgPSB0aGlzLmdldENvbHVtbkNob2ljZXMoY29sdW1uKTtcbiAgICAgICAgcS5vcHRpb25zQ2FwdGlvbiA9IHRoaXMuZ2V0Q29sdW1uT3B0aW9uc0NhcHRpb24oY29sdW1uKTtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGVja2JveChuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbkNoZWNrYm94TW9kZWwge1xuICAgICAgICB2YXIgcSA9IDxRdWVzdGlvbkNoZWNrYm94TW9kZWw+dGhpcy5jcmVhdGVDZWxsUXVlc3Rpb24oXCJjaGVja2JveFwiLCBuYW1lKTtcbiAgICAgICAgcS5jaG9pY2VzID0gdGhpcy5nZXRDb2x1bW5DaG9pY2VzKGNvbHVtbik7XG4gICAgICAgIHEuY29sQ291bnQgPSBjb2x1bW4uY29sQ291bnQgPiAtIDEgPyBjb2x1bW4uY29sQ291bnQgOiB0aGlzLmNvbHVtbkNvbENvdW50O1xuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJhZGlvZ3JvdXAobmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwge1xuICAgICAgICB2YXIgcSA9IDxRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcInJhZGlvZ3JvdXBcIiwgbmFtZSk7XG4gICAgICAgIHEuY2hvaWNlcyA9IHRoaXMuZ2V0Q29sdW1uQ2hvaWNlcyhjb2x1bW4pO1xuICAgICAgICBxLmNvbENvdW50ID0gY29sdW1uLmNvbENvdW50ID4gLSAxID8gY29sdW1uLmNvbENvdW50IDogdGhpcy5jb2x1bW5Db2xDb3VudDtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVUZXh0KG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uVGV4dE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIDxRdWVzdGlvblRleHRNb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcInRleHRcIiwgbmFtZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDb21tZW50KG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uQ29tbWVudE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIDxRdWVzdGlvbkNvbW1lbnRNb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcImNvbW1lbnRcIiwgbmFtZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDZWxsUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFF1ZXN0aW9uIHtcbiAgICAgICAgcmV0dXJuIDxRdWVzdGlvbj5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCBuYW1lKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGRlbGV0ZVJvd1ZhbHVlKG5ld1ZhbHVlOiBhbnksIHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UpOiBhbnkge1xuICAgICAgICBkZWxldGUgbmV3VmFsdWVbcm93LnJvd05hbWVdO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3VmFsdWUpLmxlbmd0aCA9PSAwID8gbnVsbCA6IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBvblJvd0NoYW5nZWQocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgbmV3Um93VmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNyZWF0ZU5ld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB2YXIgcm93VmFsdWUgPSB0aGlzLmdldFJvd1ZhbHVlKHJvdywgbmV3VmFsdWUsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcm93VmFsdWUpIGRlbGV0ZSByb3dWYWx1ZVtrZXldO1xuICAgICAgICBpZiAobmV3Um93VmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1Jvd1ZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdSb3dWYWx1ZSkpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG5ld1Jvd1ZhbHVlKSByb3dWYWx1ZVtrZXldID0gbmV3Um93VmFsdWVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocm93VmFsdWUpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZGVsZXRlUm93VmFsdWUobmV3VmFsdWUsIHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIsIFtcIm5hbWVcIiwgeyBuYW1lOiBcInRpdGxlXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnRpdGxlVmFsdWU7IH0gfSxcbiAgICAgICAgeyBuYW1lOiBcImNob2ljZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LFxuICAgICAgICBcIm9wdGlvbnNDYXB0aW9uXCIsIHsgbmFtZTogXCJjZWxsVHlwZVwiLCBkZWZhdWx0OiBcImRlZmF1bHRcIiwgY2hvaWNlczogW1wiZGVmYXVsdFwiLCBcImRyb3Bkb3duXCIsIFwiY2hlY2tib3hcIiwgXCJyYWRpb2dyb3VwXCIsIFwidGV4dFwiLCBcImNvbW1lbnRcIl0gfSxcbiAgICAgICAgeyBuYW1lOiBcImNvbENvdW50XCIsIGRlZmF1bHQ6IC0xLCBjaG9pY2VzOiBbLTEsIDAsIDEsIDIsIDMsIDRdIH0sIFwiaXNSZXF1aXJlZDpib29sZWFuXCIsIFwiaGFzT3RoZXI6Ym9vbGVhblwiLCBcIm1pbldpZHRoXCJdLFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXRyaXhEcm9wZG93bkNvbHVtbihcIlwiKTsgfSk7XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkcm9wZG93bmJhc2VcIiwgW3sgbmFtZTogXCJjb2x1bW5zOm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiLCBjbGFzc05hbWU6IFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiB9LFxuICAgICAgICBcImhvcml6b250YWxTY3JvbGw6Ym9vbGVhblwiLFxuICAgICAgICB7IG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXMgPSB2YWx1ZTsgfX0sXG4gICAgICAgIHsgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5vcHRpb25zQ2FwdGlvblZhbHVlOyB9IH0sXG4gICAgICAgIHsgbmFtZTogXCJjZWxsVHlwZVwiLCBkZWZhdWx0OiBcImRyb3Bkb3duXCIsIGNob2ljZXM6IFtcImRyb3Bkb3duXCIsIFwiY2hlY2tib3hcIiwgXCJyYWRpb2dyb3VwXCIsIFwidGV4dFwiLCBcImNvbW1lbnRcIl0gfSxcbiAgICAgICAgeyBuYW1lOiBcImNvbHVtbkNvbENvdW50XCIsIGRlZmF1bHQ6IDAsIGNob2ljZXM6IFswLCAxLCAyLCAzLCA0XSB9LCBcImNvbHVtbk1pbldpZHRoXCJdLFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZS50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tICcuL3F1ZXN0aW9uYmFzZSc7XG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtBbnN3ZXJSZXF1aXJlZEVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtTdXJ2ZXlWYWxpZGF0b3IsIElWYWxpZGF0b3JPd25lciwgVmFsaWRhdG9yUnVubmVyfSBmcm9tIFwiLi92YWxpZGF0b3JcIjtcbmltcG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4vdGV4dFByZVByb2Nlc3NvclwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBRdWVzdGlvbkJhc2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yT3duZXIge1xuICAgIHByaXZhdGUgdGl0bGVWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIHF1ZXN0aW9uVmFsdWU6IGFueTtcbiAgICBwcml2YXRlIHF1ZXN0aW9uQ29tbWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNSZXF1aXJlZFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBoYXNDb21tZW50VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGhhc090aGVyVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNvbW1lbnRUZXh0VmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSB0ZXh0UHJlUHJvY2Vzc29yOiBUZXh0UHJlUHJvY2Vzc29yO1xuICAgIGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+ID0gW107XG4gICAgdmFsaWRhdG9yczogQXJyYXk8U3VydmV5VmFsaWRhdG9yPiA9IG5ldyBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+KCk7XG4gICAgdmFsdWVDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29tbWVudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBlcnJvcnNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgdGl0bGVDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc1RpdGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuICh0aGlzLnRpdGxlVmFsdWUpID8gdGhpcy50aXRsZVZhbHVlIDogdGhpcy5uYW1lOyB9XG4gICAgcHVibGljIHNldCB0aXRsZShuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnRpdGxlQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRUaXRsZSgpIHsgcmV0dXJuIHRoaXMuc3VydmV5ICE9IG51bGwgPyB0aGlzLnN1cnZleS5wcm9jZXNzVGV4dCh0aGlzLnRpdGxlKSA6IHRoaXMudGl0bGU7IH1cbiAgICBwdWJsaWMgZ2V0IGZ1bGxUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5zdXJ2ZXkucXVlc3Rpb25UaXRsZVRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGV4dFByZVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3IgPSBuZXcgVGV4dFByZVByb2Nlc3NvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vbkhhc1ZhbHVlID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykgeyByZXR1cm4gc2VsZi5jYW5Qcm9jZXNzZWRUZXh0VmFsdWVzKG5hbWUudG9Mb3dlckNhc2UoKSk7IH07XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uUHJvY2VzcyA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHNlbGYuZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWUpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dFByZVByb2Nlc3Nvci5wcm9jZXNzKHRoaXMuc3VydmV5LnF1ZXN0aW9uVGl0bGVUZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVpcmVUZXh0ID0gdGhpcy5yZXF1aXJlZFRleHQ7XG4gICAgICAgIGlmIChyZXF1aXJlVGV4dCkgcmVxdWlyZVRleHQgKz0gXCIgXCI7XG4gICAgICAgIHZhciBubyA9IHRoaXMubm87XG4gICAgICAgIGlmIChubykgbm8gKz0gXCIuIFwiO1xuICAgICAgICByZXR1cm4gbm8gKyByZXF1aXJlVGV4dCArIHRoaXMucHJvY2Vzc2VkVGl0bGU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjYW5Qcm9jZXNzZWRUZXh0VmFsdWVzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbmFtZSA9PSBcIm5vXCIgfHwgbmFtZSA9PSBcInRpdGxlXCIgfHwgbmFtZSA9PSBcInJlcXVpcmVcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFByb2Nlc3NlZFRleHRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAobmFtZSA9PSBcIm5vXCIpIHJldHVybiB0aGlzLm5vO1xuICAgICAgICBpZiAobmFtZSA9PSBcInRpdGxlXCIpIHJldHVybiB0aGlzLnByb2Nlc3NlZFRpdGxlO1xuICAgICAgICBpZiAobmFtZSA9PSBcInJlcXVpcmVcIikgcmV0dXJuIHRoaXMucmVxdWlyZWRUZXh0O1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIHN1cHBvcnRDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgc3VwcG9ydE90aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzUmVxdWlyZWRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgaXNSZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXF1aXJlZCA9PSB2YWwpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1JlcXVpcmVkVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudGl0bGVDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmhhc0NvbW1lbnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgaGFzQ29tbWVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRDb21tZW50KCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYXNDb21tZW50VmFsdWUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLmhhc0NvbW1lbnQpIHRoaXMuaGFzT3RoZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb21tZW50VGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb21tZW50VGV4dFZhbHVlID8gdGhpcy5jb21tZW50VGV4dFZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm90aGVySXRlbVRleHRcIik7IH1cbiAgICBwdWJsaWMgc2V0IGNvbW1lbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb21tZW50VGV4dFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzT3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmhhc090aGVyVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGhhc090aGVyKHZhbDogYm9vbGVhbikge1xuICAgICAgICBpZiAoIXRoaXMuc3VwcG9ydE90aGVyKCkgfHwgdGhpcy5oYXNPdGhlciA9PSB2YWwpIHJldHVybjtcbiAgICAgICAgdGhpcy5oYXNPdGhlclZhbHVlID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5oYXNPdGhlcikgdGhpcy5oYXNDb21tZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzT3RoZXJDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBoYXNPdGhlckNoYW5nZWQoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJbmRleCA8IDApIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDE7XG4gICAgICAgIHZhciBpc051bWVyaWMgPSB0cnVlO1xuICAgICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ICYmIHRoaXMuc3VydmV5LnF1ZXN0aW9uU3RhcnRJbmRleCkge1xuICAgICAgICAgICAgc3RyID0gdGhpcy5zdXJ2ZXkucXVlc3Rpb25TdGFydEluZGV4O1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0cikpIHN0YXJ0SW5kZXggPSBwYXJzZUludChzdHIpO1xuICAgICAgICAgICAgZWxzZSBpZiAoc3RyLmxlbmd0aCA9PSAxKSBpc051bWVyaWMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1lcmljKSByZXR1cm4gKHRoaXMudmlzaWJsZUluZGV4ICsgc3RhcnRJbmRleCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoMCkgKyB0aGlzLnZpc2libGVJbmRleCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7XG4gICAgICAgIHN1cGVyLm9uU2V0RGF0YSgpO1xuICAgICAgICB0aGlzLm9uU3VydmV5VmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlRnJvbURhdGEodGhpcy5nZXRWYWx1ZUNvcmUoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy52YWx1ZUNoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29tbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5nZXRDb21tZW50KCk7IH1cbiAgICBwdWJsaWMgc2V0IGNvbW1lbnQobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jb21tZW50ID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0Q29tbWVudChuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29tbWVudENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb21tZW50KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmRhdGEgIT0gbnVsbCA/IHRoaXMuZGF0YS5nZXRDb21tZW50KHRoaXMubmFtZSkgOiB0aGlzLnF1ZXN0aW9uQ29tbWVudDsgfVxuICAgIHByb3RlY3RlZCBzZXRDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXROZXdDb21tZW50KG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnZhbHVlID09IG51bGw7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5jaGVja0ZvckVycm9ycyhmaXJlQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcHVibGljIGdldCByZXF1aXJlZFRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3VydmV5ICE9IG51bGwgJiYgdGhpcy5pc1JlcXVpcmVkID8gdGhpcy5zdXJ2ZXkucmVxdWlyZWRUZXh0IDogXCJcIjsgfVxuICAgIHByaXZhdGUgY2hlY2tGb3JFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBlcnJvckxlbmd0aCA9IHRoaXMuZXJyb3JzID8gdGhpcy5lcnJvcnMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkNoZWNrRm9yRXJyb3JzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA9PSAwICYmIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMucnVuVmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ICYmIHRoaXMuZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnN1cnZleS52YWxpZGF0ZVF1ZXN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyZUNhbGxiYWNrICYmIChlcnJvckxlbmd0aCAhPSB0aGlzLmVycm9ycy5sZW5ndGggfHwgZXJyb3JMZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1JlcXVpcmVkRXJyb3IoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgQW5zd2VyUmVxdWlyZWRFcnJvcigpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFzUmVxdWlyZWRFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZXF1aXJlZCAmJiB0aGlzLmlzRW1wdHkoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJ1blZhbGlkYXRvcnMoKTogU3VydmV5RXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJ1bm5lcigpLnJ1bih0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZUluRGF0YShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlSW5EYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsdWVDaGFuZ2VkSW5TdXJ2ZXkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy52YWx1ZVRvRGF0YShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlQ29yZShuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZUNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEgIT0gbnVsbCA/IHRoaXMuZGF0YS5nZXRWYWx1ZSh0aGlzLm5hbWUpIDogdGhpcy5xdWVzdGlvblZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFZhbHVlQ29yZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldFZhbHVlKHRoaXMubmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvblZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGEodmFsOiBhbnkpOiBhbnkgeyByZXR1cm4gdmFsOyB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhKHZhbDogYW55KTogYW55IHsgcmV0dXJuIHZhbDsgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHsgfVxuICAgIHByb3RlY3RlZCBzZXROZXdDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0Q29tbWVudCh0aGlzLm5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHRoaXMucXVlc3Rpb25Db21tZW50ID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIC8vSVF1ZXN0aW9uXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzVmFsdWVDaGFuZ2VkSW5TdXJ2ZXkgPSB0cnVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZUZyb21EYXRhKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb21tZW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5pc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vSVZhbGlkYXRvck93bmVyXG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJxdWVzdGlvblwiLCBbeyBuYW1lOiBcInRpdGxlOnRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoudGl0bGVWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJjb21tZW50VGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jb21tZW50VGV4dFZhbHVlOyB9IH0sXG4gICAgXCJpc1JlcXVpcmVkOmJvb2xlYW5cIiwgeyBuYW1lOiBcInZhbGlkYXRvcnM6dmFsaWRhdG9yc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXZhbGlkYXRvclwiLCBjbGFzc05hbWVQYXJ0OiBcInZhbGlkYXRvclwifV0sIG51bGwsIFwicXVlc3Rpb25iYXNlXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBJUXVlc3Rpb24sIElDb25kaXRpb25SdW5uZXIsIElTdXJ2ZXlEYXRhLCBJU3VydmV5LCBIYXNoVGFibGV9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gJy4vanNvbm9iamVjdCc7XG5pbXBvcnQge0NvbmRpdGlvblJ1bm5lcn0gZnJvbSAnLi9jb25kaXRpb25zJztcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQmFzZSBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJUXVlc3Rpb24sIElDb25kaXRpb25SdW5uZXIge1xuICAgIHByaXZhdGUgc3RhdGljIHF1ZXN0aW9uQ291bnRlciA9IDEwMDtcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRRdWVzdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNxX1wiICsgUXVlc3Rpb25CYXNlLnF1ZXN0aW9uQ291bnRlcisrO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZGF0YTogSVN1cnZleURhdGE7XG4gICAgcHJvdGVjdGVkIHN1cnZleTogSVN1cnZleTtcbiAgICBwcml2YXRlIGNvbmRpdGlvblJ1bm5lcjogQ29uZGl0aW9uUnVubmVyID0gbnVsbDtcbiAgICBwdWJsaWMgdmlzaWJsZUlmOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgaWRWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgdmlzaWJsZVZhbHVlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgc3RhcnRXaXRoTmV3TGluZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSB2aXNpYmxlSW5kZXhWYWx1ZTogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIHdpZHRoOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcmVuZGVyV2lkdGhWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHJpZ2h0SW5kZW50VmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGluZGVudDogbnVtYmVyID0gMDtcbiAgICBmb2N1c0NhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHJlbmRlcldpZHRoQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHJvd1Zpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgdmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICB2aXNpYmxlSW5kZXhDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWRWYWx1ZSA9IFF1ZXN0aW9uQmFzZS5nZXRRdWVzdGlvbklkKCk7XG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnZpc2libGVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICAgICAgdGhpcy52aXNpYmxlVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucm93VmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkucXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZCg8SVF1ZXN0aW9uPnRoaXMsIHRoaXMudmlzaWJsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCB2aXNpYmxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudmlzaWJsZUluZGV4VmFsdWU7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGdldCBoYXNUaXRsZSgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGdldCBoYXNDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHJlbmRlcldpZHRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnJlbmRlcldpZHRoVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHJlbmRlcldpZHRoKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5yZW5kZXJXaWR0aCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlcldpZHRoVmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJpZ2h0SW5kZW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnJpZ2h0SW5kZW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHJpZ2h0SW5kZW50KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5yaWdodEluZGVudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJpZ2h0SW5kZW50VmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICBpZiAoIWVsIHx8ICFlbC5zY3JvbGxJbnRvVmlldykgcmV0dXJuO1xuICAgICAgICB2YXIgZWxlbVRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgaWYgKGVsZW1Ub3AgPCAwKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5mb2N1c0NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREYXRhKG5ld1ZhbHVlOiBJU3VydmV5RGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSAobmV3VmFsdWUgJiYgbmV3VmFsdWVbXCJxdWVzdGlvbkFkZGVkXCJdKSA/IDxJU3VydmV5Pm5ld1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5vblNldERhdGEoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGZpcmVDYWxsYmFjayhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7IH1cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGluZygpIHsgfVxuICAgIHB1YmxpYyBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pikge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUlmKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5jb25kaXRpb25SdW5uZXIpIHRoaXMuY29uZGl0aW9uUnVubmVyID0gbmV3IENvbmRpdGlvblJ1bm5lcih0aGlzLnZpc2libGVJZik7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uUnVubmVyLmV4cHJlc3Npb24gPSB0aGlzLnZpc2libGVJZjtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25kaXRpb25SdW5uZXIucnVuKHZhbHVlcyk7XG4gICAgfVxuICAgIC8vSVF1ZXN0aW9uXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgIH1cbiAgICBvblN1cnZleUxvYWQoKSB7XG4gICAgfVxuICAgIHNldFZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJbmRleFZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZUluZGV4VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy52aXNpYmxlSW5kZXhDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIGZhbHNlOyB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicXVlc3Rpb25iYXNlXCIsIFtcIiFuYW1lXCIsIHsgbmFtZTogXCJ2aXNpYmxlOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCBcInZpc2libGVJZjp0ZXh0XCIsXG4gICAgeyBuYW1lOiBcIndpZHRoXCIgfSwgeyBuYW1lOiBcInN0YXJ0V2l0aE5ld0xpbmU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlfSwge25hbWU6IFwiaW5kZW50Om51bWJlclwiLCBkZWZhdWx0OiAwLCBjaG9pY2VzOiBbMCwgMSwgMiwgM119XSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25iYXNlLnRzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFRleHRQcmVQcm9jZXNzb3JJdGVtIHtcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0UHJlUHJvY2Vzc29yIHtcbiAgICBwdWJsaWMgb25Qcm9jZXNzOiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XG4gICAgcHVibGljIG9uSGFzVmFsdWU6IChuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwdWJsaWMgcHJvY2Vzcyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRleHQpIHJldHVybiB0ZXh0O1xuICAgICAgICBpZiAoIXRoaXMub25Qcm9jZXNzKSByZXR1cm4gdGV4dDtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyh0ZXh0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5hbWUodGV4dC5zdWJzdHJpbmcoaXRlbS5zdGFydCArIDEsIGl0ZW0uZW5kKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuUHJvY2Vzc05hbWUobmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMub25IYXNWYWx1ZSAmJiAhdGhpcy5vbkhhc1ZhbHVlKG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMub25Qcm9jZXNzKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cigwLCBpdGVtLnN0YXJ0KSArIHZhbHVlICsgdGV4dC5zdWJzdHIoaXRlbS5lbmQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJdGVtcyh0ZXh0OiBzdHJpbmcpOiBBcnJheTxUZXh0UHJlUHJvY2Vzc29ySXRlbT4ge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgICAgICB2YXIgc3RhcnQgPSAtMTtcbiAgICAgICAgdmFyIGNoID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChjaCA9PSAneycpIHN0YXJ0ID0gaTtcbiAgICAgICAgICAgIGlmIChjaCA9PSAnfScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXh0UHJlUHJvY2Vzc29ySXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnQgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIG5hbWUudHJpbSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNhblByb2Nlc3NOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSBuYW1lW2ldO1xuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgICAgICBpZiAoY2ggPT0gJyAnIHx8IGNoID09ICctJyB8fCBjaCA9PSAnJicpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGV4dFByZVByb2Nlc3Nvci50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7SXRlbVZhbHVlLCBTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcbmltcG9ydCB7Q3VzdG9tRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XG5pbXBvcnQge0Nob2ljZXNSZXN0ZnVsbH0gZnJvbSBcIi4vY2hvaWNlc1Jlc3RmdWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblNlbGVjdEJhc2UgZXh0ZW5kcyBRdWVzdGlvbiB7XG4gICAgcHJpdmF0ZSBjb21tZW50VmFsdWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY2FjaGVkVmFsdWU6IGFueTtcbiAgICBvdGhlckl0ZW06IEl0ZW1WYWx1ZSA9IG5ldyBJdGVtVmFsdWUoXCJvdGhlclwiLCBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKSk7XG4gICAgcHJpdmF0ZSBjaG9pY2VzRnJvbVVybDogQXJyYXk8SXRlbVZhbHVlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWVzOiBBcnJheTxJdGVtVmFsdWU+ID0gbmV3IEFycmF5PEl0ZW1WYWx1ZT4oKTtcbiAgICBwdWJsaWMgY2hvaWNlc0J5VXJsOiBDaG9pY2VzUmVzdGZ1bGw7XG4gICAgcHVibGljIG90aGVyRXJyb3JUZXh0OiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgY2hvaWNlc09yZGVyVmFsdWU6IHN0cmluZyA9IFwibm9uZVwiO1xuICAgIGNob2ljZXNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLmNob2ljZXNCeVVybCA9IHRoaXMuY3JlYXRlUmVzdGZ1bGwoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNob2ljZXNCeVVybC5nZXRSZXN1bHRDYWxsYmFjayA9IGZ1bmN0aW9uIChpdGVtczogQXJyYXk8SXRlbVZhbHVlPikgeyBzZWxmLm9uTG9hZENob2ljZXNGcm9tVXJsKGl0ZW1zKSB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzT3RoZXJTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSA/IHRoaXMuZ2V0SGFzT3RoZXIodGhpcy52YWx1ZSkgOiB0aGlzLmdldEhhc090aGVyKHRoaXMuY2FjaGVkVmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SGFzT3RoZXIodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlc3RmdWxsKCk6IENob2ljZXNSZXN0ZnVsbCB7IHJldHVybiBuZXcgQ2hvaWNlc1Jlc3RmdWxsKCk7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29tbWVudCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKSByZXR1cm4gc3VwZXIuZ2V0Q29tbWVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50VmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTZXR0aW5nQ29tbWVudDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzZXRDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSlcbiAgICAgICAgICAgIHN1cGVyLnNldENvbW1lbnQobmV3VmFsdWUpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2V0dGluZ0NvbW1lbnQgJiYgbmV3VmFsdWUgIT0gdGhpcy5jb21tZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2V0dGluZ0NvbW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdGhlclNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWVJbkRhdGEodGhpcy5jYWNoZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZXR0aW5nQ29tbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZUZyb21EYXRhKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSkgcmV0dXJuIHN1cGVyLnZhbHVlRnJvbURhdGEodmFsKTtcbiAgICAgICAgdGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWVGcm9tRGF0YUNvcmUodmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkVmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLmdldFN0b3JlT3RoZXJzQXNDb21tZW50KCkpIHJldHVybiBzdXBlci52YWx1ZVRvRGF0YSh2YWwpO1xuICAgICAgICB0aGlzLmNhY2hlZFZhbHVlID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVRvRGF0YUNvcmUodmFsKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Vua25vd25WYWx1ZSh2YWwpKSByZXR1cm4gdmFsO1xuICAgICAgICBpZiAodmFsID09IHRoaXMub3RoZXJJdGVtLnZhbHVlKSByZXR1cm4gdmFsO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzLm90aGVySXRlbS52YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhQ29yZSh2YWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUgJiYgdGhpcy5nZXRDb21tZW50KCkpIHtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuZ2V0Q29tbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBoYXNVbmtub3duVmFsdWUodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF2YWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5hY3RpdmVDaG9pY2VzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0udmFsdWUgPT0gdmFsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldCBjaG9pY2VzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5jaG9pY2VzVmFsdWVzOyB9XG4gICAgc2V0IGNob2ljZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5jaG9pY2VzVmFsdWVzLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY2hvaWNlc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBoYXNPdGhlckNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY2hvaWNlc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIGdldCBjaG9pY2VzT3JkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2hvaWNlc09yZGVyVmFsdWU7IH1cbiAgICBzZXQgY2hvaWNlc09yZGVyKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09IHRoaXMuY2hvaWNlc09yZGVyVmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXJWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXQgb3RoZXJUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm90aGVySXRlbS50ZXh0OyB9XG4gICAgc2V0IG90aGVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7IHRoaXMub3RoZXJJdGVtLnRleHQgPSB2YWx1ZTsgfVxuICAgIGdldCB2aXNpYmxlQ2hvaWNlcygpOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc090aGVyICYmIHRoaXMuY2hvaWNlc09yZGVyID09IFwibm9uZVwiKSByZXR1cm4gdGhpcy5hY3RpdmVDaG9pY2VzO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zb3J0VmlzaWJsZUNob2ljZXModGhpcy5hY3RpdmVDaG9pY2VzLnNsaWNlKCkpO1xuICAgICAgICBpZiAodGhpcy5oYXNPdGhlcikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5vdGhlckl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGFjdGl2ZUNob2ljZXMoKTogQXJyYXk8SXRlbVZhbHVlPiB7IHJldHVybiB0aGlzLmNob2ljZXNGcm9tVXJsID8gdGhpcy5jaG9pY2VzRnJvbVVybCA6IHRoaXMuY2hvaWNlczsgfVxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgc3VwcG9ydE90aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3RoZXJTZWxlY3RlZCB8fCB0aGlzLmNvbW1lbnQpIHJldHVybjtcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLm90aGVyRXJyb3JUZXh0O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHRleHQgPSBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJSZXF1aXJlZEVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcih0ZXh0KSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpIHsgcmV0dXJuIHRoaXMuc3RvcmVPdGhlcnNBc0NvbW1lbnQgJiYgKHRoaXMuc3VydmV5ICE9IG51bGwgPyB0aGlzLnN1cnZleS5zdG9yZU90aGVyc0FzQ29tbWVudCA6IHRydWUpOyB9XG4gICAgb25TdXJ2ZXlMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzQnlVcmwpIHRoaXMuY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uTG9hZENob2ljZXNGcm9tVXJsKGFycmF5OiBBcnJheTxJdGVtVmFsdWU+KSB7XG4gICAgICAgIHZhciBlcnJvckNvdW50ID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzQnlVcmwgJiYgdGhpcy5jaG9pY2VzQnlVcmwuZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2godGhpcy5jaG9pY2VzQnlVcmwuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckNvdW50ID4gMCB8fCB0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmVycm9yc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0Nob2ljZXMgPSBudWxsO1xuICAgICAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmV3Q2hvaWNlcyA9IG5ldyBBcnJheTxJdGVtVmFsdWU+KCk7XG4gICAgICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YShuZXdDaG9pY2VzLCBhcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVVybCA9IG5ld0Nob2ljZXM7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY2hvaWNlc0NoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHByaXZhdGUgc29ydFZpc2libGVDaG9pY2VzKGFycmF5OiBBcnJheTxJdGVtVmFsdWU+KTogQXJyYXk8SXRlbVZhbHVlPiB7XG4gICAgICAgIHZhciBvcmRlciA9IHRoaXMuY2hvaWNlc09yZGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChvcmRlciA9PSBcImFzY1wiKSByZXR1cm4gdGhpcy5zb3J0QXJyYXkoYXJyYXksIDEpO1xuICAgICAgICBpZiAob3JkZXIgPT0gXCJkZXNjXCIpIHJldHVybiB0aGlzLnNvcnRBcnJheShhcnJheSwgLTEpO1xuICAgICAgICBpZiAob3JkZXIgPT0gXCJyYW5kb21cIikgcmV0dXJuIHRoaXMucmFuZG9taXplQXJyYXkoYXJyYXkpO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHByaXZhdGUgc29ydEFycmF5KGFycmF5OiBBcnJheTxJdGVtVmFsdWU+LCBtdWx0OiBudW1iZXIpOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLnRleHQgPCBiLnRleHQpIHJldHVybiAtMSAqIG11bHQ7XG4gICAgICAgICAgICBpZiAoYS50ZXh0ID4gYi50ZXh0KSByZXR1cm4gMSAqIG11bHQ7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgcmFuZG9taXplQXJyYXkoYXJyYXk6IEFycmF5PEl0ZW1WYWx1ZT4pOiBBcnJheTxJdGVtVmFsdWU+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25DaGVja2JveEJhc2UgZXh0ZW5kcyBRdWVzdGlvblNlbGVjdEJhc2Uge1xuICAgIHByaXZhdGUgY29sQ291bnRWYWx1ZTogbnVtYmVyID0gMTtcbiAgICBjb2xDb3VudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbENvdW50VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jb2xDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2spO1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzZWxlY3RiYXNlXCIsIFtcImhhc0NvbW1lbnQ6Ym9vbGVhblwiLCBcImhhc090aGVyOmJvb2xlYW5cIixcbiAgICB7IG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXMgPSB2YWx1ZTsgfX0sXG4gICAgeyBuYW1lOiBcImNob2ljZXNPcmRlclwiLCBkZWZhdWx0OiBcIm5vbmVcIiwgY2hvaWNlczogW1wibm9uZVwiLCBcImFzY1wiLCBcImRlc2NcIiwgXCJyYW5kb21cIl0gfSxcbiAgICB7IG5hbWU6IFwiY2hvaWNlc0J5VXJsOnJlc3RmdWxsXCIsIGNsYXNzTmFtZTogXCJDaG9pY2VzUmVzdGZ1bGxcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmouY2hvaWNlc0J5VXJsLmlzRW1wdHkgPyBudWxsIDogb2JqLmNob2ljZXNCeVVybDsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzQnlVcmwuc2V0RGF0YSh2YWx1ZSk7IH0gfSxcbiAgICB7IG5hbWU6IFwib3RoZXJUZXh0XCIsIGRlZmF1bHQ6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckl0ZW1UZXh0XCIpIH0sIFwib3RoZXJFcnJvclRleHRcIixcbiAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnQ6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlfV0sIG51bGwsIFwicXVlc3Rpb25cIik7XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjaGVja2JveGJhc2VcIiwgW3sgbmFtZTogXCJjb2xDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMSwgY2hvaWNlczogWzAsIDEsIDIsIDMsIDRdIH1dLCBudWxsLCBcInNlbGVjdGJhc2VcIik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25fYmFzZXNlbGVjdC50c1xuICoqLyIsImltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tICcuL3F1ZXN0aW9uYmFzZSc7XG5pbXBvcnQge0hhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GYWN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBRdWVzdGlvbkZhY3RvcnkgPSBuZXcgUXVlc3Rpb25GYWN0b3J5KCk7XG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0Q2hvaWNlcyA9IFtcIm9uZVwiLCBcInR3b3xzZWNvbmQgdmFsdWVcIiwgXCJ0aHJlZXx0aGlyZCB2YWx1ZVwiXTtcbiAgICBwcml2YXRlIGNyZWF0b3JIYXNoOiBIYXNoVGFibGU8KG5hbWU6IHN0cmluZykgPT4gUXVlc3Rpb25CYXNlPiA9IHt9O1xuXG4gICAgcHVibGljIHJlZ2lzdGVyUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIHF1ZXN0aW9uQ3JlYXRvcjogKG5hbWU6IHN0cmluZykgPT4gUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXSA9IHF1ZXN0aW9uQ3JlYXRvcjtcbiAgICB9XG4gICAgcHVibGljIGdldEFsbFR5cGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcy5jcmVhdG9ySGFzaCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBRdWVzdGlvbkJhc2Uge1xuICAgICAgICB2YXIgY3JlYXRvciA9IHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXTtcbiAgICAgICAgaWYgKGNyZWF0b3IgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBjcmVhdG9yKG5hbWUpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbmZhY3RvcnkudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UsXG4gICAgTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsXG4gICAgSU1hdHJpeERyb3Bkb3duRGF0YVxufSBmcm9tIFwiLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duUm93TW9kZWwgZXh0ZW5kcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IGFueSwgcHVibGljIHRleHQ6IHN0cmluZywgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcihkYXRhLCB2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxufVxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcbiAgICBwcml2YXRlIHJvd3NWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm1hdHJpeGRyb3Bkb3duXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93cygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMucm93c1ZhbHVlOyB9XG4gICAgcHVibGljIHNldCByb3dzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMucm93c1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZVJvd3MoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbD4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWw+KCk7XG4gICAgICAgIGlmICghdGhpcy5yb3dzIHx8IHRoaXMucm93cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucm93c1tpXS52YWx1ZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLnJvd3NbaV0udmFsdWUsIHRoaXMucm93c1tpXS50ZXh0LCB2YWxbdGhpcy5yb3dzW2ldLnZhbHVlXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3cobmFtZTogYW55LCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBNYXRyaXhEcm9wZG93blJvd01vZGVsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXhEcm9wZG93blJvd01vZGVsKG5hbWUsIHRleHQsIHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkcm9wZG93blwiLCBbeyBuYW1lOiBcInJvd3M6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5yb3dzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5yb3dzID0gdmFsdWU7IH19XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsKFwiXCIpOyB9LCBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkcm9wZG93blwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFsxLCAyLCAzLCA0LCA1XTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzXG4gKiovIiwiaW1wb3J0IHtRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlLFxuICAgIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBJTWF0cml4RHJvcGRvd25EYXRhXG59IGZyb20gXCIuL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcblxuZXhwb3J0IGNsYXNzIE1hdHJpeER5bmFtaWNSb3dNb2RlbCBleHRlbmRzIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5kZXg6IG51bWJlciwgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xuICAgICAgICBzdXBlcihkYXRhLCB2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcm93TmFtZSgpIHsgcmV0dXJuIFwicm93XCIgKyB0aGlzLmluZGV4OyB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcbiAgICBzdGF0aWMgTWF4Um93Q291bnQgPSAxMDA7XG4gICAgcHJpdmF0ZSByb3dDb3VudGVyID0gMDtcbiAgICBwcml2YXRlIHJvd0NvdW50VmFsdWU6IG51bWJlciA9IDI7XG4gICAgcHJpdmF0ZSBhZGRSb3dUZXh0VmFsdWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSByZW1vdmVSb3dUZXh0VmFsdWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIG1pblJvd0NvdW50ID0gMDtcbiAgICBwdWJsaWMgcm93Q291bnRDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibWF0cml4ZHluYW1pY1wiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd0NvdW50KCkgeyByZXR1cm4gdGhpcy5yb3dDb3VudFZhbHVlOyB9XG4gICAgcHVibGljIHNldCByb3dDb3VudCh2YWw6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsIDwgMCB8fCB2YWwgPiBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbC5NYXhSb3dDb3VudCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvd0NvdW50VmFsdWUgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gdmFsKSB7XG4gICAgICAgICAgICB2YXIgcVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBxVmFsLnNwbGljZSh2YWwpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHFWYWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yb3dDb3VudENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRSb3coKSB7XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3cobnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93Q291bnQrKztcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5yb3dDb3VudCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cyAmJiBpbmRleCA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLmNyZWF0ZU5ld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdmFsLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB2YWwgPSB0aGlzLmRlbGV0ZVJvd1ZhbHVlKHZhbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93Q291bnQtLTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhZGRSb3dUZXh0KCkgeyByZXR1cm4gdGhpcy5hZGRSb3dUZXh0VmFsdWUgPyB0aGlzLmFkZFJvd1RleHRWYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJhZGRSb3dcIik7IH1cbiAgICBwdWJsaWMgc2V0IGFkZFJvd1RleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFkZFJvd1RleHRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJlbW92ZVJvd1RleHQoKSB7IHJldHVybiB0aGlzLnJlbW92ZVJvd1RleHRWYWx1ZSA/IHRoaXMucmVtb3ZlUm93VGV4dFZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd1wiKTsgfVxuICAgIHB1YmxpYyBzZXQgcmVtb3ZlUm93VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUm93VGV4dFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2FjaGVkVmlzaWJsZVJvd3MoKTogQXJyYXk8TWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2U+IHtcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgJiYgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGggPT0gdGhpcy5yb3dDb3VudCkgcmV0dXJuIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3M7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVSb3dzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xuICAgICAgICBzdXBlci5vbkNoZWNrRm9yRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9ySW5Sb3dzKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibWluUm93Q291bnRFcnJvclwiKVtcImZvcm1hdFwiXSh0aGlzLm1pblJvd0NvdW50KSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaGFzRXJyb3JJblJvd3MoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1pblJvd0NvdW50IDw9IDAgfHwgIXRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHJlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgc2V0Um93Q291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IHJvd0luZGV4KyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIGlmICghcm93LmlzRW1wdHkpIHNldFJvd0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFJvd0NvdW50IDwgdGhpcy5taW5Sb3dDb3VudDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlUm93cygpOiBBcnJheTxNYXRyaXhEeW5hbWljUm93TW9kZWw+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxNYXRyaXhEeW5hbWljUm93TW9kZWw+KCk7XG4gICAgICAgIGlmICh0aGlzLnJvd0NvdW50ID09PSAwKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlTWF0cml4Um93KHRoaXMuZ2V0Um93VmFsdWVCeUluZGV4KHZhbCwgaSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KHZhbHVlOiBhbnkpOiBNYXRyaXhEeW5hbWljUm93TW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeER5bmFtaWNSb3dNb2RlbCh0aGlzLnJvd0NvdW50ZXIgKyssIHRoaXMsIHZhbHVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1ZhbHVlKGN1clZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VyVmFsdWU7XG4gICAgICAgIGlmICghcmVzdWx0KSByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiB0aGlzLnJvd0NvdW50KSByZXN1bHQuc3BsaWNlKHRoaXMucm93Q291bnQgLSAxKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHJlc3VsdC5sZW5ndGg7IGkgPCB0aGlzLnJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZGVsZXRlUm93VmFsdWUobmV3VmFsdWU6IGFueSwgcm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSk6IGFueSB7XG4gICAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1ZhbHVlW2ldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0VtcHR5ID8gbnVsbCA6IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Um93VmFsdWVCeUluZGV4KHF1ZXN0aW9uVmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgcXVlc3Rpb25WYWx1ZS5sZW5ndGggPyBxdWVzdGlvblZhbHVlW2luZGV4XSA6IG51bGw7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRSb3dWYWx1ZShyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBxdWVzdGlvblZhbHVlOiBhbnksIGNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um93VmFsdWVCeUluZGV4KHF1ZXN0aW9uVmFsdWUsIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MuaW5kZXhPZihyb3cpKTtcbiAgICB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkeW5hbWljXCIsIFt7IG5hbWU6IFwicm93Q291bnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDIgfSwgeyBuYW1lOiBcIm1pblJvd0NvdW50Om51bWJlclwiLCBkZWZhdWx0OiAwIH0sXG4gICAgICAgIHsgbmFtZTogXCJhZGRSb3dUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLmFkZFJvd1RleHRWYWx1ZTsgfSB9LFxuICAgICAgICB7IG5hbWU6IFwicmVtb3ZlUm93VGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5yZW1vdmVSb3dUZXh0VmFsdWU7IH0gfV0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsKFwiXCIpOyB9LCBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkeW5hbWljXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBbMSwgMiwgMywgNCwgNV07IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDFcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDJcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDNcIik7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tICcuL3N1cnZleVN0cmluZ3MnO1xuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4RGF0YSB7XG4gICAgb25NYXRyaXhSb3dDaGFuZ2VkKHJvdzogTWF0cml4Um93TW9kZWwpO1xufVxuZXhwb3J0IGNsYXNzIE1hdHJpeFJvd01vZGVsIGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBkYXRhOiBJTWF0cml4RGF0YTtcbiAgICBwcm90ZWN0ZWQgcm93VmFsdWU6IGFueTsgXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogYW55LCBwdWJsaWMgdGV4dDogc3RyaW5nLCBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZywgZGF0YTogSU1hdHJpeERhdGEsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yb3dWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5yb3dWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnJvd1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHRoaXMuZGF0YS5vbk1hdHJpeFJvd0NoYW5nZWQodGhpcyk7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTWF0cml4RGF0YSB7XG4gICAgcHJpdmF0ZSBjb2x1bW5zVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSByb3dzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XG4gICAgcHJpdmF0ZSBpc1Jvd0NoYW5naW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBnZW5lcmF0ZWRWaXNpYmxlUm93czogQXJyYXk8TWF0cml4Um93TW9kZWw+O1xuICAgIHB1YmxpYyBpc0FsbFJvd1JlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtYXRyaXhcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNSb3dzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzVmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZ2V0IGNvbHVtbnMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNvbHVtbnNWYWx1ZTsgfVxuICAgIHNldCBjb2x1bW5zKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY29sdW1uc1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGdldCByb3dzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yb3dzVmFsdWU7IH1cbiAgICBzZXQgcm93cyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLnJvd3NWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVSb3dzKCk6IEFycmF5PE1hdHJpeFJvd01vZGVsPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8TWF0cml4Um93TW9kZWw+KCk7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoIXZhbCkgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucm93c1tpXS52YWx1ZSkgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLnJvd3NbaV0udmFsdWUsIHRoaXMucm93c1tpXS50ZXh0LCB0aGlzLm5hbWUgKyAnXycgKyB0aGlzLnJvd3NbaV0udmFsdWUudG9TdHJpbmcoKSwgdmFsW3RoaXMucm93c1tpXS52YWx1ZV0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyhudWxsLCBcIlwiLCB0aGlzLm5hbWUsIHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3JJblJvd3MoKSkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkSW5BbGxSb3dzRXJyb3JcIikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Sb3dzKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbGxSb3dSZXF1aXJlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcm93cyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3M7XG4gICAgICAgIGlmICghcm93cykgcm93cyA9IHRoaXMudmlzaWJsZVJvd3M7XG4gICAgICAgIGlmICghcm93cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSByb3dzW2ldLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCF2YWwpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCBmdWxsTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4Um93TW9kZWwge1xuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvd01vZGVsKG5hbWUsIHRleHQsIGZ1bGxOYW1lLCB0aGlzLCB2YWx1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSb3dDaGFuZ2luZyB8fCAhKHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHx8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghdmFsKSB2YWwgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucm93cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1swXS52YWx1ZSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldO1xuICAgICAgICAgICAgICAgIHZhciByb3dWYWwgPSB2YWxbcm93Lm5hbWVdID8gdmFsW3Jvdy5uYW1lXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1tpXS52YWx1ZSA9IHJvd1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLy9JTWF0cml4RGF0YVxuICAgIG9uTWF0cml4Um93Q2hhbmdlZChyb3c6IE1hdHJpeFJvd01vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Jvd3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUocm93LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlW3Jvdy5uYW1lXSA9IHJvdy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeFwiLCBbeyBuYW1lOiBcImNvbHVtbnM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jb2x1bW5zKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jb2x1bW5zID0gdmFsdWU7IH19LFxuICAgICAgICB7IG5hbWU6IFwicm93czppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLnJvd3MpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLnJvd3MgPSB2YWx1ZTsgfSB9XSxcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhNb2RlbChuYW1lKTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5jb2x1bW5zID0gW1wiQ29sdW1uIDFcIiwgXCJDb2x1bW4gMlwiLCBcIkNvbHVtbiAzXCJdOyByZXR1cm4gcTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25fbWF0cml4LnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1N1cnZleVZhbGlkYXRvciwgSVZhbGlkYXRvck93bmVyLCBWYWxpZGF0b3JSdW5uZXJ9IGZyb20gXCIuL3ZhbGlkYXRvclwiO1xuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aXBsZVRleHREYXRhIHtcbiAgICBnZXRNdWx0aXBsZVRleHRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnk7XG4gICAgc2V0TXVsdGlwbGVUZXh0VmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVmFsaWRhdG9yT3duZXIge1xuICAgIHByaXZhdGUgZGF0YTogSU11bHRpcGxlVGV4dERhdGE7XG4gICAgcHJpdmF0ZSB0aXRsZVZhbHVlOiBzdHJpbmc7XG4gICAgdmFsaWRhdG9yczogQXJyYXk8U3VydmV5VmFsaWRhdG9yPiA9IG5ldyBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogYW55ID0gbnVsbCwgdGl0bGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJtdWx0aXBsZXRleHRpdGVtXCI7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YTogSU11bHRpcGxlVGV4dERhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMubmFtZTsgfVxuICAgIHB1YmxpYyBzZXQgdGl0bGUobmV3VGV4dDogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IG5ld1RleHQ7IH1cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhID8gdGhpcy5kYXRhLmdldE11bHRpcGxlVGV4dFZhbHVlKHRoaXMubmFtZSkgOiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0TXVsdGlwbGVUZXh0VmFsdWUodGhpcy5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xuICAgIH1cbiAgICAvL0lWYWxpZGF0b3JPd25lclxuICAgIGdldFZhbGlkYXRvclRpdGxlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRpdGxlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTXVsdGlwbGVUZXh0RGF0YSB7XG4gICAgcHJpdmF0ZSBjb2xDb3VudFZhbHVlOiBudW1iZXIgPSAxO1xuICAgIGNvbENvdW50Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBpdGVtU2l6ZTogbnVtYmVyID0gMjU7XG4gICAgcHJpdmF0ZSBpdGVtc1ZhbHVlczogQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPiA9IG5ldyBBcnJheTxNdWx0aXBsZVRleHRJdGVtTW9kZWw+KCk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLnNldERhdGEoc2VsZik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZWxmLmZpcmVDYWxsYmFjayhzZWxmLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIm11bHRpcGxldGV4dFwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4geyByZXR1cm4gdGhpcy5pdGVtc1ZhbHVlczsgfVxuICAgIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4pIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlcyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgcHVibGljIEFkZEl0ZW0obmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gbnVsbCk6IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCB7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVUZXh0SXRlbShuYW1lLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29sQ291bnRWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAxIHx8IHZhbHVlID4gNCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbENvdW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRSb3dzKCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgY29sQ291bnQgPSB0aGlzLmNvbENvdW50O1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dzW3Jvd3MubGVuZ3RoIC0gMV0ucHVzaChpdGVtc1tpXSk7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IGNvbENvdW50KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5vbkl0ZW1WYWx1ZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRleHRJdGVtKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbU1vZGVsKG5hbWUsIHRpdGxlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uSXRlbVZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZUl0ZW1WYWx1ZUNoYW5naW5nKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiAodGhpcy5pdGVtc1tpXS5uYW1lIGluIHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlID0gdGhpcy52YWx1ZVt0aGlzLml0ZW1zW2ldLm5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5vblZhbHVlQ2hhbmdlZChpdGVtVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBydW5WYWxpZGF0b3JzKCk6IFN1cnZleUVycm9yIHtcbiAgICAgICAgdmFyIGVycm9yID0gc3VwZXIucnVuVmFsaWRhdG9ycygpO1xuICAgICAgICBpZiAoZXJyb3IgIT0gbnVsbCkgcmV0dXJuIGVycm9yO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IFZhbGlkYXRvclJ1bm5lcigpLnJ1bih0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vSU11bHRpcGxlVGV4dERhdGFcbiAgICBnZXRNdWx0aXBsZVRleHRWYWx1ZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVbbmFtZV07XG4gICAgfVxuICAgIHNldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICghbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgbmV3VmFsdWVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuaXNNdWx0aXBsZUl0ZW1WYWx1ZUNoYW5naW5nID0gZmFsc2U7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibXVsdGlwbGV0ZXh0aXRlbVwiLCBbXCJuYW1lXCIsIHsgbmFtZTogXCJ0aXRsZVwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai50aXRsZVZhbHVlOyB9IH0sXG4gICAgeyBuYW1lOiBcInZhbGlkYXRvcnM6dmFsaWRhdG9yc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXZhbGlkYXRvclwiLCBjbGFzc05hbWVQYXJ0OiBcInZhbGlkYXRvclwiIH1dLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbU1vZGVsKFwiXCIpOyB9KTtcblxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm11bHRpcGxldGV4dFwiLCBbeyBuYW1lOiBcIiFpdGVtczp0ZXh0aXRlbXNcIiwgY2xhc3NOYW1lOiBcIm11bHRpcGxldGV4dGl0ZW1cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiaXRlbVNpemU6bnVtYmVyXCIsIGRlZmF1bHQ6IDI1IH0sIHsgbmFtZTogXCJjb2xDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMSwgY2hvaWNlczogWzEsIDIsIDMsIDRdIH1dLFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm11bHRpcGxldGV4dFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsKG5hbWUpOyBxLkFkZEl0ZW0oXCJ0ZXh0MVwiKTsgcS5BZGRJdGVtKFwidGV4dDJcIik7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9tdWx0aXBsZXRleHQudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7QmFzZSwgSVBhZ2UsIElDb25kaXRpb25SdW5uZXIsIElTdXJ2ZXksIElRdWVzdGlvbiwgSGFzaFRhYmxlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge0NvbmRpdGlvblJ1bm5lcn0gZnJvbSBcIi4vY29uZGl0aW9uc1wiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Sb3dNb2RlbCB7XG4gICAgcHJpdmF0ZSB2aXNpYmxlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlOiBQYWdlTW9kZWwsIHB1YmxpYyBxdWVzdGlvbjogUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5yb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uUm93VmlzaWJpbGl0eUNoYW5nZWQoKTsgfVxuICAgIH1cbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBBcnJheTxRdWVzdGlvbkJhc2U+ID0gW107XG4gICAgcHVibGljIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52aXNpYmxlVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHZpc2libGUodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZVZpc2libGUoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMuY2FsY1Zpc2libGUoKTtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUXVlc3Rpb24ocTogUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2gocSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25WaXNpYmxlQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjaykgdGhpcy52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRXaWR0aCgpIHtcbiAgICAgICAgdmFyIHZpc0NvdW50ID0gdGhpcy5nZXRWaXNpYmxlQ291bnQoKTtcbiAgICAgICAgaWYgKHZpc0NvdW50ID09IDApIHJldHVybjtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNRdWVzdGlvblZpc2libGUodGhpcy5xdWVzdGlvbnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0ucmVuZGVyV2lkdGggPSB0aGlzLnF1ZXN0aW9uLndpZHRoID8gdGhpcy5xdWVzdGlvbi53aWR0aCA6IE1hdGguZmxvb3IoMTAwIC8gdmlzQ291bnQpICsgJyUnO1xuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJpZ2h0SW5kZW50ID0gY291bnRlciA8IHZpc0NvdW50IC0gMSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBvblJvd1Zpc2liaWxpdHlDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLnBhZ2Uub25Sb3dWaXNpYmlsaXR5Q2hhbmdlZCh0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWaXNpYmxlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHJlcyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUXVlc3Rpb25WaXNpYmxlKHRoaXMucXVlc3Rpb25zW2ldKSkgcmVzKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1F1ZXN0aW9uVmlzaWJsZShxOiBRdWVzdGlvbkJhc2UpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucGFnZS5pc1F1ZXN0aW9uVmlzaWJsZShxKTsgfVxuICAgIHByaXZhdGUgY2FsY1Zpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmdldFZpc2libGVDb3VudCgpID4gMDsgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZU1vZGVsIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElQYWdlLCBJQ29uZGl0aW9uUnVubmVyIHtcbiAgICBwcml2YXRlIHJvd1ZhbHVlczogQXJyYXk8UXVlc3Rpb25Sb3dNb2RlbD4gPSBudWxsO1xuICAgIHByaXZhdGUgY29uZGl0aW9uUnVubmVyOiBDb25kaXRpb25SdW5uZXIgPSBudWxsO1xuICAgIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb25CYXNlPiA9IG5ldyBBcnJheTxRdWVzdGlvbkJhc2U+KCk7XG4gICAgcHVibGljIGRhdGE6IElTdXJ2ZXkgPSBudWxsO1xuICAgIHB1YmxpYyB2aXNpYmxlSWY6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHZpc2libGVJbmRleDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBudW1WYWx1ZTogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSB2aXNpYmxlVmFsdWU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuc2V0RGF0YShzZWxmLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHJvd3MoKTogQXJyYXk8UXVlc3Rpb25Sb3dNb2RlbD4ge1xuICAgICAgICB0aGlzLnJvd1ZhbHVlcyA9IHRoaXMuYnVpbGRSb3dzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd1ZhbHVlcztcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpIHsgcmV0dXJuICghdGhpcy5kYXRhKSB8fCB0aGlzLmRhdGEuY3VycmVudFBhZ2UgPT0gdGhpczsgfVxuICAgIHB1YmxpYyBpc1F1ZXN0aW9uVmlzaWJsZShxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogYm9vbGVhbiB7IHJldHVybiBxdWVzdGlvbi52aXNpYmxlIHx8IHRoaXMuaXNEZXNpZ25Nb2RlOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJvdyhxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogUXVlc3Rpb25Sb3dNb2RlbCB7IHJldHVybiBuZXcgUXVlc3Rpb25Sb3dNb2RlbCh0aGlzLCBxdWVzdGlvbik7IH1cbiAgICBwcml2YXRlIGdldCBpc0Rlc2lnbk1vZGUoKSB7IHJldHVybiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmlzRGVzaWduTW9kZTsgfVxuICAgIHByaXZhdGUgYnVpbGRSb3dzKCk6IEFycmF5PFF1ZXN0aW9uUm93TW9kZWw+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxRdWVzdGlvblJvd01vZGVsPigpO1xuICAgICAgICB2YXIgbGFzdFJvd1Zpc2libGVJbmRleCA9IC0xO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxID0gdGhpcy5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZVJvdyhxKSk7XG4gICAgICAgICAgICBpZiAocS5zdGFydFdpdGhOZXdMaW5lKSB7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1Zpc2libGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldLmFkZFF1ZXN0aW9uKHEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFJvd1Zpc2libGVJbmRleCA8IDApIGxhc3RSb3dWaXNpYmxlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtsYXN0Um93VmlzaWJsZUluZGV4XS5hZGRRdWVzdGlvbihxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldLnNldFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgb25Sb3dWaXNpYmlsaXR5Q2hhbmdlZChyb3c6IFF1ZXN0aW9uUm93TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8ICF0aGlzLnJvd1ZhbHVlcykgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJvd1ZhbHVlcy5pbmRleE9mKHJvdyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBpbmRleDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd1ZhbHVlc1tpXS5xdWVzdGlvbnMuaW5kZXhPZihyb3cucXVlc3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd1ZhbHVlc1tpXS51cGRhdGVWaXNpYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRUaXRsZSgpIHsgcmV0dXJuIHRoaXMuZGF0YSAhPSBudWxsID8gdGhpcy5kYXRhLnByb2Nlc3NUZXh0KHRoaXMudGl0bGUpIDogdGhpcy50aXRsZTsgfVxuICAgIHB1YmxpYyBnZXQgbnVtKCkgeyByZXR1cm4gdGhpcy5udW1WYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgbnVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtVmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5udW1WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uTnVtQ2hhbmdlZCh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmlzaWJsZVZhbHVlOyB9XG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZCh0aGlzLCB0aGlzLnZpc2libGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInBhZ2VcIjsgfVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb25CYXNlLCBpbmRleDogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMuc3BsaWNlKGluZGV4LCAwLCBxdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBxdWVzdGlvbi5zZXREYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEucXVlc3Rpb25BZGRlZChxdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGROZXdRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUXVlc3Rpb25CYXNlIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgbmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUXVlc3Rpb24ocXVlc3Rpb24pO1xuICAgICAgICByZXR1cm4gcXVlc3Rpb247XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucXVlc3Rpb25zLmluZGV4T2YocXVlc3Rpb24pO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkgdGhpcy5kYXRhLnF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbik7XG4gICAgfVxuICAgIHB1YmxpYyBzY3JvbGxUb0ZpcnN0UXVlc3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUsIGZvY3VzZU9uRmlyc3RFcnJvcjogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZpcnN0RXJyb3JRdWVzdGlvbiA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHRoaXMucXVlc3Rpb25zW2ldLmhhc0Vycm9ycyhmaXJlQ2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzZU9uRmlyc3RFcnJvciAmJiBmaXJzdEVycm9yUXVlc3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVycm9yUXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3RFcnJvclF1ZXN0aW9uKSBmaXJzdEVycm9yUXVlc3Rpb24uZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGFkZFF1ZXN0aW9uc1RvTGlzdChsaXN0OiBBcnJheTxJUXVlc3Rpb24+LCB2aXNpYmxlT25seTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh2aXNpYmxlT25seSAmJiAhdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZpc2libGVPbmx5ICYmICF0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLnF1ZXN0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJ1bkNvbmRpdGlvbih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlSWYpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvblJ1bm5lcikgdGhpcy5jb25kaXRpb25SdW5uZXIgPSBuZXcgQ29uZGl0aW9uUnVubmVyKHRoaXMudmlzaWJsZUlmKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb25SdW5uZXIuZXhwcmVzc2lvbiA9IHRoaXMudmlzaWJsZUlmO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLmNvbmRpdGlvblJ1bm5lci5ydW4odmFsdWVzKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uTnVtQ2hhbmdlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInBhZ2VcIiwgW1wibmFtZVwiLCB7IG5hbWU6IFwicXVlc3Rpb25zXCIsIGJhc2VDbGFzc05hbWU6IFwicXVlc3Rpb25cIiB9LCB7IG5hbWU6IFwidmlzaWJsZTpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgXCJ2aXNpYmxlSWZcIiwgXCJ0aXRsZVwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFBhZ2VNb2RlbCgpOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYWdlLnRzXG4gKiovIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hCYXNlfSBmcm9tIFwiLi9xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94QmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEhhc090aGVyKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmFsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB2YWwuaW5kZXhPZih0aGlzLm90aGVySXRlbS52YWx1ZSkgPj0gMDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpIHJldHVybiB2YWw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWxbaV0gPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHJldHVybiB2YWw7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNVbmtub3duVmFsdWUodmFsW2ldKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHZhbFtpXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gdmFsLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbmV3VmFsW2ldID0gdGhpcy5vdGhlckl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0RhdGFDb3JlKHZhbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpIHJldHVybiB2YWw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsW2ldID09IHRoaXMub3RoZXJJdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29tbWVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSB2YWwuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsW2ldID0gdGhpcy5nZXRDb21tZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImNoZWNrYm94XCI7XG4gICAgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNoZWNrYm94XCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25DaGVja2JveE1vZGVsKFwiXCIpOyB9LCBcImNoZWNrYm94YmFzZVwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY2hlY2tib3hcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25DaGVja2JveE1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9jaGVja2JveC50c1xuICoqLyIsImltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uQ29tbWVudE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXIgPSA0O1xuICAgIHB1YmxpYyBjb2xzOiBudW1iZXIgPSA1MDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuICAgIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzdXBlci5pc0VtcHR5KCkgfHwgdGhpcy52YWx1ZSA9PSBcIlwiO1xuICAgIH1cbn1cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjb21tZW50XCIsIFt7IG5hbWU6IFwiY29sczpudW1iZXJcIiwgZGVmYXVsdDogNTAgfSwgeyBuYW1lOiBcInJvd3M6bnVtYmVyXCIsIGRlZmF1bHQ6IDQgfV0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY29tbWVudFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uQ29tbWVudE1vZGVsKG5hbWUpOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9jb21tZW50LnRzXG4gKiovIiwiaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRHJvcGRvd25Nb2RlbCBleHRlbmRzIFF1ZXN0aW9uU2VsZWN0QmFzZSB7XG4gICAgcHJpdmF0ZSBvcHRpb25zQ2FwdGlvblZhbHVlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvcHRpb25zQ2FwdGlvbigpIHsgcmV0dXJuICh0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUpID8gdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm9wdGlvbnNDYXB0aW9uXCIpOyB9XG4gICAgcHVibGljIHNldCBvcHRpb25zQ2FwdGlvbihuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA9IG5ld1ZhbHVlOyB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZHJvcGRvd25cIjtcbiAgICB9XG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZHJvcGRvd25cIiwgW3sgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5vcHRpb25zQ2FwdGlvblZhbHVlOyB9fV0sXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbChcIlwiKTsgfSwgXCJzZWxlY3RiYXNlXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJkcm9wZG93blwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbkRyb3Bkb3duTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzXG4gKiovIiwiaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtDdXN0b21FcnJvciwgRXhjZWVkU2l6ZUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRmlsZU1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHByaXZhdGUgc2hvd1ByZXZpZXdWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgaW1hZ2VIZWlnaHQ6IHN0cmluZztcbiAgICBwdWJsaWMgaW1hZ2VXaWR0aDogc3RyaW5nO1xuICAgIHB1YmxpYyBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW47XG4gICAgcHVibGljIG1heFNpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJmaWxlXCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1ByZXZpZXcoKSB7IHJldHVybiB0aGlzLnNob3dQcmV2aWV3VmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dQcmV2aWV3KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd1ByZXZpZXdWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGxvYWRGaWxlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgIXRoaXMuc3VydmV5LnVwbG9hZEZpbGUodGhpcy5uYW1lLCBmaWxlLCB0aGlzLnN0b3JlRGF0YUFzVGV4dCwgZnVuY3Rpb24gKHN0YXR1czogc3RyaW5nKSB7IHNlbGYuaXNVcGxvYWRpbmcgPSBzdGF0dXMgPT0gXCJ1cGxvYWRpbmdcIjsgIH0pKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0RmlsZVZhbHVlKGZpbGUpO1xuICAgIH1cbiAgICBwdWJsaWMgcHJldmlld1ZhbHVlOiBhbnk7XG4gICAgcHJvdGVjdGVkIHNldEZpbGVWYWx1ZShmaWxlOiBGaWxlKSB7XG4gICAgICAgIGlmICghRmlsZVJlYWRlcikgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgJiYgIXRoaXMuc3RvcmVEYXRhQXNUZXh0KSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRmlsZUZvckVycm9ycyhmaWxlKSkgcmV0dXJuO1xuICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2hvd1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByZXZpZXdWYWx1ZSA9IHNlbGYuaXNGaWxlSW1hZ2UoZmlsZSkgPyBmaWxlUmVhZGVyLnJlc3VsdCA6IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlQ2FsbGJhY2soc2VsZi5wcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9yZURhdGFBc1RleHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnZhbHVlID0gZmlsZVJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xuICAgICAgICBzdXBlci5vbkNoZWNrRm9yRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGlmICh0aGlzLmlzVXBsb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidXBsb2FkaW5nRmlsZVwiKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tGaWxlRm9yRXJyb3JzKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGVycm9yTGVuZ3RoID0gdGhpcy5lcnJvcnMgPyB0aGlzLmVycm9ycy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5tYXhTaXplID4gMCAmJiBmaWxlLnNpemUgPiB0aGlzLm1heFNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IEV4Y2VlZFNpemVFcnJvcih0aGlzLm1heFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JMZW5ndGggIT0gdGhpcy5lcnJvcnMubGVuZ3RoIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0ZpbGVJbWFnZShmaWxlOiBGaWxlKSB7XG4gICAgICAgIGlmICghZmlsZSB8fCAhZmlsZS50eXBlKSByZXR1cm47XG4gICAgICAgIHZhciBzdHIgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKFwiaW1hZ2VcIikgPT0gMDtcbiAgICB9XG59XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZmlsZVwiLCBbXCJzaG93UHJldmlldzpib29sZWFuXCIsIFwiaW1hZ2VIZWlnaHRcIiwgXCJpbWFnZVdpZHRoXCIsIFwic3RvcmVEYXRhQXNUZXh0OmJvb2xlYW5cIiwgXCJtYXhTaXplOm51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uRmlsZU1vZGVsKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJmaWxlXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25GaWxlTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2ZpbGUudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uSHRtbE1vZGVsIGV4dGVuZHMgUXVlc3Rpb25CYXNlIHtcbiAgICBwcml2YXRlIGh0bWxWYWx1ZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImh0bWxcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBodG1sKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmh0bWxWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgaHRtbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaHRtbFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkSHRtbCgpIHsgcmV0dXJuIHRoaXMuc3VydmV5ID8gdGhpcy5zdXJ2ZXkucHJvY2Vzc0h0bWwodGhpcy5odG1sKSA6IHRoaXMuaHRtbDsgfVxufVxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImh0bWxcIiwgW1wiaHRtbDpodG1sXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sTW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25iYXNlXCIpO1xuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJodG1sXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2h0bWwudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsIGV4dGVuZHMgUXVlc3Rpb25DaGVja2JveEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJhZGlvZ3JvdXBcIjtcbiAgICB9XG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJyYWRpb2dyb3VwXCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwoXCJcIik7IH0sIFwiY2hlY2tib3hiYXNlXCIpO1xuXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInJhZGlvZ3JvdXBcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25fcmFkaW9ncm91cC50c1xuICoqLyIsImltcG9ydCB7SXRlbVZhbHVlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhdGluZ01vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xuICAgIHN0YXRpYyBkZWZhdWx0UmF0ZVZhbHVlczogSXRlbVZhbHVlW10gPSBbXTtcbiAgICBwcml2YXRlIHJhdGVzOiBJdGVtVmFsdWVbXSA9IFtdO1xuICAgIHB1YmxpYyBtaW5pbnVtUmF0ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBtYXhpbXVtUmF0ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcmF0ZVZhbHVlc0NoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIGdldCByYXRlVmFsdWVzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yYXRlczsgfVxuICAgIHNldCByYXRlVmFsdWVzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMucmF0ZXMsIG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0IHZpc2libGVSYXRlVmFsdWVzKCk6IEl0ZW1WYWx1ZVtdIHtcbiAgICAgICAgaWYgKHRoaXMucmF0ZVZhbHVlcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5yYXRlVmFsdWVzO1xuICAgICAgICByZXR1cm4gUXVlc3Rpb25SYXRpbmdNb2RlbC5kZWZhdWx0UmF0ZVZhbHVlcztcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmF0aW5nXCI7XG4gICAgfVxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgICBwdWJsaWMgc3VwcG9ydE90aGVyKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuSXRlbVZhbHVlLnNldERhdGEoUXVlc3Rpb25SYXRpbmdNb2RlbC5kZWZhdWx0UmF0ZVZhbHVlcywgWzEsIDIsIDMsIDQsIDVdKTtcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJyYXRpbmdcIiwgW1wiaGFzQ29tbWVudDpib29sZWFuXCIsIHsgbmFtZTogXCJyYXRlVmFsdWVzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmoucmF0ZVZhbHVlcyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmoucmF0ZVZhbHVlcyA9IHZhbHVlOyB9fSxcbiAgICBcIm1pbmludW1SYXRlRGVzY3JpcHRpb25cIiwgXCJtYXhpbXVtUmF0ZURlc2NyaXB0aW9uXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmdNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmF0aW5nXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmdNb2RlbChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25fcmF0aW5nLnRzXG4gKiovIiwiaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25UZXh0TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiB7XG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IDI1O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRleHRcIjtcbiAgICB9XG4gICAgaXNFbXB0eSgpOiBib29sZWFuIHsgIHJldHVybiBzdXBlci5pc0VtcHR5KCkgfHwgdGhpcy52YWx1ZSA9PSBcIlwiOyB9XG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XG59XG5cbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0ZXh0XCIsIFt7IG5hbWU6IFwic2l6ZTpudW1iZXJcIiwgZGVmYXVsdDogMjUgfV0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvblRleHRNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcblxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJ0ZXh0XCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25UZXh0TW9kZWwobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX3RleHQudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7QmFzZSwgSVN1cnZleSwgSGFzaFRhYmxlLCBJUXVlc3Rpb24sIElDb25kaXRpb25SdW5uZXIsIElQYWdlLCBTdXJ2ZXlFcnJvciwgRXZlbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7SVN1cnZleVRyaWdnZXJPd25lciwgU3VydmV5VHJpZ2dlcn0gZnJvbSBcIi4vdHJpZ2dlclwiO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4vdGV4dFByZVByb2Nlc3NvclwiO1xuaW1wb3J0IHtkeFN1cnZleVNlcnZpY2V9IGZyb20gXCIuL2R4U3VydmV5U2VydmljZVwiO1xuaW1wb3J0IHtKc29uRXJyb3J9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5TW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVN1cnZleSwgSVN1cnZleVRyaWdnZXJPd25lciB7XG4gICAgcHVibGljIHN1cnZleUlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzdXJ2ZXlQb3N0SWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGNsaWVudElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjb29raWVOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBzZW5kUmVzdWx0T25QYWdlTmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNvbW1lbnRQcmVmaXg6IHN0cmluZyA9IFwiLUNvbW1lbnRcIjtcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHNob3dOYXZpZ2F0aW9uQnV0dG9uczogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNob3dQYWdlVGl0bGVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY29tcGxldGVkSHRtbDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgcmVxdWlyZWRUZXh0OiBzdHJpbmcgPSBcIipcIjtcbiAgICBwdWJsaWMgcXVlc3Rpb25TdGFydEluZGV4OiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIHNob3dQcm9ncmVzc0Jhcjogc3RyaW5nID0gXCJvZmZcIjtcbiAgICBwdWJsaWMgc3RvcmVPdGhlcnNBc0NvbW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBnb05leHRQYWdlQXV0b21hdGljOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHBhZ2VzOiBBcnJheTxQYWdlTW9kZWw+ID0gbmV3IEFycmF5PFBhZ2VNb2RlbD4oKTtcbiAgICBwdWJsaWMgdHJpZ2dlcnM6IEFycmF5PFN1cnZleVRyaWdnZXI+ID0gbmV3IEFycmF5PFN1cnZleVRyaWdnZXI+KCk7XG4gICAgcHVibGljIGNsZWFySW52aXNpYmxlVmFsdWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50UGFnZVZhbHVlOiBQYWdlTW9kZWwgPSBudWxsO1xuICAgIHByaXZhdGUgdmFsdWVzSGFzaDogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHZhcmlhYmxlc0hhc2g6IEhhc2hUYWJsZTxhbnk+ID0ge307XG4gICAgcHJpdmF0ZSBwYWdlUHJldlRleHRWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcGFnZU5leHRUZXh0VmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBsZXRlVGV4dFZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaG93UGFnZU51bWJlcnNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlOiBzdHJpbmcgPSBcIm9uXCI7XG4gICAgcHJpdmF0ZSBxdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZTogc3RyaW5nID0gXCJ0b3BcIjtcbiAgICBwcml2YXRlIGxvY2FsZVZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcHJvY2Vzc2VkVGV4dFZhbHVlczogSGFzaFRhYmxlPGFueT4gPSB7fTtcbiAgICBwcml2YXRlIHRleHRQcmVQcm9jZXNzb3I6IFRleHRQcmVQcm9jZXNzb3I7XG5cbiAgICBwdWJsaWMgb25Db21wbGV0ZTogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uQ3VycmVudFBhZ2VDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmFsdWVDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmlzaWJsZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25QYWdlVmlzaWJsZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25RdWVzdGlvbkFkZGVkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uUXVlc3Rpb25SZW1vdmVkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uVmFsaWRhdGVRdWVzdGlvbjogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblByb2Nlc3NIdG1sOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uU2VuZFJlc3VsdDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkdldFJlc3VsdDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblVwbG9hZEZpbGU6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMganNvbkVycm9yczogQXJyYXk8SnNvbkVycm9yPiA9IG51bGw7XG5cbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nID0gXCJub3JtYWxcIjtcblxuXG4gICAgY29uc3RydWN0b3IoanNvbk9iajogYW55ID0gbnVsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3NvciA9IG5ldyBUZXh0UHJlUHJvY2Vzc29yKCk7XG4gICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vbkhhc1ZhbHVlID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykgeyByZXR1cm4gc2VsZi5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWUudG9Mb3dlckNhc2UoKV07IH07XG4gICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vblByb2Nlc3MgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLmdldFByb2Nlc3NlZFRleHRWYWx1ZShuYW1lKTsgfTtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5kYXRhID0gc2VsZjtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5zZXRPd25lcihzZWxmKTtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9jZXNzZWRUZXh0VmFsdWVzKCk7XG4gICAgICAgIHRoaXMub25CZWZvcmVDcmVhdGluZygpO1xuICAgICAgICBpZiAoanNvbk9iaikge1xuICAgICAgICAgICAgdGhpcy5zZXRKc29uT2JqZWN0KGpzb25PYmopO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdXJ2ZXlGcm9tU2VydmljZSh0aGlzLnN1cnZleUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ3JlYXRpbmcoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic3VydmV5XCI7IH1cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5sb2NhbGVWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgbG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzdXJ2ZXlMb2NhbGl6YXRpb24uY3VycmVudExvY2FsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0TG9jU3RyaW5nKHN0cjogc3RyaW5nKSB7IHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKHN0cik7IH1cbiAgICBwdWJsaWMgZ2V0IGVtcHR5U3VydmV5VGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5nZXRMb2NTdHJpbmcoXCJlbXB0eVN1cnZleVwiKTsgfVxuICAgIHB1YmxpYyBnZXQgcGFnZVByZXZUZXh0KCkgeyByZXR1cm4gKHRoaXMucGFnZVByZXZUZXh0VmFsdWUpID8gdGhpcy5wYWdlUHJldlRleHRWYWx1ZSA6IHRoaXMuZ2V0TG9jU3RyaW5nKFwicGFnZVByZXZUZXh0XCIpOyB9XG4gICAgcHVibGljIHNldCBwYWdlUHJldlRleHQobmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLnBhZ2VQcmV2VGV4dFZhbHVlID0gbmV3VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHBhZ2VOZXh0VGV4dCgpIHsgcmV0dXJuICh0aGlzLnBhZ2VOZXh0VGV4dFZhbHVlKSA/IHRoaXMucGFnZU5leHRUZXh0VmFsdWUgOiB0aGlzLmdldExvY1N0cmluZyhcInBhZ2VOZXh0VGV4dFwiKTsgfVxuICAgIHB1YmxpYyBzZXQgcGFnZU5leHRUZXh0KG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5wYWdlTmV4dFRleHRWYWx1ZSA9IG5ld1ZhbHVlOyB9XG4gICAgcHVibGljIGdldCBjb21wbGV0ZVRleHQoKSB7IHJldHVybiAodGhpcy5jb21wbGV0ZVRleHRWYWx1ZSkgPyB0aGlzLmNvbXBsZXRlVGV4dFZhbHVlIDogdGhpcy5nZXRMb2NTdHJpbmcoXCJjb21wbGV0ZVRleHRcIik7IH1cbiAgICBwdWJsaWMgc2V0IGNvbXBsZXRlVGV4dChuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMuY29tcGxldGVUZXh0VmFsdWUgPSBuZXdWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1BhZ2VOdW1iZXJzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5zaG93UGFnZU51bWJlcnNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd1BhZ2VOdW1iZXJzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5zaG93UGFnZU51bWJlcnMpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93UGFnZU51bWJlcnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd1F1ZXN0aW9uTnVtYmVycygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzVmFsdWU7IH07XG4gICAgcHVibGljIHNldCBzaG93UXVlc3Rpb25OdW1iZXJzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnNob3dRdWVzdGlvbk51bWJlcnMpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgIH07XG4gICAgcHVibGljIGdldCBxdWVzdGlvblRpdGxlTG9jYXRpb24oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMucXVlc3Rpb25UaXRsZUxvY2F0aW9uVmFsdWU7IH07XG4gICAgcHVibGljIHNldCBxdWVzdGlvblRpdGxlTG9jYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucXVlc3Rpb25UaXRsZUxvY2F0aW9uVmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgcHVibGljIGdldCBkYXRhKCk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzSGFzaCkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLnZhbHVlc0hhc2hba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGRhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWVzSGFzaCA9IHt9O1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0hhc2hba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVHJpZ2dlcnMoa2V5LCBkYXRhW2tleV0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeUFsbFF1ZXN0aW9uc09uVmFsdWVDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9ucygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvbW1lbnRzKCk6IGFueSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzSGFzaCkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKHRoaXMuY29tbWVudFByZWZpeCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLnZhbHVlc0hhc2hba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZVBhZ2VzKCk6IEFycmF5PFBhZ2VNb2RlbD4ge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc2lnbk1vZGUpIHJldHVybiB0aGlzLnBhZ2VzO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PFBhZ2VNb2RlbD4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlc1tpXS5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBhZ2VzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhZ2VzLmxlbmd0aCA9PSAwOyB9XG4gICAgcHVibGljIGdldCBQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMubGVuZ3RoO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVQYWdlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZVBhZ2VzLmxlbmd0aDtcbiAgICB9XG4gICAgcHVibGljIGdldCBjdXJyZW50UGFnZSgpOiBQYWdlTW9kZWwge1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHZQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSA9PSBudWxsICYmIHZQYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdlBhZ2VzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlVmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY3VycmVudFBhZ2UodmFsdWU6IFBhZ2VNb2RlbCkge1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZQYWdlcy5pbmRleE9mKHZhbHVlKSA8IDApIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlID09IHRoaXMuY3VycmVudFBhZ2VWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmN1cnJlbnRQYWdlVmFsdWU7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUuc2Nyb2xsVG9GaXJzdFF1ZXN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHJldHVybiBcImxvYWRpbmdcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHJldHVybiBcImNvbXBsZXRlZFwiO1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudFBhZ2UpID8gXCJydW5uaW5nXCIgOiBcImVtcHR5XCJcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnZhcmlhYmxlc0hhc2ggPSB7fTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMudmlzaWJsZVBhZ2VzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBtZXJnZVZhbHVlcyhzcmM6IGFueSwgZGVzdDogYW55KSB7XG4gICAgICAgIGlmICghZGVzdCB8fCAhc3JjKSByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3Rba2V5XSkgZGVzdFtrZXldID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZVZhbHVlcyh2YWx1ZSwgZGVzdFtrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVzdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZTogUGFnZU1vZGVsLCBvbGRWYWx1ZTogUGFnZU1vZGVsKSB7XG4gICAgICAgIHRoaXMub25DdXJyZW50UGFnZUNoYW5nZWQuZmlyZSh0aGlzLCB7ICdvbGRDdXJyZW50UGFnZSc6IG9sZFZhbHVlLCAnbmV3Q3VycmVudFBhZ2UnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldFByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiAwO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZpc2libGVQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2UpICsgMTtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoaW5kZXggKiAxMDAgLyB0aGlzLnZpc2libGVQYWdlQ291bnQpKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0Rlc2lnbk1vZGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm1vZGUgPT0gXCJkZXNpZ25lclwiOyB9XG4gICAgcHVibGljIGdldCBoYXNDb29raWUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llO1xuICAgICAgICByZXR1cm4gY29va2llcyAmJiBjb29raWVzLmluZGV4T2YodGhpcy5jb29raWVOYW1lICsgXCI9dHJ1ZVwiKSA+IC0xO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29va2llKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29va2llTmFtZSkgcmV0dXJuO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLmNvb2tpZU5hbWUgKyBcIj10cnVlOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMDowOjAgR01UXCI7XG4gICAgfVxuICAgIHB1YmxpYyBkZWxldGVDb29raWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuY29va2llTmFtZSArIFwiPTtcIjtcbiAgICB9XG4gICAgcHVibGljIG5leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc0xhc3RQYWdlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzQ3VycmVudFBhZ2VIYXNFcnJvcnMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGVja09uUGFnZVRyaWdnZXJzKCk7XG4gICAgICAgIGlmICh0aGlzLnNlbmRSZXN1bHRPblBhZ2VOZXh0ICYmIHRoaXMuY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlc3VsdCh0aGlzLnN1cnZleVBvc3RJZCwgdGhpcy5jbGllbnRJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1tpbmRleCArIDFdO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IGlzQ3VycmVudFBhZ2VIYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZS5oYXNFcnJvcnModHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBwcmV2UGFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFBhZ2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1tpbmRleCAtIDFdO1xuICAgIH1cbiAgICBwdWJsaWMgY29tcGxldGVMYXN0UGFnZSgpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzQ3VycmVudFBhZ2VIYXNFcnJvcnMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5kb0NvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZVBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgPT0gMDtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc0xhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICByZXR1cm4gdlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgPT0gdlBhZ2VzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHB1YmxpYyBkb0NvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5jbGVhckludmlzaWJsZVZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5jbGVhckludmlzaWJsZVF1ZXN0aW9uVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDb29raWUoKTtcbiAgICAgICAgdGhpcy5zZXRDb21wbGV0ZWQoKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmZpcmUodGhpcywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVBvc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5zZW5kUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkQ29tcGxldGVkSHRtbCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWRIdG1sKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzSHRtbCh0aGlzLmNvbXBsZXRlZEh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjxoMz5cIiArIHRoaXMuZ2V0TG9jU3RyaW5nKFwiY29tcGxldGluZ1N1cnZleVwiKSArIFwiPC9oMz5cIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRMb2FkaW5nSHRtbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCI8aDM+XCIgKyB0aGlzLmdldExvY1N0cmluZyhcImxvYWRpbmdTdXJ2ZXlcIikgKyBcIjwvaDM+XCI7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3NUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgdlBhZ2VzID0gdGhpcy52aXNpYmxlUGFnZXM7XG4gICAgICAgIHZhciBpbmRleCA9IHZQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2UpICsgMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jU3RyaW5nKFwicHJvZ3Jlc3NUZXh0XCIpW1wiZm9ybWF0XCJdKGluZGV4LCB2UGFnZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgcHVibGljIHVwbG9hZEZpbGUobmFtZTogc3RyaW5nLCBmaWxlOiBGaWxlLCBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW4sIHVwbG9hZGluZ0NhbGxiYWNrOiAoc3RhdHVzOiBzdHJpbmcpPT5hbnkpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGFjY2VwdCA9IHRydWU7XG4gICAgICAgIHRoaXMub25VcGxvYWRGaWxlLmZpcmUodGhpcywgeyBuYW1lOiBuYW1lLCBmaWxlOiBmaWxlLCBhY2NlcHQ6IGFjY2VwdCB9KTtcbiAgICAgICAgaWYgKCFhY2NlcHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFzdG9yZURhdGFBc1RleHQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkRmlsZUNvcmUobmFtZSwgZmlsZSwgdXBsb2FkaW5nQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBsb2FkRmlsZUNvcmUobmFtZTogc3RyaW5nLCBmaWxlOiBGaWxlLCB1cGxvYWRpbmdDYWxsYmFjazogKHN0YXR1czogc3RyaW5nKSA9PiBhbnkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodXBsb2FkaW5nQ2FsbGJhY2spIHVwbG9hZGluZ0NhbGxiYWNrKFwidXBsb2FkaW5nXCIpO1xuICAgICAgICBuZXcgZHhTdXJ2ZXlTZXJ2aWNlKCkuc2VuZEZpbGUodGhpcy5zdXJ2ZXlQb3N0SWQsIGZpbGUsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KSB7XG4gICAgICAgICAgICBpZiAodXBsb2FkaW5nQ2FsbGJhY2spIHVwbG9hZGluZ0NhbGxiYWNrKHN1Y2Nlc3MgPyBcInN1Y2Nlc3NcIiA6IFwiZXJyb3JcIik7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0VmFsdWUobmFtZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UGFnZShpbmRleDogbnVtYmVyKTogUGFnZU1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNbaW5kZXhdO1xuICAgIH1cbiAgICBhZGRQYWdlKHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgICAgICBpZiAocGFnZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMucGFnZXMucHVzaChwYWdlKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgIH1cbiAgICBhZGROZXdQYWdlKG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuY3JlYXRlTmV3UGFnZShuYW1lKTtcbiAgICAgICAgdGhpcy5hZGRQYWdlKHBhZ2UpO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG4gICAgcmVtb3ZlUGFnZShwYWdlOiBQYWdlTW9kZWwpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYWdlcy5pbmRleE9mKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMucGFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSA9PSBwYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggPiAwID8gdGhpcy5wYWdlc1swXSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UXVlc3Rpb25CeU5hbWUobmFtZTogc3RyaW5nLCBjYXNlSW5zZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZSk6IElRdWVzdGlvbiB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucygpO1xuICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlKSBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb25OYW1lID0gcXVlc3Rpb25zW2ldLm5hbWU7XG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlKSBxdWVzdGlvbk5hbWUgPSBxdWVzdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmKHF1ZXN0aW9uTmFtZSA9PSBuYW1lKSByZXR1cm4gcXVlc3Rpb25zW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UXVlc3Rpb25zQnlOYW1lcyhuYW1lczogc3RyaW5nW10sIGNhc2VJbnNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKTogSVF1ZXN0aW9uW10ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICghbmFtZXMpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFuYW1lc1tpXSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWVzW2ldLCBjYXNlSW5zZW5zaXRpdmUpO1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uKSByZXN1bHQucHVzaChxdWVzdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uOiBJUXVlc3Rpb24pOiBQYWdlTW9kZWwge1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnBhZ2VzW2ldO1xuICAgICAgICAgICAgaWYgKHBhZ2UucXVlc3Rpb25zLmluZGV4T2YoPFF1ZXN0aW9uQmFzZT5xdWVzdGlvbikgPiAtMSkgcmV0dXJuIHBhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRQYWdlQnlOYW1lKG5hbWU6IHN0cmluZyk6IFBhZ2VNb2RlbCB7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiB0aGlzLnBhZ2VzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UGFnZXNCeU5hbWVzKG5hbWVzOiBzdHJpbmdbXSk6IFBhZ2VNb2RlbFtde1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICghbmFtZXMpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFuYW1lc1tpXSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuZ2V0UGFnZUJ5TmFtZShuYW1lc1tpXSk7XG4gICAgICAgICAgICBpZiAocGFnZSkgcmVzdWx0LnB1c2gocGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHVibGljIGdldEFsbFF1ZXN0aW9ucyh2aXNpYmxlT25seTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8SVF1ZXN0aW9uPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8SVF1ZXN0aW9uPigpO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS5hZGRRdWVzdGlvbnNUb0xpc3QocmVzdWx0LCB2aXNpYmxlT25seSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1BhZ2UobmFtZTogc3RyaW5nKSB7IHJldHVybiBuZXcgUGFnZU1vZGVsKG5hbWUpOyB9XG4gICAgcHJpdmF0ZSBub3RpZnlRdWVzdGlvbk9uVmFsdWVDaGFuZ2VkKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRBbGxRdWVzdGlvbnMoKTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uc1tpXS5uYW1lICE9IG5hbWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcXVlc3Rpb24gPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICB0aGlzLmRvU3VydmV5VmFsdWVDaGFuZ2VkKHF1ZXN0aW9uLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ25hbWUnOiBuYW1lLCAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3ZhbHVlJzogbmV3VmFsdWUgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgbm90aWZ5QWxsUXVlc3Rpb25zT25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucygpO1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRvU3VydmV5VmFsdWVDaGFuZ2VkKHF1ZXN0aW9uc1tpXSwgdGhpcy5nZXRWYWx1ZShxdWVzdGlvbnNbaV0ubmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBkb1N1cnZleVZhbHVlQ2hhbmdlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHF1ZXN0aW9uLm9uU3VydmV5VmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjaGVja09uUGFnZVRyaWdnZXJzKCkge1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRDdXJyZW50UGFnZVF1ZXN0aW9ucygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gcXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShxdWVzdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUcmlnZ2VycyhxdWVzdGlvbi5uYW1lLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRDdXJyZW50UGFnZVF1ZXN0aW9ucygpOiBBcnJheTxRdWVzdGlvbkJhc2U+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgICAgIGlmICghcGFnZSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gcGFnZS5xdWVzdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uLnZpc2libGUgfHwgIXF1ZXN0aW9uLm5hbWUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocXVlc3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tUcmlnZ2VycyhuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnksIGlzT25OZXh0UGFnZTogYm9vbGVhbikge1xuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy50cmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSB0aGlzLnRyaWdnZXJzW2ldO1xuICAgICAgICAgICAgaWYgKHRyaWdnZXIubmFtZSA9PSBuYW1lICYmIHRyaWdnZXIuaXNPbk5leHRQYWdlID09IGlzT25OZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIuY2hlY2sobmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZG9RdWVzdGlvbnNPbkxvYWQoKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucyhmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBxdWVzdGlvbnNbaV0ub25TdXJ2ZXlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBydW5Db25kaXRpb25zKCkge1xuICAgICAgICB0aGlzLnJ1bkNvbmRpdGlvbnNGb3JMaXN0KHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKSk7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9uc0Zvckxpc3QodGhpcy5wYWdlcyk7XG4gICAgfVxuICAgIHByaXZhdGUgcnVuQ29uZGl0aW9uc0Zvckxpc3QobGlzdDogQXJyYXk8SUNvbmRpdGlvblJ1bm5lcj4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2ldLnJ1bkNvbmRpdGlvbih0aGlzLnZhbHVlc0hhc2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzZW5kUmVzdWx0KHBvc3RJZDogc3RyaW5nID0gbnVsbCwgY2xpZW50SWQ6IHN0cmluZyA9IG51bGwsIGlzUGFydGlhbENvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghcG9zdElkICYmIHRoaXMuc3VydmV5UG9zdElkKSB7XG4gICAgICAgICAgICBwb3N0SWQgPSB0aGlzLnN1cnZleVBvc3RJZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvc3RJZCkgcmV0dXJuO1xuICAgICAgICBpZiAoY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIG5ldyBkeFN1cnZleVNlcnZpY2UoKS5zZW5kUmVzdWx0KHBvc3RJZCwgdGhpcy5kYXRhLCBmdW5jdGlvbiAoc3VjY2VzczogYm9vbGVhbiwgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5vblNlbmRSZXN1bHQuZmlyZShzZWxmLCB7IHN1Y2Nlc3M6IHN1Y2Nlc3MsIHJlc3BvbnNlOiByZXNwb25zZX0pO1xuICAgICAgICB9LCB0aGlzLmNsaWVudElkLCBpc1BhcnRpYWxDb21wbGV0ZWQpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UmVzdWx0KHJlc3VsdElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIG5ldyBkeFN1cnZleVNlcnZpY2UoKS5nZXRSZXN1bHQocmVzdWx0SWQsIG5hbWUsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCBkYXRhOiBhbnksIGRhdGFMaXN0OiBhbnlbXSwgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5vbkdldFJlc3VsdC5maXJlKHNlbGYsIHsgc3VjY2Vzczogc3VjY2VzcywgZGF0YTogZGF0YSwgZGF0YUxpc3Q6IGRhdGFMaXN0LCByZXNwb25zZTogcmVzcG9uc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZFN1cnZleUZyb21TZXJ2aWNlKHN1cnZleUlkOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmIChzdXJ2ZXlJZCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlJZCA9IHN1cnZleUlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uTG9hZGluZ1N1cnZleUZyb21TZXJ2aWNlKCk7XG4gICAgICAgIG5ldyBkeFN1cnZleVNlcnZpY2UoKS5sb2FkU3VydmV5KHRoaXMuc3VydmV5SWQsIGZ1bmN0aW9uIChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0SnNvbk9iamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5QWxsUXVlc3Rpb25zT25WYWx1ZUNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLm9uTG9hZFN1cnZleUZyb21TZXJ2aWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkaW5nU3VydmV5RnJvbVNlcnZpY2UoKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlSW5kZXhlcygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXModGhpcy5zaG93UGFnZU51bWJlcnMpO1xuICAgICAgICBpZiAodGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25QYWdlXCIpIHtcbiAgICAgICAgICAgIHZhciB2aXNQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyh2aXNQYWdlc1tpXS5xdWVzdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVzdGlvblZpc2libGVJbmRleGVzKHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKSwgdGhpcy5zaG93UXVlc3Rpb25OdW1iZXJzID09IFwib25cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlVmlzaWJsZUluZGV4ZXMoc2hvd0luZGV4OiBib29sZWFuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYWdlc1tpXS52aXNpYmxlSW5kZXggPSB0aGlzLnBhZ2VzW2ldLnZpc2libGUgPyAoaW5kZXgrKykgOiAtMTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0ubnVtID0gc2hvd0luZGV4ICYmIHRoaXMucGFnZXNbaV0udmlzaWJsZSA/IHRoaXMucGFnZXNbaV0udmlzaWJsZUluZGV4ICsgMSA6IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyhxdWVzdGlvbnM6IElRdWVzdGlvbltdLCBzaG93SW5kZXg6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5zZXRWaXNpYmxlSW5kZXgoc2hvd0luZGV4ICYmIHF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHF1ZXN0aW9uc1tpXS5oYXNUaXRsZSA/IChpbmRleCsrKSA6IC0xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNldEpzb25PYmplY3QoanNvbk9iajogYW55KSB7XG4gICAgICAgIGlmICghanNvbk9iaikgcmV0dXJuO1xuICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBudWxsO1xuICAgICAgICB2YXIganNvbkNvbnZlcnRlciA9IG5ldyBKc29uT2JqZWN0KCk7XG4gICAgICAgIGpzb25Db252ZXJ0ZXIudG9PYmplY3QoanNvbk9iaiwgdGhpcyk7XG4gICAgICAgIGlmIChqc29uQ29udmVydGVyLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBqc29uQ29udmVydGVyLmVycm9ycztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29va2llKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvUXVlc3Rpb25zT25Mb2FkKCk7XG4gICAgICAgIHRoaXMucnVuQ29uZGl0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkgeyB9XG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRpbmcoKSB7IH1cbiAgICBwcml2YXRlIHVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tcInBhZ2Vub1wiXSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzZWxmLmN1cnJlbnRQYWdlICE9IG51bGwgPyBzZWxmLnZpc2libGVQYWdlcy5pbmRleE9mKHNlbGYuY3VycmVudFBhZ2UpICsgMSA6IDA7IH1cbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW1wicGFnZWNvdW50XCJdID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHNlbGYudmlzaWJsZVBhZ2VDb3VudDsgfVxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRBbGxRdWVzdGlvbnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1Byb2Nlc3NlZFRleHRWYWx1ZXMocXVlc3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZFF1ZXN0aW9uVG9Qcm9jZXNzZWRUZXh0VmFsdWVzKHF1ZXN0aW9uOiBJUXVlc3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW3F1ZXN0aW9uLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBcInF1ZXN0aW9uXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UHJvY2Vzc2VkVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWVdO1xuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh2YWwgPT0gXCJxdWVzdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXN0aW9uICE9IG51bGwgPyB0aGlzLmdldFZhbHVlKHF1ZXN0aW9uLm5hbWUpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09IFwidmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PSBcInZhcmlhYmxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhcmlhYmxlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWwobmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJJbnZpc2libGVRdWVzdGlvblZhbHVlcygpIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNbaV0udmlzaWJsZSkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFyaWFibGVzSGFzaFtuYW1lXTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhcmlhYmxlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy52YXJpYWJsZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gXCJ2YXJpYWJsZVwiO1xuICAgIH1cbiAgICAvL0lTdXJ2ZXkgZGF0YVxuICAgIHByaXZhdGUgZ2V0VW5iaW5kVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgLy9kbyBub3QgcmV0dXJuIHRoZSBzYW1lIG9iamVjdCBpbnN0YW5jZSEhIVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNIYXNoW25hbWVdO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmJpbmRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwobmFtZSwgbmV3VmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiIHx8IG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZ2V0VW5iaW5kVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NlZFRleHRWYWx1ZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IFwidmFsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmNoZWNrVHJpZ2dlcnMobmFtZSwgbmV3VmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XG4gICAgICAgIHRoaXMudHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1ZhbHVlRXF1YWwobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiKSBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCB8fCBvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUd29WYWx1ZUVxdWFscyhuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGlzVHdvVmFsdWVFcXVhbHMoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0KSB8fCAhKHkgaW5zdGFuY2VvZiBPYmplY3QpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIHAgaW4geCkge1xuICAgICAgICAgICAgaWYgKCF4Lmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgheS5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHhbcF0gPT09IHlbcF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoeFtwXSkgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1R3b1ZhbHVlRXF1YWxzKHhbcF0sIHlbcF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwIGluIHkpIHtcbiAgICAgICAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICYmICF4Lmhhc093blByb3BlcnR5KHApKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgdHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdvTmV4dFBhZ2VBdXRvbWF0aWMgfHwgIXRoaXMuY3VycmVudFBhZ2UpIHJldHVybjtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRRdWVzdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmICFxdWVzdGlvbi5zdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpKSByZXR1cm47XG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VmFsdWUocXVlc3Rpb25zW2ldLm5hbWUpKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQYWdlLmhhc0Vycm9ycyhmYWxzZSwgZmFsc2UpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXN0UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tbWVudChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kYXRhW25hbWUgKyB0aGlzLmNvbW1lbnRQcmVmaXhdO1xuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lICsgdGhpcy5jb21tZW50UHJlZml4O1xuICAgICAgICBpZiAobmV3VmFsdWUgPT0gXCJcIiB8fCBuZXdWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNIYXNoW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnRyeUdvTmV4dFBhZ2VBdXRvbWF0aWMobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSwgJ3Zpc2libGUnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcGFnZVZpc2liaWxpdHlDaGFuZ2VkKHBhZ2U6IElQYWdlLCBuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMub25QYWdlVmlzaWJsZUNoYW5nZWQuZmlyZSh0aGlzLCB7ICdwYWdlJzogcGFnZSwgJ3Zpc2libGUnOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG4gICAgcXVlc3Rpb25BZGRlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcbiAgICAgICAgdGhpcy5hZGRRdWVzdGlvblRvUHJvY2Vzc2VkVGV4dFZhbHVlcyhxdWVzdGlvbik7XG4gICAgICAgIHRoaXMub25RdWVzdGlvbkFkZGVkLmZpcmUodGhpcywgeyAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ25hbWUnOiBxdWVzdGlvbi5uYW1lLCAnaW5kZXgnOiBpbmRleCB9KTtcbiAgICB9XG4gICAgcXVlc3Rpb25SZW1vdmVkKHF1ZXN0aW9uOiBJUXVlc3Rpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xuICAgICAgICB0aGlzLm9uUXVlc3Rpb25SZW1vdmVkLmZpcmUodGhpcywgeyAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ25hbWUnOiBxdWVzdGlvbi5uYW1lIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlUXVlc3Rpb24obmFtZTogc3RyaW5nKTogU3VydmV5RXJyb3Ige1xuICAgICAgICBpZiAodGhpcy5vblZhbGlkYXRlUXVlc3Rpb24uaXNFbXB0eSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBuYW1lOiBuYW1lLCB2YWx1ZTogdGhpcy5nZXRWYWx1ZShuYW1lKSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRlUXVlc3Rpb24uZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZXJyb3IgPyBuZXcgQ3VzdG9tRXJyb3Iob3B0aW9ucy5lcnJvcikgOiBudWxsO1xuICAgIH1cbiAgICBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgaHRtbDogaHRtbCB9O1xuICAgICAgICB0aGlzLm9uUHJvY2Vzc0h0bWwuZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1RleHQob3B0aW9ucy5odG1sKTtcbiAgICB9XG4gICAgcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFByZVByb2Nlc3Nvci5wcm9jZXNzKHRleHQpO1xuICAgIH1cbiAgICAvL0lTdXJ2ZXlUcmlnZ2VyT3duZXJcbiAgICBnZXRPYmplY3RzKHBhZ2VzOiBzdHJpbmdbXSwgcXVlc3Rpb25zOiBzdHJpbmdbXSk6IGFueVtde1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJlc3VsdCwgdGhpcy5nZXRQYWdlc0J5TmFtZXMocGFnZXMpKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCB0aGlzLmdldFF1ZXN0aW9uc0J5TmFtZXMocXVlc3Rpb25zKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldFRyaWdnZXJWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGlzVmFyaWFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgICAgIGlmIChpc1ZhcmlhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhcmlhYmxlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic3VydmV5XCIsIFt7IG5hbWU6IFwibG9jYWxlXCIsIGNob2ljZXM6ICgpID0+IHsgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRMb2NhbGVzKCkgfSB9LFxuICAgIFwidGl0bGVcIiwgXCJjb21wbGV0ZWRIdG1sOmh0bWxcIiwgeyBuYW1lOiBcInBhZ2VzXCIsIGNsYXNzTmFtZTogXCJwYWdlXCIgfSxcbiAgICB7IG5hbWU6IFwicXVlc3Rpb25zXCIsIGJhc2VDbGFzc05hbWU6IFwicXVlc3Rpb25cIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gbnVsbDsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iaiwgdmFsdWUsIGpzb25Db252ZXJ0ZXIpIHsgdmFyIHBhZ2UgPSBvYmouYWRkTmV3UGFnZShcIlwiKTsganNvbkNvbnZlcnRlci50b09iamVjdCh7IHF1ZXN0aW9uczogdmFsdWUgfSwgcGFnZSk7IH0gfSxcbiAgICB7IG5hbWU6IFwidHJpZ2dlcnM6dHJpZ2dlcnNcIiwgYmFzZUNsYXNzTmFtZTogXCJzdXJ2ZXl0cmlnZ2VyXCIsIGNsYXNzTmFtZVBhcnQ6IFwidHJpZ2dlclwiIH0sXG4gICAgXCJzdXJ2ZXlJZFwiLCBcInN1cnZleVBvc3RJZFwiLCBcImNvb2tpZU5hbWVcIiwgXCJzZW5kUmVzdWx0T25QYWdlTmV4dDpib29sZWFuXCIsXG4gICAgeyBuYW1lOiBcInNob3dOYXZpZ2F0aW9uQnV0dG9uczpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgeyBuYW1lOiBcInNob3dUaXRsZTpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgeyBuYW1lOiBcInNob3dQYWdlVGl0bGVzOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIFwic2hvd1BhZ2VOdW1iZXJzOmJvb2xlYW5cIiwgeyBuYW1lOiBcInNob3dRdWVzdGlvbk51bWJlcnNcIiwgZGVmYXVsdDogXCJvblwiLCBjaG9pY2VzOiBbXCJvblwiLCBcIm9uUGFnZVwiLCBcIm9mZlwiXSB9LFxuICAgIHsgbmFtZTogXCJxdWVzdGlvblRpdGxlTG9jYXRpb25cIiwgZGVmYXVsdDogXCJ0b3BcIiwgY2hvaWNlczogW1widG9wXCIsIFwiYm90dG9tXCJdIH0sXG4gICAgeyBuYW1lOiBcInNob3dQcm9ncmVzc0JhclwiLCBkZWZhdWx0OiBcIm9mZlwiLCBjaG9pY2VzOiBbXCJvZmZcIiwgXCJ0b3BcIiwgXCJib3R0b21cIl0gfSxcbiAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnQ6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sIFwiZ29OZXh0UGFnZUF1dG9tYXRpYzpib29sZWFuXCIsIFwiY2xlYXJJbnZpc2libGVWYWx1ZXM6Ym9vbGVhblwiLFxuICAgIHsgbmFtZTogXCJwYWdlUHJldlRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucGFnZVByZXZUZXh0VmFsdWU7IH0gfSxcbiAgICB7IG5hbWU6IFwicGFnZU5leHRUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnBhZ2VOZXh0VGV4dFZhbHVlOyB9IH0sXG4gICAgeyBuYW1lOiBcImNvbXBsZXRlVGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jb21wbGV0ZVRleHRWYWx1ZTsgfSB9LFxuICAgIHsgbmFtZTogXCJyZXF1aXJlZFRleHRcIiwgZGVmYXVsdDogXCIqXCIgfSwgXCJxdWVzdGlvblN0YXJ0SW5kZXhcIiwgXCJxdWVzdGlvblRpdGxlVGVtcGxhdGVcIl0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cnZleS50c1xuICoqLyIsImV4cG9ydCBjbGFzcyBkeFN1cnZleVNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgc2VydmljZVVybDogc3RyaW5nID0gXCJodHRwczovL2R4c3VydmV5YXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9TdXJ2ZXlcIjtcbiAgICAvL3B1YmxpYyBzdGF0aWMgc2VydmljZVVybDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNDg4L2FwaS9TdXJ2ZXlcIjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGxvYWRTdXJ2ZXkoc3VydmV5SWQ6IHN0cmluZywgb25Mb2FkOiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL2dldFN1cnZleT9zdXJ2ZXlJZD0nICsgc3VydmV5SWQpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIG9uTG9hZCh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2VuZFJlc3VsdChwb3N0SWQ6IHN0cmluZywgcmVzdWx0OiBKU09OLCBvblNlbmRSZXN1bHQ6IChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KT0+IHZvaWQsIGNsaWVudElkOiBzdHJpbmcgPSBudWxsLCBpc1BhcnRpYWxDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL3Bvc3QvJyk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgICB2YXIgZGF0YSA9IHsgcG9zdElkOiBwb3N0SWQsIHN1cnZleVJlc3VsdDogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSB9O1xuICAgICAgICBpZiAoY2xpZW50SWQpIGRhdGFbJ2NsaWVudElkJ10gPSBjbGllbnRJZDtcbiAgICAgICAgaWYgKGlzUGFydGlhbENvbXBsZXRlZCkgZGF0YVsnaXNQYXJ0aWFsQ29tcGxldGVkJ10gPSB0cnVlO1xuICAgICAgICB2YXIgZGF0YVN0cmluZ2lmeTogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgeGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFvblNlbmRSZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgIG9uU2VuZFJlc3VsdCh4aHIuc3RhdHVzID09IDIwMCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YVN0cmluZ2lmeSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZW5kRmlsZShwb3N0SWQ6IHN0cmluZywgZmlsZTogRmlsZSwgb25TZW5kRmlsZTogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25sb2FkID0geGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIW9uU2VuZEZpbGUpIHJldHVybjtcbiAgICAgICAgICAgIG9uU2VuZEZpbGUoeGhyLnN0YXR1cyA9PSAyMDAsIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBkeFN1cnZleVNlcnZpY2Uuc2VydmljZVVybCArICcvdXBsb2FkLycsIHRydWUpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdElkXCIsIHBvc3RJZCk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9XG4gICAgcHVibGljIGdldFJlc3VsdChyZXN1bHRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG9uR2V0UmVzdWx0OiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55LCBkYXRhTGlzdDogQXJyYXk8YW55PiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBkYXRhID0gJ3Jlc3VsdElkPScgKyByZXN1bHRJZCArICcmbmFtZT0nICsgbmFtZTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9nZXRSZXN1bHQ/JyArIGRhdGEpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc3VsdC5RdWVzdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB7IG5hbWU6IGtleSwgdmFsdWU6IHJlc3VsdC5RdWVzdGlvblJlc3VsdFtrZXldIH07XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25HZXRSZXN1bHQoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgbGlzdCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGlzQ29tcGxldGVkKHJlc3VsdElkOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIG9uSXNDb21wbGV0ZWQ6IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBkYXRhID0gJ3Jlc3VsdElkPScgKyByZXN1bHRJZCArICcmY2xpZW50SWQ9JyArIGNsaWVudElkO1xuICAgICAgICB4aHIub3BlbignR0VUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL2lzQ29tcGxldGVkPycgKyBkYXRhKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbklzQ29tcGxldGVkKHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2R4U3VydmV5U2VydmljZS50c1xuICoqLyIsImltcG9ydCB7QmFzZSwgSGFzaFRhYmxlfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgb3BlcmF0b3JzVmFsdWU6IEhhc2hUYWJsZTxGdW5jdGlvbj4gPSBudWxsO1xuICAgIHN0YXRpYyBnZXQgb3BlcmF0b3JzKCkge1xuICAgICAgICBpZiAoVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZSAhPSBudWxsKSByZXR1cm4gVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZTtcbiAgICAgICAgVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZSA9IHtcbiAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuICF2YWx1ZTsgfSxcbiAgICAgICAgICAgIG5vdGVtcHR5OiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuICEoIXZhbHVlKTsgfSxcbiAgICAgICAgICAgIGVxdWFsOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlID09IGV4cGVjdGVkVmFsdWU7IH0sXG4gICAgICAgICAgICBub3RlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPSBleHBlY3RlZFZhbHVlOyB9LFxuICAgICAgICAgICAgY29udGFpbnM6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgJiYgdmFsdWVbXCJpbmRleE9mXCJdICYmIHZhbHVlLmluZGV4T2YoZXhwZWN0ZWRWYWx1ZSkgPiAtMTsgfSxcbiAgICAgICAgICAgIG5vdGNvbnRhaW5zOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuICF2YWx1ZSB8fCAhdmFsdWVbXCJpbmRleE9mXCJdIHx8IHZhbHVlLmluZGV4T2YoZXhwZWN0ZWRWYWx1ZSkgPT0gLTE7IH0sXG4gICAgICAgICAgICBncmVhdGVyOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlID4gZXhwZWN0ZWRWYWx1ZTsgfSxcbiAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPCBleHBlY3RlZFZhbHVlOyB9LFxuICAgICAgICAgICAgZ3JlYXRlcm9yZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPj0gZXhwZWN0ZWRWYWx1ZTsgfSxcbiAgICAgICAgICAgIGxlc3NvcmVxdWFsOiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuIHZhbHVlIDw9IGV4cGVjdGVkVmFsdWU7IH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRyaWdnZXIub3BlcmF0b3JzVmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgb3BWYWx1ZTogc3RyaW5nID0gXCJlcXVhbFwiO1xuICAgIHB1YmxpYyB2YWx1ZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9wZXJhdG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IG9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghVHJpZ2dlci5vcGVyYXRvcnNbdmFsdWVdKSByZXR1cm47XG4gICAgICAgIHRoaXMub3BWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgY2hlY2sodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoVHJpZ2dlci5vcGVyYXRvcnNbdGhpcy5vcGVyYXRvcl0odmFsdWUsIHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3VjY2VzcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkZhaWx1cmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25TdWNjZXNzKCkgeyB9XG4gICAgcHJvdGVjdGVkIG9uRmFpbHVyZSgpIHsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdXJ2ZXlUcmlnZ2VyT3duZXIge1xuICAgIGdldE9iamVjdHMocGFnZXM6IHN0cmluZ1tdLCBxdWVzdGlvbnM6IHN0cmluZ1tdKTogYW55W107XG4gICAgZG9Db21wbGV0ZSgpO1xuICAgIHNldFRyaWdnZXJWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGlzVmFyaWFibGU6IGJvb2xlYW4pO1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VHJpZ2dlciBleHRlbmRzIFRyaWdnZXIge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIG93bmVyOiBJU3VydmV5VHJpZ2dlck93bmVyID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIHNldE93bmVyKG93bmVyOiBJU3VydmV5VHJpZ2dlck93bmVyKSB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc09uTmV4dFBhZ2UoKSB7IHJldHVybiBmYWxzZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5VHJpZ2dlclZpc2libGUgZXh0ZW5kcyBTdXJ2ZXlUcmlnZ2VyIHtcbiAgICBwdWJsaWMgcGFnZXM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHF1ZXN0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidmlzaWJsZXRyaWdnZXJcIjsgfVxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7IHRoaXMub25UcmlnZ2VyKHRoaXMub25JdGVtU3VjY2Vzcyk7IH1cbiAgICBwcm90ZWN0ZWQgb25GYWlsdXJlKCkgeyB0aGlzLm9uVHJpZ2dlcih0aGlzLm9uSXRlbUZhaWx1cmUpOyB9XG4gICAgcHJpdmF0ZSBvblRyaWdnZXIoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLm93bmVyKSByZXR1cm47XG4gICAgICAgIHZhciBvYmplY3RzID0gdGhpcy5vd25lci5nZXRPYmplY3RzKHRoaXMucGFnZXMsIHRoaXMucXVlc3Rpb25zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmdW5jKG9iamVjdHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkl0ZW1TdWNjZXNzKGl0ZW06IGFueSkgeyBpdGVtLnZpc2libGUgPSB0cnVlOyB9XG4gICAgcHJvdGVjdGVkIG9uSXRlbUZhaWx1cmUoaXRlbTogYW55KSB7IGl0ZW0udmlzaWJsZSA9IGZhbHNlOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VHJpZ2dlckNvbXBsZXRlIGV4dGVuZHMgU3VydmV5VHJpZ2dlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImNvbXBsZXRldHJpZ2dlclwiOyB9XG4gICAgcHVibGljIGdldCBpc09uTmV4dFBhZ2UoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHsgaWYgKHRoaXMub3duZXIpIHRoaXMub3duZXIuZG9Db21wbGV0ZSgpOyB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VHJpZ2dlclNldFZhbHVlIGV4dGVuZHMgU3VydmV5VHJpZ2dlciB7XG4gICAgcHVibGljIHNldFRvTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzZXRWYWx1ZTogYW55O1xuICAgIHB1YmxpYyBpc1ZhcmlhYmxlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzZXR2YWx1ZXRyaWdnZXJcIjsgfVxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZXRUb05hbWUgfHwgIXRoaXMub3duZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5vd25lci5zZXRUcmlnZ2VyVmFsdWUodGhpcy5zZXRUb05hbWUsIHRoaXMuc2V0VmFsdWUsIHRoaXMuaXNWYXJpYWJsZSk7XG4gICAgfVxufVxuXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwidHJpZ2dlclwiLCBbXCJvcGVyYXRvclwiLCBcIiF2YWx1ZVwiXSk7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic3VydmV5dHJpZ2dlclwiLCBbXCIhbmFtZVwiXSwgbnVsbCwgXCJ0cmlnZ2VyXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInZpc2libGV0cmlnZ2VyXCIsIFtcInBhZ2VzXCIsIFwicXVlc3Rpb25zXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3VydmV5VHJpZ2dlclZpc2libGUoKTsgfSwgXCJzdXJ2ZXl0cmlnZ2VyXCIpO1xuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNvbXBsZXRldHJpZ2dlclwiLCBbXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN1cnZleVRyaWdnZXJDb21wbGV0ZSgpOyB9LCBcInN1cnZleXRyaWdnZXJcIik7XG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwic2V0dmFsdWV0cmlnZ2VyXCIsIFtcIiFzZXRUb05hbWVcIiwgXCJzZXRWYWx1ZVwiLCBcImlzVmFyaWFibGU6Ym9vbGVhblwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN1cnZleVRyaWdnZXJTZXRWYWx1ZSgpOyB9LCBcInN1cnZleXRyaWdnZXJcIik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdHJpZ2dlci50c1xuICoqLyIsImltcG9ydCB7QmFzZX0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4vc3VydmV5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlXaW5kb3dNb2RlbCBleHRlbmRzIEJhc2UgIHtcbiAgICBwdWJsaWMgc3RhdGljIHN1cnZleUVsZW1lbnROYW1lID0gXCJ3aW5kb3dTdXJ2ZXlKU1wiO1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXlNb2RlbDtcbiAgICB3aW5kb3dFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBpc1Nob3dpbmdWYWx1ZTogYm9vbGVhbjtcbiAgICBpc0V4cGFuZGVkVmFsdWU6IGJvb2xlYW47XG4gICAgdGl0bGVWYWx1ZTogc3RyaW5nO1xuICAgIHRlbXBsYXRlVmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdGhpcy5jcmVhdGVTdXJ2ZXkoanNvbk9iaik7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUuc2hvd1RpdGxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIDogc3RyaW5nIHsgcmV0dXJuIFwid2luZG93XCIgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleU1vZGVsIHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzU2hvd2luZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNTaG93aW5nVmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmlzRXhwYW5kZWRWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMuc3VydmV5LnRpdGxlOyB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGV4cGFuZCgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRjb2xsYXBzZSh0cnVlKTtcbiAgICB9XG4gICAgcHVibGljIGNvbGxhcHNlKCkge1xuICAgICAgICB0aGlzLmV4cGFuZGNvbGxhcHNlKGZhbHNlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleShqc29uT2JqOiBhbnkpOiBTdXJ2ZXlNb2RlbCB7XG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5TW9kZWwoanNvbk9iailcbiAgICB9XG4gICAgcHJvdGVjdGVkIGV4cGFuZGNvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZFZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cnZleVdpbmRvdy50c1xuICoqLyIsImV4cG9ydCB2YXIgc3VydmV5Q3NzID0ge1xuICAgIGN1cnJlbnRUeXBlOiBcIlwiLFxuICAgIGdldENzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jID0gdGhpcy5jdXJyZW50VHlwZSA/IHRoaXNbdGhpcy5jdXJyZW50VHlwZV0gOiBkZWZhdWx0U3RhbmRhcmRDc3M7XG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RhbmRhcmRDc3M7XG4gICAgICAgIHJldHVybiBsb2M7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB2YXIgZGVmYXVsdFN0YW5kYXJkQ3NzID0ge1xuICAgIHJvb3Q6IFwic3ZfbWFpblwiLFxuICAgIGhlYWRlcjogXCJcIixcbiAgICBib2R5OiBcInN2X2JvZHlcIixcbiAgICBmb290ZXI6IFwic3ZfbmF2XCIsXG4gICAgbmF2aWdhdGlvbkJ1dHRvbjogXCJcIiwgbmF2aWdhdGlvbjogeyBjb21wbGV0ZTogXCJcIiwgcHJldjpcIlwiLCBuZXh0OiBcIlwifSxcbiAgICBwcm9ncmVzczogXCJzdl9wcm9ncmVzc1wiLCBwcm9ncmVzc0JhcjogXCJcIixcbiAgICBwYWdlVGl0bGU6IFwic3ZfcF90aXRsZVwiLFxuICAgIHJvdzogXCJzdl9yb3dcIixcbiAgICBxdWVzdGlvbjogeyByb290OiBcInN2X3FcIiwgdGl0bGU6IFwic3ZfcV90aXRsZVwiLCBjb21tZW50OiBcIlwiLCBpbmRlbnQ6IDIwIH0sXG4gICAgZXJyb3I6IHsgcm9vdDogXCJzdl9xX2VyYm94XCIsIGljb246IFwiXCIsIGl0ZW06IFwiXCIgfSxcblxuICAgIGNoZWNrYm94OiB7IHJvb3Q6IFwic3ZfcWNiY1wiLCBpdGVtOiBcInN2X3FfY2hlY2tib3hcIiwgb3RoZXI6IFwic3ZfcV9vdGhlclwiIH0sXG4gICAgY29tbWVudDogXCJcIixcbiAgICBkcm9wZG93bjogXCJcIixcbiAgICBtYXRyaXg6IHsgcm9vdDogXCJzdl9xX21hdHJpeFwiIH0sXG4gICAgbWF0cml4ZHJvcGRvd246IHsgcm9vdDogXCJzdl9xX21hdHJpeFwiIH0sXG4gICAgbWF0cml4ZHluYW1pYzogeyByb290OiBcInRhYmxlXCIsIGJ1dHRvbjogXCJcIiB9LFxuICAgIG11bHRpcGxldGV4dDogeyByb290OiBcIlwiLCBpdGVtVGl0bGU6IFwiXCIsIGl0ZW1WYWx1ZTogXCJcIiB9LFxuICAgIHJhZGlvZ3JvdXA6IHsgcm9vdDogXCJzdl9xY2JjXCIsIGl0ZW06IFwic3ZfcV9yYWRpb2dyb3VwXCIsIG90aGVyOiBcInN2X3Ffb3RoZXJcIiB9LFxuICAgIHJhdGluZzogeyByb290OiBcInN2X3FfcmF0aW5nXCIsIGl0ZW06IFwic3ZfcV9yYXRpbmdfaXRlbVwiIH0sXG4gICAgdGV4dDogXCJcIixcbiAgICB3aW5kb3c6IHtcbiAgICAgICAgcm9vdDogXCJzdl93aW5kb3dcIiwgYm9keTogXCJzdl93aW5kb3dfY29udGVudFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHJvb3Q6IFwic3Zfd2luZG93X3RpdGxlXCIsIHRpdGxlOiBcIlwiLCBidXR0b246IFwiXCIsIGJ1dHRvbkV4cGFuZGVkOiBcIlwiLCBidXR0b25Db2xsYXBzZWQ6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnN1cnZleUNzc1tcInN0YW5kYXJkXCJdID0gZGVmYXVsdFN0YW5kYXJkQ3NzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmQudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UmVhY3RTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4vcmVhY3RzdXJ2ZXltb2RlbFwiO1xuaW1wb3J0IHtTdXJ2ZXlQYWdlfSBmcm9tIFwiLi9yZWFjdHBhZ2VcIjtcbmltcG9ydCB7U3VydmV5TmF2aWdhdGlvbn0gZnJvbSBcIi4vcmVhY3RTdXJ2ZXlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4uL3F1ZXN0aW9uYmFzZVwiO1xuaW1wb3J0IHtJU3VydmV5Q3JlYXRvcn0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvblwiO1xuaW1wb3J0IHtSZWFjdFF1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmZhY3RvcnlcIjtcbmltcG9ydCB7c3VydmV5Q3NzfSBmcm9tIFwiLi4vZGVmYXVsdENzcy9jc3NzdGFuZGFyZFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9ncmVzc30gZnJvbSBcIi4vcmVhY3RTdXJ2ZXlQcm9ncmVzc1wiXG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IGltcGxlbWVudHMgSVN1cnZleUNyZWF0b3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNzc1R5cGUoKTogc3RyaW5nIHsgcmV0dXJuIHN1cnZleUNzcy5jdXJyZW50VHlwZTsgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGNzc1R5cGUodmFsdWU6IHN0cmluZykgeyBzdXJ2ZXlDc3MuY3VycmVudFR5cGUgPSB2YWx1ZTsgfVxuICAgIHByb3RlY3RlZCBzdXJ2ZXk6IFJlYWN0U3VydmV5TW9kZWw7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdXJ2ZXkocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3VydmV5KG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleS5zdGF0ZSA9PSBcImNvbXBsZXRlZFwiKSByZXR1cm4gdGhpcy5yZW5kZXJDb21wbGV0ZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5LnN0YXRlID09IFwibG9hZGluZ1wiKSByZXR1cm4gdGhpcy5yZW5kZXJMb2FkaW5nKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN1cnZleSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNzcygpOiBhbnkgeyByZXR1cm4gc3VydmV5Q3NzLmdldENzcygpOyB9XG4gICAgcHVibGljIHNldCBjc3ModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnN1cnZleS5tZXJnZUNzcyh2YWx1ZSwgdGhpcy5jc3MpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyQ29tcGxldGVkKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGh0bWxWYWx1ZSA9IHsgX19odG1sOiB0aGlzLnN1cnZleS5wcm9jZXNzZWRDb21wbGV0ZWRIdG1sIH07XG4gICAgICAgIHJldHVybiAoPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17aHRtbFZhbHVlfSAvPik7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJMb2FkaW5nKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGh0bWxWYWx1ZSA9IHsgX19odG1sOiB0aGlzLnN1cnZleS5wcm9jZXNzZWRMb2FkaW5nSHRtbCB9O1xuICAgICAgICByZXR1cm4gKDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2h0bWxWYWx1ZX0gLz4pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyU3VydmV5KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5zdXJ2ZXkudGl0bGUgJiYgdGhpcy5zdXJ2ZXkuc2hvd1RpdGxlID8gdGhpcy5yZW5kZXJUaXRsZSgpIDogbnVsbDtcbiAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPyB0aGlzLnJlbmRlclBhZ2UoKSA6IG51bGw7XG4gICAgICAgIHZhciB0b3BQcm9ncmVzcyA9IHRoaXMuc3VydmV5LnNob3dQcm9ncmVzc0JhciA9PSBcInRvcFwiID8gdGhpcy5yZW5kZXJQcm9ncmVzcyh0cnVlKSA6IG51bGw7XG4gICAgICAgIHZhciBib3R0b21Qcm9ncmVzcyA9IHRoaXMuc3VydmV5LnNob3dQcm9ncmVzc0JhciA9PSBcImJvdHRvbVwiID8gdGhpcy5yZW5kZXJQcm9ncmVzcyhmYWxzZSkgOiBudWxsO1xuICAgICAgICB2YXIgYnV0dG9ucyA9IChjdXJyZW50UGFnZSAmJiB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMpID8gdGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCkgOiBudWxsO1xuICAgICAgICBpZiAoIWN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IHRoaXMucmVuZGVyRW1wdHlTdXJ2ZXkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY3NzLnJvb3R9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3MuYm9keX0+XG4gICAgICAgICAgICAgICAgICAgIHt0b3BQcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgICAgICB7Ym90dG9tUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2J1dHRvbnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclRpdGxlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNzcy5oZWFkZXJ9PjxoMz57dGhpcy5zdXJ2ZXkudGl0bGV9PC9oMz48L2Rpdj47XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQYWdlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxTdXJ2ZXlQYWdlIHN1cnZleT17dGhpcy5zdXJ2ZXl9IHBhZ2U9e3RoaXMuc3VydmV5LmN1cnJlbnRQYWdlfSBjc3M9e3RoaXMuY3NzfSBjcmVhdG9yPXt0aGlzfSAvPjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb2dyZXNzKGlzVG9wOiBib29sZWFuKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPFN1cnZleVByb2dyZXNzIHN1cnZleT17dGhpcy5zdXJ2ZXl9IGNzcz17dGhpcy5jc3N9IGlzVG9wPXtpc1RvcH0gIC8+O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyTmF2aWdhdGlvbigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiA8U3VydmV5TmF2aWdhdGlvbiBzdXJ2ZXkgPSB7dGhpcy5zdXJ2ZXl9IGNzcz17dGhpcy5jc3N9Lz47XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJFbXB0eVN1cnZleSgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoPHNwYW4+e3RoaXMuc3VydmV5LmVtcHR5U3VydmV5VGV4dH08L3NwYW4+KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3VydmV5KG5ld1Byb3BzOiBhbnkpIHtcbiAgICAgICAgaWYgKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMubW9kZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnZleSA9IG5ld1Byb3BzLm1vZGVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJvcHMuanNvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cnZleSA9IG5ldyBSZWFjdFN1cnZleU1vZGVsKG5ld1Byb3BzLmpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5ID0gbmV3IFJlYWN0U3VydmV5TW9kZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5jbGllbnRJZCkgdGhpcy5zdXJ2ZXkuY2xpZW50SWQgPSBuZXdQcm9wcy5jbGllbnRJZDtcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5kYXRhKSB0aGlzLnN1cnZleS5kYXRhID0gbmV3UHJvcHMuZGF0YTtcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcy5jc3MpIHRoaXMuc3VydmV5Lm1lcmdlQ3NzKG5ld1Byb3BzLmNzcywgdGhpcy5jc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXQgdGhlIGZpcnN0IHBhZ2VcbiAgICAgICAgdmFyIGR1bW15ID0gdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2U7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgcGFnZUluZGV4Q2hhbmdlOiAwLCBpc0NvbXBsZXRlZDogZmFsc2UsIG1vZGVsQ2hhbmdlZDogMCB9O1xuICAgICAgICB0aGlzLnNldFN1cnZleUV2ZW50cyhuZXdQcm9wcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRTdXJ2ZXlFdmVudHMobmV3UHJvcHM6IGFueSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5tb2RlbENoYW5nZWQgPSBzZWxmLnN0YXRlLm1vZGVsQ2hhbmdlZCArIDE7XG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHNlbGYuc3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyKSA9PiB7IHNlbGYuc3RhdGUuaXNDb21wbGV0ZWQgPSB0cnVlOyBzZWxmLnNldFN0YXRlKHNlbGYuc3RhdGUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUucGFnZUluZGV4Q2hhbmdlID0gc2VsZi5zdGF0ZS5wYWdlSW5kZXhDaGFuZ2UgKyAxO1xuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZShzZWxmLnN0YXRlKTtcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcyAmJiBuZXdQcm9wcy5vbkN1cnJlbnRQYWdlQ2hhbmdlZCkgbmV3UHJvcHMub25DdXJyZW50UGFnZUNoYW5nZWQoc2VuZGVyLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5Lm9uVmlzaWJsZUNoYW5nZWQuYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnF1ZXN0aW9uICYmIG9wdGlvbnMucXVlc3Rpb24ucmVhY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBvcHRpb25zLnF1ZXN0aW9uLnJlYWN0LnN0YXRlO1xuICAgICAgICAgICAgICAgIHN0YXRlLnZpc2libGUgPSBvcHRpb25zLnF1ZXN0aW9uLnZpc2libGU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5xdWVzdGlvbi5yZWFjdC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1cnZleS5vblZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucXVlc3Rpb24gJiYgb3B0aW9ucy5xdWVzdGlvbi5yZWFjdCkge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IG9wdGlvbnMucXVlc3Rpb24ucmVhY3Quc3RhdGU7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucXVlc3Rpb24ucmVhY3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFuZXdQcm9wcykgcmV0dXJuO1xuICAgICAgICB0aGlzLnN1cnZleS5vblZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLmRhdGEpIG5ld1Byb3BzLmRhdGFbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnMudmFsdWU7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMub25WYWx1ZUNoYW5nZWQpIG5ld1Byb3BzLm9uVmFsdWVDaGFuZ2VkKHNlbmRlciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV3UHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkub25Db21wbGV0ZS5hZGQoKHNlbmRlcikgPT4geyBuZXdQcm9wcy5vbkNvbXBsZXRlKHNlbmRlcik7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5Lm9uUGFnZVZpc2libGVDaGFuZ2VkLmFkZCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7IGlmIChuZXdQcm9wcy5vblBhZ2VWaXNpYmxlQ2hhbmdlZCkgbmV3UHJvcHMub25QYWdlVmlzaWJsZUNoYW5nZWQoc2VuZGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIGlmIChuZXdQcm9wcy5vblF1ZXN0aW9uQWRkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5Lm9uUXVlc3Rpb25BZGRlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4geyBuZXdQcm9wcy5vblF1ZXN0aW9uQWRkZWQoc2VuZGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Byb3BzLm9uUXVlc3Rpb25SZW1vdmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5vblF1ZXN0aW9uUmVtb3ZlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4geyBuZXdQcm9wcy5vblF1ZXN0aW9uUmVtb3ZlZChzZW5kZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3UHJvcHMub25WYWxpZGF0ZVF1ZXN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5vblZhbGlkYXRlUXVlc3Rpb24uYWRkKChzZW5kZXIsIG9wdGlvbnMpID0+IHsgbmV3UHJvcHMub25WYWxpZGF0ZVF1ZXN0aW9uKHNlbmRlciwgb3B0aW9ucyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdQcm9wcy5vblNlbmRSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5Lm9uU2VuZFJlc3VsdC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4geyBuZXdQcm9wcy5vblNlbmRSZXN1bHQoc2VuZGVyLCBvcHRpb25zKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Byb3BzLm9uR2V0UmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleS5vbkdldFJlc3VsdC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4geyBuZXdQcm9wcy5vbkdldFJlc3VsdChzZW5kZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3UHJvcHMub25Qcm9jZXNzSHRtbCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkub25Qcm9jZXNzSHRtbC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4geyBuZXdQcm9wcy5vblByb2Nlc3NIdG1sKHNlbmRlciwgb3B0aW9ucyk7IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9JU3VydmV5Q3JlYXRvclxuICAgIHB1YmxpYyBjcmVhdGVRdWVzdGlvbkVsZW1lbnQocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIHF1ZXN0aW9uQ3NzID0gdGhpcy5jc3NbcXVlc3Rpb24uZ2V0VHlwZSgpXTtcbiAgICAgICAgcmV0dXJuIFJlYWN0UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uLmdldFR5cGUoKSwge1xuICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uLCBjc3M6IHF1ZXN0aW9uQ3NzLCByb290Q3NzOiB0aGlzLmNzcywgY3JlYXRvcjogdGhpc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIHJlbmRlckVycm9yKGtleTogc3RyaW5nLCBlcnJvclRleHQ6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17dGhpcy5jc3MuZXJyb3IuaXRlbX0+e2Vycm9yVGV4dH08L2Rpdj47XG4gICAgfVxuICAgIHB1YmxpYyBxdWVzdGlvblRpdGxlTG9jYXRpb24oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3VydmV5LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbjsgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWN0L3JlYWN0U3VydmV5LnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi4vc3VydmV5XCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdFN1cnZleU1vZGVsIGV4dGVuZHMgU3VydmV5TW9kZWwge1xuICAgIHJlbmRlckNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoanNvbk9iaik7XG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlckNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIG1lcmdlQ3NzKHNyYzogYW55LCBkZXN0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5tZXJnZVZhbHVlcyhzcmMsIGRlc3QpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkU3VydmV5RnJvbVNlcnZpY2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHN1cnZleW1vZGVsLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3VydmV5UXVlc3Rpb259IGZyb20gJy4vcmVhY3RxdWVzdGlvbidcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xuaW1wb3J0IHtJU3VydmV5Q3JlYXRvcn0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvblwiO1xuaW1wb3J0IHtRdWVzdGlvblJvd01vZGVsfSBmcm9tIFwiLi4vcGFnZVwiO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbmJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VNb2RlbDtcbiAgICBwcml2YXRlIHN1cnZleTogU3VydmV5TW9kZWw7XG4gICAgcHJpdmF0ZSBjcmVhdG9yOiBJU3VydmV5Q3JlYXRvcjtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucGFnZSA9IHByb3BzLnBhZ2U7XG4gICAgICAgIHRoaXMuc3VydmV5ID0gcHJvcHMuc3VydmV5O1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBwcm9wcy5jcmVhdG9yO1xuICAgICAgICB0aGlzLmNzcyA9IHByb3BzLmNzcztcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnBhZ2UgPSBuZXh0UHJvcHMucGFnZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXh0UHJvcHMuc3VydmV5O1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBuZXh0UHJvcHMuY3JlYXRvcjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAodGhpcy5wYWdlID09IG51bGwgfHwgdGhpcy5zdXJ2ZXkgPT0gbnVsbCB8fCB0aGlzLmNyZWF0b3IgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMucmVuZGVyVGl0bGUoKTtcbiAgICAgICAgdmFyIHJvd3MgPSBbXTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uUm93cyA9IHRoaXMucGFnZS5yb3dzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9uUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcm93cy5wdXNoKHRoaXMuY3JlYXRlUm93KHF1ZXN0aW9uUm93c1tpXSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICB7cm93c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJvdyhyb3c6IFF1ZXN0aW9uUm93TW9kZWwsIGluZGV4OiBudW1iZXIpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciByb3dOYW1lID0gXCJyb3dcIiArIChpbmRleCArIDEpO1xuICAgICAgICByZXR1cm4gPFN1cnZleVJvdyBrZXk9e3Jvd05hbWV9IHJvdz17cm93fSBzdXJ2ZXk9e3RoaXMuc3VydmV5fSBjcmVhdG9yPXt0aGlzLmNyZWF0b3J9IGNzcz17dGhpcy5jc3N9IC8+O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyVGl0bGUoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucGFnZS50aXRsZSB8fCAhdGhpcy5zdXJ2ZXkuc2hvd1BhZ2VUaXRsZXMpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGV4dCA9IHRoaXMucGFnZS5wcm9jZXNzZWRUaXRsZTtcbiAgICAgICAgaWYgKHRoaXMucGFnZS5udW0gPiAwKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5wYWdlLm51bSArIFwiLiBcIiArIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8aDQgY2xhc3NOYW1lPXt0aGlzLmNzcy5wYWdlVGl0bGV9Pnt0ZXh0fTwvaDQ+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHJvdzogUXVlc3Rpb25Sb3dNb2RlbDtcbiAgICBwcml2YXRlIHN1cnZleTogU3VydmV5TW9kZWw7XG4gICAgcHJpdmF0ZSBjcmVhdG9yOiBJU3VydmV5Q3JlYXRvcjtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0UHJvcGVydGllcyhwcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMucm93ID0gcHJvcHMucm93O1xuICAgICAgICBpZiAodGhpcy5yb3cpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMucm93LnZpc2liaWxpdHlDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0U3RhdGUoeyB2aXNpYmxlOiBzZWxmLnJvdy52aXNpYmxlIH0pOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBwcm9wcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IHByb3BzLmNyZWF0b3I7XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAodGhpcy5yb3cgPT0gbnVsbCB8fCB0aGlzLnN1cnZleSA9PSBudWxsIHx8IHRoaXMuY3JlYXRvciA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnJvdy52aXNpYmxlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93LnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5yb3cucXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2godGhpcy5jcmVhdGVRdWVzdGlvbihxdWVzdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3Mucm93fT5cbiAgICAgICAgICAgICAgICB7cXVlc3Rpb25zfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPFN1cnZleVF1ZXN0aW9uIGtleT17cXVlc3Rpb24ubmFtZX0gcXVlc3Rpb249e3F1ZXN0aW9ufSBjcmVhdG9yPXt0aGlzLmNyZWF0b3J9IGNzcz17dGhpcy5jc3N9IC8+O1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHBhZ2UudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gJy4uL3F1ZXN0aW9uYmFzZSc7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tICcuLi9xdWVzdGlvbic7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uQ29tbWVudEl0ZW19IGZyb20gJy4vcmVhY3RxdWVzdGlvbmNvbW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdXJ2ZXlDcmVhdG9yIHtcbiAgICBjcmVhdGVRdWVzdGlvbkVsZW1lbnQocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSk6IEpTWC5FbGVtZW50O1xuICAgIHJlbmRlckVycm9yKGtleTogc3RyaW5nLCBlcnJvclRleHQ6IHN0cmluZyk6IEpTWC5FbGVtZW50O1xuICAgIHF1ZXN0aW9uVGl0bGVMb2NhdGlvbigpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHByaXZhdGUgcXVlc3Rpb25CYXNlOiBRdWVzdGlvbkJhc2U7XG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uOiBRdWVzdGlvbjtcbiAgICBwcml2YXRlIGNyZWF0b3I6IElTdXJ2ZXlDcmVhdG9yO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXRRdWVzdGlvbihwcm9wcy5xdWVzdGlvbik7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IHByb3BzLmNyZWF0b3I7XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IG5leHRQcm9wcy5jcmVhdG9yO1xuICAgICAgICB0aGlzLmNzcyA9IG5leHRQcm9wcy5jc3M7XG4gICAgICAgIHRoaXMuc2V0UXVlc3Rpb24obmV4dFByb3BzLnF1ZXN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRRdWVzdGlvbihxdWVzdGlvbikge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQmFzZSA9IHF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb24gaW5zdGFuY2VvZiBRdWVzdGlvbiA/IHF1ZXN0aW9uIDogbnVsbDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5xdWVzdGlvbiA/IHRoaXMucXVlc3Rpb24udmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2aXNpYmxlOiB0aGlzLnF1ZXN0aW9uQmFzZS52aXNpYmxlLCB2YWx1ZTogdmFsdWUsIGVycm9yOiAwLCByZW5kZXJXaWR0aDogMCB9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uQmFzZSkge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkJhc2UucmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5yZW5kZXJXaWR0aCA9IHNlbGYuc3RhdGUucmVuZGVyV2lkdGggKyAxO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoc2VsZi5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uQmFzZSkgdGhpcy5xdWVzdGlvbkJhc2VbXCJyZWFjdFwiXSA9IHRoaXM7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5xdWVzdGlvbkJhc2UpIHRoaXMucXVlc3Rpb25CYXNlW1wicmVhY3RcIl0gPSBudWxsO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25CYXNlIHx8ICF0aGlzLmNyZWF0b3IpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25CYXNlLnZpc2libGUpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgcXVlc3Rpb25SZW5kZXIgPSB0aGlzLmNyZWF0b3IuY3JlYXRlUXVlc3Rpb25FbGVtZW50KHRoaXMucXVlc3Rpb25CYXNlKTtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5xdWVzdGlvbkJhc2UuaGFzVGl0bGUgPyB0aGlzLnJlbmRlclRpdGxlKCkgOiBudWxsO1xuICAgICAgICB2YXIgdGl0bGVUb3AgPSB0aGlzLmNyZWF0b3IucXVlc3Rpb25UaXRsZUxvY2F0aW9uKCkgPT0gXCJ0b3BcIiA/IHRpdGxlIDogbnVsbDtcbiAgICAgICAgdmFyIHRpdGxlQm90dG9tID0gdGhpcy5jcmVhdG9yLnF1ZXN0aW9uVGl0bGVMb2NhdGlvbigpID09IFwiYm90dG9tXCIgPyB0aXRsZSA6IG51bGw7XG4gICAgICAgIHZhciBjb21tZW50ID0gKHRoaXMucXVlc3Rpb24gJiYgdGhpcy5xdWVzdGlvbi5oYXNDb21tZW50KSA/IHRoaXMucmVuZGVyQ29tbWVudCgpIDogbnVsbDtcbiAgICAgICAgdmFyIGVycm9ycyA9IHRoaXMucmVuZGVyRXJyb3JzKCk7XG4gICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gKHRoaXMucXVlc3Rpb25CYXNlLmluZGVudCA+IDApID8gdGhpcy5xdWVzdGlvbkJhc2UuaW5kZW50ICogdGhpcy5jc3MucXVlc3Rpb24uaW5kZW50ICsgXCJweFwiIDogbnVsbDtcbiAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9ICh0aGlzLnF1ZXN0aW9uQmFzZS5yaWdodEluZGVudCA+IDApID8gdGhpcy5xdWVzdGlvbkJhc2UucmlnaHRJbmRlbnQgKiB0aGlzLmNzcy5xdWVzdGlvbi5pbmRlbnQgKyBcInB4XCIgOiBudWxsO1xuICAgICAgICB2YXIgcm9vdFN0eWxlID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ3RvcCcgfTtcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25CYXNlLnJlbmRlcldpZHRoKSByb290U3R5bGVbXCJ3aWR0aFwiXSA9IHRoaXMucXVlc3Rpb25CYXNlLnJlbmRlcldpZHRoO1xuICAgICAgICBpZiAobWFyZ2luTGVmdCkgcm9vdFN0eWxlW1wibWFyZ2luTGVmdFwiXSA9IG1hcmdpbkxlZnQ7XG4gICAgICAgIGlmIChwYWRkaW5nUmlnaHQpIHJvb3RTdHlsZVtcInBhZGRpbmdSaWdodFwiXSA9IHBhZGRpbmdSaWdodDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucXVlc3Rpb25CYXNlLmlkfSBjbGFzc05hbWU9e3RoaXMuY3NzLnF1ZXN0aW9uLnJvb3R9IHN0eWxlPXtyb290U3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aXRsZVRvcH1cbiAgICAgICAgICAgICAgICB7ZXJyb3JzfVxuICAgICAgICAgICAgICAgIHtxdWVzdGlvblJlbmRlcn1cbiAgICAgICAgICAgICAgICB7Y29tbWVudH1cbiAgICAgICAgICAgICAgICB7dGl0bGVCb3R0b219XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclRpdGxlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIHRpdGxlVGV4dCA9IHRoaXMucXVlc3Rpb24uZnVsbFRpdGxlO1xuICAgICAgICByZXR1cm4gKDxoNSBjbGFzc05hbWU9e3RoaXMuY3NzLnF1ZXN0aW9uLnRpdGxlfT57dGl0bGVUZXh0fTwvaDU+KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlckNvbW1lbnQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5xdWVzdGlvbi5jb21tZW50VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3MucXVlc3Rpb24uY29tbWVudH0+XG4gICAgICAgICAgICAgICAgPFN1cnZleVF1ZXN0aW9uQ29tbWVudEl0ZW0gIHF1ZXN0aW9uPXt0aGlzLnF1ZXN0aW9ufS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyRXJyb3JzKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxTdXJ2ZXlRdWVzdGlvbkVycm9ycyBxdWVzdGlvbj17dGhpcy5xdWVzdGlvbn0gY3NzPXt0aGlzLmNzc30gY3JlYXRvcj17dGhpcy5jcmVhdG9yfSAvPlxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRXJyb3JzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJvdGVjdGVkIHF1ZXN0aW9uOiBRdWVzdGlvbjtcbiAgICBwcml2YXRlIGNyZWF0b3I6IElTdXJ2ZXlDcmVhdG9yO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXRRdWVzdGlvbihwcm9wcy5xdWVzdGlvbik7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IHByb3BzLmNyZWF0b3I7XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0UXVlc3Rpb24obmV4dFByb3BzLnF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5jcmVhdG9yID0gbmV4dFByb3BzLmNyZWF0b3I7XG4gICAgICAgIHRoaXMuY3NzID0gbmV4dFByb3BzLmNzcztcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRRdWVzdGlvbihxdWVzdGlvbikge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb24gaW5zdGFuY2VvZiBRdWVzdGlvbiA/IHF1ZXN0aW9uIDogbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb24uZXJyb3JzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuZXJyb3IgPSBzZWxmLnN0YXRlLmVycm9yICsgMTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHNlbGYuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVycm9yOiAwIH07XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbiB8fCB0aGlzLnF1ZXN0aW9uLmVycm9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uLmVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVycm9yVGV4dCA9IHRoaXMucXVlc3Rpb24uZXJyb3JzW2ldLmdldFRleHQoKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBcImVycm9yXCIgKyBpO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2godGhpcy5jcmVhdG9yLnJlbmRlckVycm9yKGtleSwgZXJyb3JUZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3MuZXJyb3Iucm9vdH0+e2Vycm9yc308L2Rpdj4pO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9uLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UXVlc3Rpb25Db21tZW50TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9jb21tZW50XCI7XG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcbmltcG9ydCB7UmVhY3RRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3JlYWN0cXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkNvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbkNvbW1lbnRNb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBwcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBwcm9wcy5jc3M7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiB0aGlzLnF1ZXN0aW9uLnZhbHVlIH07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5xdWVzdGlvbi52YWx1ZSB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV4dFByb3BzLnF1ZXN0aW9uO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb24pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dGhpcy5jc3N9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfSBjb2xzPXt0aGlzLnF1ZXN0aW9uLmNvbHN9IHJvd3M9e3RoaXMucXVlc3Rpb24ucm93c30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb247XG4gICAgcHJpdmF0ZSBjb21tZW50OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSB0aGlzLnF1ZXN0aW9uLmNvbW1lbnQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiB0aGlzLmNvbW1lbnQgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkJsdXIgPSB0aGlzLmhhbmRsZU9uQmx1ci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVPbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5jb21tZW50IH0pO1xuICAgIH1cbiAgICBoYW5kbGVPbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jb21tZW50ID0gdGhpcy5jb21tZW50O1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBuZXh0UHJvcHMucXVlc3Rpb247XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt0aGlzLmNzcy5xdWVzdGlvbi5jb21tZW50fSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9IG9uQmx1cj17dGhpcy5oYW5kbGVPbkJsdXJ9IC8+KTtcbiAgICB9XG59XG5cblJlYWN0UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjb21tZW50XCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uQ29tbWVudCwgcHJvcHMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbmNvbW1lbnQudHN4XG4gKiovIiwiaW1wb3J0IHtIYXNoVGFibGV9IGZyb20gXCIuLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdFF1ZXN0aW9uRmFjdG9yeSB7XG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogUmVhY3RRdWVzdGlvbkZhY3RvcnkgPSBuZXcgUmVhY3RRdWVzdGlvbkZhY3RvcnkoKTtcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRDaG9pY2VzID0gW1wib25lXCIsIFwidHdvfHNlY29uZCB2YWx1ZVwiLCBcInRocmVlfHRoaXJkIHZhbHVlXCJdO1xuICAgIHByaXZhdGUgY3JlYXRvckhhc2g6IEhhc2hUYWJsZTwobmFtZTogc3RyaW5nKSA9PiBKU1guRWxlbWVudD4gPSB7fTtcblxuICAgIHB1YmxpYyByZWdpc3RlclF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBxdWVzdGlvbkNyZWF0b3I6IChuYW1lOiBzdHJpbmcpID0+IEpTWC5FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXSA9IHF1ZXN0aW9uQ3JlYXRvcjtcbiAgICB9XG4gICAgcHVibGljIGdldEFsbFR5cGVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcy5jcmVhdG9ySGFzaCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGNyZWF0b3IgPSB0aGlzLmNyZWF0b3JIYXNoW3F1ZXN0aW9uVHlwZV07XG4gICAgICAgIGlmIChjcmVhdG9yID09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gY3JlYXRvcihwYXJhbXMpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9uZmFjdG9yeS50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi4vc3VydmV5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBzdXJ2ZXk6IFN1cnZleU1vZGVsO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBwcm9wcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLmhhbmRsZVByZXZDbGljayA9IHRoaXMuaGFuZGxlUHJldkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dENsaWNrID0gdGhpcy5oYW5kbGVOZXh0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDb21wbGV0ZUNsaWNrID0gdGhpcy5oYW5kbGVDb21wbGV0ZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXh0UHJvcHMuc3VydmV5O1xuICAgICAgICB0aGlzLmNzcyA9IG5leHRQcm9wcy5jc3M7XG4gICAgfVxuICAgIGhhbmRsZVByZXZDbGljayhldmVudCkge1xuICAgICAgICB0aGlzLnN1cnZleS5wcmV2UGFnZSgpO1xuICAgIH1cbiAgICBoYW5kbGVOZXh0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkubmV4dFBhZ2UoKTtcbiAgICB9XG4gICAgaGFuZGxlQ29tcGxldGVDbGljayhldmVudCkge1xuICAgICAgICB0aGlzLnN1cnZleS5jb21wbGV0ZUxhc3RQYWdlKCk7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5zdXJ2ZXkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgcHJldkJ1dHRvbiA9ICF0aGlzLnN1cnZleS5pc0ZpcnN0UGFnZSA/IHRoaXMucmVuZGVyQnV0dG9uKHRoaXMuaGFuZGxlUHJldkNsaWNrLCB0aGlzLnN1cnZleS5wYWdlUHJldlRleHQsIHRoaXMuY3NzLm5hdmlnYXRpb24ucHJldikgOiBudWxsO1xuICAgICAgICB2YXIgbmV4dEJ1dHRvbiA9ICF0aGlzLnN1cnZleS5pc0xhc3RQYWdlID8gdGhpcy5yZW5kZXJCdXR0b24odGhpcy5oYW5kbGVOZXh0Q2xpY2ssIHRoaXMuc3VydmV5LnBhZ2VOZXh0VGV4dCwgdGhpcy5jc3MubmF2aWdhdGlvbi5uZXh0KSA6IG51bGw7XG4gICAgICAgIHZhciBjb21wbGV0ZUJ1dHRvbiA9IHRoaXMuc3VydmV5LmlzTGFzdFBhZ2UgPyB0aGlzLnJlbmRlckJ1dHRvbih0aGlzLmhhbmRsZUNvbXBsZXRlQ2xpY2ssIHRoaXMuc3VydmV5LmNvbXBsZXRlVGV4dCwgdGhpcy5jc3MubmF2aWdhdGlvbi5jb21wbGV0ZSkgOiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuY3NzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAge3ByZXZCdXR0b259XG4gICAgICAgICAgICAgICAge25leHRCdXR0b259XG4gICAgICAgICAgICAgICAge2NvbXBsZXRlQnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyQnV0dG9uKGNsaWNrOiBhbnksIHRleHQ6IHN0cmluZywgYnRuQ2xhc3NOYW1lOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBzdHlsZSA9IHsgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuY3NzLm5hdmlnYXRpb25CdXR0b24gKyAoYnRuQ2xhc3NOYW1lID8gJyAnICsgYnRuQ2xhc3NOYW1lIDogXCJcIik7XG4gICAgICAgIHJldHVybiA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsaWNrfSB2YWx1ZT17dGV4dH0gLz47XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWN0L3JlYWN0U3VydmV5TmF2aWdhdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi4vc3VydmV5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9ncmVzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHByaXZhdGUgc3VydmV5OiBTdXJ2ZXlNb2RlbDtcbiAgICBwcm90ZWN0ZWQgaXNUb3A6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN1cnZleSA9IHByb3BzLnN1cnZleTtcbiAgICAgICAgdGhpcy5jc3MgPSBwcm9wcy5jc3M7XG4gICAgICAgIHRoaXMuaXNUb3AgPSBwcm9wcy5pc1RvcDtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnN1cnZleSA9IG5leHRQcm9wcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuY3NzID0gbmV4dFByb3BzLmNzcztcbiAgICAgICAgdGhpcy5pc1RvcCA9IG5leHRQcm9wcy5pc1RvcDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwcm9ncmVzcygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5zdXJ2ZXkuZ2V0UHJvZ3Jlc3MoKTsgfVxuICAgIHByb3RlY3RlZCBnZXQgcHJvZ3Jlc3NUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnN1cnZleS5wcm9ncmVzc1RleHQ7IH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmlzVG9wID8geyB3aWR0aDogXCI2MCVcIiB9IDogeyB3aWR0aDogXCI2MCVcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9O1xuICAgICAgICB2YXIgcHJvZ3Jlc3NTdHlsZSA9IHsgd2lkdGg6IHRoaXMucHJvZ3Jlc3MgKyBcIiVcIiB9O1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNzcy5wcm9ncmVzc30gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Byb2dyZXNzU3R5bGV9IGNsYXNzTmFtZT17dGhpcy5jc3MucHJvZ3Jlc3NCYXJ9IHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb2dyZXNzVGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdFN1cnZleVByb2dyZXNzLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25Db21tZW50SXRlbX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmNvbW1lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fY2hlY2tib3hcIjtcbmltcG9ydCB7SXRlbVZhbHVlfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHtSZWFjdFF1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcm90ZWN0ZWQgcXVlc3Rpb246IFF1ZXN0aW9uQ2hlY2tib3hNb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIHJvb3RDc3M6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHByb3BzLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLmNzcyA9IHByb3BzLmNzcztcbiAgICAgICAgdGhpcy5yb290Q3NzID0gcHJvcHMucm9vdENzcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgY2hvaWNlc0NoYW5nZWQ6IDAgfTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLmNob2ljZXNDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLmNob2ljZXNDaGFuZ2VkID0gc2VsZi5zdGF0ZS5jaG9pY2VzQ2hhbmdlZCArIDE7XG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHNlbGYuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBuZXh0UHJvcHMucm9vdENzcztcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17dGhpcy5jc3Mucm9vdH0+XG4gICAgICAgICAgICB7dGhpcy5nZXRJdGVtcygpIH1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldEl0ZW1zKCk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMucXVlc3Rpb24udmlzaWJsZUNob2ljZXNbaV07XG4gICAgICAgICAgICB2YXIga2V5ID0gXCJpdGVtXCIgKyBpO1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLnJlbmRlckl0ZW0oa2V5LCBpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHRleHRTdHlsZSgpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHByb3RlY3RlZCByZW5kZXJJdGVtKGtleTogc3RyaW5nLCBpdGVtOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiA8U3VydmV5UXVlc3Rpb25DaGVja2JveEl0ZW0ga2V5PXtrZXl9IHF1ZXN0aW9uPXt0aGlzLnF1ZXN0aW9ufSBjc3M9e3RoaXMuY3NzfSByb290Q3NzPXt0aGlzLnJvb3RDc3N9IGl0ZW09e2l0ZW19IHRleHRTdHlsZT17dGhpcy50ZXh0U3R5bGV9IC8+O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkNoZWNrYm94SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHByb3RlY3RlZCBxdWVzdGlvbjogUXVlc3Rpb25DaGVja2JveE1vZGVsO1xuICAgIHByb3RlY3RlZCBpdGVtOiBJdGVtVmFsdWU7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIHByb3RlY3RlZCByb290Q3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIHRleHRTdHlsZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBwcm9wcy5yb290Q3NzO1xuICAgICAgICB0aGlzLnRleHRTdHlsZSA9IHByb3BzLnRleHRTdHlsZTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLml0ZW0gPSBuZXh0UHJvcHMuaXRlbTtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBuZXh0UHJvcHMucm9vdENzcztcbiAgICAgICAgdGhpcy50ZXh0U3R5bGUgPSBuZXh0UHJvcHMudGV4dFN0eWxlO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV4dFByb3BzLnF1ZXN0aW9uO1xuICAgIH1cbiAgICBoYW5kbGVPbkNoYW5nZShldmVudCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IG5ld1ZhbHVlLmluZGV4T2YodGhpcy5pdGVtLnZhbHVlKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUucHVzaCh0aGlzLml0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlc3Rpb24udmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnF1ZXN0aW9uLnZhbHVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbSB8fCAhdGhpcy5xdWVzdGlvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLnF1ZXN0aW9uLmNvbENvdW50ID4gMCA/ICgxMDAgLyB0aGlzLnF1ZXN0aW9uLmNvbENvdW50KSArIFwiJVwiIDogXCJcIjtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gdGhpcy5xdWVzdGlvbi5jb2xDb3VudCA9PSAwID8gXCI1cHhcIiA6IFwiMHB4XCI7XG4gICAgICAgIHZhciBkaXZTdHlsZSA9IHsgbWFyZ2luUmlnaHQ6IG1hcmdpblJpZ2h0IH07XG4gICAgICAgIGlmIChpdGVtV2lkdGgpIHtcbiAgICAgICAgICAgIGRpdlN0eWxlW1wid2lkdGhcIl0gPSBpdGVtV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMucXVlc3Rpb24udmFsdWUgJiYgdGhpcy5xdWVzdGlvbi52YWx1ZS5pbmRleE9mKHRoaXMuaXRlbS52YWx1ZSkgPiAtMTtcbiAgICAgICAgdmFyIG90aGVySXRlbSA9ICh0aGlzLml0ZW0udmFsdWUgPT09IHRoaXMucXVlc3Rpb24ub3RoZXJJdGVtLnZhbHVlICYmIGlzQ2hlY2tlZCkgPyB0aGlzLnJlbmRlck90aGVyKCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGVja2JveChpc0NoZWNrZWQsIGRpdlN0eWxlLCBvdGhlckl0ZW0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGlucHV0U3R5bGUoKTogYW55IHsgcmV0dXJuIHsgbWFyZ2luUmlnaHQ6IFwiM3B4XCIgfTsgfVxuICAgIHByb3RlY3RlZCByZW5kZXJDaGVja2JveChpc0NoZWNrZWQ6IGJvb2xlYW4sIGRpdlN0eWxlOiBhbnksIG90aGVySXRlbTogSlNYLkVsZW1lbnQpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuY3NzLml0ZW19IHN0eWxlPXtkaXZTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17dGhpcy5jc3MuaXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBzdHlsZT17dGhpcy5pbnB1dFN0eWxlfSAgY2hlY2tlZD17aXNDaGVja2VkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuaXRlbS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7b3RoZXJJdGVtfVxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlck90aGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3Mub3RoZXJ9PjxTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtICBxdWVzdGlvbj17dGhpcy5xdWVzdGlvbn0gY3NzPXt0aGlzLnJvb3RDc3N9IC8+PC9kaXY+KTtcbiAgICB9XG59XG5cblJlYWN0UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjaGVja2JveFwiLCAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdXJ2ZXlRdWVzdGlvbkNoZWNrYm94LCBwcm9wcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9uY2hlY2tib3gudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtRdWVzdGlvbkRyb3Bkb3duTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9kcm9wZG93blwiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtfSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uY29tbWVudFwiO1xuaW1wb3J0IHtSZWFjdFF1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbkRyb3Bkb3duTW9kZWw7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIHByb3RlY3RlZCByb290Q3NzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHByb3BzLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLmNzcyA9IHByb3BzLmNzcztcbiAgICAgICAgdGhpcy5yb290Q3NzID0gcHJvcHMucm9vdENzcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHRoaXMucXVlc3Rpb24udmFsdWUsIGNob2ljZXNDaGFuZ2VkOiAwIH07XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jaG9pY2VzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5jaG9pY2VzQ2hhbmdlZCA9IHNlbGYuc3RhdGUuY2hvaWNlc0NoYW5nZWQgKyAxO1xuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZShzZWxmLnN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlT25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnF1ZXN0aW9uLnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBuZXh0UHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gbmV4dFByb3BzLmNzcztcbiAgICAgICAgdGhpcy5yb290Q3NzID0gbmV4dFByb3BzLnJvb3RDc3M7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBvcHRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnF1ZXN0aW9uLnZpc2libGVDaG9pY2VzW2ldO1xuICAgICAgICAgICAgdmFyIGtleSA9IFwiaXRlbVwiICsgaTtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17aXRlbS52YWx1ZX0+e2l0ZW0udGV4dH08L29wdGlvbj47XG4gICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tbWVudCA9IHRoaXMucXVlc3Rpb24udmFsdWUgPT09IHRoaXMucXVlc3Rpb24ub3RoZXJJdGVtLnZhbHVlID8gdGhpcy5yZW5kZXJPdGhlcigpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17dGhpcy5jc3N9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57dGhpcy5xdWVzdGlvbi5vcHRpb25zQ2FwdGlvbn08L29wdGlvbj5cbiAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHtjb21tZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJPdGhlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBzdHlsZSA9IHsgbWFyZ2luVG9wOiBcIjNweFwiIH07XG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+PFN1cnZleVF1ZXN0aW9uQ29tbWVudEl0ZW0gcXVlc3Rpb249e3RoaXMucXVlc3Rpb259IGNzcz17dGhpcy5yb290Q3NzfS8+PC9kaXY+O1xuICAgIH1cbn1cblxuUmVhY3RRdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImRyb3Bkb3duXCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uRHJvcGRvd24sIHByb3BzKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25kcm9wZG93bi50c3hcbiAqKi8iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XG5pbXBvcnQge0lTdXJ2ZXlDcmVhdG9yLCBTdXJ2ZXlRdWVzdGlvbkVycm9yc30gZnJvbSBcIi4vcmVhY3RxdWVzdGlvblwiO1xuaW1wb3J0IHtNYXRyaXhEcm9wZG93blJvd01vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25cIjtcbmltcG9ydCB7TWF0cml4RHJvcGRvd25DZWxsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XG5pbXBvcnQge1JlYWN0UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25NYXRyaXhEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHByaXZhdGUgcXVlc3Rpb246IFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIHJvb3RDc3M6IGFueTtcbiAgICBwcm90ZWN0ZWQgY3JlYXRvcjogSVN1cnZleUNyZWF0b3I7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0UHJvcGVydGllcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV4dFByb3BzLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLmNzcyA9IG5leHRQcm9wcy5jc3M7XG4gICAgICAgIHRoaXMucm9vdENzcyA9IG5leHRQcm9wcy5yb290Q3NzO1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBuZXh0UHJvcHMuY3JlYXRvcjtcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnF1ZXN0aW9uLmNvbHVtbnNbaV07XG4gICAgICAgICAgICB2YXIga2V5ID0gXCJjb2x1bW5cIiArIGk7XG4gICAgICAgICAgICB2YXIgbWluV2lkdGggPSB0aGlzLnF1ZXN0aW9uLmdldENvbHVtbldpZHRoKGNvbHVtbik7XG4gICAgICAgICAgICB2YXIgY29sdW1uU3R5bGUgPSBtaW5XaWR0aCA/IHsgbWluV2lkdGg6IG1pbldpZHRoIH0gOiB7fTtcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaCg8dGgga2V5PXtrZXl9IHN0eWxlPXtjb2x1bW5TdHlsZX0+e3RoaXMucXVlc3Rpb24uZ2V0Q29sdW1uVGl0bGUoY29sdW1uKSB9PC90aD4pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb3dzID0gW107XG4gICAgICAgIHZhciB2aXNpYmxlUm93cyA9IHRoaXMucXVlc3Rpb24udmlzaWJsZVJvd3M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByb3cgPSB2aXNpYmxlUm93c1tpXTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBcInJvd1wiICsgaTtcbiAgICAgICAgICAgIHJvd3MucHVzaCg8U3VydmV5UXVlc3Rpb25NYXRyaXhEcm9wZG93blJvdyBrZXk9e2tleX0gcm93PXtyb3d9IGNzcz17dGhpcy5jc3N9IHJvb3RDc3M9e3RoaXMucm9vdENzc30gY3JlYXRvcj17dGhpcy5jcmVhdG9yfSAvPik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpdlN0eWxlID0gdGhpcy5xdWVzdGlvbi5ob3Jpem9udGFsU2Nyb2xsID8geyBvdmVyZmxvd1g6ICdzY3JvbGwnfSA6IHt9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiAgc3R5bGU9e2RpdlN0eWxlfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0aGlzLmNzcy5yb290fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uTWF0cml4RHJvcGRvd25Sb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIHJvb3RDc3M6IGFueTtcbiAgICBwcm90ZWN0ZWQgY3JlYXRvcjogSVN1cnZleUNyZWF0b3I7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0UHJvcGVydGllcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnJvdyA9IG5leHRQcm9wcy5yb3c7XG4gICAgICAgIHRoaXMuY3NzID0gbmV4dFByb3BzLmNzcztcbiAgICAgICAgdGhpcy5yb290Q3NzID0gbmV4dFByb3BzLnJvb3RDc3M7XG4gICAgICAgIHRoaXMuY3JlYXRvciA9IG5leHRQcm9wcy5jcmVhdG9yO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucm93KSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHRkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93LmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2VsbCA9IHRoaXMucm93LmNlbGxzW2ldO1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IDxTdXJ2ZXlRdWVzdGlvbkVycm9ycyBxdWVzdGlvbj17Y2VsbC5xdWVzdGlvbn0gY3NzPXt0aGlzLnJvb3RDc3N9IGNyZWF0b3I9e3RoaXMuY3JlYXRvcn0gLz5cbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSB0aGlzLnJlbmRlclNlbGVjdChjZWxsKTtcbiAgICAgICAgICAgIHRkcy5wdXNoKDx0ZCBrZXk9e1wicm93XCIgKyBpfT57ZXJyb3JzfXtzZWxlY3R9PC90ZD4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPHRyPjx0ZD57dGhpcy5yb3cudGV4dH08L3RkPnt0ZHN9PC90cj4pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyU2VsZWN0KGNlbGw6IE1hdHJpeERyb3Bkb3duQ2VsbCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRvci5jcmVhdGVRdWVzdGlvbkVsZW1lbnQoY2VsbC5xdWVzdGlvbik7XG4gICAgfVxufVxuXG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHJvcGRvd25cIiwgKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VydmV5UXVlc3Rpb25NYXRyaXhEcm9wZG93biwgcHJvcHMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbm1hdHJpeGRyb3Bkb3duLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeFwiO1xuaW1wb3J0IHtNYXRyaXhSb3dNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeFwiO1xuaW1wb3J0IHtSZWFjdFF1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uTWF0cml4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBwcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBwcm9wcy5jc3M7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb24pIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgZmlyc3RUSCA9IHRoaXMucXVlc3Rpb24uaGFzUm93cyA/IDx0aD48L3RoPiA6IG51bGw7XG4gICAgICAgIHZhciBoZWFkZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbi5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5xdWVzdGlvbi5jb2x1bW5zW2ldO1xuICAgICAgICAgICAgdmFyIGtleSA9IFwiY29sdW1uXCIgKyBpO1xuICAgICAgICAgICAgaGVhZGVycy5wdXNoKDx0aCBrZXk9e2tleX0+e2NvbHVtbi50ZXh0fTwvdGg+KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgICB2YXIgdmlzaWJsZVJvd3MgPSB0aGlzLnF1ZXN0aW9uLnZpc2libGVSb3dzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gdmlzaWJsZVJvd3NbaV07XG4gICAgICAgICAgICB2YXIga2V5ID0gXCJyb3dcIiArIGk7XG4gICAgICAgICAgICByb3dzLnB1c2goPFN1cnZleVF1ZXN0aW9uTWF0cml4Um93IGtleT17a2V5fSBxdWVzdGlvbj17dGhpcy5xdWVzdGlvbn0gcm93PXtyb3d9IC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGhpcy5jc3Mucm9vdH0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cIm1vb2QtaWNvbiBtb29kLWljb24tLWdvb2RcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJtb29kLWljb24gbW9vZC1pY29uLS1iYWRcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3RUSH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93c31cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uTWF0cml4Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhNb2RlbDtcbiAgICBwcml2YXRlIHJvdzogTWF0cml4Um93TW9kZWw7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBwcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5yb3cgPSBwcm9wcy5yb3c7XG4gICAgICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucm93LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucm93LnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBuZXh0UHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMucm93ID0gbmV4dFByb3BzLnJvdztcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnJvdykgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBmaXJzdFREID0gdGhpcy5xdWVzdGlvbi5oYXNSb3dzID8gPHRkPnt0aGlzLnJvdy50ZXh0fTwvdGQ+IDogbnVsbDtcbiAgICAgICAgdmFyIHRkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb24uY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMucXVlc3Rpb24uY29sdW1uc1tpXTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBcInZhbHVlXCIgKyBpO1xuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMucm93LnZhbHVlID09IGNvbHVtbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciB0ZCA9IDx0ZCBrZXk9e2tleX0+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e3RoaXMucm93LmZ1bGxOYW1lfSB2YWx1ZT17Y29sdW1uLnZhbHVlfSBjaGVja2VkPXtpc0NoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfS8+PC90ZD47XG4gICAgICAgICAgICB0ZHMucHVzaCh0ZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8dHI+e2ZpcnN0VER9e3Rkc308L3RyPik7XG4gICAgfVxufVxuXG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4XCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uTWF0cml4LCBwcm9wcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9ubWF0cml4LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UXVlc3Rpb25IdG1sTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9odG1sXCI7XG5pbXBvcnQge1JlYWN0UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25IdG1sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25IdG1sTW9kZWw7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBwcm9wcy5xdWVzdGlvbjtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IGFueSkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV4dFByb3BzLnF1ZXN0aW9uO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb24gfHwgIXRoaXMucXVlc3Rpb24uaHRtbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBodG1sVmFsdWUgPSB7IF9faHRtbDogdGhpcy5xdWVzdGlvbi5wcm9jZXNzZWRIdG1sIH07XG4gICAgICAgIHJldHVybiAoPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17aHRtbFZhbHVlfSAvPiApO1xuICAgIH1cbn1cblxuUmVhY3RRdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImh0bWxcIiwgKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VydmV5UXVlc3Rpb25IdG1sLCBwcm9wcyk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25odG1sLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UXVlc3Rpb25GaWxlTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9maWxlXCI7XG5pbXBvcnQge1JlYWN0UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25GaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25GaWxlTW9kZWw7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBmaWxlTG9hZGVkOiAwIH07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBzcmMgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDsgXG4gICAgICAgIGlmICghd2luZG93W1wiRmlsZVJlYWRlclwiXSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXNyYyB8fCAhc3JjLmZpbGVzIHx8IHNyYy5maWxlcy5sZW5ndGggPCAxKSByZXR1cm47XG4gICAgICAgIHRoaXMucXVlc3Rpb24ubG9hZEZpbGUoc3JjLmZpbGVzWzBdKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVMb2FkZWQ6IHRoaXMuc3RhdGUuZmlsZUxvYWRlZCArIDEgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGltZyA9IHRoaXMucmVuZGVySW1hZ2UoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICB7aW1nfVxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlckltYWdlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uLnByZXZpZXdWYWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiAoPGRpdj4gIDxpbWcgc3JjPXt0aGlzLnF1ZXN0aW9uLnByZXZpZXdWYWx1ZX0gaGVpZ2h0PXt0aGlzLnF1ZXN0aW9uLmltYWdlSGVpZ2h0fSB3aWR0aD17dGhpcy5xdWVzdGlvbi5pbWFnZVdpZHRofSAvPjwvZGl2Pik7XG4gICAgfVxufVxuXG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZmlsZVwiLCAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdXJ2ZXlRdWVzdGlvbkZpbGUsIHByb3BzKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbmZpbGUudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbXVsdGlwbGV0ZXh0XCI7XG5pbXBvcnQge011bHRpcGxlVGV4dEl0ZW1Nb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX211bHRpcGxldGV4dFwiO1xuaW1wb3J0IHtSZWFjdFF1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uTXVsdGlwbGVUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25NdWx0aXBsZVRleHRNb2RlbDtcbiAgICBwcm90ZWN0ZWQgY3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBwcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBwcm9wcy5jc3M7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb24pIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGFibGVSb3dzID0gdGhpcy5xdWVzdGlvbi5nZXRSb3dzKCk7XG4gICAgICAgIHZhciByb3dzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByb3dzLnB1c2godGhpcy5yZW5kZXJSb3coXCJpdGVtXCIgKyBpLCB0YWJsZVJvd3NbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGhpcy5jc3Mucm9vdH0+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUm93KGtleTogc3RyaW5nLCBpdGVtczogQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPikge1xuICAgICAgICB2YXIgdGRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICB0ZHMucHVzaCg8dGQga2V5PXtcImxhYmVsXCIgKyBpfT48c3BhbiBjbGFzc05hbWU9e3RoaXMuY3NzLml0ZW1UaXRsZX0+e2l0ZW0udGl0bGV9PC9zcGFuPjwvdGQ+KTtcbiAgICAgICAgICAgIHRkcy5wdXNoKDx0ZCBrZXk9e1widmFsdWVcIiArIGl9Pnt0aGlzLnJlbmRlckl0ZW0oaXRlbSl9PC90ZD4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8dHIga2V5PXtrZXl9Pnt0ZHN9PC90cj47XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJJdGVtKGl0ZW06IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxTdXJ2ZXlRdWVzdGlvbk11bHRpcGxlVGV4dEl0ZW0gaXRlbT17aXRlbX0gY3NzPXt0aGlzLmNzc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25NdWx0aXBsZVRleHRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBpdGVtOiBNdWx0aXBsZVRleHRJdGVtTW9kZWw7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLml0ZW0gPSBwcm9wcy5pdGVtO1xuICAgICAgICB0aGlzLmNzcyA9IHByb3BzLmNzcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHRoaXMuaXRlbS52YWx1ZSB9O1xuICAgICAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVPbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLml0ZW0udmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5pdGVtLnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMuaXRlbSA9IG5leHRQcm9wcy5pdGVtO1xuICAgICAgICB0aGlzLmNzcyA9IG5leHRQcm9wcy5jc3M7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHN0eWxlID0geyBmbG9hdDogXCJsZWZ0XCIgfTtcbiAgICAgICAgcmV0dXJuICg8aW5wdXQgIGNsYXNzTmFtZT17dGhpcy5jc3MuaXRlbVZhbHVlfSBzdHlsZT17c3R5bGV9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfSAvPik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgbWFpbkNsYXNzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJcIjsgfVxufVxuXG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibXVsdGlwbGV0ZXh0XCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uTXVsdGlwbGVUZXh0LCBwcm9wcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9ubXVsdGlwbGV0ZXh0LnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9yYWRpb2dyb3VwXCI7XG5pbXBvcnQge0l0ZW1WYWx1ZX0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25Db21tZW50SXRlbX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmNvbW1lbnRcIjtcbmltcG9ydCB7UmVhY3RRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3JlYWN0cXVlc3Rpb25mYWN0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvblJhZGlvZ3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcm90ZWN0ZWQgcXVlc3Rpb246IFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBwcm90ZWN0ZWQgcm9vdENzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBwcm9wcy5yb290Q3NzO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBjaG9pY2VzQ2hhbmdlZDogMCB9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuY2hvaWNlc0NoYW5nZWQgPSBzZWxmLnN0YXRlLmNob2ljZXNDaGFuZ2VkICsgMTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoc2VsZi5zdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBuZXh0UHJvcHMucm9vdENzcztcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlT25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnF1ZXN0aW9uLnZhbHVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb24pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXt0aGlzLmNzcy5yb290fT5cbiAgICAgICAgICAgIHt0aGlzLmdldEl0ZW1zKCkgfVxuICAgICAgICAgICAgPC9mb3JtPik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRJdGVtcygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnF1ZXN0aW9uLnZpc2libGVDaG9pY2VzW2ldO1xuICAgICAgICAgICAgdmFyIGtleSA9IFwiaXRlbVwiICsgaTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2godGhpcy5yZW5kZXJJdGVtKGtleSwgaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0ZXh0U3R5bGUoKTogYW55IHsgcmV0dXJuIHsgbWFyZ2luTGVmdDogXCIzcHhcIiB9OyB9XG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGtleTogc3RyaW5nLCBpdGVtOiBJdGVtVmFsdWUpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLnF1ZXN0aW9uLmNvbENvdW50ID4gMCA/ICgxMDAgLyB0aGlzLnF1ZXN0aW9uLmNvbENvdW50KSArIFwiJVwiIDogXCJcIjtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gdGhpcy5xdWVzdGlvbi5jb2xDb3VudCA9PSAwID8gXCI1cHhcIiA6IFwiMHB4XCI7XG4gICAgICAgIHZhciBkaXZTdHlsZSA9IHsgbWFyZ2luUmlnaHQ6IG1hcmdpblJpZ2h0IH07XG4gICAgICAgIGlmIChpdGVtV2lkdGgpIHtcbiAgICAgICAgICAgIGRpdlN0eWxlW1wid2lkdGhcIl0gPSBpdGVtV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IHRoaXMucXVlc3Rpb24udmFsdWUgPT0gaXRlbS52YWx1ZTtcbiAgICAgICAgdmFyIG90aGVySXRlbSA9IChpc0NoZWNrZWQgJiYgaXRlbS52YWx1ZSA9PT0gdGhpcy5xdWVzdGlvbi5vdGhlckl0ZW0udmFsdWUpID8gdGhpcy5yZW5kZXJPdGhlcigpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUmFkaW8oa2V5LCBpdGVtLCBpc0NoZWNrZWQsIGRpdlN0eWxlLCBvdGhlckl0ZW0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUmFkaW8oa2V5OiBzdHJpbmcsIGl0ZW06IEl0ZW1WYWx1ZSwgaXNDaGVja2VkOiBib29sZWFuLCBkaXZTdHlsZTogYW55LCBvdGhlckl0ZW06IEpTWC5FbGVtZW50KTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17dGhpcy5jc3MuaXRlbX0gc3R5bGU9e2RpdlN0eWxlfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLmNzcy5pdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiICBjaGVja2VkPXtpc0NoZWNrZWR9IHZhbHVlPXtpdGVtLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3RoaXMudGV4dFN0eWxlfT57aXRlbS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7b3RoZXJJdGVtfVxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlck90aGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3Mub3RoZXJ9PjxTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtICBxdWVzdGlvbj17dGhpcy5xdWVzdGlvbn0gY3NzPXt0aGlzLnJvb3RDc3N9IC8+PC9kaXY+KTtcbiAgICB9XG59XG5cblJlYWN0UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYWRpb2dyb3VwXCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uUmFkaW9ncm91cCwgcHJvcHMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbnJhZGlvZ3JvdXAudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtRdWVzdGlvblRleHRNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX3RleHRcIjtcbmltcG9ydCB7UmVhY3RRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3JlYWN0cXVlc3Rpb25mYWN0b3J5XCI7XG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHByaXZhdGUgcXVlc3Rpb246IFF1ZXN0aW9uVGV4dE1vZGVsO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHByb3BzLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLmNzcyA9IHByb3BzLmNzcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHRoaXMucXVlc3Rpb24udmFsdWUgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlT25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnF1ZXN0aW9uLnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBuZXh0UHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gbmV4dFByb3BzLmNzcztcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuY3NzfSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnF1ZXN0aW9uLnZhbHVlIHx8ICcnfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlYWN0UXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJ0ZXh0XCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uVGV4dCwgcHJvcHMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVhY3QvcmVhY3RxdWVzdGlvbnRleHQudHN4XG4gKiovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGR5bmFtaWNcIjtcbmltcG9ydCB7SVN1cnZleUNyZWF0b3IsIFN1cnZleVF1ZXN0aW9uRXJyb3JzfSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uXCI7XG5pbXBvcnQge01hdHJpeER5bmFtaWNSb3dNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGR5bmFtaWNcIjtcbmltcG9ydCB7TWF0cml4RHJvcGRvd25DZWxsfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XG5pbXBvcnQge1JlYWN0UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWw7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIHByb3RlY3RlZCByb290Q3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIGNyZWF0b3I6IElTdXJ2ZXlDcmVhdG9yO1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFByb3BlcnRpZXMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBuZXh0UHJvcHMucm9vdENzcztcbiAgICAgICAgdGhpcy5jcmVhdG9yID0gbmV4dFByb3BzLmNyZWF0b3I7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgcm93Q291bnRlcjogMCB9O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnJvd0NvdW50Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5yb3dDb3VudGVyID0gc2VsZi5zdGF0ZS5yb3dDb3VudGVyICsgMTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoc2VsZi5zdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlT25Sb3dBZGRDbGljayA9IHRoaXMuaGFuZGxlT25Sb3dBZGRDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVPblJvd0FkZENsaWNrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uYWRkUm93KCk7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbikgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBoZWFkZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbi5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5xdWVzdGlvbi5jb2x1bW5zW2ldO1xuICAgICAgICAgICAgdmFyIGtleSA9IFwiY29sdW1uXCIgKyBpO1xuICAgICAgICAgICAgdmFyIG1pbldpZHRoID0gdGhpcy5xdWVzdGlvbi5nZXRDb2x1bW5XaWR0aChjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIGNvbHVtblN0eWxlID0gbWluV2lkdGggPyB7IG1pbldpZHRoOiBtaW5XaWR0aCB9IDoge307XG4gICAgICAgICAgICBoZWFkZXJzLnB1c2goPHRoIGtleT17a2V5fSBzdHlsZT17Y29sdW1uU3R5bGV9Pnt0aGlzLnF1ZXN0aW9uLmdldENvbHVtblRpdGxlKGNvbHVtbikgfTwvdGg+KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgICB2YXIgdmlzaWJsZVJvd3MgPSB0aGlzLnF1ZXN0aW9uLnZpc2libGVSb3dzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gdmlzaWJsZVJvd3NbaV07XG4gICAgICAgICAgICB2YXIga2V5ID0gXCJyb3dcIiArIGk7XG4gICAgICAgICAgICByb3dzLnB1c2goPFN1cnZleVF1ZXN0aW9uTWF0cml4RHluYW1pY1JvdyBrZXk9e2tleX0gcm93PXtyb3d9IHF1ZXN0aW9uPXt0aGlzLnF1ZXN0aW9ufSBpbmRleD17aX0gY3NzPXt0aGlzLmNzc30gcm9vdENzcz17dGhpcy5yb290Q3NzfSBjcmVhdG9yPXt0aGlzLmNyZWF0b3J9IC8+KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGl2U3R5bGUgPSB0aGlzLnF1ZXN0aW9uLmhvcml6b250YWxTY3JvbGwgPyB7IG92ZXJmbG93WDogJ3Njcm9sbCcgfSA6IHt9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17ZGl2U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXt0aGlzLmNzcy5yb290fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFkZFJvd0J1dHRvbigpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyQWRkUm93QnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuY3NzLmJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25Sb3dBZGRDbGlja30gdmFsdWU9e3RoaXMucXVlc3Rpb24uYWRkUm93VGV4dH0gLz47XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25NYXRyaXhEeW5hbWljUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHJpdmF0ZSByb3c6IE1hdHJpeER5bmFtaWNSb3dNb2RlbDtcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbDtcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGNzczogYW55O1xuICAgIHByb3RlY3RlZCByb290Q3NzOiBhbnk7XG4gICAgcHJvdGVjdGVkIGNyZWF0b3I6IElTdXJ2ZXlDcmVhdG9yO1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFByb3BlcnRpZXMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yb3cgPSBuZXh0UHJvcHMucm93O1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gbmV4dFByb3BzLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLmluZGV4ID0gbmV4dFByb3BzLmluZGV4O1xuICAgICAgICB0aGlzLmNzcyA9IG5leHRQcm9wcy5jc3M7XG4gICAgICAgIHRoaXMucm9vdENzcyA9IG5leHRQcm9wcy5yb290Q3NzO1xuICAgICAgICB0aGlzLmNyZWF0b3IgPSBuZXh0UHJvcHMuY3JlYXRvcjtcbiAgICAgICAgdGhpcy5oYW5kbGVPblJvd1JlbW92ZUNsaWNrID0gdGhpcy5oYW5kbGVPblJvd1JlbW92ZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU9uUm93UmVtb3ZlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5yZW1vdmVSb3codGhpcy5pbmRleCk7XG4gICAgfVxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICghdGhpcy5yb3cpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3cuY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gdGhpcy5yb3cuY2VsbHNbaV07XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gPFN1cnZleVF1ZXN0aW9uRXJyb3JzIHF1ZXN0aW9uPXtjZWxsLnF1ZXN0aW9ufSBjc3M9e3RoaXMucm9vdENzc30gY3JlYXRvcj17dGhpcy5jcmVhdG9yfSAvPjtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSB0aGlzLnJlbmRlclF1ZXN0aW9uKGNlbGwpO1xuICAgICAgICAgICAgdGRzLnB1c2goPHRkIGtleT17XCJyb3dcIiArIGl9PntlcnJvcnN9e3NlbGVjdH08L3RkPik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbW92ZUJ1dHRvbiA9IHRoaXMucmVuZGVyQnV0dG9uKCk7XG4gICAgICAgIHRkcy5wdXNoKDx0ZCBrZXk9e1wicm93XCIgKyB0aGlzLnJvdy5jZWxscy5sZW5ndGggKyAxfT57cmVtb3ZlQnV0dG9ufTwvdGQ+KTtcbiAgICAgICAgcmV0dXJuICg8dHI+e3Rkc308L3RyPik7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJRdWVzdGlvbihjZWxsOiBNYXRyaXhEcm9wZG93bkNlbGwpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0b3IuY3JlYXRlUXVlc3Rpb25FbGVtZW50KGNlbGwucXVlc3Rpb24pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyQnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuY3NzLmJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25Sb3dSZW1vdmVDbGlja30gdmFsdWU9e3RoaXMucXVlc3Rpb24ucmVtb3ZlUm93VGV4dH0gLz47XG4gICAgfVxufVxuXG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHluYW1pY1wiLCAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdXJ2ZXlRdWVzdGlvbk1hdHJpeER5bmFtaWMsIHByb3BzKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWN0L3JlYWN0cXVlc3Rpb25tYXRyaXhkeW5hbWljLnRzeFxuICoqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25Db21tZW50SXRlbX0gZnJvbSBcIi4vcmVhY3RxdWVzdGlvbmNvbW1lbnRcIjtcbmltcG9ydCB7UXVlc3Rpb25SYXRpbmdNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX3JhdGluZ1wiO1xuaW1wb3J0IHtJdGVtVmFsdWV9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQge1JlYWN0UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9yZWFjdHF1ZXN0aW9uZmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25SYXRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvblJhdGluZ01vZGVsO1xuICAgIHByb3RlY3RlZCBjc3M6IGFueTtcbiAgICBwcm90ZWN0ZWQgcm9vdENzczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcHJvcHMucXVlc3Rpb247XG4gICAgICAgIHRoaXMuY3NzID0gcHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBwcm9wcy5yb290Q3NzO1xuICAgICAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVPbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucXVlc3Rpb24udmFsdWUgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5leHRQcm9wcy5xdWVzdGlvbjtcbiAgICAgICAgdGhpcy5jc3MgPSBuZXh0UHJvcHMuY3NzO1xuICAgICAgICB0aGlzLnJvb3RDc3MgPSBuZXh0UHJvcHMucm9vdENzcztcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb24udmlzaWJsZVJhdGVWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtaW5UZXh0ID0gaSA9PSAwID8gdGhpcy5xdWVzdGlvbi5taW5pbnVtUmF0ZURlc2NyaXB0aW9uICsgXCIgXCIgOiBudWxsO1xuICAgICAgICAgICAgdmFyIG1heFRleHQgPSBpID09IHRoaXMucXVlc3Rpb24udmlzaWJsZVJhdGVWYWx1ZXMubGVuZ3RoIC0gMSA/IFwiIFwiICsgdGhpcy5xdWVzdGlvbi5tYXhpbXVtUmF0ZURlc2NyaXB0aW9uIDogbnVsbDtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMucmVuZGVySXRlbShcInZhbHVlXCIgKyBpLCB0aGlzLnF1ZXN0aW9uLnZpc2libGVSYXRlVmFsdWVzW2ldLCBtaW5UZXh0LCBtYXhUZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbW1lbnQgPSB0aGlzLnF1ZXN0aW9uLmhhc090aGVyID8gdGhpcy5yZW5kZXJPdGhlcigpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNzcy5yb290fSBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICB7dmFsdWVzfVxuICAgICAgICAgICAgICAgIHtjb21tZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJJdGVtKGtleTogc3RyaW5nLCBpdGVtOiBJdGVtVmFsdWUsIG1pblRleHQ6IHN0cmluZywgbWF4VGV4dDogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5xdWVzdGlvbi52YWx1ZSA9PSBpdGVtLnZhbHVlO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5jc3MuaXRlbTtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkgY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICB2YXIgbWluID0gbWluVGV4dCA/IDxzcGFuPnttaW5UZXh0fTwvc3Bhbj4gOiBudWxsO1xuICAgICAgICB2YXIgbWF4ID0gbWF4VGV4dCA/IDxzcGFuPnttYXhUZXh0fTwvc3Bhbj4gOiBudWxsO1xuICAgICAgICByZXR1cm4gPGxhYmVsIGtleT17a2V5fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17dGhpcy5xdWVzdGlvbi5uYW1lfSB2YWx1ZT17aXRlbS52YWx1ZX0gY2hlY2tlZD17dGhpcy5xdWVzdGlvbi52YWx1ZSA9PSBpdGVtLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX0gLz5cbiAgICAgICAgICAgIHttaW59XG4gICAgICAgICAgICA8c3Bhbj57aXRlbS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgIHttYXh9XG4gICAgICAgICAgICA8L2xhYmVsPjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlck90aGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5jc3Mub3RoZXJ9PjxTdXJ2ZXlRdWVzdGlvbkNvbW1lbnRJdGVtICBxdWVzdGlvbj17dGhpcy5xdWVzdGlvbn0gY3NzPXt0aGlzLnJvb3RDc3N9IC8+PC9kaXY+KTtcbiAgICB9XG59XG5SZWFjdFF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwicmF0aW5nXCIsIChwcm9wcykgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1cnZleVF1ZXN0aW9uUmF0aW5nLCBwcm9wcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdHF1ZXN0aW9ucmF0aW5nLnRzeFxuICoqLyIsImltcG9ydCB7U3VydmV5fSBmcm9tIFwiLi9yZWFjdFN1cnZleVwiO1xuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5V2luZG93IGV4dGVuZHMgU3VydmV5IHtcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT25FeHBhbmRlZCA9IHRoaXMuaGFuZGxlT25FeHBhbmRlZC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVPbkV4cGFuZGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWQgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGlkZGVuKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMucmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5zdGF0ZS5leHBhbmRlZCA/IHRoaXMucmVuZGVyQm9keSgpIDogbnVsbDtcbiAgICAgICAgdmFyIHN0eWxlID0geyBwb3NpdGlvbjogXCJmaXhlZFwiLCBib3R0b206IFwiM3B4XCIsIHJpZ2h0OiBcIjEwcHhcIiB9O1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMuY3NzLndpbmRvdy5yb290fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICBcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlckhlYWRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBzdHlsZUEgPSB7IHdpZHRoOiBcIjEwMCVcIiB9O1xuICAgICAgICB2YXIgc3R5bGVUaXRsZSA9IHsgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9O1xuICAgICAgICB2YXIgZ2x5cGhDbGFzc05hbWUgPSB0aGlzLnN0YXRlLmV4cGFuZGVkID8gdGhpcy5jc3Mud2luZG93LmhlYWRlci5idXR0b25Db2xsYXBzZWQgOiB0aGlzLmNzcy53aW5kb3cuaGVhZGVyLmJ1dHRvbkV4cGFuZGVkO1xuICAgICAgICBnbHlwaENsYXNzTmFtZSA9IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHQgXCIgKyBnbHlwaENsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNzcy53aW5kb3cuaGVhZGVyLnJvb3R9PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uRXhwYW5kZWR9IHN0eWxlPXtzdHlsZUF9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5jc3Mud2luZG93LmhlYWRlci50aXRsZX0gc3R5bGU9e3N0eWxlVGl0bGV9Pnt0aGlzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2dseXBoQ2xhc3NOYW1lfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlckJvZHkoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz17dGhpcy5jc3Mud2luZG93LmJvZHl9PlxuICAgICAgICB7dGhpcy5yZW5kZXJTdXJ2ZXkoKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN1cnZleShuZXdQcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVN1cnZleShuZXdQcm9wcyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdQcm9wcy50aXRsZSA/IG5ld1Byb3BzLnRpdGxlIDogdGhpcy5zdXJ2ZXkudGl0bGU7XG4gICAgICAgIHZhciBoYXNFeHBhbmRlZCA9IG5ld1Byb3BzW1wiZXhwYW5kZWRcIl0gPyBuZXdQcm9wcy5leHBhbmRlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBleHBhbmRlZDogaGFzRXhwYW5kZWQsIGhpZGRlbjogZmFsc2UgfTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1cnZleS5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoczogU3VydmV5TW9kZWwpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoc2VsZi5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWFjdC9yZWFjdFN1cnZleVdpbmRvdy50c3hcbiAqKi8iLCJpbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi9ydXNzaWFuJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2ZyZW5jaCc7XG5pbXBvcnQgJy4uLy4uL2xvY2FsaXphdGlvbi9maW5uaXNoJztcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2dlcm1hbic7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZW50cmllcy9jaHVua3MvbG9jYWxpemF0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgcnVzc2lhblN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcItCd0LDQt9Cw0LRcIixcbiAgICBwYWdlTmV4dFRleHQ6IFwi0JTQsNC70LXQtVwiLFxuICAgIGNvbXBsZXRlVGV4dDogXCLQk9C+0YLQvtCy0L5cIixcbiAgICBwcm9ncmVzc1RleHQ6IFwi0KHRgtGA0LDQvdC40YbQsCB7MH0g0LjQtyB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCLQndC10YIg0L3QuCDQvtC00L3QvtCz0L4g0LLQvtC/0YDQvtGB0LAuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCLQkdC70LDQs9C+0LTQsNGA0LjQvCDQktCw0YEg0LfQsCDQt9Cw0L/QvtC70L3QtdC90LjQtSDQsNC90LrQtdGC0YshXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCLQl9Cw0LPRgNGD0LfQutCwINGBINGB0LXRgNCy0LXRgNCwLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCLQlNGA0YPQs9C+0LUgKNC/0L7QttCw0LvRg9C50YHRgtCwLCDQvtC/0LjRiNC40YLQtSlcIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCLQktGL0LHRgNCw0YLRjC4uLlwiLFxuICAgIHJlcXVpcmVkRXJyb3I6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINC+0YLQstC10YLRjNGC0LUg0L3QsCDQstC+0L/RgNC+0YEuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcItCe0YLQstC10YIg0LTQvtC70LbQtdC9INCx0YvRgtGMINGH0LjRgdC70L7QvC5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRhdC+0YLRjyDQsdGLIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxuICAgIG1pblNlbGVjdEVycm9yOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstGL0LHQtdGA0LjRgtC1INGF0L7RgtGPINCx0YsgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBtYXhTZWxlY3RFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLRi9Cx0LXRgNC40YLQtSDQvdC1INCx0L7Qu9C10LUgezB9INCy0LDRgNC40LDQvdGC0L7Qsi5cIixcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfSwg0Lgg0YDQsNCy0L3Ri9C8INC40LvQuCDQvNC10L3RjNGI0LUsINGH0LXQvCB7Mn1cIixcbiAgICBudW1lcmljTWluOiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScg0LTQvtC70LbQvdC+INCx0YvRgtGMINGA0LDQstC90YvQvCDQuNC70Lgg0LzQtdC90YzRiNC1LCDRh9C10LwgezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LTQsNC90L3Ri9C1INCyINC/0L7Qu9C1IFxcXCLQlNGA0YPQs9C+0LVcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wicnVcIl0gPSBydXNzaWFuU3VydmV5U3RyaW5ncztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2NhbGl6YXRpb24vcnVzc2lhbi50c1xuICoqLyIsIi8vQ3JlYXRlZCBvbiBiZWhhbGYgaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5rMTNcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZyZW5jaFN1cnZleVN0cmluZ3MgPSB7XG4gICAgcGFnZVByZXZUZXh0OiBcIlByXFx1MDBlOWNcXHUwMGU5ZGVudFwiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJTdWl2YW50XCIsXG4gICAgY29tcGxldGVUZXh0OiBcIlRlcm1pbmVyXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJBdXRyZSAocHJcXHUwMGU5Y2lzZXIpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlBhZ2UgezB9IHN1ciB7MX1cIixcbiAgICBlbXB0eVN1cnZleTogXCJJbCBuJ3kgYSBuaSBwYWdlIHZpc2libGUgbmkgcXVlc3Rpb24gdmlzaWJsZSBkYW5zIGNlIHF1ZXN0aW9ubmFpcmVcIixcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1lcmNpIGQnYXZvaXIgclxcdTAwZTlwb25kdSBhdSBxdWVzdGlvbm5haXJlIVwiLFxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiTGUgcXVlc3Rpb25uYWlyZSBlc3QgZW4gY291cnMgZGUgY2hhcmdlbWVudC4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIkNob2lzaXNzZXouLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgXFx1MDBlMCBjZXR0ZSBxdWVzdGlvbiBlc3Qgb2JsaWdhdG9pcmUuXCIsXG4gICAgbnVtZXJpY0Vycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgZG9pdCBcXHUwMGVhdHJlIHVuIG5vbWJyZS5cIixcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIk1lcmNpIGQnZW50cmVyIGF1IG1vaW5zIHswfSBzeW1ib2xlcy5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJNZXJjaSBkZSBzXFx1MDBlOWxlY3Rpb25uZXIgYXUgbW9pbnMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiTWVyY2kgZGUgc1xcdTAwZTlsZWN0aW9ubmVyIGF1IHBsdXMgezB9clxcdTAwZTlwb25zZXMuXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX0gZXQgaW5mXFx1MDBlOXJpZXVyZSBvdVxcdTAwZTlnYWxlIFxcdTAwZTAgezJ9XCIsXG4gICAgbnVtZXJpY01pbjogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX1cIixcbiAgICBudW1lcmljTWF4OiBcIlZvdHJlIHJcXHUwMGU5cG9uc2UgJ3swfScgZG9pdCBcXHUwMGVhdHJlaW5mXFx1MDBlOXJpZXVyZSBvdSBcXHUwMGU5Z2FsZSBcXHUwMGUwIHsxfVwiLFxuICAgIGludmFsaWRFbWFpbDogXCJNZXJjaSBkJ2VudHJlciB1bmUgYWRyZXNzZSBtYWlsIHZhbGlkZS5cIixcbiAgICBleGNlZWRNYXhTaXplOiBcIkxhIHRhaWxsZSBkdSBmaWNoaWVyIG5lIGRvaXQgcGFzIGV4Y1xcdTAwZTlkZXIgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJNZXJjaSBkZSBwclxcdTAwZTljaXNlciBsZSBjaGFtcCAnQXV0cmUnLlwiXG59O1xuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN1cnZleVN0cmluZ3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xuXG5leHBvcnQgdmFyIGZpbm5pc2hTdXJ2ZXlTdHJpbmdzID0ge1xuICAgIHBhZ2VQcmV2VGV4dDogXCJFZGVsbGluZW5cIixcbiAgICBwYWdlTmV4dFRleHQ6IFwiU2V1cmFhdmFcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiVmFsbWlzXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJNdXUgKGt1dmFpbGUpXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlNpdnUgezB9L3sxfVwiLFxuICAgIGVtcHR5U3VydmV5OiBcIlTDpHNzw6Qga3lzZWx5c3PDpCBlaSBvbGUgeWh0w6Rrw6TDpG4gbsOka3l2aWxsw6Qgb2xldmFhIHNpdnVhIHRhaSBreXN5bXlzdMOkLlwiLFxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiS2lpdG9zIGt5c2VseXluIHZhc3RhYW1pc2VzdGEhXCIsXG4gICAgbG9hZGluZ1N1cnZleTogXCJLeXNlbHnDpCBsYWRhdGFhbiBwYWx2ZWxpbWVsdGEuLi5cIixcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJWYWxpdHNlLi4uXCIsXG4gICAgcmVxdWlyZWRFcnJvcjogXCJWYXN0YWEga3lzeW15a3NlZW4sIGtpaXRvcy5cIixcbiAgICBudW1lcmljRXJyb3I6IFwiQXJ2b24gdHVsZWUgb2xsYSBudW1lZXJpbmVuLlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgdsOkaGludMOkw6RuIHswfSBtZXJra2nDpC5cIixcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJPbGUgaHl2w6QgamEgdmFsaXRzZSB2w6RoaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIk9sZSBoeXbDpCBqYSB2YWxpdHNlIGVuaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxuICAgIG51bWVyaWNNaW5NYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfSBqYSB2w6RoZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfVwiLFxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgdMOkeXR5eSBvbGxhIHbDpGhlbW3DpG4gdGFpIHlodMOkIHN1dXJpIGt1aW4gezF9XCIsXG4gICAgaW52YWxpZEVtYWlsOiBcIlN5w7Z0w6QgdmFsaWRpIHPDpGhrw7Zwb3N0aW9zb2l0ZS5cIixcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgXFxcIk11dSAoa3V2YWlsZSlcXFwiXCJcbn07XG5cbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmlcIl0gPSBmaW5uaXNoU3VydmV5U3RyaW5ncztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9maW5uaXNoLnRzXG4gKiovIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XG5cbmV4cG9ydCB2YXIgZ2VybWFuU3VydmV5U3RyaW5ncyA9IHtcbiAgICBwYWdlUHJldlRleHQ6IFwiWnVyw7xja1wiLFxuICAgIHBhZ2VOZXh0VGV4dDogXCJXZWl0ZXJcIixcbiAgICBjb21wbGV0ZVRleHQ6IFwiRmVydGlnXCIsXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlNlaXRlIHswfSB2b24gezF9XCIsXG4gICAgZW1wdHlTdXJ2ZXk6IFwiRXMgZ2lidCBrZWluZSBzaWNodGJhcmUgRnJhZ2UuXCIsXG4gICAgY29tcGxldGluZ1N1cnZleTogXCJWaWVsZW4gRGFuayBmw7xyIGRhcyBBdXNmw7xsbGVuIGRlcyBGcmFnZWJvZ2VucyFcIixcbiAgICBsb2FkaW5nU3VydmV5OiBcIkRlciBGcmFnZWJvZ2VuIHdpcmQgdm9tIFNlcnZlciBnZWxhZGVuLi4uXCIsXG4gICAgb3RoZXJJdGVtVGV4dDogXCJCZW51dHplcmRlZmluaWVydGUgQW50d29ydC4uLlwiLFxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIlfDpGhsZW4uLi5cIixcbiAgICByZXF1aXJlZEVycm9yOiBcIkJpdHRlIGFudHdvcnRlbiBTaWUgYXVmIGRpZSBGcmFnZS5cIixcbiAgICBudW1lcmljRXJyb3I6IFwiRGVyIFdlcnQgc29sbHRlIGVpbmUgWmFobCBzZWluLlwiLFxuICAgIHRleHRNaW5MZW5ndGg6IFwiQml0dGUgZ2ViZW4gU2llIG1pbmRlc3RlbnMgezB9IFN5bWJvbGUuXCIsXG4gICAgbWluU2VsZWN0RXJyb3I6IFwiQml0dGUgd8OkaGxlbiBTaWUgbWluZGVzdGVucyB7MH0gVmFyaWFudGVuLlwiLFxuICAgIG1heFNlbGVjdEVycm9yOiBcIkJpdHRlIHfDpGhsZW4gU2llIG5pY2h0IG1laHIgYWxzIHswfSBWYXJpYW50ZW4uXCIsXG4gICAgbnVtZXJpY01pbk1heDogXCInezB9JyBzb2x0ZSBnbGVpY2ggb2RlciBncsO2w59lciBzZWluIGFscyB7MX0gdW5kIGdsZWljaCBvZGVyIGtsZWluZXIgYWxzIHsyfVwiLFxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgc29sdGUgZ2xlaWNoIG9kZXIgZ3LDtsOfZXIgc2VpbiBhbHMgezF9XCIsXG4gICAgbnVtZXJpY01heDogXCInezB9JyBzb2x0ZSBnbGVpY2ggb2RlciBrbGVpbmVyIGFscyB7MX1cIixcbiAgICBpbnZhbGlkRW1haWw6IFwiQml0dGUgZ2ViZW4gU2llIGVpbmUgZ8O8bHRpZ2UgRW1haWwtQWRyZXNzZSBlaW4uXCIsXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJEaWUgRGF0ZWlncsO2w59lIHNvbGwgbmljaHQgbWVociBhbHMgezB9LlwiLFxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJCaXR0ZSBnZWJlbiBTaWUgZWluZW4gV2VydCBmw7xyIElocmUgYmVudXR6ZXJkZWZpbmllcnRlIEFudHdvcnQgZWluLlwiXG59O1xuXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImRlXCJdID0gZ2VybWFuU3VydmV5U3RyaW5ncztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHNcbiAqKi8iLCJpbXBvcnQgJy4uLy4uL2RlZmF1bHRDc3MvY3NzYm9vdHN0cmFwJztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzXG4gKiovIiwiaW1wb3J0IHtzdXJ2ZXlDc3N9IGZyb20gXCIuL2Nzc3N0YW5kYXJkXCI7XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEJvb3RzdHJhcENzcyA9IHtcbiAgICByb290OiBcIlwiLFxuICAgIGhlYWRlcjogXCJwYW5lbC1oZWFkaW5nXCIsXG4gICAgYm9keTogXCJwYW5lbC1ib2R5XCIsXG4gICAgZm9vdGVyOiBcInBhbmVsLWZvb3RlclwiLFxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiXCIsIHByZXY6IFwiXCIsIG5leHQ6IFwiXCIgfSxcbiAgICBwcm9ncmVzczogXCJwcm9ncmVzcyBjZW50ZXItYmxvY2tcIiwgcHJvZ3Jlc3NCYXI6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgcGFnZVRpdGxlOiBcIlwiLFxuICAgIHJvdzogXCJcIixcbiAgICBxdWVzdGlvbjogeyByb290OiBcIlwiLCB0aXRsZTogXCJcIiwgY29tbWVudDogXCJmb3JtLWNvbnRyb2xcIiwgaW5kZW50OiAyMCB9LFxuICAgIGVycm9yOiB7IHJvb3Q6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGljb246IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXCIsIGl0ZW06IFwiXCIgfSxcblxuICAgIGNoZWNrYm94OiB7IHJvb3Q6IFwiZm9ybS1pbmxpbmVcIiwgaXRlbTogXCJjaGVja2JveFwiLCBvdGhlcjogXCJcIiB9LFxuICAgIGNvbW1lbnQ6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgZHJvcGRvd246IFwiZm9ybS1jb250cm9sXCIsXG4gICAgbWF0cml4OiB7IHJvb3Q6IFwidGFibGVcIiB9LFxuICAgIG1hdHJpeGRyb3Bkb3duOiB7IHJvb3Q6IFwidGFibGVcIiB9LFxuICAgIG1hdHJpeGR5bmFtaWM6IHsgcm9vdDogXCJ0YWJsZVwiLCBidXR0b246IFwiYnV0dG9uXCIgfSxcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJ0YWJsZVwiLCBpdGVtVGl0bGU6IFwiXCIsIGl0ZW1WYWx1ZTogXCJmb3JtLWNvbnRyb2xcIiB9LFxuICAgIHJhZGlvZ3JvdXA6IHsgcm9vdDogXCJmb3JtLWlubGluZVwiLCBpdGVtOiBcInJhZGlvXCIsIG90aGVyOiBcIlwiIH0sXG4gICAgcmF0aW5nOiB7IHJvb3Q6IFwiYnRuLWdyb3VwXCIsIGl0ZW06IFwiYnRuIGJ0bi1kZWZhdWx0XCIgfSxcbiAgICB0ZXh0OiBcImZvcm0tY29udHJvbFwiLFxuICAgIHdpbmRvdzoge1xuICAgICAgICByb290OiBcIm1vZGFsLWNvbnRlbnRcIiwgYm9keTogXCJtb2RhbC1ib2R5XCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgcm9vdDogXCJtb2RhbC1oZWFkZXIgcGFuZWwtdGl0bGVcIiwgdGl0bGU6IFwicHVsbC1sZWZ0XCIsIGJ1dHRvbjogXCJnbHlwaGljb24gcHVsbC1yaWdodFwiLFxuICAgICAgICAgICAgYnV0dG9uRXhwYW5kZWQ6IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXBcIiwgYnV0dG9uQ29sbGFwc2VkOiBcImdseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIlxuICAgICAgICB9XG4gICAgfVxufTtcbnN1cnZleUNzc1tcImJvb3RzdHJhcFwiXSA9IGRlZmF1bHRCb290c3RyYXBDc3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGVmYXVsdENzcy9jc3Nib290c3RyYXAudHNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9