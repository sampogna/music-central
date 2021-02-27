$(document).ready(function(){

    //Alternando entre as visoes
    $("#criar-conta-musico").show();
    $("#criar-conta-banda").hide();
    $("#criar-conta-industria").hide();





});

$(document).on("change", "#tipoCadastro",function() {
    if (this.value === "musico") {
        $("#criar-conta-musico").show();
        $("#criar-conta-banda").hide();
        $("#criar-conta-industria").hide();
    }
    else if ( this.value === "banda" ) {
        $("#criar-conta-musico").hide();
        $("#criar-conta-banda").show();
        $("#criar-conta-industria").hide();
    }
    else if (this.value === "industria" ) {
        $("#criar-conta-musico").hide();
        $("#criar-conta-banda").hide();
        $("#criar-conta-industria").show();
    }
});
