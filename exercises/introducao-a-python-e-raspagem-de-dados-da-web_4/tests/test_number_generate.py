import modules
from exercises.ex1 import number_generate

print(modules)


def test_if_multiple_of_3_return_fizz():
    "Se o numero for multiplo de 3 retorna FIZZ"
    assert number_generate(3) == [1, 2, "Fizz"]


def test_if_multiple_of_5_return_buzz():
    "Se o numero for multiplo de 5 retorna Buzz"
    assert number_generate(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_if_no_multiple_of_3_or_5_return_number():
    "Se o numero não for multiplo de 3 ou 5 retorna o número"
    assert number_generate(2) == [1, 2]
