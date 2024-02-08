// PI * raio * raio
// area = 3.14159265358979

const PI = 3.14
const raio = 10
let area = PI * raio * raio
console.log(`A área do círculo é ${area}`)


let a = 7
let b = 94

let temp = a

a = b
b = temp

[a, b] = [b, a] 

console.log(a)
console.log(b)