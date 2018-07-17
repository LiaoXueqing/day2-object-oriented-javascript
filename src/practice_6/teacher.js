

"use strict";
import Person from "../../src/practice_6/person.js";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        var str = (this.klass == undefined) ? " I teach No Class.":" I teach Class 2.";
        return super.introduce()+` I am a Teacher.`+str;
    }
}
export default Teacher;

