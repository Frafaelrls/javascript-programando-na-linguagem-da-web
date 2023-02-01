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

    // ciar a tr e td do paciente
    var pacienteTr = montarTr(paciente);

    // Validando o paciente e coletando erros
    erros = validaPaciente(paciente);

    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro"); 
        mensagemErro.textContent = erros;
        return;
    }

    // Adicionando a linha(tr) a tabela(tbody)
    // Uma linha é filha de uma tabela, será adicionado usando a função appendChild() 
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemPacienteDoFormulario(form){
    
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

function montarTr(paciente){

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

function montaTd(dado, classe){
    // Criando as células(td) para a tabela
    var td = document.createElement('td');
    // Adicionando os dados as células(td)
    td.textContent = dado;
    // Adicionando a classe css
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente){
    erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push('Pesso é inválido!');
    }

    if(!validaAltura(paciente.peso)){
        erros.push('Altura é inválida!');
    }

    return erros;
}