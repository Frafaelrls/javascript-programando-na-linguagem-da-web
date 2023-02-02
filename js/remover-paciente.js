var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        var nome = paciente.querySelector('.info-nome').textContent;
        var resposta = window.confirm(`Deseja deletar o paciente ${nome}?`);
        if(resposta) paciente.remove();
    })
})