import unittest
from calcoli import somma, moltiplica, dividi

class TestCalcoli(unittest.TestCase):
    
    def test_somma(self):
        self.assertEqual(somma(5, 3), 8)
        self.assertEqual(somma(-1, 1), 0)
        self.assertEqual(somma(0, 0), 0)
    
    def test_moltiplica(self):
        self.assertEqual(moltiplica(4, 3), 12)
        self.assertEqual(moltiplica(0, 5), 0)
        self.assertEqual(moltiplica(-2, 3), -6)
    
    def test_dividi(self):
        self.assertEqual(dividi(10, 2), 5)
        self.assertEqual(dividi(0, 5), 0)
        self.assertAlmostEqual(dividi(5, 3), 1.6666666666666667)
    
    def test_dividi_zero(self):
        with self.assertRaises(ValueError):
            dividi(10, 0)

if __name__ == "__main__":
    unittest.main()