import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-custom-line-chart',
  templateUrl: './custom-line-chart.component.html',
  styleUrls: ['./custom-line-chart.component.css']
})
export class CustomLineChartComponent implements OnInit {
  public chart: any;

  createChart() {
    this.chart = new Chart("MyLineChart_", {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'], // Années
        datasets: [{
          label: 'Females',
          data: [1200, 1300, 1500, 1600, 1700], // Données pour les femmes
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)', // Couleur de la ligne pour les femmes
          tension: 0.1
        }, {
          label: 'Males',
          data: [1100, 1200, 1300, 1400, 1500], // Données pour les hommes
          fill: false,
          borderColor: 'rgba(54, 162, 235, 1)', // Couleur de la ligne pour les hommes
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          x: {
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Number of Patients per Year', // Titre du graphique
            color: 'white',
            font: {
              size: 16,
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            labels: {
              color: 'white' // Change legend label color to white
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }
}
