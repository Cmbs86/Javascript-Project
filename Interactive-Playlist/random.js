/* function Newthing(a, b, c) {
  console.log (a + b + c)
}


Newthing(10, 5, 6)
// Newthing()

function another(){

    Newthing()
}


console.log(another(Newthing()))
 */



// const array = [1,5,6,4,23,4,5,2,4]

// const newArray = array.map((number) => {
//     return number * 2
// })


// console.log(array)
// console.log(newArray)
// const newArray = []
// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 2)
// }

// console.log(array)
// console.log(newArray)


// const array2 = [1,5,6,4,23,4,5,2,4]
// const newArray2 = array2.filter((number) => {
//     return number != 4;
// })



// console.log(array2)
// console.log(newArray2)



// const array2 = [1,5,6,4,23,4,5,2,4]






/* 
    1. Complete the code below to have a function that returns the number of times
    it's been called.
    
    For example:
    - when you run it the first time, it should return 1
    - the second time, it should return 2
    - then 3
    - and so on

    Hint: you don't need to use loops
*/

// function myCounter(number) {
//   (number =>)
// }

// // expected output
// console.log("myCounter", myCounter()); // 1
// console.log("myCounter", myCounter()); // 2
// console.log("myCounter", myCounter()); // 3
// console.log("myCounter", myCounter()); // 4
// console.log("myCounter", myCounter()); // 5


// function counter (){
//   let count = 0
//   count++
//   return count


// }

// console.log(counter())


function outer(){
  let count = 0;

  function inner(){
    count++
    console.log(count)
  }

  return inner

}


const inner = outer()

inner()
inner()
inner()





