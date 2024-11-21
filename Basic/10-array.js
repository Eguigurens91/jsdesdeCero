// Estructuras de datos
// declaracion arrays
let myArray = [] //se utiliza mas este tipo
let myArray2 = new Array() // esta reserva espacios en memoria y debe ir llenan espacio por espacio

console.log(myArray)
console.log(myArray2)
//inicializacion
myArray = [1]
myArray2 = new Array(2)
console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)
console.log(myArray)
console.log(myArray2)


myArray = ["karla", "pedroto", "lucas"]
myArray2 = new Array("hola", "como", "estas", 65)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Karla"
myArray2[1] = "Mariel"
myArray2[2] = "Ale"
console.log(myArray2)

myArray = []
myArray[2] = "Erik"
console.log(myArray)

// Metodos comunes
myArray = []
//push 
myArray.push("Carlos")
myArray.push("Cristiano")
myArray.push("Chaning")
myArray.push(34)
console.log(myArray)

// pop, elimina el ultimo elemento del array y lo devuelve
console.log(myArray.pop) // elimina el ultimo y lo devuelve
myArray.pop()
console.log(myArray)

// shift y unshift
myArray.shift() 
console.log(myArray)

myArray.unshift("Maria", "Joaquin") // agrega uno o mas elemento al inicio del array 
console.log(myArray)

// lenght, longitud del array
console.log(myArray.length)
//clear
myArray = [] // limpia
// myArray.length = 0 // alternativa, limpia igual pero no se debe usar

//slice
myArray.push("Karla", "Maria",33,23,4)
let newarray = myArray.slice("1,2")
console.log(myArray)
console.log(newarray)

//splice 
myArray.splice(1,3)
console.log(myArray)

myArray = ["hola","como","estas",23,2]
myArray.splice(1,2,"Nuevo elemento!") // agrega un nuevo valor , eliminando la posicion indicada
console.log(myArray)


