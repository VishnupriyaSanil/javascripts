function add(n1,n2){
    return n1+n2
}
function cube(n){
    return n**3
}
function smartSub(n1,n2){
    return n1>n2?n1-n2:n2-n1
    // if(n1>n2){
    //     return n1-n2
    // }
    // else{
    //     return n2-n1
    // }

}
function maxTwo(n1,n2){
    return n1>n2?n1:n2
}
console.log(add(10,30));
console.log(cube(3));
console.log(smartSub(8,4));
console.log(maxTwo(6,7));