//Aula 5 de JS, objetos

//Criar objetos
let pessoa = {
    nome: 'Henrique',
    idade: 24,
    peso: 88.6,
    altura: 1.70,
    doador: false,
}

let produtos = {
    descricao :[],
    preco: []
}

const carros = {
    marca : ['Ford','Fiat','GM'],
    modelo : ['Ka','Uno','Corsa'],
    ano : [1999,2005,2010]
}

//Acessar propriedade com . ou com ['']

// pessoa.nome ou pessoa['nome']

//operações
let imc = pessoa.peso / ( pessoa.altura * pessoa.altura)

//limitação de casa decimal
console.log("IMC" +imc.toFixed(2))

//Alterar ou atualizar propriedade
pessoa.nome = "Henrique Segundo"
produtos.descricao = ['Arroz']
produtos.preco = ['4.99']

//usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão','Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

//funciona em const 
carros.marca = [...carros.marca, 'WV']