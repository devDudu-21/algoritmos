def pesquisa_simples(lista, item):
    for i in range(len(lista)):
        if lista[i] == item:
            return i
    return None


minha_lista = list(range(1, 1000001))

print(pesquisa_simples(minha_lista, 756000))
print(pesquisa_simples(minha_lista, -1))

