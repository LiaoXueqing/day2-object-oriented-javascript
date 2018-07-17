
"use strict";
import Person from "../../src/practice_8/person.js";
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
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


