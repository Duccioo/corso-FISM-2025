# Comando:

Trova tutti i file con estensione .txt nella directory corrente e nelle sue sottodirectory.


# Risoluzione:
    # Metodo con find (funziona su tutti i sistemi Unix-like)
    find . -type f -name "*.txt"

    # Oppure, su Windows con PowerShell
    # Get-ChildItem -Path . -Filter *.txt -Recurse