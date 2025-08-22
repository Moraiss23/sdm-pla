//função declarativa
function saudacao(nome) {
    return `Olá, ${nome}!`
}

console.log(saudacao("buno"))

//funcão anônima (sem nome)

const soma = function(a, b){
    return a + b;
}

console.log(soma(5, 10))