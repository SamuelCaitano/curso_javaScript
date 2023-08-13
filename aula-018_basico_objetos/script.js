function criarPessoa(nome, sobrenome, idade){
  return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('Samuel', 'Caitano', 23)

console.log(pessoa1.nome)