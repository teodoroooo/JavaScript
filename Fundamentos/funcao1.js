//Funçao sem retorno
//A função abaixo é uma função que não tem um valor de retorno, ou seja, ela executa alguma ação e termina. Não espera

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Funcao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3)) 