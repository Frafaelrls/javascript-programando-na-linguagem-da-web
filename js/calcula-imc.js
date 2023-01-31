//-----------------------------------
// Manipulação da coluna IMC da tabela
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
        var imc = calculaImc(peso, altura);        
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    // Método toFixed define no número de casas decimais exibidas. É aplicado o arredondamento dos valores
    return imc.toFixed(2);
}