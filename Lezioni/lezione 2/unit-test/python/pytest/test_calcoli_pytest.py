import pytest
from calcoli import somma, moltiplica, dividi


def test_somma():
    assert somma(5, 3) == 8
    assert somma(-1, 1) == 0
    assert somma(0, 0) == 0


def test_moltiplica():
    assert moltiplica(4, 3) == 12
    assert moltiplica(0, 5) == 0
    assert moltiplica(-2, 3) == -6


def test_dividi():
    assert dividi(10, 2) == 5
    assert dividi(0, 5) == 0
    assert dividi(5, 3) == pytest.approx(1.6666667)


def test_dividi_zero():
    with pytest.raises(ValueError):
        dividi(10, 0)
