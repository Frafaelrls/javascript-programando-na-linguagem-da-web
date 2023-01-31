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
    console.log(paciente);

    // Criando uma linha para a tabela(tr) 
    var pacienteTr = document.createElement('tr');

    // Criando as células(td) para a tabela
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // Adicionando os dados as células(td)
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    // Adicionando as células(td) a linha(tr)
    // Uma célula é filha de uma linha, será adicionado usando a função appendChild()
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Adicionando a linha(tr) a tabela(tbody)
    // Uma linha é filha de uma tabela, será adicionado usando a função appendChild() 
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

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