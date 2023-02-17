var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {

    console.log(this.value);
    var pacientes = document.querySelectorAll('.paciente');
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;

            // Expressão regular
            // O primeiro parâmetro será o que queremos que ela busque
            // No segundo parâmetro informamos como será feita a busca
            // 'i' = ignorar maiúsc./minúsc
            var expressao = new RegExp(this.value, 'i');
            
            // Usando a função test para testar o nome possui ou não uma parte do que foi digitado
            if (!expressao.test(nome)) {
                // Ao adicionar a classe utilizar apenas o nome da classe, não utilizar o acessor ponto (.)
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }

        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});