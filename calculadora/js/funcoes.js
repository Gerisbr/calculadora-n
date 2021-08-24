function Converter() {

    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    $.getJSON(url, function (dados) {

        const valorCotacaoDolar = dados.USDBRL.low;

        let valorEmDolar = document.querySelector("#valorEmDolar").value;

        //let valorEmDolarNumero = parseFloat (valorEmDolarTexto);

        let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);

        //let valorEmRealFixado = valorEmReal.toFixed(2);

        document.querySelector("#valorEmReal").value = valorEmReal;
    });
}


//Executar a função após carregar a página.
//window.onload = function(){
//    Converter();

/* 
Executar a fumção ao clicar no botão:
Estamos atribuindo a função converter ao evento click do botão
btConverter.
Esse botão foi pego do html através do document.getElementById

let botao = document.getElementById
("btConverter");

botao.onclick = function(){
    Converter();
}
*/

let botao = document.querySelector("#btConverter");

botao.onclick = function () {
    Converter();
}


/*

     CODIGO DO GUTO...

     
function Converter(){
    const enderecoAPI = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    let valorCotacaoDolar = 0;
    $.ajax({
        url: enderecoAPI,
        async: false,
        error: function(erro){
            console.log("Erro ao consultar API:");
            console.log(erro.responseJSON.message);
        },
        success: function(dados){
            valorCotacaoDolar = dados.USDBRL.low;
        }
    });
    let valorEmDolar = document.querySelector("#valorEmDolar").value;
    let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);
    document.querySelector("#valorEmReal").value = valorEmReal;
}
/*
Executar a função após carregar a página
window.onload = function(){
    Converter();
}
*/
/*
Executar a função ao clicar no botão:
Estamos atribuindo a função converter ao evento click do botão btConverter.
Esse botão foi pego do html através do document.getElementById
let botao = document.getElementById("btConverter");
botao.onclick = function(){
    Converter();
}
*/
/*
let botao = document.querySelector("#btConverter");
botao.onclick = function(){
    Converter();
}
*/