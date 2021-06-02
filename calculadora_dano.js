let IdPers
let IdArma

function start() {


    var selPers = document.getElementsByClassName("pers");
    for (var i = 0; i < selPers.length; i++) {
        selPers[i].addEventListener("click", marcarselecao);
    };

    var selArma = document.getElementsByClassName("arma");
    for (var i = 0; i < selArma.length; i++) {
        selArma[i].addEventListener("click", marcarselecao);
    };

    var calc = document.getElementById("botao_dano")
    calc.addEventListener('click', calcularDano)


}

function marcarselecao(evento) {
    let ItemSel = evento.target.parentElement;

    let ItemSelId = ItemSel.getAttribute('id');

    const DivPaiSelecao = ItemSel.parentElement;
    const Filhos = DivPaiSelecao.children;
    for (var i = 0; i < Filhos.length; i++) {
        Filhos[i].classList.remove("selElementoComBorda");
    }

    ItemSel.classList.add('selElementoComBorda');

    if (DivPaiSelecao.classList.contains('selecao_pers')) {
        IdPers = ItemSelId ;

    } else {
        IdArma = ItemSelId;

    }


}

function calcularDano(evento) {
  

    if (IdPers && IdArma) {
        let vida = 0;
        let dano = 0;
        if (IdPers == 'div_pers_goblin') {
            vida = 30;
        }
        else if (IdPers == 'div_pers_orc') {
            vida = 20;
        }
        else {
            vida = 10;
        }
        if (IdArma == 'div_arma_soco') {

            dano = 10;
        }
        else if (IdArma == 'div_arma_arco') {
            if (vida == 10) {
                vida = 30
            }
            dano = 20;
        }
        else {

            dano = 30;
        }
        let resultado = vida - dano;

        var divResp = document.getElementById('resposta');
        var respostaTexto = document.createElement('h2');


        if (resultado > 0) {
            var resp = document.createTextNode('Você não derrotou o personagem.');
            respostaTexto.appendChild(resp);
            divResp.appendChild(respostaTexto);
        }
        else {
            var resp = document.createTextNode('Você derrotou o personagem, parabéns!');
            respostaTexto.appendChild(resp);
            divResp.appendChild(respostaTexto);
        }

    } else {

        var divResp = document.getElementById('resposta');
        var respostaTexto = document.createElement('h2');
        var resp = document.createTextNode('Selecione um personagem e uma arma.');
        respostaTexto.appendChild(resp);
        divResp.appendChild(respostaTexto);

    }



}