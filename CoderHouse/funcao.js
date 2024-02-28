// const numero = parseInt(prompt("Ingrese un número:"));
// //Condicional if para determinar si el usuario ingresó un número par o impar.

// const idade = 25
// const novaIdade = idade.toString()


// if (numero >= 10 && numero <= 50){
//     alert('Esse numero está entre 10 e 50')
// } else {
//     console.log('Esse numero não está entre 10 e 50')
// }

// Criando uma função
//Passando 2 parametros dentro de Soma()
// function Soma(nota1, nota2) {
//     const resultado = nota1 + nota2

//     console.log(resultado)
// }

// Soma(10, 20)
// Soma(20, 50) //Reutilizando parametro e fazendo a soma.

function ParouImpar() {
    const usuario = parseInt(prompt('Digite um número'))//Pegando numero

    if (usuario % 2 == 0) {
        alert(`${usuario} é par`)
    }else{
        alert(`${usuario} é impar`)
    }
}

ParouImpar()