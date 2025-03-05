# 1. RED - Scriviamo un test che fallisce
def test_validate_password():
    assert validate_password("abc123") == False  # troppo corto
    assert validate_password("abcdefgh") == False  # nessun numero
    assert validate_password("12345678") == False  # nessuna lettera
    assert validate_password("abcd1234") == True  # valida


# Il test fallirà perché la funzione non esiste ancora


# 2. GREEN - Implementiamo la funzione per far passare il test
def validate_password(password):
    if len(password) < 8:
        return False
    if not any(c.isdigit() for c in password):
        return False
    if not any(c.isalpha() for c in password):
        return False
    return True


# 3. REFACTOR - Miglioriamo il codice mantenendo i test in verde
def validate_password(password):
    has_min_length = len(password) >= 8
    has_digit = any(c.isdigit() for c in password)
    has_letter = any(c.isalpha() for c in password)

    return has_min_length and has_digit and has_letter
