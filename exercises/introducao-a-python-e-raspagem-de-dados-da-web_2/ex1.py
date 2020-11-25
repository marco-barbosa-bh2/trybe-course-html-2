def name_count_down(name):
    length = len(name)
    user_name = name
    for index in name:
        print(user_name[0: length - user_name.index(index)])
