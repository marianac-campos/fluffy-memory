// ==== F U N C A O ==== //

// let x = "";
// console.log(x);
// x = "oi";

// declaracao de funcao //

// 1) declara a funcao
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a funcao (1 ou + vezes)

// imprimeTexto(soma());
// imprimeTexto("outro texto");

// tres formas de escrever funções //

function soma(){
  //outros codigos
  //varios console.log()
  return 2 + 2;
}

// console.log(soma())

// funcao mais elaborada: 

let listaFuncionarios = ['José', 'Ana', 'Luiza'];
let listaIdades = [22,19,33];

const exibeLista = (lista, descricao) => {
    e = '';

        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }

    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '));
console.log(exibeLista(listaIdades, "Idades: "));