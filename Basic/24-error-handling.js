// Excepción
// Momento anomalo que va a 

let myObject
//console.log(myObject.email)

// Tratamiento de errores
// Try-catch

try {
    // Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}


// Capturar el error

try {
    // Codigo que intenta ejecutar
    console.log(myObject.email)
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
}


// Finally
// Este bloque de código siempre se ejecuta

try {
    // Codigo que intenta ejecutar
    console.log(myObject.email)
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
} finally {
    // Este codigo se ejecuta siempre
    console.log("Este código se ejecuta siempre")
}


// Captura de errores y lanzamiento de errores
// Thow

function sumIntegers(a, b) {
    // if (!(typeof a === "number" && typeof b === "number")) {
    //     console.log("No se pueden sumar estas propiedades")
    // } 
    // if (Number.isNaN(a)) {
    //     console.log("No es un número")
    // }

    if (typeof a !== "number" || typeof b !== "number") {
       throw new TypeError("Esta operación sólo suma números")
    } 

    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operación sólo suma números enteros")
    }

    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se está intentando sumar cero.", a, b)
    }

    return a + b
}

try{
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers(5.5, 10))
    // console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// throw new Error("Se ha producido un error");

// Capturar variso tipos de errores

try{
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers("5.5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }  
}

// Crear excepciones personalizados.

class SumZeroIntegerError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}


try{
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un erro personalizado ", error.message)
    error.printNumbers()
}

