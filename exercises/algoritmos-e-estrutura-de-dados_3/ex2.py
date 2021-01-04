def numero_de_pares(number, acc):
    if number == 0:
        print(acc)
    else:
        if not number % 2:
            acc = acc + 1
        numero_de_pares(number - 1, acc)


set_of_numbers = 10

numero_de_pares(set_of_numbers, 0)
