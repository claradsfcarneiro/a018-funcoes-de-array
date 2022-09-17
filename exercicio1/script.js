const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = function(obj) {
    Object.keys(obj).forEach((key) => {
        obj[key] = obj[key].toUpperCase();
    });
    return obj;
}

const textoCorrido = function(obj) {
    return `${obj.nome}, ${obj.profissao}, ${obj.username}, ${obj.senha}`
}

function caixaAltaOuCorrrido(obj, funcao) {
    console.log(funcao(obj));
}

caixaAltaOuCorrrido(objeto, caixaAlta);
caixaAltaOuCorrrido(objeto, textoCorrido);