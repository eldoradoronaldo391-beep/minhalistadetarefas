const input = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", adicionarTarefa);
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  if (input.value.trim() === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function() {
    li.classList.toggle("concluida");
  });

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "X";
  btnRemover.className = "remove";
  btnRemover.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(btnRemover);
  lista.appendChild(li);

  input.value = "";
}S