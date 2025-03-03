// Map  

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.es"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)


// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("age"))
console.log(myMap.has("surname"))

// delete

myMap.delete("email")
console.log(myMap)

// keys, values, entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())


// size

console.log(myMap.size)



// clear

myMap.clear()
console.log(myMap)

