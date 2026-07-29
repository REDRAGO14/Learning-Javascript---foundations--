// challenge 1
let teaFlavor = ["green Tea", "blackTea", "oolong Tea"]

let firstTea = teaFlavor[0]

// challenge 2
let cities = ["addis abeba", "london", "lalibela", "paris", "milan"]

const favoriteCity = teaFlavor[2]

// challenge 3
let teaFlavor2 = ["green Tea", "blackTea", "oolong Tea"]

teaFlavor2[1] = "jesmine tea"

// challenge 4
let vcities = ["addis abeba", "london", "lalibela", "paris", "milan"]

// vcities[vcities.length] = "berlin"
vcities.push("berlin")
// console.log(vcities);

// challenge 5
let teaOrders = ["green Tea", "blackTea", "oolong Tea"]

const lastOrder = teaOrders.pop()

// challenge 6 softcopy
let num1 = 4
let num2 = num1
num1 = 9
console.log(num1);
console.log(num2);


let popularTea = ["green Tea", "blackTea", "oolong Tea"]

let SoftcopyTea = popularTea

popularTea.pop();
console.log(popularTea);
console.log(SoftcopyTea);



// challenge 7 hard copy
let popularteas = ["green Tea", "blackTea", "oolong Tea"]
let hardcopyTeas = [...popularteas]//spreader operator
popularteas.pop
console.log(hardcopyTeas);



// challenge 8 marge arrays
let teaOrders1 = ["green Tea", "blackTea", "oolong Tea"]
let vcities1 = ["addis abeba", "london", "lalibela", "paris", "milan"]

let MargedArray = teaOrders1.concat(vcities1)

console.log(MargedArray);

// challenge 9 countarraylength
let teaOrders2 = ["green Tea", "blackTea", "oolong Tea"]
const arrayLength = teaOrders2.length
console.log(arrayLength);

// challenge 10 countarraylength
let teaMenu = ["green Tea", "blackTea", "oolong Tea"]
console.log(teaMenu.includes("Green Tea"))// return boolean and it is casesensetive