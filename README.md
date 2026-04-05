#LBC Cleaner

**LBC Cleaner** est une extension Chrome/Edge/Brave conçue pour améliorer l'expérience de recherche sur Leboncoin. Elle permet de filtrer et de masquer les annonces qui contiennent des mots-clés spécifiques (comme "recherche", "échange", "donne") qui polluent souvent les résultats de vente.
<img width="1920" height="1080" alt="après" src="https://github.com/user-attachments/assets/52025964-de9c-4647-ba64-58d970d630ad" />

<img width="348" height="327" alt="Capture d&#39;écran 2026-04-05 182348" src="https://github.com/user-attachments/assets/9cc42ae8-fed7-4684-af4e-d88cdba9477c" />

## ✨ Fonctionnalités
- **Filtrage Intelligent** : Masque les annonces contenant des mots interdits uniquement dans les résultats de recherche.
- **Interface intuitive** : Une popup pour ajouter ou supprimer vos propres mots-clés en un clic.
- **Zéro "Blancs"** : Supprime l'emplacement complet de l'annonce pour une grille de résultats propre.
- **Mots-clés par défaut** : Pré-configuré avec les termes les plus courants (recherche, échange, urgent, etc.).

## 🚀 Installation (Mode Développeur)

Comme l'extension n'est pas encore sur le Web Store, voici comment l'installer manuellement :

1. **Téléchargez** ce dépôt en tant que fichier ZIP et extrayez-le, ou clonez-le via Git.
2. Ouvrez votre navigateur et accédez à `chrome://extensions/`.
3. Activez le **"Mode développeur"** en haut à droite.
4. Cliquez sur **"Charger l'extension déballée"**.
5. Sélectionnez le dossier contenant les fichiers du projet (`manifest.json`, `content.js`, etc.).
6. Épinglez l'extension à votre barre d'outils pour un accès facile.

## 🛠️ Utilisation
1. Cliquez sur l'icône de l'extension dans votre barre de navigation.
2. Ajoutez les mots que vous souhaitez bannir (ex: "manette", "vends pas").
3. Allez sur Leboncoin et lancez une recherche.
4. Les annonces correspondantes disparaîtront instantanément !

## 📝 Fichiers du projet
- `manifest.json` : Configuration de l'extension.
- `content.js` : Le script qui analyse et masque les annonces sur la page.
- `popup.html` & `popup.js` : L'interface de gestion de la liste noire.

## 🤝 Contribution
Les contributions sont les bienvenues ! Si vous avez une idée d'amélioration ou si vous trouvez un bug, n'hésitez pas à ouvrir une *Issue* ou une *Pull Request*.

