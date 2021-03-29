const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// criando mapa
const map = L.map("mapid", options).setView([-5.7957658, -35.2079482, 15], 15);

// criando e adicionando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// criando icone
const icon = L.icon({
  iconUrl: "./public/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// criando e adicionar marcador
L.marker([-5.7957658, -35.2079482, 15], { icon: icon }).addTo(map);

/* galeria de imagem */

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".instituicao-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para o botão o botão que foi clicado
  button.classList.add("active");
}
