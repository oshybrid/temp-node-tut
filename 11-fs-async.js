// Async File Read/Write
const { readFile, writeFile } = require("fs")

console.log("start")
readFile("./content/first.txt", "utf8", (err, result) => {
  if(err) {
    console.log(err)

    // If there is a error then the return exits the function
    return
  }

  // If no error, then...
  const first = result
  readFile("./content/second.txt", "utf8", () => {
    if(err) {
      console.log(err)
  
      // If there is a error then the return exits the function
      return
    }
  
    // If no error, then...
    // {flag: "a"}  Appends to the file rather than overwrite
    const second = result
    writeFile("./content/result-async.txt", 
      `Here is the result ${first}, ${second}`, 
      {flag: "a"}, 
      (err, result) => {
        if(err) {
          console.log(err);
          return
        }
        console.log("done with this task")
      })
  })
})

console.log("starting next task")