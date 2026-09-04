// Gestion du thème clair/sombre
document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});

// Changement de plateforme
document.querySelectorAll('.platform-icons button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.platform-icons button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateDashboard(btn.dataset.platform);
    });
});

// Mise à jour du dashboard selon la plateforme sélectionnée
function updateDashboard(platform) {
    const data = getPlatformData(platform);
}
