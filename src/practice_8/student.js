
"use strict";
import Person from "../../src/practice_8/person.js";
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        var str = (this.klass.leader===this?`Leader of Class 2`:`at ${this.klass.getDisplayName()}`);
        return super.introduce()+` I am a Student. I am ${str}.`;
    }
}
export default Student;
