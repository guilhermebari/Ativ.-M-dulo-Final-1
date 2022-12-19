let email = document.querySelector("#email");
let senha = document.querySelector("#senha");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  if (email === "" || senha === "") {
    alert("Preencha todos os campos");
    return;
  }
  let db = JSON.parse(localStorage.getItem("usuarios") || "[]");
  let usuario = db.find((el) => el.email === email.value);
  if (usuario === undefined) {
    alert("Usuário não encontrado");
    return;
  }
  if (usuario.senha === senha.value) {
    localStorage.setItem("logado", usuario.email);
    window.location.href = "pagrecados.html";
  } else {
    alert("Usuário ou senha incorretos");
    limpadado();
    window.location.reload();
  }
});

function limpadado() {
  let email = document.querySelector("#email");
  let senha = document.querySelector("#senha");
  email.value = "";
  senha.value = "";
}

function salvar(email, senha) {
  if (email === "" || senha === "") {
    alert("Preencha todos os campos");
    location.reload();
  } else {
    window.location.href = "pagrecados.html";
  }
}
