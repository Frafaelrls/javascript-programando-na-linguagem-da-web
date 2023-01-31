//-----------------------------------
// Manipulação da coluna IMC da tabela - Usado até o final da aula 4.6
//-----------------------------------

// Coletando titulo através da classe CSS 
var titulo = document.querySelector(".titulo");
// Modificando o texto presente na tag H1
titulo.textContent = "Aparecida Nutricionista";
// Coletando os pacientes através da classe CSS
var pacientes = document.querySelectorAll(".paciente");
// A propriedade length retorna o tamanho de um array
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    // Acessando uma célula
    var tdPeso = paciente.querySelector(".info-peso");
    // Acessando o conteúdo da célula
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        // A propriedade classList retorna uma lista com as classes
        // O com a função add podemos adicionar novas classes 
        paciente.classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        // Método toFixed define no número de casas decimais exibidas. É aplicado o arredondamento dos valores
        tdImc.textContent = imc.toFixed(2);
    }
}

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

    // Coletando os valores dos inputs através do atributo name do HTML
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

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

    // Adicionando as células(td) a linha(tr)
    // Uma célula é filha de uma linha, será adicionado usando a função appendChild()
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // Adicionando a linha(tr) a tabela(tbody)
    // Uma linha é filha de uma tabela, será adicionado usando a função appendChild() 
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

});
