/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe:getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '20%'
email.style.width = '20%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome inválido'
      txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
        let nomeOk = true
    }

}

function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        let emailOk = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no minimo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        let assuntoOk = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true)
    alert ('formulário enviado com sucesso')
}else{
    alert ("Preencha corretamente os campos antes de enviar...")
}

