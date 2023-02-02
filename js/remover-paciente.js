var tbody = document.querySelector('tbody');

tbody.addEventListener('dblclick', function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    var nomePaciente = paiDoAlvo.querySelector('.info-nome').textContent;
    var resposta = window.confirm(`Deseja deletar o(a) paciente ${nomePaciente}?`)
    if(resposta) paiDoAlvo.remove();
});
