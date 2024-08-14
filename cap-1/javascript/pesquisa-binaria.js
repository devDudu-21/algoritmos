function PesquisaBinaria(lista, item) {
    let baixo = 0
    let alto = lista.length - 1

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]
        if(chute === item) {
            return meio
        }
        if(chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
    }
    return undefined
}

minha_lista = Array.from({length: 1000000}, (_, i)=> i+ 1);
console.log(PesquisaBinaria(minha_lista, 756000))
console.log(PesquisaBinaria(minha_lista, -1))

