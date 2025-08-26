const menu = document.querySelector(".nav_mobile_icon");
const menuLateral = document.querySelector("#menu_lateral");
const overlay = document.querySelector(".overlay_menu");
const icon = menu.querySelector("i");

menu.addEventListener('click', () => {
  const isOpen = menuLateral.classList.contains("nav_open");

  if (isOpen) {
    // FECHA MENU
    menuLateral.classList.remove("nav_open");
    overlay.classList.remove("overlay_open");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  } else {
    // ABRE MENU
    menuLateral.classList.add("nav_open");
    overlay.classList.add("overlay_open");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  }
});

overlay.addEventListener('click', () => {
  // FECHA MENU AO CLICAR NO FUNDO
  menuLateral.classList.remove("nav_open");
  overlay.classList.remove("overlay_open");
  icon.classList.remove("fa-x");
  icon.classList.add("fa-bars");
});


document.getElementById("form_whats").addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const contato = document.getElementById("contato").value;
    const email = document.getElementById("email").value;
    const boxServicos = document.getElementById("box-servicos").value;

    const text = `Olá, meu nome é ${nome}, represento a empresa ${empresa}.
    Gostaria de solicitar um orçamento para o serviço de ${boxServicos}.
    📞 Contato: ${contato}  
    📧 E-mail: ${email}
    Fico no aguardo das informações. Muito obrigado!
    `;
    const numero= '5511986125768';

    const url =`https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');


})

////////////////////////////////////////SCROLL

// Inicializa ScrollReveal com configuração padrão
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '30px',       // distância mais natural para o movimento
  duration: 1200,          // tempo ideal para fluidez
  opacity: 0,              // começa invisível
  scale: 0.95,             // leve redução para efeito de "zoom in"
  easing: 'ease-out',      // suavidade na entrada
  reset: true,             // reaplica o efeito ao rolar novamente
  viewFactor: 0.2          // ativa quando 20% do elemento estiver visível
});

// Lista de seletores que receberão o efeito
const elementos = [
  '.hs-section',
  '.caminhoes',
  '.div_group_text_sobre_nos',
  '.grafico-container',
  '.section_img_form'
];

// Aplica o efeito a cada seletor
elementos.forEach(selector => {
  sr.reveal(selector, {
    interval: 100 // se houver múltiplos elementos iguais, revela em cascata
  });
});
