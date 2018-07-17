
"use strict";
class Person {
    constructor(id,name,age){
        this.id=id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
    equals(b){
        if(this.id==b.id) return true;
        return false;
    }
}
export default Person;
