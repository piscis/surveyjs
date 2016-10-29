﻿import {QuestionBase} from './questionbase';
import {HashTable} from "./base";

export class QuestionFactory {
    public static Instance: QuestionFactory = new QuestionFactory();
    public static DefaultChoices = ["one", "two|second value", "three|third value"];
    private creatorHash: HashTable<(name: string) => QuestionBase> = {};

    public registerQuestion(questionType: string, questionCreator: (name: string) => QuestionBase) {
        this.creatorHash[questionType] = questionCreator;
    }
    public getAllTypes(): Array<string> {
        var result = new Array<string>();
        for(var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    }
    public createQuestion(questionType: string, name: string): QuestionBase {
        var creator = this.creatorHash[questionType];
        if (creator == null) return null;
        return creator(name);
    }
}