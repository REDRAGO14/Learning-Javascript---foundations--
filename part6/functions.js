//challenge number 1

function makeTea(typeOfTea){
    return `making ${typeOfTea}`
}

let teaOrder = makeTea("green Tea")
 //challenge number 2 
 function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for chai ${teaType}`
    }

    return confirmOrder("chai")
 }

 orderTea("chai")

 //challenge number 3

const calculateTotal = (price, quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(250, 7)

//challenge number 4
function makeTea(teaType){
    return `making ${teaType}`
}
function processTea(maketea){
    return maketea
}
console.log( processTea(makeTea("chai")));
