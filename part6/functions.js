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