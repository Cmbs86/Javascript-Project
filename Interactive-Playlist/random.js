function Newthing(a, b, c) {
  console.log (a + b + c)
}


Newthing(10, 5, 6)
// Newthing()

function another(){

    Newthing()
}


console.log(another(Newthing()))