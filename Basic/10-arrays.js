// arrays

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)


myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
//myArray[0] = "Brais"
myArray[1] = "Moure"
myArray[2] = "mouredev"

console.log(myArray)

// Metodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push("37")

console.log (myArray)
console.log(myArray.pop()) // Elimina el ultimo y lo devuelve
console.log(myArray.pop())
console.log(myArray)


// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0  // alternativa pero utilizar la anterior
console.log(myArray)

// slice
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 2)
console.log(myNewArray)

// splice

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)


