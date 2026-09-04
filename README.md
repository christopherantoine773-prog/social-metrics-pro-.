# 📊 SocialMetrics Pro — Dashboard Analytics & Social Intelligence

> **SocialMetrics Pro** est une application web moderne, légère et modulaire conçue pour centraliser, analyser et visualiser les données d'engagement multi-plateformes en temps réel. Développé avec une architecture ultra-optimisée (12 à 14 fichiers), ce projet offre une interface fluide, réactive et prête pour le déploiement immédiat sur n'importe quel hébergeur statique.

---

## 📸 Aperçu du Projet

| Dashboard Principal | Analytics Multi-Plateformes | Configuration |
| :---: | :---: | :---: |
| *(Vue KPI & Graphs)* | *(Instagram / TikTok / YouTube)* | *(Mode Sombre / Clair)* |

---

## 🌟 Fonctionnalités Principales

### 1. 📈 Visualisation de Données & KPIs
* **Incrémentation dynamique des statistiques :** Affichage fluide du nombre d'abonnés, de la portée globale (*reach*) et du taux d'engagement.
* **Graphiques interactifs :** Intégration de **Chart.js** pour des courbes de croissance multi-plateformes personnalisables.
* **Filtres par périodes :** Visualisation dynamique par jour, semaine, mois ou année.
* **Mise à jour automatique :** Rafraîchissement configurable du flux de données.

### 2. 🎨 UI/UX Moderne & Modulaire
* **Thème Dynamique :** Basculement instantané entre le mode Sombre (*Dark Mode*) et le mode Clair (*Light Mode*).
* **Architecture CSS Découpée :** Variables CSS globales, cartes interactives, effets de survol et micro-animations fluides.
* **Design 100% Responsive :** Adapté aux écrans mobiles, tablettes et ordinateurs de bureau.
* **Accessibilité :** Balisage HTML5 sémantique et contrastes ajustables.

### 3. ⚡ Performances & Code Minimaliste
* **Zero Dépendances Lourdes :** Codé exclusivement en **Vanilla HTML5, CSS3, JavaScript ES6+**.
* **Moteur Graphique Léger :** Chart.js importé via CDN optimisé.
* **Chargement Ultra-Rapide :** Empreinte mémoire minimale et score Lighthouse optimal.
* **Architecture Propre :** Organisé en 12 fichiers modulaires simples à maintenir.

---

## 📁 Architecture Complète des Fichiers

L'application respecte une séparation stricte des responsabilités :

```text
social-metrics-pro/
├── index.html              # Structure HTML5 principale
├── config.js               # Paramètres globaux et configurations API
├── README.md               # Documentation complète du projet
├── assets/
│   ├── logo.svg            # Graphisme vectoriel du logo
│   └── favicon.ico         # Icône de navigateur
├── styles/
│   ├── main.css            # Layout global, variables CSS et thèmes
│   ├── components.css      # Cartes, boutons, badges et navigation
│   └── animations.css      # Transitions et effets au survol
└── js/
    ├── app.js              # Point d'entrée et initialisation
    ├── api.js              # Simulation du flux de données API
    ├── charts.js           # Moteur d'affichage Chart.js
    └── ui.js               # Gestion des événements et du Dark Mode
```

---

## 🚀 Guide de Déploiement Complet (Pas à Pas)

### Option 1 : Déploiement sur GitHub Pages

