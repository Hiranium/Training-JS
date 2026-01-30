// JAVASCRIPT EXECUTION OF CODE 
// GLOBAL EXECUTION PHASE 
// FUNCTION EXECUTION PHASE 

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2) {
//     let total = num1 +num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// console.log(result1)
// console.log(result2)

//  STEP 1 
// GLOBAL EXECUTION =>   ( this )
// MEMORY PHASE
// EXECUTION PHASE 

function one(){
    console.log("one"); 
    two()   
};
function two(){
    console.log("two");
    three()    
};
function three(){
    console.log("three");   
}

one()
two()
three()