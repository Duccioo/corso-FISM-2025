# Comando:
Crea una nuova directory per un progetto, inizializza un repository Git, crea un file README.md con una breve descrizione del progetto, aggiungilo all'area di staging e fai il primo commit.

# Risoluzione:
```bash

# Crea una nuova directory
mkdir primo-progetto
cd primo-progetto

# Inizializza un repository Git
git init

# Crea un file README.md
echo "# Il mio primo progetto Git" > README.md
echo "Questo è un repository di prova per imparare Git." >> README.md

# Verifica lo stato
git status

# Aggiungi il file all'area di staging
git add README.md

# Fai il primo commit
git commit -m "Primo commit: aggiungi README"

```