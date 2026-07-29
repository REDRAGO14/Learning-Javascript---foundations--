//challenge number 1 : sum of all number between 1 and 5
/* let sum = 0
let i  = 1

while(i <= 5){
    sum += i
    i++
}

console.log(sum); */

//challenge number 2  create a loop that count from 5 to 1 and store it in array 

/* let i = 5
let countdown = []

while(i >=1){
    console.log(i)
    countdown.push(i)
    i--
}

console.log(countdown) */

//CHALLENGE NUMBER 3 create a do while loop that prompt user for tea type and continue to ask untile the user enter "stop"

/* let teaCollection =[]
let tea;
do{
    tea = prompt("enter a Tea Type: ")
    if(tea != "stop"){
        teaCollection.push(tea)
    }
}while(tea != "stop"){

}
 */
//CHALLENGE NUMBER 4  create a do while loop that add numbers 1 - 3 and store it in total variable

/* let total = 0
let i = 1

do{
    total+=i
    i++
}while(i <= 3){}

console.log(total); */

//CHALLENGE NUMBER 6 

let cities = ["sheger", "lalibela", "gonder", "semera", "guba"]
let cityList = []

for(let i = 0; i < cities.length; i++){
    cityList.push(cities[i])
}

console.log(cityList);

