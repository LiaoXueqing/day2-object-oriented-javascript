
"use strict";
class Klass{
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
        // var k = student.klass;
        student.klass = this;
        // console.log("---------------------"+student.klass==k);
    }
    equals(k){
        if(this.id==k.id) return true;
        return false;
    }
}
export default Klass;
