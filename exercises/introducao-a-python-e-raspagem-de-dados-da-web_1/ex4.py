def greather_than(list):
    name = ""
    result = ""
    for items in list:
        if items == list[0]:
            name = items
        else:
            name = list[list.index(items) - 1]
        if len(items) > len(name):
            result = items
    return result
