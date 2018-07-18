"use strict";

import Person from "../../src/practice_11/person.js";
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        let className = "";
        if (this.klasses === undefined || this.klasses.length === 0) {
            className = `No Class`;
        } else {
            className = 'Class ';
            className += this.klasses.map(item => item.number).join(", ");
        }
        return super.introduce() + ` I am a Teacher. I teach ${className}.`;
    }
    isTeaching(student) {
        var num = student.klass.number;
        this.klasses.forEach(element => {
            if (element.isIn(student)) return true;
        })
        return false;
    }
    knowAboutJoin(student, klass) {
        console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
    }

    knowAboutLeader(student, klass) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of ${klass.getDisplayName()}.`);
    }
}
export default Teacher;




