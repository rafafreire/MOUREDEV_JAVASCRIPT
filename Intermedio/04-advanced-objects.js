// Clase de objetos avanzados

// - Prototipos y Herencia

// Prototipos --> 

let person = {
    name: "Brais",
    age: 43,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function() {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()
