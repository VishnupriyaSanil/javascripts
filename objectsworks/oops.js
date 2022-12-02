var baleno={
    name:"baleno",
    brand:"nexa",
    price:"10lack",
    colours:["blue,black"],
    varients:["petrol,ev"],
    getPrice(){
        return this.price
    }
}
var glanza={
    name:"glanza",
    brand:"toyotta",
    price:'11lack'

}
glanza.__proto__=baleno
console.log(glanza.colours);
console.log(glanza.getPrice());