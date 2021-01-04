def numero_de_pares(array):
    m = 0
    for n in range(0, len(array)):
        if not (array[n] % 2):
            m = m + 1
    print(m)


set_of_numbers = [0, 1, 2, 3, 4, 5, 6]

numero_de_pares(set_of_numbers)
