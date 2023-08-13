// funcao com parametros e retorno
function soma (num1, num2) {
  return num1 + num2;
}

const sum = soma(5, 12);
console.log(sum);

function saudacao(nome) {
  console.log(`Bom dia ${nome}`);
}

// chamando a funcao multiplas vezes
saudacao('Samuel');
saudacao('Matheus');
saudacao('João');

// arrow function
const nota = (n) => n * 2

console.log(nota(5))