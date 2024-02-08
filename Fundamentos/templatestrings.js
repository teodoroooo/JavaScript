const nome = 'david'
const concatenacao = 'Ola' + nome + '!'
//Concatenacao normal

//Template String
const  template = `Olá ${nome}!`  //interpolação de string
console.log(template)

//Expressoes
console.log(`1+1=${1+1}`)

const up = texto  => texto.toUpperCase()// Coloca em letra maiuscula
console.log(`Ei...${up(nome)}`) //Interpolação
