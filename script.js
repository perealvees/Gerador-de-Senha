
let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("password");

let containerPassword = document.querySelector("#containerPassword");

let charset = "abdefg12345";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.this.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML= this.Value;
}

function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    alert ("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
