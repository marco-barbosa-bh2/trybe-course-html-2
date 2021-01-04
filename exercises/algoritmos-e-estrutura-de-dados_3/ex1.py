def numero_de_pares(number):
    m = 0
    for n in range(1, number + 1):
        if not (n % 2):
            m = m + 1
    print(m)


set_of_numbers = 10

numero_de_pares(set_of_numbers)
