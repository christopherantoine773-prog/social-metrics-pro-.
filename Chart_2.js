# Créer un dossier et y copier les fichiers
mkdir social-dashboard && cp -r * social-dashboard/

# Serveur local (pour tester)
python -m http.server

# Ou déployer sur Netlify/Vercel/GitHub Pages :
git init && git add . && git commit -m "Initial commit"
gh repo create social-analytics-dashboard && git push origin main
