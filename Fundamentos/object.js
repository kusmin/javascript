// Javascript é multiparadigma
// json = java script object notation é um formato textual
// object em java script é diferente de json

const prod1 = {} //par de chaves é uma forma literal de criar um objeto
prod1.nome = 'celular ultra mega' // chave nome, valor o outro
prod1.preco = 498.90
prod1['descontolegal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}


'{ "nome": "Camisa Polo", "preco": "79.90" }'


// prod2['descontolegal'] = 0.40
console.log(prod2)