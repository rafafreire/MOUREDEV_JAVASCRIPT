// Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

let numbers = [1, 2, 3, 4, 5, 6]

// forEach ()

numbers.forEach(element => console.log(element))

// map (se obtiene un nuevo array)

let numbersFor2 = numbers.map(element => element * 2)
console.log(numbersFor2)

// filter (crea un nuevo array)

let evenNumbers = numbers.filter(element => element % 2 === 0)
console.log(evenNumbers)

// reduce

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// - Manipulación

// flat (aplanar)

let nestedArray = [1, [2, [3, [4, [5, [6 ]]]]]]
let flatArray = nestedArray.flat(4)
console.log(flatArray)


// flatMap

let phrases = ["Hola Mundo", "Adiós Mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - Ordenación

let unsorted = [3, 4, 1, 6, 10, 12, 2]

// let sorted = unsorted.sort()  // para ordenar strings
let sorted = unsorted.sort((a, b) => a - b)

console.log (sorted)

// reverse

sorted.reverse()
console.log(sorted)


// - Búsqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))


// find (el primer par del array)

//sorted = [3, 5, 7]
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex (el indice del primer par del array)

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)




// Sets avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])

const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const setC = new Set([1, 2, 3])
const setD = new Set([2, 3, 4, 5])

const intersection = new Set([...setC].filter(element => setD.has(element)))
console.log(intersection)

// Diferencia

const difference1 = new Set([...setC].filter(element => !setD.has(element)))
console.log(difference1)

const difference2 = new Set([...setD].filter(element => !setC.has(element)))
console.log(difference2)


// - Conversión

console.log([...setA])


// - Iteración

// forEach

setA.forEach(element => console.log(element))




// Maps avanzados

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

console.log(myMap)

myMap.forEach((value, key) => console.log(`${key}: ${value}`))


// - Conversión

// Map a Array -- from

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto -- fromEntries

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)





