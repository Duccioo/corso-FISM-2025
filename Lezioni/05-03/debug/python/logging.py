import logging

# Configurazione base del logging
logging.basicConfig(
    level=logging.DEBUG, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", filename="app.log"
)


def calcola_media(numeri):
    logging.debug(f"Funzione chiamata con: {numeri}")

    if not numeri:
        logging.error("Lista vuota, impossibile calcolare la media")
        return None

    somma = sum(numeri)
    logging.debug(f"Somma calcolata: {somma}")

    media = somma / len(numeri)
    logging.info(f"Media calcolata: {media}")

    return media


# Esempio di utilizzo
risultato = calcola_media([10, 20, 30])
print(f"Risultato: {risultato}")
