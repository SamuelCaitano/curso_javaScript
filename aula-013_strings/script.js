let nome = 'Samuel Caitano' 

// pegando uma letra do index da frase
// usando a funcao chartAt para pegar uma letra
// *****  CHARAT *****
console.log(nome[8])
console.log(nome.charAt(8))

// pegando um palavra por um determindao inicio e termino do index com slice
// *****  SLICE *****
console.log(nome.slice(0, 6))
 
// Três formas de concatenação
console.log(nome.concat(' Da Silva'))
console.log(nome + ' em algum lugar')
console.log(`${nome} está aqui hoje!`)

console.log(nome.indexOf('Caitano'))
console.log(nome.toLowerCase().indexOf('caitano'))

// a funcao trim elimina caracteres de espaço
let frase = ' frase com espaço '
console.log(frase.length)
console.log(frase.trim().length) 

//
console.log(nome.match(/[a-z]/g))

//
console.log(nome.search(/C/))

// a funcao replace subistitue uma string por outra
console.log(nome.replace('Samuel', 'Ravel')) 

// SLICE E SUBTRING fazem a mesma coisa, mas com o slice digita menos
console.log(nome.slice(0, 6))
console.log(nome.substring(0, 8))

console.log(nome.split(' ', 2))

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())