// O break nao influencia em um bloco do tipo if, influencia no swith, for e white, o continue influencia dentro de um laço for e while
// as duas palavras causam desvio de fluxo, o break sai do laço corrente, o continue para a atual e vai para a proxima
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) {
                break externo
            }
            console.log(`Par = ${a}, ${b}`)
        }
    }