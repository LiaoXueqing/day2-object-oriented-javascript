"use strict";
import Person from "../../src/practice_7/person.js";
import Klass from "../../src/practice_7/class.js";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass= klass;
    }
    introduce(){
        var str = (this.klass == null) ? 
        ` I teach No Class.`:` I teach ${this.klass.getDisplayName()}.`;
        return super.introduce()+` I am a Teacher.${str}`;
    }
    introduceWith(student){
        var str = (student.klass.number == this.klass.number?"teach Jerry.":"don't teach Jerry.");
        return super.introduce()+` I am a Teacher. I ${str}`;
    }
}
export default Teacher;


