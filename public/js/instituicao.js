// criando mapa
const map = L.map("mapid").setView([-5.7957658, -35.2079482, 15], 15);

// criando e adicionando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// criando icone
const icon = L.icon({
  iconUrl: "./public/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// criando sobreposição de pop-up
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Casa Durval Paiva <a href="info-intituicao.html?id=1" class="choose-instituicao"> <img src="./public/img/next.svg" </a>'
);

// criando e adicionar marcador
L.marker([-5.7957658, -35.2079482, 15], { icon: icon })
  .addTo(map)
  .bindPopup(popup);
