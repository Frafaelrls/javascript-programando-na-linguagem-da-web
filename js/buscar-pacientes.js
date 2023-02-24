var buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', function () {

    // Criando uma nova requisição 
    var xhr = new XMLHttpRequest();

    // A função 'open' abre a requisição com um determinaod endereço. Informamos o tipo, neste caso GET
    // O segundo parâmetro será o endereço
    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json');

    // Adicionando um exento a requisição, neste caso informando que ao receber a requisição
    // Deve executar a função
    xhr.addEventListener('load', function () {
        var resposta = xhr.responseText;

        // Convertendo JSON para um objeto javaScript, nste caso para um array
        var pacientes = JSON.parse(resposta);

        // Adicionando os pacientes na tabela
        pacientes.forEach(function (paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    // Enviando a requisição
    xhr.send();

});