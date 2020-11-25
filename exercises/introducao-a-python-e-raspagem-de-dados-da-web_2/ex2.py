import random

name_list = ["Girafa", "Leao", "Linux", "Cobra", "Gigante", "Oculos", "Python"]

word = random.choice(name_list)


def scrambled_word_game(word):
    scrambled_word = "".join(random.sample(word, len(word)))
    return scrambled_word


loops = 0
digited_word = []
scrambled_word = scrambled_word_game(word)

print(scrambled_word)

while loops < 3:
    try:
        print("Tentativa n.: ", loops + 1)
        digited_word.append(input("Digite sua tentativa: "))
        loops += 1
    except ValueError:
        print("Oops!  Algo deu errado, tente outra vez...")

for item in digited_word:
    if item == word:
        print("Voce ACERTOU, a palavra era: ", word)
        break
    elif item != word and digited_word.index(item) == 2:
        print("Voce ERROU, a palavra era: ", word)
