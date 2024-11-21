// if, else is , else

// if else
let age = 89
if (age== 45){
    console.log(`Yes , The age es:  ${age}`)
} else if (age == 33){
    console.log(`Yes, The age es:  ${age}`)
} else {
    console.log(`Nop, The age es:  ${age}`)
}

// Operador ternario
const agemessage = age == 33 ? `Yes, The age es: ${age}` : `The age is not 33 is => ${age}` 
 console.log(agemessage)

// switch

let day = 23
let dayname = ""

//using if

if (day == 0){
    console.log("lunes")
} else if (day == 1) {
    console.log("Martes")
}

// using switch

switch (day){
    case 0 : 
        dayname = "Monday"
        break
    case 1 : 
        dayname = "Tuesday"
        break
    case 2 : 
        dayname = "Wednesday"
        break
    case 3 : 
        dayname = "Thursday"
        break
    case 4 : 
        dayname = "Friday"
        break
    case 5 : 
        dayname = "Saturday"
        break
    case 6 :
         dayname = "Sunday"
         break
    default:
        dayname="Is not a day of the week!"
}
console.log(dayname)