//task 1
console.log(Number("3"));

function stringToNum(x)                 {
    if(typeof Number(x) == "number"){
        return Number(x)
    }else{
        retrun `${x} is not a number`
    }
}
//task 2


function flipBoolean(y){
    if(y){
        return !y
    }
}

//task 3

function whatAmI(userInput){
    return `the type of ${userInput} is ${typeof userInput} `
}


//task 4

function isItTruthy(z){
    if(isItTruthy){
        return "it's truthy"
    }else{
        return "it's falsey"
    }
}