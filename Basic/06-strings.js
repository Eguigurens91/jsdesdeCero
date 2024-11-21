// concatenacion
let myName = "Karla Vallecillo"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

//longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[22])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Karla"))
console.log(greeting.indexOf("Carlos")) //dara -1 porque no existe
console.log(greeting.includes("Vallecillo"))
console.log(greeting.slice(0,13))
console.log(greeting.replace("Vallecillo", "Eguigurens"))

// Templates literals 
let message = `Hi
 this is my 
 js class
la la la la `
let email = "asfa@asfa.com"
console.log(message)
console.log(`Hola, ${myName}! tu email es ${email}`) // interpolar datos

