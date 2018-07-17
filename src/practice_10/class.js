
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
        if(student.klass === this){
            this.leader=student;
        }else{
            return "It is not one of us.";
        }  
    }
    appendMember(student){
        student.klass = this;
    }
    equals(k){
        if(this.id==k.id) return true;
        return false;
    }
}
export default Klass;
