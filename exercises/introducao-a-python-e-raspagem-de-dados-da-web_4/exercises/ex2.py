import re


def get_number_from_phrase(word):
    result = ""
    for character in word:
        if re.search("[a-cA-C]", character):
            result = result + "2"
        elif re.search("[d-fD-F]", character):
            result = result + "3"
        elif re.search("[g-iG-I]", character):
            result = result + "4"
        elif re.search("[j-lJ-L]", character):
            result = result + "5"
        elif re.search("[m-oM-O]", character):
            result = result + "6"
        elif re.search("[p-sP-S]", character):
            result = result + "7"
        elif re.search("[t-vT-V]", character):
            result = result + "8"
        elif re.search("[w-zW-Z]", character):
            result = result + "9"
        else:
            result = result + character
    return result
