// funciones

// bloque de codigo para hacer una acción específica
// modular y invovar

// Simple

function myFunc() {
    console.log("¡Hola mi función!")
}

// Con Parametros

function myFunctWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

// invocar
for(let i = 0; i < 5; i++) {
    myFunc()
    myFunctWithParams("name")
}


// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions

const myFunc3 = (name2) => {
    console.log(`¡Hola, ${name2}!`)
}

myFunc3("Brais Moure 3")

const myFunc4 = (name3) => console.log(`¡Hola, ${name3}!`)

myFunc4("Brais Moure 4")


// Parámetros

function sum(a, b){
    console.log( a + b)
}

sum(5, 10)
sum(5)
sum()


function defaultSum(a = 0, b = 0){
    console.log( a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 2)
defaultSum(b=5)

//Retorno de valores

function mult(a, b){
    return ( a * b)
}

console.log(mult(5, 10)) 

let result = mult(5, 10)
console.log(result)


// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()


// Funciones de orden superior
// Funciones que reciben otras funciones 

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4,"Funcion de orden superior")

// forEach
myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.es"],
    ["age", 37]
])

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

