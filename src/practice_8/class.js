
"use strict";
class Klass{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(student){
        if(student.klass.number == this.number){
            this.assignLeader=student;
        }
        
    }
}
export default Klass;


