/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función

const lanzamiento = function (name) {
    console.log(`Lanzamos el ${name}`)
}

function returnLanzamiento() {
    return lanzamiento
}

const lanzamiento2 = returnLanzamiento()

lanzamiento2("Balon de Futbol")


// 2. Implementa una función currificada que multiplique 3 números

function mult(...numbers) {
    let result = 1
    for (let number of numbers) {
        result *= number
    }
    return result
}


function curryMult (a) {
    return function (b) {
        return function (c) {
            return function (d){
                return function (e) {
                    return mult (a, b, c, d, e)
                }
            }
        }
    }
}

const multABC = curryMult(2)(3)(4)
const multD = multABC(4)

console.log(multD(5))
console.log(multABC(7)(9))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente


function exp (number, exponente) {
    if (exponente == 1) {
        return number
    } else if (exponente == 0){
        return 1
    } else if (exponente < 0){
        return (1/number)* exp(number, exponente + 1)
    }
    return number * exp(number, exponente-1)
}

console.log (exp(2, 8))
console.log (exp(2, 0))
console.log (exp(2, -3))


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter (initialValue = 0) {
    let valor = initialValue
    return {
        increment: () => valor++,
        decrement: () => valor--,
        getValue: () => valor
    }
}

const contador = createCounter(10)

console.log(contador.getValue())
contador.increment()
console.log(contador.getValue())
contador.decrement()
console.log(contador.getValue())


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros 
// Rest) y luego multiplique el resultado por multiplier

function sumManyTimes (multiplier, ...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result * multiplier
}

console.log(sumManyTimes (8, 5, 6, 7, 8, 9))


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sum (...data) {
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

function sumConCallback (callback, ...numbers){
    let resultado = 0
    for (let number of numbers){
        resultado += number
    }
    const result = resultado 
    callback(result)
}

sumConCallback ((result) => {
    console.log(`La suma es: ${result}`)
}, 1, 2, 3, 4, 5, 6, 7, 8)


// 7. Desarrolla una función parcial

function partialString (a) {
    return function (b, c, d) {
        return a + b + c + d
    }
}

const partial = partialString('Hola, ')
console.log(partial('¿como ', 'estas ', 'usted?'))
console.log(partial('¿como ', 'te ', 'llamas?'))

// 8. Implementa un ejemplo que haga uso de Spread

const letters = ['a', 'b', 'c', 'd', 'e', 'f']

function createWord (a, b, c, d) {
    return a + b + c + d
}

console.log (createWord(...letters))


// 9. Implementa un retorno implícito

const moduleDivision = (a, b) => a % b
console.log(moduleDivision(9, 5))


// 10. Haz uso del this léxico

const handler = {
    multiplication: 6,
    resultado: function (n = 0) {
        console.log (`El resultado de ${n} * ${this.multiplication}  => ${n*this.multiplication}`)
    }
}

handler.resultado(9);

