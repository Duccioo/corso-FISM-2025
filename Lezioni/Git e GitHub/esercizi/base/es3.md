# Comando:
Modifica il README.md, visualizza le differenze, annulla le modifiche e verifica che il file sia tornato allo stato precedente.


# Risoluzione:
```bash

    # Modifica il file README.md
    echo "Questa è una modifica che vogliamo annullare" >> README.md

    # Verifica le modifiche
    git diff

    # Annulla le modifiche (prima di staging)
    git checkout -- README.md

    # Verifica che le modifiche siano state annullate
    git diff

    # (Alternativa: se le modifiche fossero già in staging)
    # git add README.md
    # git reset HEAD README.md
    # git checkout -- README.md


```