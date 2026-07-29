//CHALLENGE NUMBER 1 
/* let teaCollection = ["green tea", "black tea", "oolang tea", "chai"]
let selectedTeas = []

for( let i = 0; i < teaCollection.length; i++){
    if(teaCollection[i] != "oolang tea"){
        selectedTeas.push(teaCollection[i])
    }else{
        break;
    }
}
console.log(selectedTeas);
 */

//CHALLENGE NUMBER 2
/* let cities = ["addis abeba", "london", "lalibela", "paris", "milan"]
let visitedCities = []

for(let i = 0; i < cities.length; i++){
    if(cities[i] == "lalibela"){
        continue;
    }
    visitedCities.push[cities[i]]
} */


//CHALLENGE NUMBER 3

/* let numbers = [1,2,3,4,5]
let smallNumbers = []

for(const num of numbers){
    if(num == 4){
        break;
    }
    smallNumbers.push(num)
}
*/


//CHALLENGE NUMBER 4

/* let teas = ["green tea", "black tea", "oolang tea", "chai"]
let preferedTeas = []

for(const tea of teas){
    if(tea == "chai"){
        continue;
    }
    preferedTeas.push(tea)
} */

//CHALLENGE NUMBER 8

/* let teas = ["green tea", "black tea", "oolang tea", "chai"]
let preferedTeas = []

teas.forEach((tea) => {
    if(tea != "black tea"){
        preferedTeas.push(tea)
    }
})

console.log(preferedTeas); */


//CHAllENGE NUMBER 9

/* let numbers = [2,5,7,9]
let doubledNum = []

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == 7){
        continue;
    }
    doubledNum.push(numbers[i]*2)
} */


//CHALLENGE NUMBER 10

/* let teas = ["green tea", "black tea", "oolang tea", "chai"]
let longTea = []

for(const tea of teas){
    let count = 0
    for(const l of tea){
        count++
    }
    console.log(count);
    
    if(count < 5){
        longTea.push(tea)
        
    }
}
console.log(longTea);
 */

