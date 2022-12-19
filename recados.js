//Apresentar os dados
//let tbody = document.querySelector("#tbody"); //Recados
let btn_enviar = document.querySelector("#btn_enviar");
let db2 = JSON.parse(localStorage.getItem("dados") || "[]");
let idrecado = document.querySelector("#idrecado");
let desc = document.querySelector("#desc");
let detail = document.querySelector("#detail");
let logado = localStorage.getItem("logado");

btn_enviar.addEventListener("click", salvarMsg);

function salvarMsg() {
  //<!--Não deixar preencher vazio -->
  if (idrecado.value === "") {
    let dado = {
      id: db2.length + 1,
      desc: desc.value,
      detail: detail.value,
      user: logado,
    };
    db2.push(dado);
    localStorage.setItem("dados", JSON.stringify(db2));
    preencherMsg();
    limpadado();
  } else {
    let db2 = JSON.parse(localStorage.getItem("dados") || "[]");
    //Retorna a posição
    const pos = db2.findIndex((el) => el.id == idrecado.value);
    db2[pos].desc = desc.value;
    db2[pos].detail = detail.value;
    localStorage.setItem("dados", JSON.stringify(db2));
    preencherMsg();
    limpadado();
    window.location.reload();
  }
}
function preencherMsg() {
  tbody.innerHTML = "";
  //Colocar cor nos dois botões
  for (const dado of db2) {
    if (dado.user === logado) {
      tbody.innerHTML += `
    <tr>
    <td>${dado.id}</td>
    <td><strong>|</strong></td>
    <td>
    ${dado.desc}</td>
    <td><strong>|</strong></td>
    <td>${dado.detail}</td>
    <td>
    <td><button id = "btnEd" onclick="refazer(${dado.id})">Editar</button> 
    <button id= "btnAp" onclick = "remover(${dado.id})">Deletar</button><td>
    </tr>`;
    }
  }
}
function limpadado() {
  let desc = document.querySelector("#desc");
  let detail = document.querySelector("#detail");
  desc.value = "";
  detail.value = "";
  idrecado.value = "";
}
function remover(id) {
  let db2 = JSON.parse(localStorage.getItem("dados") || "[]");
  //Retorna a posição
  const pos = db2.findIndex((el) => el.id == id);
  db2.splice(pos, 1);
  localStorage.setItem("dados", JSON.stringify(db2));
  preencherMsg();
  window.location.reload();
}
function refazer(id) {
  let db2 = JSON.parse(localStorage.getItem("dados") || "[]");
  db2 = db2.filter((el) => el.id == id);
  desc.value = db2[0].desc;
  detail.value = db2[0].detail;
  idrecado.value = db2[0].id;
}
document.addEventListener("DOMContentLoaded", preencherMsg());
