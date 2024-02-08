const prod1 = {}
prod1.nome = 'Calça Jeans'
prod1.preco = 49.99
prod1['Desconto'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 89.99
}

console.log(prod2)


const prod3 = {}
prod3.categoria = 'Informática'
prod3.fabricante = 'Sony'
prod3.preco = 599.99
prod3.nome = 'Ipad Air 4'

//Adicionando um novo Atributo
prod3.desconto = 0.20
delete prod3.desconto //Apagar o Atributo desconto
console.log(prod3)

//Criando um Objeto para fazer operações matemáticas
const obj1 = {
    name: 'Obj1',
    method() {
        console.log('Método da Obj1')
    }
}


