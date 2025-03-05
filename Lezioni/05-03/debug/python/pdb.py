def funzione_complessa(dati):
    # Inserire breakpoint
    import pdb

    pdb.set_trace()  # In Python 3.7+: breakpoint()

    risultato = []
    for item in dati:
        # Logica complessa
        valore = item * 2
        if valore > 10:
            risultato.append(valore)

    return risultato


# Comandi PDB utili:
# n (next): esegue la linea corrente
# s (step): entra nelle funzioni chiamate
# c (continue): continua fino al prossimo breakpoint
# p variabile: stampa il valore di variabile
# l (list): mostra il codice intorno alla posizione corrente
# q (quit): esce dal debugger
