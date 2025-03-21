# Comando:

Crea un nuovo branch chiamato "feature-login", aggiungi un file login.txt con del contenuto, committa le modifiche, torna al branch main e poi unisci (merge) il branch feature-login in main.

# Risoluzione:
```bash

    # Crea un nuovo branch e passa ad esso
    git checkout -b feature-login

    # Verifica il branch corrente
    git branch

    # Crea un nuovo file
    echo "Funzionalità di login:" > login.txt
    echo "- Form di autenticazione" >> login.txt
    echo "- Recupero password" >> login.txt

    # Aggiungi e committa nel branch feature-login
    git add login.txt
    git commit -m "Aggiungi specifiche per funzionalità di login"

    # Torna al branch main
    git checkout main

    # Unisci il branch feature-login in main
    git merge feature-login

    # (Opzionale) Elimina il branch feature-login se non serve più
    git branch -d feature-login


```