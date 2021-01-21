from doubly_linked_list import DoublyLinkedList


def remove_copys(linked_list):
    a = list()
    b = list()
    c = list()

    # coloca os valores dos nós em uma lista
    for n in range(len(linked_list)):
        node = linked_list.remove_first()
        if node is not None:
            a.append((node.value, n))

    # ordena a lista
    a.sort()

    # acrescenta um último elemento na lista
    # fora de ordem que vai nos ajudar na hora
    # de iterar sobre a lista
    a.append((0, -1))

    # cria uma segunda lista apenas com os elementos
    # que nao se repetem
    for m in range(0, len(a) - 1):
        if a[m + 1][0] == a[m][0] or a[m][0] == a[m - 1][0]:
            None
        else:
            b.append(a[m])

    # ref.: http://bit.ly/2LOiMME
    # ordena uma terceira lista pelo número do nó original
    c = sorted(b, key=lambda x: x[1])

    # cria uma nova lista
    new_linked_list = DoublyLinkedList()

    # insere os elementos na nova lista
    for element in c:
        new_linked_list.insert_last(element[0])

    return new_linked_list


if __name__ == "__main__":
    linked_list = DoublyLinkedList()
    print("________________________________________")

    # teste 1
    linked_list.insert_last(1)
    linked_list.insert_last(1)
    linked_list.insert_last(2)

    print(f"lista original: {linked_list}")
    print(f"nova lista: {remove_copys(linked_list)}")
    print("________________________________________")

    # limpa a lista
    linked_list = DoublyLinkedList()

    # teste 2
    linked_list.insert_last(1)
    linked_list.insert_last(1)
    linked_list.insert_last(2)
    linked_list.insert_last(3)
    linked_list.insert_last(3)

    print(f"lista original: {linked_list}")
    print(f"nova lista: {remove_copys(linked_list)}")
    print("________________________________________")

    # limpa a lista
    linked_list = DoublyLinkedList()

    # teste 3
    linked_list.insert_last(1)
    linked_list.insert_last(2)
    linked_list.insert_last(3)
    linked_list.insert_last(3)

    print(f"lista original: {linked_list}")
    print(f"nova lista: {remove_copys(linked_list)}")
    print("________________________________________")

    # limpa a lista
    linked_list = DoublyLinkedList()
# opa