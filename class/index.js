let weather="sunny" 
console.log("Weather Forecast")
switch(weather){
    case "sunny":
        console.log("its sunny plz -: wear sunglasses")
        break;
    case "rainy":
        console.log("you might need an umbreela")
    default:
        console.log("weather is unpredictible today")
        break;
        
}

console.log("do while statement")
let count=5;
do{
    console.log("countDown",count)
    count--;
}while(count>0)






var a=10;
var b=5;
console.log("Arithmetic")
console.log("Additon\t" + (a+b))
console.log("Division\t" + (a/b))
console.log("Multiplication\n" + (a*b))


var x=10;
var y=14;
console.log("Comparison")
console.log((x==y))
console.log((x!=y))
console.log((x<y))
console.log((x>y))
console.log((x===11))
console.log((x===10))
console.log((x!==y))

console.log("Logical")
var a=true;
var b=false;
console.log((x&&y))
console.log((x||y))
console.log((!x))
console.log((!y))