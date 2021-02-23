const escola = "cod3r"

console.log(escola.charAt(4)) //pegar um caractere a partir do indice
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //pega o valor dentro da tabela ascII
console.log(escola.indexOf('3')) // pesquisa se tem o caractere na string
console.log(escola.substring(1))
console.log(escola.substring(2, 3))

console.log('escola'.concat(escola).concat("!")) //concatenar strings
console.log(escola.replace(3, 'e')) //substituir o char especificado, depois olhar regex
console.log('Ana, Maria, Pedro'.split(',')) //gerar array a partir de uma seperação especificada