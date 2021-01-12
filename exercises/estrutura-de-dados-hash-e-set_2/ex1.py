def blefe(entrada):
    a = set()
    b = set()
    jogador = list()

    for cartas in entrada:
        jogador.append(cartas)
        if len(a) == 0:
            a = set(entrada[cartas])
        else:
            b = set(entrada[cartas])

    jogador_1 = list(a.difference(b))
    jogador_2 = list(b.difference(a))

    pontos_j_1 = abs(jogador_1[0]-jogador_1[1])
    pontos_j_2 = abs(jogador_2[0]-jogador_2[1])

    if pontos_j_1 > pontos_j_2:
        return(jogador[0])
    else:
        return(jogador[1])


if __name__ == "__main__":
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10]
    }
    print(blefe(entrada))
