let email = document.getElementById('email')
let nome = document.getElementById("nome")

let assunto = ""

let nomeOk = false
let emailOk = false

function verificaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(event){

    assunto = event.target.value
    if(assunto == ""){
        txtAssunto.innerHTML = "Assunto inválido"
        txtAssunto.style.color = "red"
    }else{
        txtAssunto.innerHTML = "Assunto válido"
        txtAssunto.style.color = "green"
    }
    }

function enviar(){

    if(nomeOk && emailOk && assunto != ""){
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar")
    }
}



