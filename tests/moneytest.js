import { formatCurrency } from "../utils/money.js";


function testCurrency(value,result){
    if(formatCurrency(value)=== result){
    console.log("Passed")
}
else{
    console.log("Failed")
}
}

testCurrency(2095,'20.95')