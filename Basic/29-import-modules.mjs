// Importación de módulos

import { add, PI, name, Circle} from "./28-export-modules.mjs"

import substract from "./28-export-modules.mjs"

// Funciones

console.log(add(5, 10))

// Propiedades
console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto
// console.log(substract(5, 10))

// let myClass = new substract()
// myClass.func()

// Proyecto modular

// import { MyClass } from "./classes/file.js"


