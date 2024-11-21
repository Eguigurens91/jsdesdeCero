// string (cadena de texto)
// datos primitivos
let myname = "Mariel Eguiguren"
let alias  = 'Eguiguren91'
let email  = `eguigurensmariell@gmail.com`
console.log(myname)
console.log(alias)
console.log(email)

// números (number)
let age = 33
let height = 1.56 
console.log(age)
console.log(height)

//Booleanos (bool)
let isStudent = false
let isTeacher = true
console.log(isStudent)
console.log(isTeacher)

// Undefined
let undefinedndefinedValue
console.log(undefinedndefinedValue)

// Null
let nullValue = null 
console.log(nullValue)

// symbol, ecmascript 6 representa valores unicos que se puede usar como identificadores
// de propiedades de futuros objetos!, evita cualisiones.
let mySymbol = Symbol("!Eguigurens123@")
console.log(mySymbol)

// BigInt , representa un numero extremadamente grande(fuera del rango de los numbers)
let bigInt = BigInt(134252356547867543256768743)
let bigInt2 = 2362365474574745745745745745n
console.log(bigInt)

// Mostrar tipo de datos
let bigInt4 = BigInt(1342523565478675432567)
console.log(typeof bigInt4)
console.log(typeof mySymbol)
