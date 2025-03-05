def calcola_media(numeri):
    print(f"Input ricevuto: {numeri}")
    somma = sum(numeri)
    print(f"Somma calcolata: {somma}")
    media = somma / len(numeri)
    print(f"Media calcolata: {media}")
    return media

# Esempio di utilizzo
try:
    risultato = calcola_media([10, 20, 30])
    print(f"Risultato: {risultato}")
    risultato_problematico = calcola_media([])  # Causerà un errore
except Exception as e:
    print(f"Errore rilevato: {e}")