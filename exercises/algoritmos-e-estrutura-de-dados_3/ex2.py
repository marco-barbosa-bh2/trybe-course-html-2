new_arr = []


def numero_de_pares(array):
    last = len(array) - 1
    if len(array) == 0:
        print(len(new_arr))
    else:
        if not array[last] % 2:
            new_arr.append(array[last])
        numero_de_pares(array[0:last])


set_of_numbers = [0, 1, 2, 3, 4, 5, 6]

numero_de_pares(set_of_numbers)
