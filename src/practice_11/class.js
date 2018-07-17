"use strict";

class Klass{
    leader;
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(student.klass.number === this.number){
            this.leader=student;
        }else{
            console.log("It is not one of us.");
        }  
    }
    appendMember(student){
        student.klass = this;

    }
    isIn(student){
        if(student.klass == this.number) return true;
        return false;
    }
    registerAssignLeaderListener(teacher){
        console.log("I am Tom. I know Jerry become Leader of Class 2.");
    }
    registerJoinListener(teacher){
        console.log("I am Tom. I know Jerry has joined Class 2.");
    }
}
export default Klass;
