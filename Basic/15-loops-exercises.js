// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(`i: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma = suma + i
}
console.log(`Suma: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50 ; i++) {
    if (i % 2 == 0){
        console.log(i)
    }
} 

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

myArray = ["Familia", "Rosa", "Rafa", "Mael", "Elma"]

for (let valor of myArray) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Supercalifragilisticoespialidoso"
let contar = 0

for (let valor of cadena) {
    contar ++;
    console.log (`${contar} --> ${valor}`)
}
console.log (`La palabra ${cadena} tiene ${contar} letras.`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

myArray2 = [5, 78, 97, 90, 53, 23, 45, 76]
let producto = 1

for (let valor of myArray2) {
    producto = producto * valor
    console.log(`Producto * ${valor} --> ${producto}`)
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiplicacion = 0
let multiplo = 5

for (let i = 1; i <= 10; i++) {
    multiplicacion = multiplo * i
    console.log(`${i} * ${multiplo} = ${multiplicacion}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena_texto = "Quiero que lo pongas al reves"
let n_letras = cadena_texto.length
let cadena_reves = new Array()

for (let i = 0; i <= n_letras; i++) {
    console.log(cadena_texto[i])
    cadena_reves[n_letras-i] = cadena_texto[i]
}
console.log(cadena_reves)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let numeros = 10
let secuencia = [0, 1]

for (let i = 2; i < numeros; i ++) {
    secuencia[i] = secuencia[i-1] + secuencia[i-2]
}
console.log(secuencia)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10



