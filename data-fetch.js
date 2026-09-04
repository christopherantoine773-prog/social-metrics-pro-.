// Données simulées pour chaque plateforme
const socialData = {
  facebook: {
      followers: 12500,
      likesWeekly: [450, 620, 780, 950, 890],
      growthMonthly: [9800, 10200, 11500, 12800],
      engagementRate: [4.2, 5.1, 6.7]
  },
  instagram: {
      followers: 8950,
      likesWeekly: [380, 560, 720, 910],
      growthMonthly: [7800, 8450, 9200],
      engagementRate: [3.8, 4.9]
  },
  // ... Twitter et LinkedIn (structure similaire)
};

// Récupération dynamique des données
export function getPlatformData(platform) {
  return socialData[platform] || socialData.facebook; // Default to Facebook
}

// Génération de données aléatoires pour l'activité récente
export function generateRecentActivity(count = 5) {
  const platforms = ['Facebook', 'Instagram', 'Twitter'];
  const actions = ['like', 'share', 'comment', 'follow'];
  return Array(count).fill().map(() => ({
      platform: platforms[Math.floor(Math.random() * platforms.length)],
      actionType: actions[Math.floor(Math.random() * actions.length)],
      value: Math.floor(Math.random() * 10) + (Math.random() > 0.7 ? 'K' : ''),
      timeAgo: `${Math.floor(Math.random() * 24)}h ago`
  }));
}
