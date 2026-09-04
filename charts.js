import { getPlatformData } from './data-fetch.js';

// Configuration des graphiques Chart.js
export function initCharts() {
  // Graphique d'engagement hebdomadaire
  const engagementCtx = document.getElementById('engagement-chart').getContext('2d');
  new Chart(engagementCtx, {
      type: 'line',
      data: {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
          datasets: [{
              label: 'Taux d\'engagement (%)',
              data: getPlatformData('facebook').engagementRate,
              borderColor: '#4361ee',
              backgroundColor: 'rgba(67,97,238,0.1)',
              tension: 0.3,
              fill: true
          }]
      },
      options: { responsive: true }
  });

  // Graphique de croissance mensuelle (split-view)
  const growthCtx = document.getElementById('growth-chart').getContext('2d');
  new Chart(growthCtx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Fév', 'Mar'],
          datasets: [{
              label: 'Suiveurs',
              data: getPlatformData('facebook').growthMonthly,
              backgroundColor: '#4361ee'
          }]
      },
      options: { indexAxisY: true }
  });
}
