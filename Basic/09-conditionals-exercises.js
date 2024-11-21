// if /else if/ ternario
// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Eguigurens"
if (myName=="Eguigurens") {
    console.log(`Welcome again ${myName}!`)
} else {
    console.log("You're not a user, bye!")
}

myName = "Karla" ? console.log(`Welcome ${myName}`) : "You're not a user!!"

//2. Imprime por consola un mensaje si el usuario y contrasenia coincide con sus valores
let userName = "Egui91"
let passUser = "123456"

if (userName == "Mariel" && passUser == "1244563") {
    console.log(`Welcome again ${userName}`)
} else {
    console.log("Wrong userName and Password, Try again")
}

// 3. Verifica si el numero es positivo o negativo O CERO, imprime mensaje
let number = -5
if (number > 0) {
    console.log("El numero es positivo")
} else if (number < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.
let ages = 16
if (ages >= 18) {
    console.log("Puedes votar.")
} else {
    console.log(`No puedes votar, tienes que esperar ${18 - ages} años mas`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
let category1 = age >= 18 ? "adulto" : "menor"
console.log(categoryq1)
// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes".
let monthq = 3
if (monthq >= 3 && monthq <= 5) {
    console.log("Primavera")
} else if (monthq >= 6 && monthq <= 8) {
    console.log("Verano")
} else if (monthq >= 9 && monthq <= 11) {
    console.log("Otoño")
} else {
    console.log("Invierno")
}
// 7. Muestra el nÃºmero de dias que tiene un mes dependiendo de la variable del ejercicio anterior.
if (month === 2) {
    console.log("28 o 29 dias")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 dias")
} else {
    console.log("31 dias")
}
// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let languages = "es"
switch (languages) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Lenguaje no soportado")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    default:
        console.log("Invierno")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7.
switch (month) {
    case 2:
        console.log("28 o 29 dias")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias")
        break
    default:
        console.log("31 dias")
}






























