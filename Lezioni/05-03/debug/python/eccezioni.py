def funzione_rischiosa(valore):
    try:
        risultato = 100 / valore
        return risultato
    except ZeroDivisionError:
        print("Errore: Divisione per zero")
        return None
    except TypeError as e:
        print(f"Errore di tipo: {e}")
        return None
    finally:
        print("Operazione completata (con o senza successo)")


# Test con valori diversi
print(funzione_rischiosa(5))  # Funziona
print(funzione_rischiosa(0))  # ZeroDivisionError
print(funzione_rischiosa("10"))  # TypeError
