var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    //var erros = validaPaciente(paciente);

  /*  if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }*/

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        idade: form.idade.value,
        sexo: form.sexo.value,
        enfermaria: form.enfermaria.value,
        leito: form.leito.value,
        admH: form.admissaoHospitalar.value

    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.idade, "info-idade"));
    pacienteTr.appendChild(montaTd(paciente.sexo, "info-sexo"));
    pacienteTr.appendChild(montaTd(paciente.enfermaria, "info-enfermaria"));
    pacienteTr.appendChild(montaTd(paciente.leito, "info-leito"));
    pacienteTr.appendChild(montaTd(paciente.admH, "info-admH"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    if(classe == "info-nome") {
      td.colspan = "2";
    }

    return td;
}


/*
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
*/
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr.colspan);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    var numTr = document.querySelectorAll("tr")

    console.log(numTr.length + "  DSFSDFS ");

    for(let i = 0; i < numTr.length; i++){
        numTr[i].addEventListener('click', function(evt) {

          location.replace("pacientes.html");
        });
    }

}
