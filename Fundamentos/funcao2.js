// Armazenando uma função em uma variavel

const imprimirSoma =  function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const  subtracao = (a, b) => a - b
console.log(subtracao(5, 3))  // Erro! A função arrow não tem um retorno explícito
console.log(subtracao(5, 3) === -2)     // Correto! O resultado é true

const imprimir2 = a => console.log(a)
imprimir2('Olá') // Function Arrow reduzido