const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('olho');

button.addEventListener('click', olho);

function olho(){
    if(password.type == "password"){
        password.type = "text";
        button.textContent = "🙉";
    } else {
        password.type = 'password';
        button.textContent = "🙈";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(nomeValue === ''){
        errorValidation(nome, 'Preencha esse campo!')
    } else {
        successValidaton(nome, 'O cadastro foi um sucesso!')
    }
    if(emailValue === ''){
        errorValidation(email, 'Preencha esse campo!')
    } else {
        successValidaton(email, 'O cadastro foi um sucesso!')
    }
    if(passwordValue === ''){
        errorValidation(password, 'Preencha esse campo!')
    } else if (passwordValue.length < 6) {
        errorValidation(password, 'A senha deve ter mais de 6 carateres!')
    } else {
        successValidaton(password, 'O cadastro foi um sucesso!')
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidaton(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control success'
}