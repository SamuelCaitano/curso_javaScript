/*
  Samuel Caitano tem XX anos, pesa XX kg, tem 1.71 de altura e o seu IMC é de XX
*/

const firstName = 'Samuel'
const surname = 'Caitano'
let nasc = 1999
const peso = 65
const altura = 1.71
const imc = peso / ( altura * altura)

let ano = new Date().getFullYear()

console.log(firstName, surname, 'tem', ano - nasc, 'anos,')
console.log(`pesa ${peso} kg, tem altura de ${altura} e seu IMC é de ${imc}`)