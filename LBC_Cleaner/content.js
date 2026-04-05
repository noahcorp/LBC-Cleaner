// Fonction principale de nettoyage
function cleanAds() {
    // 1. Sécurité : On ne fait rien si on n'est pas sur une page de recherche
    if (!window.location.href.includes('/recherche')) return;

    // 2. On récupère les mots depuis le stockage local
    chrome.storage.local.get(['bannedWords'], (res) => {
        const bannedKeywords = res.bannedWords || ["recherche", "cherche", "échange", "donne", "vends pas", "urgent", "lot", "Récupération"];
        
        // 3. On cible tous les articles
        const ads = document.querySelectorAll('article');

        ads.forEach(ad => {
            const textContent = ad.innerText.toLowerCase();
            
            // 4. On vérifie la présence d'un mot banni (mot entier uniquement)
            const hasBannedWord = bannedKeywords.some(word => {
                if (!word) return false;
                const regex = new RegExp(`\\b${word}\\b`, 'i');
                return regex.test(textContent);
            });

            if (hasBannedWord) {
                // On remonte au parent pour supprimer le bloc de la grille (le blanc)
                const gridItem = ad.closest('[data-test-id="ad"]') || ad.parentElement;
                if (gridItem) {
                    gridItem.style.setProperty('display', 'none', 'important');
                }
            }
        });
    });
}

// --- SYSTÈME DE SURVEILLANCE ---

// On surveille les changements de la page (scroll, nouveaux résultats)
const observer = new MutationObserver(() => cleanAds());
observer.observe(document.body, { childList: true, subtree: true });

// On relance toutes les 1.5 secondes par sécurité
setInterval(cleanAds, 1500);

// Lancement immédiat au chargement
cleanAds();
