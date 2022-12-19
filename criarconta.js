let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let senhaconfirma = document.querySelector("#senhaconfirma");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  salvar(email.value, senha.value, senhaconfirma.value);
});

function salvar(email, senha, senhaconfirma) {
  if (email === "" || senha === "" || senhaconfirma === "") {
    alert("Preencha todos os campos");
    location.reload();
  } else if (senha !== senhaconfirma) {
    alert("Confirmação de senha diferente da senha digitada");
  } else {
    //Trazer os dados do Local Storage, se não existir, trazer vetor vazio
    let db = JSON.parse(localStorage.getItem("usuarios") || "[]");

    //Criação de objetos contendo os dados que estão sendo passados(Crio a variável/objeto)
    let usuario = { Id: db.length + 1, email, senha };
    //Salvar usuário
    db.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(db));
    //usuario = 'db[{nome:juliao}]
    window.location.href = "pagentra.html";
  }
}
