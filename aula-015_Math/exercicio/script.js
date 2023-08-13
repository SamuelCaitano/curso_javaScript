let num = Number(prompt('informe um número:'))

document.body.innerHTML += `Seu número é ${num}<br>`
document.body.innerHTML += `Raiz Quadrada de ${num}: ${Math.sqrt(num)}<br>`
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`
document.body.innerHTML += `á NaN: ${Number.isNaN(num)}<br>`
document.body.innerHTML += `arredondado para baixo: ${Math.floor(num)}<br>`
document.body.innerHTML += `arredondado para cima: ${Math.ceil(num)}<br>`
document.body.innerHTML += `com duas casas decimais: ${num.toFixed(2)}<br>`