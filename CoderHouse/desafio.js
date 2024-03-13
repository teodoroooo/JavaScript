
const nomes = [];

let nome = prompt("Digite um nome: (fim para cancelar)");

while (nome !== "fim") {
    nomes.push(nome);
    nome = prompt("Digite um nome: (fim para cancelar)");
    console.log(nomes);    
}