// Operadores
// Operadores aritmeticos
let valuea = 5
let valueb = 10
console.log(5 + 10)
console.log(valuea + valueb) // suma
console.log(valuea - valueb) //resta
console.log(valuea * valueb) // multiplicacion
console.log(valuea / valueb) // division

console.log(valuea % valueb) //modulo division
console.log(valuea ** valueb) // Exponente

valuea ++ // incremento
console.log(valuea)

valueb-- // Disminucion
console.log(valueb)

// Operadores de asignacion

let myVariable  = 2
console.log(myVariable)
myVariable += 2
console.log('Myvariable+= ' + myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion

console.log(valuea > valueb)
console.log(valuea < valueb)
console.log(10 <= 23)
console.log(1 >= 11)
console.log(1 == 1)
console.log(13 == 1)

console.log(valuea)
console.log(valuea === 6) // igualdad por valor
console.log(valuea === "6") // igualdad por valor
console.log(valuea === valuea) // por identidad y tipo de valor

console.log(valuea != 5) // Desigualdad
console.log(valuea !== "6") // Desigualdad

console.log(0 === false)
console.log(1 === false)
console.log(0 == "")
console.log(0 == ' ')
console.log(0 == 'asfasf')
console.log(undefined === null)

// Truthy values (valores verdaderos)
// todos los numeros positivos y negativos menos el cero
// todas las cadenas de texto menos las vacias
// el boolean true

// False values  (valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// cadenas de texto vacias

// Operadores logicos - comparar el valor booleano

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)

// or ||
console.log(11 > 10 && 1 > 20 || 4 < 10)

// not  (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(11 > 10 || 1 > 20))

//Operadores ternarios
const isRaining = true
isRaining ? console.log("Is Raining!") : console.log("No esta lloviendo")  
console.log(5%2)