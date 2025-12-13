function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const form = document.getElementById('form-questionario');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  alert("Submissão enviada com sucesso!");

});


const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");


const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroTel = document.getElementById("erro-telefone");
const erroCpf = document.getElementById("erro-cpf");


nome.addEventListener("input", () => {
  const regex = /^[A-Za-zÀ-ÿ ]{3,}$/;

  if (regex.test(nome.value)) {
    nome.className = "valido";
    erroNome.textContent = "";
  } else {
    nome.className = "invalido";
    erroNome.textContent = "Digite um nome válido (mínimo 3 letras).";
  }
});


email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    email.className = "valido";
    erroEmail.textContent = "";
  } else {
    email.className = "invalido";
    erroEmail.textContent = "E-mail inválido!";
  }
});


telefone.addEventListener("input", () => {
  let valor = telefone.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 6) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
  } else if (valor.length > 2) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else {
    telefone.value = valor;
  }

  if (valor.length === 11) {
    telefone.className = "valido";
    erroTel.textContent = "";
  } else {
    telefone.className = "invalido";
    erroTel.textContent = "Telefone inválido!";
  }
});


cpf.addEventListener("input", () => {
  let valor = cpf.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 9) {
    cpf.value = `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6, 9)}-${valor.slice(9, 11)}`;
  } else if (valor.length > 6) {
    cpf.value = `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6)}`;
  } else if (valor.length > 3) {
    cpf.value = `${valor.slice(0, 3)}.${valor.slice(3)}`;
  } else {
    cpf.value = valor;
  }

  if (valor.length === 11) {
    cpf.className = "valido";
    erroCpf.textContent = "";
  } else {
    cpf.className = "invalido";
    erroCpf.textContent = "CPF inválido!";
  }
});

// Botão de envio
const btn = document.getElementById("btnEnviar");
const msgSucesso = document.getElementById("mensagem-sucesso");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const nomeValido = nome.classList.contains("valido");
  const emailValido = email.classList.contains("valido");
  const telValido = telefone.classList.contains("valido");
  const cpfValido = cpf.classList.contains("valido");

  if (nomeValido && emailValido && telValido && cpfValido) {

    msgSucesso.style.display = "block";
    msgSucesso.textContent = "✔ Formulário enviado com sucesso!";

    nome.value = "";
    email.value = "";
    telefone.value = "";
    cpf.value = "";

    nome.className = "";
    email.className = "";
    telefone.className = "";
    cpf.className = "";

    setTimeout(() => {
      msgSucesso.style.display = "none";
    }, 4000);

  } else {
    msgSucesso.style.display = "block";
    msgSucesso.style.background = "#e74c3c";
    msgSucesso.textContent = "✖ Preencha todos os campos corretamente!";

    setTimeout(() => {
      msgSucesso.style.display = "none";
      msgSucesso.style.background = "#2ecc71";
    }, 3000);
  }
});




