"use strict";

import Person from "../../src/practice_10/person.js";
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses= klasses;
    }
    introduce(){
        let className = "";
        if(this.klasses===undefined || this.klasses.length===0){
            className = `No Class`;
        }else{
            className = 'Class';
            this.klasses.forEach(element=>{
                className += ` ${element.number},`
            });
            className = className.substring(0,className.length-1);
        }
        return super.introduce()+` I am a Teacher. I teach ${className}.`;
    }
    // introduceWith(student){
    //     var str = (student.klass.number == this.klass.number?"teach Jerry.":"don't teach Jerry.");
    //     return super.introduce()+` I am a Teacher. I ${str}`;
    // }
    isTeaching(student){
        var num = student.klass.number;
        this.klasses.forEach(element=>{
            if(element.number==num) return true;
        })
        return false;
    }
}
export default Teacher;



