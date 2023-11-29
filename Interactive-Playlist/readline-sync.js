import rs from "readline-sync"


// console.clear()
// const firstName = rs.question("What is your name?\n> ") // the details give an extra line and an arrow to type
// const age = Number(rs.question("How old are you?\n> "))
// const city = rs.question("Where do you live\n>")
// // console.log(firstName)
// // console.log(age)
// // console.log(city)

// console.log(`Hey ${firstName}, I am ${age} from ${city}. Nice to meet you`)



const groceries = []

/* I want to create a loop that keeps asking me for things I need to buy util I type STOP */


while(true){
    const input = rs.question("What do you need to buy at the market?\n>")
   if (input === "STOP"){
    break
   }
   
   
  groceries.push(input)
}

console.log(groceries)