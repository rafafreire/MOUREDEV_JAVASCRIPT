// Objects

// Colección de propiedades (parecido a mapas clave y valor asociado)
// Estructura en javaScript
// Características de este tipo de datos

// Sintaxis

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades


// Notación por punto
console.log(person.name)

// Notación por corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "40"
console.log(person.age)
console.log(typeof person.age)


// Eliminación de propiedades
console.log(person)
delete person.age
console.log(person)

person.email = "braismoure@mouredev.com"
console.log(person)

person["age"] = 37
console.log(person)



let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function(){
       console.log("La persona camina.") 
    }
}

person2.walk()


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
console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()


// Igualdad de objetos

console.log(person)

let person4 = {
    name: 'Brais Moure',
    alias: 'MoureDev',
    email: 'braismoure@mouredev.com',
    age: 37
  }

console.log(person == person4) // Referencia en memoria
console.log(person === person4) // Referencia en memoria

console.log(person.name === person4.name)

// Iteracion

for (let key in person4){
    console.log(key + ": " + person4[key])
}


// Buenas prácticas

person3.job.work()


// Funciones como objetos

// Constructor
function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)  // Debería ser una clase

console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)

