// class Person{
//     setPerson(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;

//     }
//     printPerson(){
//         console.log(this.name,this.age,this.gender);
//     }
// }
// var p=new Person()
// p.setPerson("anu",21,"female")
// p.printPerson()

//using constructor

class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
}
var p=new Person("anu",21,"female")
p.printPerson()