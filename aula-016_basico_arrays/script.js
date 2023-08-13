let alunos = ['Samuel', 'Maria', 'João'];
let nota = [10, 5.9, 6] 
let situacao

alunos.unshift('Matheus') // add no inicio do array
nota.unshift(4.5) // add no inicio do array

alunos[alunos.length] = 'Guilherme' // add no fim do array
nota.push(4) // add no fim do array

for(i = 0; i < alunos.length; i++ ){

  if(nota[i] < 6 )
    situacao = 'reprovado';
  else
    situacao = 'aprovado'

  document.body.innerHTML += `<li>${alunos[i]} com nota ${nota[i]} foi ${situacao}</li><br>`
}

console.log(alunos instanceof Array)

console.log(alunos.slice(0, 3))
console.log(alunos.slice(-3))

delete alunos[2] // deleta os dados mas mantem o index

console.log(alunos)

const removidoInicio = alunos.shift() // remove o primeiro do array
const removidoFinal = alunos.pop() // remove o ultimo index do array

console.log(removidoInicio)
console.log(removidoFinal)
console.log(alunos)