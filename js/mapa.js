// Inicializar mapa centralizado em São Borja RS
const map = L.map('map').setView([-29.4631, -56.0053], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ícones personalizados
const greenIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-recycle" style="color: #4a7c59; font-size: 24px;"></i>',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});

const blueIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-trash-alt" style="color: #45b7d1; font-size: 24px;"></i>',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});

const redIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-exclamation-triangle" style="color: #ff6b6b; font-size: 24px;"></i>',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
});

// Pontos de coleta de São Borja
const pontos = [
    {
        coords: [-29.4631, -56.0053],
        nome: "Secretaria Municipal de Meio Ambiente",
        tipo: "Ponto fixo",
        descricao: "✅ Celulares, computadores, TVs, pilhas<br>🕒 Seg-Sex: 8h-17h<br>📍 Av. Tupy Caldas, 1235<br>Tel: (55) 3431-2000",
        icon: greenIcon
    },
    {
        coords: [-29.4685, -56.0082],
        nome: "Parque Esportivo General Vargas",
        tipo: "Coleta mensal",
        descricao: "✅ Eletrodomésticos pequenos, cabos<br>📅 1º sábado do mês<br>🕒 9h-12h<br>📍 Rua General Vargas",
        icon: blueIcon
    },
    {
        coords: [-29.4602, -56.0021],
        nome: "Ecoponto Central",
        tipo: "Ponto fixo",
        descricao: "✅ Baterias, lâmpadas fluorescentes<br>❌ Equipamentos grandes<br>🕒 Seg-Sáb: 8h-18h<br>📍 Centro - Praça XV de Novembro",
        icon: redIcon
    }
];

// Adicionar marcadores
pontos.forEach(ponto => {
    L.marker(ponto.coords, { icon: ponto.icon })
        .addTo(map)
        .bindPopup(`
            <div style="min-width: 250px;">
                <h3 style="color: #2c5530; margin-bottom: 10px;">${ponto.nome}</h3>
                <p><strong>Tipo:</strong> ${ponto.tipo}</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 10px 0;">
                    ${ponto.descricao.replace(/\n/g, '<br>')}
                </div>
                <a href="https://www.saoborja.rs.gov.br" target="_blank" 
                   style="background: #4a7c59; color: white; padding: 10px 20px; text-decoration: none; border-radius: 25px; display: inline-block;">
                   Mais informações
                </a>
            </div>
        `);
});

// Controle de camadas
const overlayMaps = {
    "Pontos de Coleta": L.layerGroup(pontos.map(p => L.marker(p.coords, {icon: p.icon})))
};
L.control.layers(null, overlayMaps).addTo(map);

// Localizar usuário
map.locate({setView: true, maxZoom: 16});
