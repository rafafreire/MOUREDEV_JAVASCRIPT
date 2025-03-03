// Tipos de datos

// Primitivos (solo se representa 1 valor)

// Cadena de texto (String)
let name = "Rafael Freire"
let alias = 'Mouredev'
let email = `braismoure@mouredev.com`

// Números (Numbers)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (Boolean)
let isTeacher = true
let isStudent = false

// Undefined --> No esta definido el valor
let undefinedValue
console.log(undefinedValue)

// Null --> Ausencia de valor
let nullValue = null
console.log(nullValue)

// Symbol
let mySymbol = Symbol("mysymbol")


// BigInt
let myBigInt = BigInt(42134123543562563456234523452345234523623463245345324523)
let myBigInt2 = 421341235435625634562345234523452345236234632453453245231241234123413241233413242n

// Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isTeacher)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)