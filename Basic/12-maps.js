// Map

// declaracion
let myMap = new Map()
console.log(myMap)

// Inicializacion
// cada elemento de compone de clave y valor
myMap = new Map([
 ["name", "Karla"],
 ["lastname","Eguigurens"],
 ["age",33]
])
console.log(myMap)

// Metodos y propiedades

// Set
myMap.set("email","egui@egui.com")
console.log(myMap)
// si la clave existe, actualiza el valor
myMap.set("name","Mariel")
console.log(myMap)

//get, recuperar el valor
console.log(myMap.get("name"))


// has, saber si existe o no una clave
console.log(myMap.has("name"))
console.log(myMap.has("alias"))

// delete
console.log(myMap.delete("email"))

// keys, retorna un listado con las claves
console.log(myMap.keys())

// values, retorna un listado con los valores
console.log(myMap.values())

// size, retorna el vtam del mapa
console.log(myMap.size)

// Entries, retorna claves y valores
console.log(myMap.entries())