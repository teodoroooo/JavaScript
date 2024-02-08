// Dados #1
let nome = 'Skate'
var quantidade = 10;
var preco = 50;
var juros = 1.5;
var precofinal = preco + juros; 

console.log(nome)
console.log(quantidade)
console.log(preco)
console.log(juros)
console.log(precofinal)
//operador de atribuição += -= *= /= %= **= <<


nome = 'Ola mundo'
console.log(nome)

// Dados #2
let Preco = 19.90;
let desconto = 0.4;
let precoFinal = preco * (1 - desconto)

console.log(precoFinal)

let produto = 'sabao'
let qtd = 4
let categoria = 'limpeza'
console.log(`Produto: ${produto} \nQuantidade: ${qtd}\nCategoria:${categoria}`);
// template string \n quebra de linha \t tabulação

// Dados #3 Tipos de Dados =>
// 

let idade = 32;
console.log(typeof 31)

let salario = 4560.50;
console.log(typeof salario)

let chuva = false
console.log(typeof chuva)

// conversão de tipos de dado com parseInt() e parseFloat()
let numString = "123"
console.log(parseInt(numString)) //retorna um valor inteiro

let peso = "80kg";
console.log(parseFloat(peso)); // retorna um valor float

// operadores aritméticos + - * / % ++ --
let a = 5
let b = 7
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

a++ //posfixo
console.log(a)

--a //prefixo
console.log(a)

// operador de incremento (++) e decremento ()
let c = 1
console.log(c++)
console.log(c)

c = 1
console.log(++c)
console.log(c)

// verificar se é possível fazer uma conta matemática entre os valores
let x = 5
let y = "10"
console.log(x + y) // NaN porque não pode somar um número com uma string
// usar o Typeof para saber qual o tipo de dado que estamos trabalhando
console.log(typeof x + typeof y) // number string

if (typeof y === 'string') {
    console.log('Eu sou uma string')
} else {
    console.log('Eu sou um número')
}

/*
Comparação:
< menor que
> maior que
<= menor ou igual a
>= maior ou igual a
== igualdade
!= desigualdade
=== identical (identidade)
!== not identical (não identidade) */

let r = 23 < 45 // true
let s = 9 > 7 // true
let t = 5 <= 8 // true
let u = 6 >= 6 // true
let v = 5 == 5 // true
let w = 7 != 7 // false
let X = 5 === 5 // true
let z = 7 !== 7 // false

/* Operações lógicas:
&& e (e)
|| ou (ou)
! negação */

let q = true && true // true
let R = true || false // true
let S = !true // false  

/* Switch Case:
O switch case é usado quando queremos executar várias opções diferentes, baseadas em um valor. Ele compara esse valor com cada caso do switch e executa aquele bloco de
O switch case é usado quando queremos executar várias opções em função do valor de uma variável, porém ele não funciona com valores numéricos como
O switch case é usado quando queremos executar várias opções diferentes, baseadas em uma condição*/

switch (x) {
    case 10:
        console.log("Você escolheu o valor 10")
        break;
    case 20:
        console.log("Você escolheu o valor 20")
        break;
    default:
        console.log("Nenhum dos valores acima foi selecionado");
}

// OU pode ser feito dessa forma também
if(x == 10){
    console.log("Você escolheu o valor 10")
}else if(x == 20){
    console.log("Você escolheu o valor 20")
}else{
    console.log("Nenhum dos valores acima foi selecionado")
}


// Dados #4
const A = 3;

console.log(A)
