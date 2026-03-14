document.addEventListener('DOMContentLoaded', function() {
    // Gráfico 1: Reciclagem Brasil (Pizza)
    const ctx1 = document.getElementById('reciclagemChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Reciclado', 'Descartado incorretamente'],
            datasets: [{
                data: [3, 97],
                backgroundColor: [
                    '#4a7c59',
                    '#ff6b6b'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 30,
                        font: { size: 14 }
                    }
                },
                title: {
                    display: true,
                    text: 'Taxa de Reciclagem no Brasil',
                    font: { size: 18, weight: 'bold' }
                }
            }
        }
    });

    // Gráfico 2: Produção Mundial (Barras)
    const ctx2 = document.getElementById('producaoChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Mundo', 'Brasil'],
            datasets: [{
                label: 'Milhões de toneladas/ano',
                data: [62, 2.4],
                backgroundColor: ['#4a7c59', '#2c5530'],
                borderRadius: 10,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { font: { size: 14 } }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Produção de Lixo Eletrônico',
                    font: { size: 18, weight: 'bold' }
                },
                legend: { display: false }
            }
        }
    });
});
