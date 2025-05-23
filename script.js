const form = document.getElementById("form-cliente");
const tabela = document.getElementById("tabela-clientes");
const modalEditar = document.getElementById("modal-editar");
const modalExcluir = document.getElementById("modal-excluir");

// ----- inputs ----

const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputCpf = document.getElementById("cpf");
const inputEmail = document.getElementById("email");

// ----- inputs do modal editar -----

const inputEditNome = document.getElementById("edit-nome");
const inputEditSobrenome = document.getElementById("edit-sobrenome");
const inputEditCpf = document.getElementById("edit-cpf");
const inputEditEmail = document.getElementById("edit-email");

const formEdicao = document.getElementById("form-edicao");
const btnCancelarEdicao = document.getElementById("cancelar-edicao");
const btnConfirmarExclusao = document.getElementById("confirmar-exclusao");
const btnCancelarExclusao = document.getElementById("cancelar-exclusao");

let clientes = [];

let indexEditando = null;
let indexExcluindo = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //capturo aqui os valores digitados pelo usuário e coloco em variáveis
  const nome = inputNome.value.trim();
  const sobrenome = inputSobrenome.value.trim();
  const cpf = inputCpf.value.trim();
  const email = inputEmail.value.trim();

  const objCliente = {
    nome,
    sobrenome,
    cpf,
    email,
  };

  clientes.push(objCliente);

  form.reset();
  renderizarTabela();
});

function renderizarTabela() {
  tabela.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.sobrenome}</td>
    <td>${cliente.cpf}</td>
    <td>${cliente.email}</td>
    `;

    const tdAcoes = document.createElement("td");
    tdAcoes.classList.add("acoes");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("excluir");

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);
  });
}

renderizarTabela();
