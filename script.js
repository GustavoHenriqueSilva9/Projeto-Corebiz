$(document).ready(function() {
    $.ajax({
            method: "GET", //Requisição GET na api
            url: "https://corebiz-test.herokuapp.com/api/v1/products",
        })
        .done(function(msg) {
            console.log("Requisição feita com succeso")
            console.log(msg)
        })
        .fail(function(jqXHR, textStatus, msg) {
            alert("Falha na requisição");
        });

});