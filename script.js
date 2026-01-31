// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// Formulário de contato
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();

  const nome = e.target.nome.value.trim();
  const email = e.target.email.value.trim();
  const msg = e.target.mensagem.value.trim();
  const output = document.getElementById("form-message");

  if (!nome || !email || !msg) {
    output.textContent = "Por favor, preencha todos os campos.";
    output.style.color = "red";
    return;
  }

  output.textContent = "Mensagem enviada com sucesso! 🎉";
  output.style.color = "green";
  e.target.reset();
});
