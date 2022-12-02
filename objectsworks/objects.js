var person={
    name:"hari",
    age:25,
    gender:"male",
    getName(){
        return this.name
    }
}

// console.log(person.name);
// console.log(person.getName());

person.salary=20000;
console.log(person);
person.salary+=5000;
console.log(person.salary);
console.log("height" in person);