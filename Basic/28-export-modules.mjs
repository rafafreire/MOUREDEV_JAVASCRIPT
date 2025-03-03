// Exportación de módulos
// Es un fichero

// funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "Brais Moure"
export const EMAIL = "mouredev@mouredev.es"


// Exportación por defecto (solo funciones)

export default function substract(a, b){
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("")
//     }
// }


// Classes

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}


