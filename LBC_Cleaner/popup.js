const wordInput = document.getElementById('wordInput');
const addBtn = document.getElementById('addBtn');
const wordList = document.getElementById('wordList');

// Voici TOUS les anciens mots regroupés ici
const defaultWords = ["recherche", "cherche", "échange", "vends pas", "urgent", "lot"];

function displayWords() {
  chrome.storage.local.get(['bannedWords'], (res) => {
    // Si la liste est vide ou n'existe pas encore, on met tous les mots par défaut
    let words = res.bannedWords;
    if (!words || words.length === 0) {
      words = defaultWords;
      chrome.storage.local.set({ bannedWords: words });
    }

    wordList.innerHTML = '';
    words.forEach((word, index) => {
      const li = document.createElement('li');
      li.className = 'word-item';
      li.innerHTML = `
        <span>${word}</span>
        <span class="delete-btn" data-index="${index}" style="color:red; cursor:pointer; font-weight:bold; margin-left:10px;">&times;</span>
      `;
      wordList.appendChild(li);
    });

    // Gestion de la suppression
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'));
        removeWord(idx);
      };
    });
  });
}

function addWord() {
  const newWord = wordInput.value.trim().toLowerCase();
  if (!newWord) return;
  chrome.storage.local.get(['bannedWords'], (res) => {
    const words = res.bannedWords || [];
    if (!words.includes(newWord)) {
      words.push(newWord);
      chrome.storage.local.set({ bannedWords: words }, () => {
        wordInput.value = '';
        displayWords();
      });
    }
  });
}

function removeWord(index) {
  chrome.storage.local.get(['bannedWords'], (res) => {
    const words = res.bannedWords || [];
    words.splice(index, 1);
    chrome.storage.local.set({ bannedWords: words }, () => {
      displayWords();
    });
  });
}

addBtn.onclick = addWord;
wordInput.onkeypress = (e) => { if (e.key === 'Enter') addWord(); };

// Charger la liste au démarrage
displayWords();