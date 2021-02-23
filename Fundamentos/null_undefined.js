// quando faço uma tribuição do tipo primitivo passo a copia por valor

let valor
console.log(valor)

valor = null
console.log(valor)
    // console.log(valor.toString()) erro!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
    // delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)