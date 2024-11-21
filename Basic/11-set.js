// sets

//declaracion
let myset = new Set()
myset = new Set(["karla", "vallecillo", "egui91", 2, true,"karla@karla.com"])
console.log(myset)

// metodos comunes

// add y delete
myset.add("https://google.com")
console.log(myset)

myset.delete(2) // se le indica el valor de lo que queremos eliminar!
console.log(myset)

// has, comprobar si existe un elemento
console.log(myset.has("hah"))
console.log(myset.has("Karla"))

// size
console.log(myset.size)

// convertir un set a array
let myArray34 = Array.from(myset)
console.log(myArray34)

//de array a set
let mysettoarray = new Set(myset)
console.log(mysettoarray)

// no permite duplicados!
myset.add( "vallecillo")
myset.add( "vallecillo")
myset.add( "vallecillo")
myset.add( "vallecillo")
console.log(myset)