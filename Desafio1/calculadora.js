let resultado = 0

function calculadora() {
    const num1 = parseInt(prompt('Informe o primeiro valor: '))
    const num2 = parseInt(prompt('Informe o segundo valor: '))
    const operador = prompt('Informe o tipo: * + - /')

    if  (operador === '*') {
        return resultado = num1 * num2
    } else if (operador === '+'){
        return resultado = num1 + num2
    } else if  (operador === '-') {
        return resultado = num1 - num2
    } else if (operador === '/' && num2 !== 0) {
        return resultado = num1 / num2
    } else {
        alert("Erro! Operação inválida.")
    }
}

calculadora()

console.log(resultado)



function Multiplos() {
    const num1 = parseFloat(prompt("Primeiro número:"));
    const num2 = parseFloat(prompt("Segundo número:"));
  
    if (num1 % num2 === 0 || num2 % num1 === 0) {
      alert(`${num1} and ${num2} are multiples.`);
    } else {
      alert(`${num1} and ${num2} are not multiples.`);
    }
  }
  
  // Teste
  Multiplos();



function calculateICMS() {
    const baseCalculo = parseFloat(prompt("Base da calculação:"));
    const aliquota = parseFloat(prompt("Digite o ICMS  (em percentual): "));
    const valorICMS = parseFloat(prompt("Digite o ICMS (em valor):"));
  
    const icmsPago = baseCalculo * aliquota + valorICMS;
  
    alert(`Resultado: ${icmsPago}`);
  }
  
  // Teste
  calculateICMS();