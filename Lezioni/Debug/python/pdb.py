def funzione_complessa(dati):
    # Inserire breakpoint
    risultato = []
    for item in dati:
        # Logica complessa
        valore = item * 2
        if valore > 10:
            risultato.append(valore)

    return risultato

def main():
    funzione_complessa([1, 2, 3, 4, 5])  # Inserire breakpoint qui
    funzione_complessa([6, 7, 8, 9, 10])
if __name__=="__main__":
    main()
# Comandi PDB utili:
# n (next): esegue la linea corrente
# s (step): entra nelle funzioni chiamate
# c (continue): continua fino al prossimo breakpoint
# p variabile: stampa il valore di variabile
# l (list): mostra il codice intorno alla posizione corrente
# q (quit): esce dal debugger
