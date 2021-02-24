// par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'falll' //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereço: {
        logradouro: 'Rua jfdkajf',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)