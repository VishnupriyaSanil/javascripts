function fibo(terms){
    var num1=0;
    var num2=1;
    for(let i=1;i<=terms;i++){
        console.log(num1,end=" ");
        var num3=num1+num2;
        num1=num2;
        num2=num3
    }
}
console.log(fibo(10));