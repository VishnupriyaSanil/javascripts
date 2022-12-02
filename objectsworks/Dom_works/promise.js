var winwin=new Promise((res,rej)=>{
    let ticketNum=2;
    let priseNum=Math.floor(Math.random()*10)
    if(ticketNum=priseNum){
        res("you won")
    }


})

winwin.then(res=>console.log("will buy a car"))