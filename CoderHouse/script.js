let number = 2
let number2 = 6
let idade = 25
let salario = 1000.98
// let pode ser alterado durante o código.

const sobrenome = 'Silva'
// const não poder ser alterado.

//Operadores aritmeticos
console.log(number + number2) //concatenacao de valores
console.log(idade - number) //subtração
console.log(idade / number) //divisão
console.log(idade % number) //resto da divisão
console.log(Math.pow(number, number2)) //potência

//Atribuição
number += number2 //adiciona o valor de number a number2 e atualiza o valor de number
number -= number2 //subtrai o valor de number a number2 e atualiza o valor de number
number *= number2 //multiplica o valor de number por number2 e atualiza o valor de number
number /= number2 //divide o valor de number por number2 e atualiza o valor de number
number %= number2 //retorna o resto da divisão do número pelo número2 e atualiza o valor de number

console.log('Novo Saldo: ', number)

//Comparação
if (idade > 18){
    console.log('Maior de Idade')
} else {
    console.log('Menor de Idade')
}

/*
Ou exclusivo ou (||), retorna verdadeiro se algum dos operandos for verdadeiro.
Eclusivo e (&&), retorna verdadeiro apenas se ambos os operandos forem verdadeiros.
*/
if (idade >= 18 || salario > 700.00){
    console.log('Pode beber alcool')
} else{
    console.log('Não pode beber alcool')
}

if (idade >= 18 && salario > 300.00){
    console.log('Pode dirigir')
}else{
    console.log('Não pode dirigir')
}

let contador = 0
while (contador < 5){
    console.log(`Contagem: ${contador}`)
    contador++
}

for (let i = 0; i <= 5; i++){
    console.log(`Valor de i: ${i}`)
}   

const numeros = [5, 8, 2]
numeros.forEach(function(e){
    console.log(`${e}`)
})
let soma = 0
numeros.forEach(function(e){
    soma += e
})
console.log(`Soma dos valores: ${soma}`)

//Arrow Function
numeros.forEach((e) => console.log(e)) 



let nome22 = 'Gabriel'
let sobrenome22 = 'Teodoro'
const anoatual = 2024
const idadee = 24

console.log(`${nome22} ${sobrenome22}`)
console.log(anoatual - idadee)

12

let num1 = prompt('Digite um numero:')
let num2 = prompt('Digite outro número:')

console.log(parseInt(num1) + parseInt(num2))
alert('A soma dos dois numeros é: ' + somar)