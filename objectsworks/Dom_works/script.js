function add(){
    let n1=document.querySelector("#num1").value
    let n2=document.querySelector("#num2").value
    let res=Number(n1)+Number(n2)
    console.log(res);
    document.querySelector("#result").innerHTML=`
    <div class="alert alert-primary" role="alert">
 result=${res}
</div>
    `

}
// function sub(){
//     let n1=document.querySelector("#num1").value
//     let n2=document.querySelector("#num2").value
//     let res=Number(n1)-Number(n2)
//     console.log(res);
//     document.querySelector("#result").innerHTML=`
//     <div class="alert alert-primary" role="alert">
//  result=${res}
// </div>`
// }

function calculate(event){
    let btn=event.target.name;
    let n1=document.querySelector("#num1").value
    let n2=document.querySelector("#num2").value
    let res=0;
    if(btn=="btn-add"){
        res=Number(n1)+Number(n2)
    }
    if(btn=="btn-sub"){
        res=Number(n1)-Number(n2)
    }
    document.querySelector("#result").innerHTML=`
    <div class="alert alert-primary" role="alert">
 result=${res}
</div>
    `




}