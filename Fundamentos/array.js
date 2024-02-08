const valores  = [8, 10, 5, 7]
console.log(valores[3]) //acessando o indice do array
valores[4] = 6 //adicionado um novo valor no array
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //adicionar varios itens ao array de uma só vez
console.log(valores)

console.log(valores.pop())   //remove e retorna o ultimo item do array
delete valores[0]            //deleta o elemento da posição indicada
console.log(valores)

console.log(typeof valores)     //retorna o tipo do dado (array é um objeto)