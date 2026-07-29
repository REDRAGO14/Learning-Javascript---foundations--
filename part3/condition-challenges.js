//check if two number are equal
let num1 = 30
let num2 = 50


if(num1 > num2){
    console.log("num1 is Greater than num2")
}else{
    console.log("num1 is Not greater!")
}

//CHECK WHEather to string are equall

let userName = "Redragon"
let userInput = "Redragon"

if(userName == userInput){
    console.log("Login Successful");
}else{
    console.log("userName Doesn't Match");
    
}

//checking if a variable is a number or not

let var1 = "dagim"
let var2 = 21

if(typeof var2 == typeof 2) {// (typeof var2 == "number")
    console.log("Ya the data Type is a Number");
}else{
    console.log("No it is Not a Number");
    
}

//checking a boolean value is true or false
let isActive = true;
if(!isActive){
    console.log("it is false");   
}else{
    console.log("it is true");
    
}

//check if an array is empty or not

let grociery = []

if(grociery.length == 0){
    console.log("it is empty");
}else{
    console.log("NOT empty")
}