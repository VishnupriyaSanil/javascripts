var text="hello hai hello hai";                //hello:2,hai:2

var wc={}     

// var words=text.split(" ")
// console.log(words);

// for(let w of words){
//     w in wc?wc[w]+=1:wc[w]=1
    
//     // if(w in wc){
//     //     wc[w]+=1
//     // }
//     // else{
//     //     wc[w]=1
//     // }
// }
// console.log(wc);
text.split(" ").map(w=>w in wc ?wc[w]+=1:wc[w]=1)
console.log(wc);