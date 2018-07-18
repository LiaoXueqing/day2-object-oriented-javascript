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
            if(this.notifyAssignLeader!=undefined){
                this.notifyAssignLeader(student);
            }
        }else{
            console.log("It is not one of us.");
        }  
    }
    appendMember(student){
        student.klass = this;
        if(this.notifyJoinMember!=undefined){
            this.notifyJoinMember(student);
        }
    }
    isIn(student){
        if(student.klass == this.number) return true;
        return false;
    }
    registerAssignLeaderListener(teacher){
        this.notifyAssignLeader=function(student){
            teacher.knowAboutLeader(student,this);
        }
    }
    registerJoinListener(teacher){
        this.notifyJoinMember=function(student){
            // console.log(`I am Tom. I know Jerry become Leader of Class 2.`);
            teacher.knowAboutJoin(student,this);
        }
    }
}
export default Klass;
