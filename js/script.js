function validaFormulario(){
    if(document.getElementById("nome").value != "" &&
       document.getElementById("email").value != "" &&
       document.getElementById("telefone").value != "" ){
        alert("Prontinho! Você receberá as novidades por email.");
    } else {
        alert("Por favor, preencha os campos nome, email e telefone."); // Adicionei 'telefone' aqui, pois é um campo obrigatório na sua validação.
    }
}

// Adiciona um "ouvinte de evento" ao botão
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);