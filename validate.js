// Verifica se existem elementos de âncora na página
const anchorLinks = document.querySelectorAll('a[href^="#"]');
if (anchorLinks.length > 0) {
  // Adiciona ouvinte de eventos para cada link de âncora
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Verifica se o link é interno
      if (this.getAttribute("href").startsWith("#")) {
        // Previne o comportamento padrão do link
        e.preventDefault();
        // Encontra o elemento de destino pelo ID
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        // Verifica se o elemento de destino existe
        if (targetElement) {
          // Configurações de animação de rolagem personalizáveis
          const scrollOptions = {
            behavior: "smooth",
            block: "start", // Pode ser 'start', 'center', 'end', ou 'nearest'
          };
          // Rola suavemente para o elemento de destino
          targetElement.scrollIntoView(scrollOptions);
        }
      }
    });
  });
}

// Função para validar o campo de nome
function validateName() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameValue = nameInput.value.trim();

  // Verifica se o campo está vazio
  if (nameValue === "") {
    nameError.textContent = "Por favor, insira seu nome.";
    return false;
  }

  // Verifica se o nome ultrapassa o limite de caracteres
  if (nameValue.length > 50) {
    nameError.textContent = "O nome deve conter no máximo 50 caracteres.";
    return false;
  }

  // Limpa a mensagem de erro se a validação for bem-sucedida
  nameError.textContent = "";
  return true;
}

// Função para validar o campo de e-mail
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do e-mail

  // Verifica se o campo está vazio
  if (emailValue === "") {
    emailError.textContent = "Por favor, insira seu e-mail.";
    return false;
  }

  // Verifica se o e-mail está em um formato válido
  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Por favor, insira um e-mail válido.";
    return false;
  }

  // Limpa a mensagem de erro se a validação for bem-sucedida
  emailError.textContent = "";
  return true;
}

// Função para validar o campo de mensagem
function validateMessage() {
  const messageInput = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  const messageValue = messageInput.value.trim();

  // Verifica se o campo está vazio
  if (messageValue === "") {
    messageError.textContent = "Por favor, insira sua mensagem.";
    return false;
  }

  // Verifica se a mensagem excede o limite de caracteres
  const maxLength = 300;
  if (messageValue.length > maxLength) {
    messageError.textContent = `Sua mensagem deve ter no máximo ${maxLength} caracteres.`;
    return false;
  }

  // Limpa a mensagem de erro se a validação for bem-sucedida
  messageError.textContent = "";
  return true;
}

// Função para validar o formulário
function validateForm() {
  // Chama as funções de validação dos campos individuais
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  // Obtém uma referência ao botão "Enviar"
  const submitButton = document.getElementById("submitButton");

  // Verifica se todos os campos são válidos e habilita o botão "Enviar"
  if (isNameValid && isEmailValid && isMessageValid) {
    submitButton.disabled = false;
  } else {
    // Se algum campo não for válido, desabilita o botão "Enviar"
    submitButton.disabled = true;
  }

  // Retorna true se todos os campos forem válidos
  return isNameValid && isEmailValid && isMessageValid;
}

// Adiciona um evento de escuta ao formulário para submissão
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  // Impede o comportamento padrão do formulário
  event.preventDefault();

  // Chama a função de validação do formulário
  const isFormValid = validateForm();

  // Se o formulário for válido, envie os dados para o servidor
  if (isFormValid) {
    // Dados do formulário
    const formData = new FormData(form);

    // URL do servidor para enviar os dados
    const url = "https://example.com/submit-form";

    // Opções para a requisição fetch
    const options = {
      method: "POST",
      body: formData,
    };

    // Enviar os dados do formulário para o servidor
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          // Resposta recebida com sucesso
          console.log("Formulário enviado com sucesso!");
          // Você pode adicionar aqui código para lidar com a resposta do servidor, se necessário
        } else {
          // Resposta do servidor não foi ok
          console.error("Erro ao enviar formulário:", response.status);
          // Você pode adicionar aqui código para lidar com erros de envio, se necessário
        }
      })
      .catch((error) => {
        // Ocorreu um erro durante a requisição fetch
        console.error("Erro ao enviar formulário:", error);
        // Você pode adicionar aqui código para lidar com erros de rede, se necessário
      });
  }

});
