const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const nascimento = document.querySelector("#nascimento");
const btn_salvar = document.querySelector("#btn-salvar");

const db_dados = localStorage.getItem("Clientes")
  ? JSON.parse(localStorage.getItem("Clientes"))
  : [];

const nomeValor = nome.value;
btn_salvar.addEventListener("click", (e) => {
  e.preventDefault(e);

  if (!nome.value || !email.value || !telefone.value || !nascimento.value) {
    return console.log("Campos não podem ser vazios!");
  }
  const dados = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    nascimento: nascimento.value,
  };
  db_dados.push(dados);
  localStorage.setItem("Clientes", JSON.stringify(db_dados));

  nome.value = "";
  email.value = "";
  telefone.value = "";
  nascimento.value = "";
});

email.addEventListener("input", () => {});

telefone.addEventListener("input", () => {});

nome.addEventListener("input", () => {
  if (nome.value.length < 2) {
    return console.log("Nome precisa ter no minimo 3 caracteres");
  }
});
