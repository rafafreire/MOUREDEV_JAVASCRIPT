// Console

// log

console.log("¡Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la Base de Datos: ", new Error("Conexion Fallida."))


// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")


// table

let data = [
    ["Brais", 37],
    ["Brais", 21],
    ["Brais", 27],
    ["Brais", 36]
]

let data2 = [
    {name: "Brais", age: 37},
    {name: "Brais", age: 21},
    {name: "Brais", age: 27}
]

console.table(data2)


// group

console.group ("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()


// time

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")


// assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.") 

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")


// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()


// clear

//console.clear()

