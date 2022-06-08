/*
function converter() {
    let valorInserido = document.getElementById("inserido");
    let inserido = valorInserido.value;

    let valorEmReal = parseFloat(inserido); // Vem pra evitar que o valor inserido venha com erros;


    // Para YUAN:

    let valorEmMoeda = valorEmYuan * 0.73;
    valorEmMoeda = valorEmMoeda.toFixed(2)
    console.log(valorEmMoeda);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em REAL é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}
*/

function converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumero = parseFloat(valor);

    var valorEmReal = valorEmDolarNumero * 4.94;
    valorEmReal = valorEmReal.toFixed(2)
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em REAL é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;

}