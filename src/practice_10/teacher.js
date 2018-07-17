"use strict";

import Person from "../../src/practice_10/person.js";
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses= klasses;
    }
    introduce(){
        var str = (this.klasses.length==0) ? 
        ` I teach No Class.`:` I teach ${this.klasses.getDisplayName()}.`;
        return super.introduce()+` I am a Teacher.${str}`;
    }
    introduceWith(student){
        var str = (student.klass.number == this.klass.number?"teach Jerry.":"don't teach Jerry.");
        return super.introduce()+` I am a Teacher. I ${str}`;
    }
    isTeaching(student){
        return true;
    }
}
export default Teacher;



