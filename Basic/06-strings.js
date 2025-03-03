// Strings

// Concatenación 

let myName = "Brais"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])

// Longitud
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Mouredev"))
console.log(greeting.includes("Brais"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Mouredev"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Brais", "MoureDev"))


// Template literals (plantillas literales)

let message = `Hola, este es mi
curso de JavaScript`

console.log(message)

let email = "braismoure@mouredev.com"

console.log(`Hola, ${myName}! y tu email es ${email}.`)


