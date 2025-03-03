// Clases

class Person {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person ("Brais", 37, "MoureDev")
let person2 = new Person ("Brais2", 34, "MoureDev2")
console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson()
console.log(person3)

let person4 = new DefaultPerson()
console.log(person4)

let person5 = new DefaultPerson("Brais", 37)
console.log(person5)

// Acceso a propiedades

console.log(person3.name)
console.log(person3.name)
console.log(person3.age)

// Modificación de propiedad

person3.alias = "Mouredev"
console.log(person3.name)


// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina")
    }

}

let person6 = new PersonWithMethod("Brais", 37, "MoureDev")
person6.walk()

// Propiedades privadas

class PrivatePerson {

    // Poner variables privadas
    #bank 

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank 
    }

}

let person7 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN1234567890")

// No podemos acceder
// console.log(person7.bank)
// person7.bank = "new IBAN1234567890"  // bank no es #bank

console.log(person7)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name() {
        return this.#name
    }

    set bank(newBank) {
        this.#bank = newBank
    }

}

let person8 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN1234567890")
console.log(person8)
console.log(person8.name)

// Herencia

class Animal {

    constructor(name){
        this.name = name
    }

    sound() {
        console.log("Emite un sonido genérico")
    }

}


class Dog extends Animal {

    sound() {
        console.log("¡¡¡Guau!!!")
    }

    run() {
        console.log("El perro corre")
    }
}

class Fish extends Animal {

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}



let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()


// Métodos Estáticos

class MathOperations {
    static sum(a, b) {
        return a + b
    }

}

//let myClass = new MathOperations()
//console.log(myClass.sum(5, 10))

// Al ser estático no hace falta crear una nueva clase se puede instanciar llamando a la clase principal
// Sirve para crear un empaquetamiento (algo que tenga la capacidad de sumar)

console.log(MathOperations.sum(5, 10))



