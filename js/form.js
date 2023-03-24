//------------------------------------------------------
// Manipulação do formulário, adicionando novos pacientes
//------------------------------------------------------

var botaoAdicionar = document.querySelector('#adicionar-paciente');

// Adicionando a escuta de eventos (addEventListener) 
// A função utilizada é uma função anónima, não possui nome
botaoAdicionar.addEventListener('click', function (event) {
    // event recebe o evento esperado, neste caso recebe o evento 'click'
    // função que impede que o comportamento padrão de eventos ocorra
    event.preventDefault();

    // Selecionando o formulário
    var form = document.querySelector('#form-adiciona');

    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);


    // Validando o paciente e coletando erros
    erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //montarTrComIndice(paciente);

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErros = document.querySelector('#mensagens-erro');
    // A propriedade innerHTML permite a manipulação do conteúdo HTML interno de um elemento
    mensagensErros.innerHTML = '';

});

// Função apresentada na aula

function adicionaPacienteNaTabela(paciente) {
    // ciar a tr e td do paciente
    var pacienteTr = montarTr(paciente);

    // Adicionando a linha(tr) a tabela(tbody)
    // Uma linha é filha de uma tabela, será adicionado usando a função appendChild() 
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    // retorna um objeto
    return paciente;

}

function montarTr(paciente) {

    // Criando uma linha para a tabela(tr) 
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    // Adicionando as células(td) a linha(tr)
    // Uma célula é filha de uma linha, será adicionado usando a função appendChild()
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// Função não apresentada na aula 

function montarTrComIndice(paciente) {
    let tabela = document.querySelector('#tabela-pacientes');

    // Adiciona uma nova linha no índice 0
    let linha = tabela.insertRow(0);
    linha.classList.add('paciente');

    criarCelula(linha, 0, 'info-nome', paciente.nome);
    criarCelula(linha, 1, 'info-peso', paciente.peso);
    criarCelula(linha, 2, 'info-altura', paciente.altura);
    criarCelula(linha, 3, 'info-gordura', paciente.gordura);
    criarCelula(linha, 4, 'info-imc', paciente.imc);
}

function criarCelula(linha, indice, classe, valor) {
    // Criar a célula da linha
    var celula = linha.insertCell(indice);
    // Adiciona a classe a célula
    celula.classList.add(classe);
    // Adiciona valor a célula
    celula.innerHTML = valor;
}

function montaTd(dado, classe) {
    // Criando as células(td) para a tabela
    var td = document.createElement('td');
    // Adicionando os dados as células(td)
    td.textContent = dado;
    // Adicionando a classe css
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    erros = [];

    if (paciente.nome.length == 0) {
        erros.push('O nome não pode ser em branco');
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido!');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!');
    }

    if (paciente.gordura.length == 0) {
        erros.push('A gordura não pode ser em branco');
    }

    if (paciente.peso.length == 0) {
        erros.push('O peso não pode ser em branco');
    }

    if (paciente.altura.length == 0) {
        erros.push('A altura não pode ser em branco');
    }


    return erros;
}