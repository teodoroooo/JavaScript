console.log(typeof Object) // Função

class Produto  {}
console.log(typeof Produto) // Função
console.log(Produto.__proto__ === Function.prototype) // True, pois herda de função

const p1 = new Produto()
console.log(p1)

// __proto__ é um atributo (propriedade), e não uma propriedade de proto
Object.setPrototypeOf(p1, {
    preco: 29.90
})

console.log(p1.preco) // Acessando o valor da propriedade preço definida no objeto p1

const carro = {
    marca: 'Honda',
    modelo: 'Civic'
}

Object.setPrototypeOf(carro, produto) // Define que o prototype do carro será o produto

console.log(carro.__proto__ == produto) // Verificar se o prototype do carro é o mesmo que foi passado para setPrototypeOf
console.log(carro.__proto__ == produto) // Verificar se o prototype do carro é o mesmo que foi passado para setPrototypeOf
console.log(carro.__proto__ == produto) // Verificar se o prototype do carro aponta para a função produto

console.log(carro.tipoDeProduto()) // Chamada ao método tipoDeProduto(), que foi herdado pelo carro a partir do prod
console.log(carro.tipoDeProduto()) // Chama o método tipoDeProduto(), pois ele foi implementado na função produto e está