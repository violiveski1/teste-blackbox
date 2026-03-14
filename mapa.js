// Inicializar mapa centralizado em São Borja RS
const map = L.map('map').setView([-29.4631, -56.0053], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Pontos de coleta reais/fictícios de São Borja
const pontos = [
    {
        coords: [-29.4631, -56.0053],
        nome: "Secretaria Municipal de Meio Ambiente",
        tipo: "Ponto fixo",
        descricao: "Coleta de celulares, computadores, TVs, pilhas e eletrodomésticos pequenos.",
       
