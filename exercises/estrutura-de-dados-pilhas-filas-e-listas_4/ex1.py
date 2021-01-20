from doubly_linked_list import DoublyLinkedList


def remove_copys(linked_list):
    a = list()
    have_been_listed = list()
    for n in range(len(linked_list)):
        node = linked_list.remove_first()
        if node is not None:
            if node.value not in have_been_listed:
                a.append(node.value)
            else:
                have_been_listed.append(node.value)
    print(a)


if __name__ == "__main__":
    linked_list = DoublyLinkedList()
    linked_list.insert_last(5)
    linked_list.insert_last(5)
    linked_list.insert_last(4)
    linked_list.insert_last(4)
    linked_list.insert_last(3)
    linked_list.insert_last(2)
    linked_list.insert_last(1)

    remove_copys(linked_list)
