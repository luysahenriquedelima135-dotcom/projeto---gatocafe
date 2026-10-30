const form = document.getElementById("formCadastro");

// FUNÇÕES //

//mostra ou limpa erro de um campo
function setErro(campo, mensagem) {
    const feedback = campo.parentElement.querySelector(".invalid-feedback");
    if (mensagem) {
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
        if (feedback && camppo.type !== "checkbox") feedback.textContent = mensagem;
        return false;
    }
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
}

const somenteNumeros = (texto) => texto.replace(/\D/g, "");

// MASCARAS //
Document.getElementById("cpf").addEventLister("input", (e) => {
    let v = somenteNumeros(e.target.value).slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    e.target.value = v;
});

document.getElementById("telefone").addEventListener("input", (e) => {
    let v = somenteNumeros(e.target.value).slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    e.target.value = v;
});

document.getElementById("cep").addEventListener("input", (e) => {
    let v = somenteNumeros(e.target.value).slice(0, 8);
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = v;
});

document.getElementById("estado").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
});

//data de nascimento não pode ser no futuro
document.getElementById("nascimento").max = new Date().toISOString().split("T")[0];
