let valor //não inicializada
console.log(valor)//undefined

valor = null //Alocando espaco em memoria mas nao atribuindo nenhum valor
console.log(valor)
// console.log(valor.toString()) //Conversao para binario 010101...
console.log(typeof value) //object, pois no js o null é considerado um objeto vazio

const produto = {}
console.log(produto.preco) //undefined
console.log(produto.descricao) //undefined
console.log(produto) //{}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined

console.log(!!produto.preco) //Retorna true se tem preço ou false se não tiver preço
console.log(produto)

produto.preco = null // Sem preço
console.log(!!'Preco' + produto.preco) // Retorna string com Preco e o valor de produto.preco (null), transforma null em string
console.log(!!produto.preco)
console.log(produto)


/*
 * Tipos de dados primitivos:
 * - String  
 * - Number (Int, Float) 
 * - Boolean (true ou false)
 * - Null        
 * - Undefined    Não declarado/Atribuido
 */
let nome = 'Cristiano'
let sexo = 'Masculino'
let idade = 32
let peso = 85.7
let altura = 1.80
let viagem = true
let semDefinicao

console.log(`Nome: ${nome}`)
console.log(`Sexo: ${sexo}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso} kg`)
console.log(`Altura: ${altura} m`)
console.log(`Viagem?: ${viagem}`)
console.log(`Eu não sei o que é isso aqui... ${semDefinicao}`)