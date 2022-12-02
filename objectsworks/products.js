var items=[
    {id:1,name:"smasungm52",brand:"smasung",band:"5g",price:30000,colors:["black","red","mint"]},

    {id:2,name:"smasunga52",brand:"smasung",band:"4g",price:28000,colors:["black"]},

    {id:3,name:"redminote10",brand:"mi",band:"4g",price:17000,colors:["black","red","mint"]},

    {id:4,name:"mi11i",brand:"mi",band:"5g",price:28000,colors:["black","red","mint"]},

    {id:5,name:"iqneo6",brand:"iq",band:"5g",price:30000,colors:["black","red","mint"]},

    {id:6,name:"motog72",brand:"motorola",band:"4g",price:17000,colors:["black","red","mint"]},

]
//total products
// console.log(items.length);

// total mobile names
// items.map(p=>p.name).forEach(n=>console.log(n))

// print samsung mobile names
// items.filter(p=>p.brand=="smasung").forEach(m=>console.log(m.name))

// 5g mobile names
// items.filter(p=>p.band=="5g").forEach(m=>console.log(m.name))

// costly mobile
// var costlyPro=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(costlyPro);

// sort products in descending order based on price
items.sort((p1,p2)=>p2.price-p1.price)
console.log(items);