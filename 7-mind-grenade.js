

const num1 = 5
const num2 = 10

function addValues(){
  console.log(`the sum is : ${num1 + num2}`)
}

// When you require a module the code will run through once  
// If we have a function inside a module Even if we did not assign it.
// When node exports the code with a function "addValues()" it gets invoked (executed)
addValues()