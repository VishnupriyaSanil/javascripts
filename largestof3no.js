var a=10;
var b=18;
var c=22;
if(a>=b){
    if(a>=c){
        console.log(`${a} is large`);
    }
    else{
        console.log(`${c} is large`);
    }
}
else if(b>=c){
    console.log(`${b} is large`);
}
else{
    console.log(`${c} is large`);
}