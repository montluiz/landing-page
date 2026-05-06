// ESPERA O DOM CARREGAR
document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // segurança pra evitar erro
  if (!menuToggle || !menu) return;

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // FECHAR AO CLICAR NO LINK
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

});