//VALIDAÇÃO DE FORMULÁRIO
const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // impedir que a página recarregue ao enviar o formulário

  if (name.value === "") {
    alert("Por favor, preencha o campo de nome.");
    return;
  }

  if (email.value === "") {
    alert("Por favor, preencha o campo de e-mail.");
    return;
  }

  if (password.value === "") {
    alert("Por favor, preencha o campo de senha.");
    return;
  }

  // Validar comprimento da senha
  if (password.value.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // Se tudo estiver válido, enviar formulário
  form.submit();
  alert("O formulário foi enviado com sucesso!")
});


//MANIPULANDO EVENTO DE PÁGINA
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

// Adicionar evento de clique ao botão
button.addEventListener("click", () => {
  // Alterar o conteúdo do parágrafo
  paragraph.textContent = "O botão foi clicado!";
  
  // Alterar a cor do parágrafo
  paragraph.style.color = "red";
});

// Adicionar evento de mouseover ao parágrafo
paragraph.addEventListener("mouseover", () => {
  // Alterar a cor do parágrafo
  paragraph.style.color = "blue";
});

