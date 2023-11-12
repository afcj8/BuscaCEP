const cepInput = document.getElementById('cep');

function buscarCEP() {
    const cep = cepInput.value;
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => result.json())
    .then(json => json);
}

async function buscar() {
    const c = await buscarCEP();
    const result = document.getElementById('res')

    if (c !== '' ) {
        result.innerHTML = `CEP: ${c.cep} <br>
                     Rua: ${c.logradouro} <br>
                     Bairro: ${c.bairro} <br>
                     Cidade: ${c.localidade} <br>
                     Estado: ${c.uf}`;
        cepInput.value = ''
    }
    else {
        result.innerHTML = `CEP inválido!`
    }
}