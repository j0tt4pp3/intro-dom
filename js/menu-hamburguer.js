// 1 - Capturando os elementos do DOM
const button = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

const iconeMenu = `
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 5.5H3V7h18V5.5Zm0 5.75H3v1.5h18v-1.5ZM3 17h18v1.5H3V17Z"
              fill="currentColor"
            />
          </svg>
`;

const iconeFechar = `
<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20.28 4.78-1.06-1.06L12 10.94 4.78 3.72 3.72 4.78 10.94 12l-7.22 7.22 1.06 1.06L12 13.06l7.22 7.22 1.06-1.06L13.06 12l7.22-7.22Z" fill="currentColor"/></svg>
`;

const breakpoint = window.matchMedia("(min-width: 48rem)");

// 2 - Configurando evento de clique ao botão
button.addEventListener("click", function () {
  // Acessamos a lista de classes e ativamos/desativamos a classe ativo
  menu.classList.toggle("ativo");

  // Armazenando um valor booleano através do método contains
  const menuAberto = menu.classList.contains("ativo");
  button.setAttribute("aria-expanded", menuAberto);

  // Validando se a lista possui a classe ativo
  if (menuAberto) {
    button.setAttribute("aria-label", "Fechar menu");
    button.innerHTML = iconeFechar;
  } else {
    button.setAttribute("aria-label", "Abrir menu");
    button.innerHTML = iconeMenu;
  }
});

// evento/ação de redimensionamento da tela
breakpoint.addEventListener("change", function (event) {
  if (event.matches) {
    menu.classList.remove("ativo");

    button.innerHTML = iconeMenu;
    button.setAttribute("aria-label", "Abrir menu");
    button.setAttribute("aria-expanded", "false");
  }
});
