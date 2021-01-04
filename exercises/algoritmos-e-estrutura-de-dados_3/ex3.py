def get_bigger(list, comp):
    # condicao base
    if len(list) == 0:
        print(comp)
        return

    # funcao
    last = len(list) - 1
    is_big = list[last]
    if is_big > comp:
        get_bigger(list[0:last], is_big)
    else:
        get_bigger(list[0:last], comp)


get_bigger([3, 5, 9, 44, 10, 23, 0, 7], 0)
