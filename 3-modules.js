// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")

// When you require a module the code will run through once  
// If we have a function inside a module Even if we did not assign it.
// When node exports the code with a function "addValues()" it gets invoked (executed)
require("./7-mind-grenade")

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)