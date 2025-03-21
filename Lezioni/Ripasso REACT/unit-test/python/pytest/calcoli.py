def somma(a, b):
    return a + b


def moltiplica(a, b):
    return a * b


def dividi(a, b):
    if b == 0:
        raise ValueError("Divisione per zero non consentita")
    return a / b
