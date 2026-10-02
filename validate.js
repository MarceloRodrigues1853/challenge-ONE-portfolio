/**
 * PORTFÓLIO MARCELO RODRIGUES - JAVASCRIPT MODERNO
 * Funcionalidades: Validação em tempo real, Envio de Formulário, Dark Mode e Menu Mobile
 */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. GERENCIAMENTO DE TEMA (DARK / LIGHT MODE)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const htmlElement = document.documentElement;

  // Verifica preferência salva ou do sistema operacional
  let savedTheme;
  try {
    savedTheme = localStorage.getItem("portfolio_theme");
  } catch {
    // Preferências são opcionais quando o armazenamento está indisponível.
  }
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = ["light", "dark"].includes(savedTheme) ? savedTheme : (systemPrefersDark ? "dark" : "light");

  function setTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio_theme", theme);
    } catch {
      // O tema continua funcionando durante esta visita.
    }
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
      );
    }
  }

  // Aplica tema inicial
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. MENU MOBILE RESPONSIVO
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mainNav = document.getElementById("mainNav");

  if (mobileToggle && mainNav) {
    document.documentElement.classList.add("nav-ready");
    function closeMenu() {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.setAttribute("aria-label", "Abrir menu de navegação");
      mobileToggle.classList.remove("active");
      mainNav.classList.remove("active");
      mainNav.inert = window.matchMedia("(max-width: 768px)").matches;
    }
    closeMenu();
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !isExpanded);
      mobileToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
      mainNav.inert = isExpanded;
      mobileToggle.setAttribute("aria-label", isExpanded ? "Abrir menu de navegação" : "Fechar menu de navegação");
      if (!isExpanded) mainNav.querySelector("a")?.focus();
    });

    // Fechar menu mobile ao clicar em qualquer link
    const navLinks = mainNav.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        mobileToggle.focus();
      }
    });
    window.matchMedia("(max-width: 768px)").addEventListener("change", closeMenu);
  }

  // Progresso apenas de navegação nesta sessão; nenhum conteúdo é bloqueado.
  const phaseLinks = [...document.querySelectorAll("[data-phase]")];
  const progress = document.getElementById("journeyProgress");
  const visited = new Set();
  if (progress) progress.hidden = false;
  function updateJourney() {
    const phase = window.location.hash.slice(1);
    if (!phaseLinks.some((link) => link.dataset.phase === phase)) return;
    visited.add(phase);
    phaseLinks.forEach((link) => {
      const isVisited = visited.has(link.dataset.phase);
      link.classList.toggle("is-visited", isVisited);
      link.querySelector(".phase-status").textContent = isVisited ? "Visitada nesta sessão" : "Visitar fase";
      if (link.dataset.phase === phase) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    if (progress) progress.textContent = `${visited.size} de ${phaseLinks.length} fases visitadas nesta sessão.`;
  }
  window.addEventListener("hashchange", updateJourney);
  updateJourney();

  // --------------------------------------------------------------------------
  // 3. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
  // --------------------------------------------------------------------------
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  const charCounter = document.getElementById("charCounter");
  const formStatus = document.getElementById("formStatus");
  const submitButton = document.getElementById("submitButton");
  const buttonText = document.getElementById("buttonText");
  const buttonSpinner = document.getElementById("buttonSpinner");

  // Regex para formato válido de e-mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validador de Nome
  function validateName() {
    if (!nameInput) return true;
    const value = nameInput.value.trim();
    if (value === "") {
      showError(nameInput, nameError, "Por favor, informe seu nome.");
      return false;
    }
    if (value.length > 50) {
      showError(nameInput, nameError, "O nome deve ter no máximo 50 caracteres.");
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  }

  // Validador de E-mail
  function validateEmail() {
    if (!emailInput) return true;
    const value = emailInput.value.trim();
    if (value === "") {
      showError(emailInput, emailError, "Por favor, informe seu e-mail.");
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(emailInput, emailError, "Por favor, insira um e-mail válido.");
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  // Validador de Assunto
  function validateSubject() {
    if (!subjectInput) return true;
    const value = subjectInput.value.trim();
    if (value === "") {
      showError(subjectInput, subjectError, "Por favor, informe o assunto.");
      return false;
    }
    if (value.length > 50) {
      showError(subjectInput, subjectError, "O assunto deve ter no máximo 50 caracteres.");
      return false;
    }
    clearError(subjectInput, subjectError);
    return true;
  }

  // Validador de Mensagem & Contador de Caracteres
  function validateMessage() {
    if (!messageInput) return true;
    const value = messageInput.value.trim();
    const length = messageInput.value.length;

    if (charCounter) {
      charCounter.textContent = `${length} / 300`;
      charCounter.style.color = length > 300 ? "var(--color-error)" : "var(--color-text-muted)";
    }

    if (value === "") {
      showError(messageInput, messageError, "Por favor, escreva uma mensagem.");
      return false;
    }
    if (value.length > 300) {
      showError(messageInput, messageError, "A mensagem deve ter no máximo 300 caracteres.");
      return false;
    }
    clearError(messageInput, messageError);
    return true;
  }

  function showError(input, errorElement, message) {
    if (input) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
    }
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function clearError(input, errorElement) {
    if (input) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
    if (errorElement) {
      errorElement.textContent = "";
    }
  }

  // Ouvintes de eventos em tempo real (input e blur)
  if (nameInput) {
    nameInput.addEventListener("input", validateName);
    nameInput.addEventListener("blur", validateName);
  }

  if (emailInput) {
    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", validateEmail);
  }

  if (subjectInput) {
    subjectInput.addEventListener("input", validateSubject);
    subjectInput.addEventListener("blur", validateSubject);
  }

  if (messageInput) {
    messageInput.addEventListener("input", validateMessage);
    messageInput.addEventListener("blur", validateMessage);
  }

  // Envio assíncrono com feedback
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        showStatus("error", "Por favor, corrija os campos destacados antes de enviar.");
        return;
      }

      // Estado de Carregamento
      setLoading(true);

      const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
      };

      try {
        // Envio real integrado via FormSubmit AJAX (gratuito e sem backend)
        const response = await fetch("https://formsubmit.co/ajax/marcelo180886@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          showStatus("success", "Mensagem enviada com sucesso! Obrigado pelo contato.");
          form.reset();
          if (charCounter) charCounter.textContent = "0 / 300";
          [nameInput, emailInput, subjectInput, messageInput].forEach((el) => {
            el.classList.remove("is-valid");
          });
        } else {
          showStatus(
            "error",
            "Ocorreu um problema ao enviar a mensagem. Tente novamente mais tarde."
          );
        }
      } catch (err) {
        console.error("Erro no envio:", err);
        showStatus(
          "error",
          "Falha de conexão. Por favor, tente enviar novamente ou entre em contato pelo LinkedIn."
        );
      } finally {
        setLoading(false);
      }
    });
  }

  function setLoading(isLoading) {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    if (buttonSpinner && buttonText) {
      if (isLoading) {
        buttonSpinner.style.display = "inline-block";
        buttonText.textContent = "Enviando mensagem...";
      } else {
        buttonSpinner.style.display = "none";
        buttonText.textContent = "Enviar Mensagem";
      }
    }
  }

  function showStatus(type, message) {
    if (!formStatus) return;
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = "block";

    setTimeout(() => {
      if (type === "success") {
        formStatus.style.display = "none";
      }
    }, 6000);
  }
});
