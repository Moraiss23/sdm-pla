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

console.log((() => {
    return "Renaldinhoooooo " + soma(10, 539012);
})())

console.log("\n\n================================================================================================================\n\n")

function idade(idade){
    return (`sua idade é ${idade}`)
}

altura = function(minhaAltura){
    return ("Minha altura é rrsrsrsrsrsrsrsrsrsrsrsrts " + minhaAltura)
}

pesofunc = (peso, pesoroupa) => { return ("Seu peso é " + (peso+pesoroupa))}

curso = (meuCurso) => { return ("Meu curso é rsrsrsrsrsrsrs tal : " + meuCurso)}

function chamatudo(funcao1, funcao2, funcao3, funcao4){
    console.log(`${funcao1}\n${funcao2}\n${funcao3}\n${funcao4}`)
}


chamatudo(idade(5243),altura("2 metros"),pesofunc(239, 2),curso("Computer cientifico"))


pensamento = ((nome) => {
    return `Meu nome é ${nome}`
})("Ronadlinho")

console.log(pensamento)

async function processarAsync(params, callback) {
    
    const resultado = await callback(params);

    console.log(resultado)


}