var expenses=[30000,35000,40000,45000,50000]
// console.log(expenses[3]);

// for(let exp of expenses){
//     console.log(exp);
// }
// for(let exp of expenses){
//     if(exp>35000){
//         console.log(exp);

//     }
// }

// expenses.push(55000)        //add to new object
// console.log(expenses);

//reduce


var list=[2,4,6,8,10];
// var sum=list.reduce((n1,n2)=>n1+n2)    //reduce
// console.log(sum);

// var max=list.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// var min=list.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);

//includes

// var isPresent=list.includes(10)
// console.log(isPresent);

//forEach

// list.filter((n)=>n%2==0).forEach(n=>console.log(n))


//sort

expenses.sort((n1,n2)=>n2-n1)
console.log(expenses);
// var squares=list.map((n=>n**2))
// console.log(squares);

// var cube=list.map((n=>n**3))     //map
// console.log(cube);

// var evens=list.filter((n)=>n %2==0)    //filter     
// console.log(evens);

// var check=list.map((n=>n>5?n+1:n-1))
// console.log(check);