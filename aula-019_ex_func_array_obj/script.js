function criarPessoa(nome, sobrenome, idade, peso, altura) {

  const form = document.querySelector('#form');
  const resultado = document.querySelector('.resultado');

  const pessoa = [];
  function recebeEventoForm(e) {
    e.preventDefault();
    const nome = form.querySelector('#nome');
    const sobrenome = form.querySelector('#sobrenome');
    const idade = form.querySelector('#idade');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    pessoa.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoa)

    resultado.innerHTML += `<tr class="bg-white border-b">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      ${nome.value}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      ${sobrenome.value}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      ${idade.value}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      ${peso.value}
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      ${altura.value}
    </td>
  </tr>`

    form.querySelector('#nome').value = '';
    form.querySelector('#sobrenome').value = '';
    form.querySelector('#idade').value = '';
    form.querySelector('#peso').value = '';
    form.querySelector('#altura').value = '';
  }

  form.addEventListener('submit', recebeEventoForm)
}
criarPessoa();