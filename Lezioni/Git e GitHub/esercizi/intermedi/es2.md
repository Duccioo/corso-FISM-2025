# Comando:

Crea un branch "feature-profile", modifica il README.md aggiungendo una sezione "Profilo utente", torna al branch main, modifica la stessa parte del README.md in modo diverso, prova a fare il merge e risolvi il conflitto.


# Risoluzione:
```bash

# Crea e passa al branch feature-profile
git checkout -b feature-profile

# Modifica README.md nel branch feature-profile
echo "" >> README.md
echo "## Profilo utente" >> README.md
echo "Funzionalità per la gestione del profilo utente" >> README.md

# Committa le modifiche
git add README.md
git commit -m "Aggiungi sezione profilo utente"

# Torna al branch main
git checkout main

# Modifica lo stesso file in main, nella stessa posizione
echo "" >> README.md
echo "## Account utente" >> README.md
echo "Gestione dell'account e impostazioni personali" >> README.md

# Committa nel branch main
git add README.md
git commit -m "Aggiungi sezione account utente"

# Prova a unire il branch feature-profile (genererà un conflitto)
git merge feature-profile

# Apri README.md con un editor e vedrai qualcosa di simile:
# <<<<<<< HEAD
# ## Account utente
# Gestione dell'account e impostazioni personali
# =======
# ## Profilo utente
# Funzionalità per la gestione del profilo utente
# >>>>>>> feature-profile

# Modifica il file per risolvere il conflitto, ad esempio:
# ## Profilo e account utente
# Funzionalità per la gestione del profilo utente e impostazioni personali

# Dopo aver risolto il conflitto
git add README.md
git commit -m "Unisci le sezioni di profilo e account utente"



```