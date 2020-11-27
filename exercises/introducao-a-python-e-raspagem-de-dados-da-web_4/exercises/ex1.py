def number_generate(number):
    result = []
    for number in range(1, number + 1):
        if number % 3 == 0:
            result.append("Fizz")
        elif number % 5 == 0:
            result.append("Buzz")
        else:
            result.append(number)
    return result
