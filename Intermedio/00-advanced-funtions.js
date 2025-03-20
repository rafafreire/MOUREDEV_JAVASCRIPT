// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")


    // Una función que se le envía otra funcion por argumento
function processGreeting (greetFunction, name) {
    greetFunction(name) 
}

processGreeting(greet, "Manolo")


// - Una función podría retornar otra función

function returnGreeting() {
    return greet
}

processGreeting(greet,"Mouredev")

const greet2 = returnGreeting()

greet2 ("Brais Moure")


// Arrow functions avanzadas

// - Tenemos arrow functions con Retorno Implicito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();


//  IIFE (Expresión de Función Invocada Inmediatamente)

// - IIFE clásico
(function () {
    console.log ("IIFE clásico")
}) ();

// - IIFE clásico 2 (con arrow function)
( () => {
    console.log ("IIFE clásico con arrow function")
}) ();


// Parámetros REST (...)
// Argumentos adicionales en un array

function show (...numbers) {
    console.log(numbers)
}

function sum(...numbers) {
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

console.log (sum(1, 2, 3, 4, 5))
console.log (sum(10, 12))


// Operador Spread (...)
// Expandir los elementos de un array

const numbers = [1, 2, 3, 4, 5, 6]

function sumWithSpread (a, b, c){
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // 

// Closures (Clausuras)
// Una funcion interna accede a las variables de una función externa
// Encapsulamos datos y somos capaces de acceder a esos datos

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()


// Recursividad
// Es una función que se llama a si misma pero que acaba con una condición

// Calcular el factorial de un número

function factorial (n) {
    if (n <= 1 ) {
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial (5))


