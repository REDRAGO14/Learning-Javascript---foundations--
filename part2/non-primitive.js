//object
let userName = {
    firstName: "Dagim",
    isActive: true,
}

console.log(userName);

userName.firstName = "Biruk"
userName.isActive = false

console.log(userName.firstName);
console.log(userName["isActive"]);

console.log(typeof userName)


// Array

let fruits = ["apple", "banana", "mango", "pinapple"]
console.log(fruits[0])

fruits[2] = "avocado"
console.log(fruits);

console.log(typeof fruits);

