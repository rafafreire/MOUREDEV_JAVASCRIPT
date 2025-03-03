// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://mouredev.dev")

console.log(mySet)

mySet.delete("https://mouredev.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

//size

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array a un set

let mySet4 = new Set(myArray)
console.log(mySet4)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")

console.log(mySet)



