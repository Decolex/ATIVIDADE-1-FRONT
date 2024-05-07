function validarForm() {
    // Variaveis de inserção
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var resultado = document.getElementById("resultado");

    // Expressões Regulares

    var regexNome = /^[^0-9]{1,100}$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexTelefone = /^[0-9]{2}\s[0-9]{4,5}-[0-9]{4}$/;

    var erros = [];

    // Validar NOME
    if (!regexNome.test(nome)) {
        erros.push("Nome inválido. Não pode conter números.");
    }

    // Validar email

    if (!regexEmail.test(email)) {
        erros.push("Email inválido.");
    }

    //Validar telefone

    if (!regexTelefone.test(telefone)) {
        erros.push("Telefone inválido. Utilize o formato XX XXXX-XXXX ou XX XXXXX-XXXX.");
    }

    // Validar outros erros

    if (erros.length === 0) {
        resultado.innerHTML = "Formulário válido!";
    } else {
        resultado.innerHTML = "Erros encontrados:<br>" + erros.join("<br>");
    }
}
