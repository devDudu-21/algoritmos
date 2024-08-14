function PesquisaSimples(lista, item){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]===item) {
            return i;
        }
    }
    return undefined;
}

minha_lista = Array.from({length: 1000000}, (_, i)=> i+ 1);
console.log(PesquisaSimples(minha_lista, 756000))
console.log(PesquisaSimples(minha_lista, -1))



