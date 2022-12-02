class parent{
    m1(){
        console.log("inside parent");
    }
}
class Child extends parent{
    m2(){
        console.log("m2");
    }
}
var c=new Child()
c.m2()
c.m1()
