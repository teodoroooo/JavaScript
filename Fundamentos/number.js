const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.92
const avaliacao2 = 6.75

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)

// Alguns cuidados com Number

console.log(7 / 0)// Infinito

console.log('10' / 2)// Com string

console.log(0.1 + 0.7)// Imprecisão

// console.log(10.toString())
console.log(10.3452.toFixed(2))//  Arredondamento para duas casas decimais

