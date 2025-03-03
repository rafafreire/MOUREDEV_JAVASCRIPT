// Descructuración y propagación.

// Destructuración
// Sintaxis que nos ayuda a extraer valores de arrays y objetos y asignarlos a variables


myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "Mouredev"
}


myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos en arrays

let [myValue10, , , myValue13, ] = myArray
console.log(myValue10)
console.log(myValue13)


// Sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintasis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2)  // No existe
console.log(age2)   // No existe
console.log(alias2) // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

let {  alias: alias4, name: name4, age: age4} = person
console.log(name4)
console.log(age4)
console.log(alias4)


let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function(){
       console.log(`La persona de ${this.age} camina.`) 
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function(){
            console.log(`La ${this.name} con experiencia ${this.exp} persona trabaja. `) 
         }
    }
}

let { name: name5, job:{name: jobName} } = person3

console.log(name5)
console.log(jobName)


// Propagación (...)
// Expandir los elementos de un array o objeto a otros arrays o otros objetos

// Sintaxis arrays

let myArray2 = [...myArray] // Copia
let myArray3 = [...myArray, 5, 6]


console.log(myArray2)
console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sintaxis objetos

let person4 = { ...person3, email: "braismoure@mouredev.com"}
console.log(person4)

// Copia de objetos
let person5 = {... person}
console.log(person5)

