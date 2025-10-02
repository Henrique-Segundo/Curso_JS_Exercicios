//Aula 4 Array

let produtos = ['Arroz','Feijão','Leite']
var codigos = Array(10,20,30)
let meses = ['Jan','Fev','Mar','Abr']

//Adicionar no final push = empurre
produtos.push('Açúcar')
codigos.push(40,50,60,70)
meses.push('Mai','Jun','Jul','07')

//Remover do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

//Adicionar no inicio unshift
produtos.unshift('Uva','Maçã')

//remover do inicio
produtos.shift()

//remover de uma posicao especifica splice (emendar)
//posicao inicial, quantos remover
codigos.splice(1,3)

//copiar array slice == fatiar
//posicao inicial, quantos remover
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

//ver tamanho do array lenght (comprimento)
meses.length
meses1.length
meses2.length

//spreed operator ...
let teste = [...produtos, 'Ovo', 'Pera']

var test = Array(10)
test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"