1. **Créer un nouveau dépôt sur GitHub :**
   - Rendez-vous sur [GitHub New Repo](https://github.com/new).
   - Nommez votre dépôt : `social-metrics-pro`.
   - Laissez le dépôt en public et cliquez sur **Create repository**.

2. **Publier le projet via le terminal :**
   ```bash
   # Initialiser le dépôt local
   git init
   git add .
   git commit -m "feat: initial commit SocialMetrics Pro"

   # Lier au dépôt distant GitHub
   git branch -M main
   git remote add origin https://github.com/VOTRE_PSEUDO/social-metrics-pro.git
   git push -u origin main
   ```

3. **Activer GitHub Pages :**
   - Allez dans les **Settings** de votre dépôt GitHub.
   - Sélectionnez la rubrique **Pages** dans le menu de gauche.
   - Sous **Source**, choisissez la branche `main` et le dossier `/ (root)`.
   - Cliquez sur **Save**. Votre site sera accessible en 1 à 2 minutes à l'adresse :  
     `https://VOTRE_PSEUDO.github.io/social-metrics-pro/`

---

### Option 2 : Déploiement sur Vercel

1. **Via la CLI Vercel (Recommandé) :**
   ```bash
   # Installer Vercel CLI globalement
   npm install -g vercel

   # Se connecter et déployer
   vercel login
   vercel
   ```
2. **Via le Dashboard Vercel :**
   - Connectez-vous sur [Vercel.com](https://vercel.com).
   - Cliquez sur **Add New > Project**.
   - Importez votre dépôt GitHub `social-metrics-pro`.
   - Cliquez sur **Deploy**.

---

### Option 3 : Déploiement sur Netlify

1. **Glisser-Déposer (Sans ligne de commande) :**
   - Connectez-vous sur [Netlify Drop](https://app.netlify.com/drop).
   - Glissez-déposez le dossier complet `social-metrics-pro`.
   - Votre site est en ligne instantanément avec une URL HTTPS gratuite.

2. **Via la CLI Netlify :**
   ```bash
   # Installer Netlify CLI
   npm install netlify-cli -g

   # Déployer en production
   netlify deploy --prod
   ```

---

### Option 4 : Déploiement sur Render

1. Connectez-vous sur [Render.com](https://render.com).
2. Cliquez sur **New +** > **Static Site**.
3. Connectez votre compte GitHub et sélectionnez le dépôt `social-metrics-pro`.
4. Laissez les champs *Build Command* vides et définissez *Publish Directory* sur `./` ou `.`.
5. Cliquez sur **Create Static Site**.

---

### Option 5 : Déploiement sur Cloudflare Pages

1. Allez sur le tableau de bord Cloudflare > **Workers & Pages**.
2. Cliquez sur **Create application** > **Pages** > **Connect to Git**.
3. Sélectionnez le dépôt `social-metrics-pro`.
4. Conservez les paramètres par défaut et cliquez sur **Save and Deploy**.

---

## 🛠️ Stack Technique

* **Front-end :** HTML5, CSS3 (Flexbox/Grid, CSS Custom Properties), JavaScript ES6+
* **Visualisation :** Chart.js (CDN)
* **Design :** Custom CSS Dark Mode / Glassmorphism
* **Compatibilité Hosting :** GitHub Pages, Vercel, Netlify, Render, Cloudflare Pages

---

## 🌐 Réseaux Sociaux & Communauté

Retrouvez toutes mes créations, projets web, éditions vidéo et productions musicales sur mes plateformes officielles :

| Plateforme | Identifiant / Lien | Description |
| :--- | :--- | :--- |
| 🎵 **TikTok** | [@dope__pain](https://www.tiktok.com/@dope__pain) | Créations de contenus courts, vidéo edits & effets visuels |
| 🎬 **CapCut** | `irus_editor` | Modèles d'édition vidéo & templates officiels |
| 💬 **Discord** | [DP STORE Community](https://discord.gg/) | Serveur officiel, entraide dev, projets web & annonces |
| 💻 **GitHub** | [Mon Profil GitHub](https://github.com/) | Projets Web, composants UI, bots & scripts open-source |
| 🛍️ **E-Store** | **DP STORE** | Boutique virtuelle & projets associés |
| 🌐 **Wikidata** | `Q140923888` / `Q141012751` | Entrées & enregistrements d'identité numérique |
| 🎵 **Musique** | **Dope Pain** | Compositions & productions musicales (R&B, Trap, Dancehall, Rap Kreyòl) |

---

## ⚙️ Configuration & Personnalisation

Pour adapter le projet à vos propres besoins ou connecter de vraies APIs :
1. Ouvrez le fichier `config.js`.
2. Modifiez les endpoints, fréquences de rafraîchissement et métadonnées.
3. Ajustez les couleurs du thème principal dans `styles/main.css` via les variables `:root`.

---

## 📄 Licence & Contributions

* **Licence :** MIT License — Utilisation, modification et distribution libres pour projets personnels et commerciaux.
* **Contributions :** Les *Pull Requests* sont vivement encouragées ! N'hésitez pas à proposer de nouvelles fonctionnalités ou optimisations.

---

<p align="center">
  Développé par <b>Christopher Antoine (Dope Pain)</b>
</p>
