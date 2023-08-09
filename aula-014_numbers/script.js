let num1 = 1;
let num2 = 2.3;
let num3 = '43'

console.log(num1.toString() + num2) // será realizado a concatenação
console.log(num1 + num2) // será realizado a soma

console.log(typeof num1.toString()) // convertendo number para string

let price = 10.9867554856

console.log(`$ ${price.toFixed(2)}`)

console.log(Number.isInteger(num1))

console.log(typeof Number.parseInt(num3))

let num4 = 0.9
let num5 = 0.1

let sum = Number(num4 + num5).toFixed(2)

console.log(sum) 