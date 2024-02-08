let isAtivo = false
//true ou false, é um tipo de dado que representa verdadeiro ou falso
console.log(isAtivo) //imprimi o valor da variável no console

isAtivo = true  
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log(!true)
console.log(!false)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(Infinity)


console.log('Os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(NaN))
console.log(!!(isAtivo = false))

console.log('pra finalizar..')
console.log(!!('' || null || 0 || ' '))// Verdadeiros
console.log(!!(!'' || null || 0 || ''))// Falsos

let nome = ''

console.log(nome || 'Desconhecido')
