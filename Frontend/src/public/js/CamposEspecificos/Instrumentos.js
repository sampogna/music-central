function novoInstrumento(cont) {
    return `<hr> 
    <div style="padding-top: 0px; class="InstrumentosMusicais"> 
        <label style="padding-top: 10px;">Nome Instrumento Musical ${cont.toString()}</label> 
        <input id="nomeInstrumentoMusical${cont.toString()}" class="form-control"> 
        <div id="invFB-InstrumentoMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
                'Instrumento' não pode conter apenas espaços.
            </div>
    </div>`;
}

function novoInstrumentoComValor(cont, val) {
    return `<hr> 
    <div style="padding-top: 0px; class="InstrumentosMusicais"> 
        <label style="padding-top: 10px;" for="nomeInstrumentoMusical${cont.toString()}">Nome Instrumento Musical ${cont.toString()}</label> 
        <input id="nomeInstrumentoMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-InstrumentoMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Instrumento' não pode conter apenas espaços.
        </div>
    </div>`
}

function novoInstrumentoComValorFirst(cont, val) {
    return `<div style="padding-top: 0px; class="InstrumentosMusicais"> 
        <label style="padding-top: 10px;" for="nomeInstrumentoMusical${cont.toString()}">Nome Instrumento Musical ${cont.toString()}</label> 
        <input id="nomeInstrumentoMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-InstrumentoMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Instrumento' não pode conter apenas espaços.
        </div>
    </div>`
}

function addInstrumento() {
    contInstrumentos++;
    $('#instrumentos').append(novoInstrumento(contInstrumentos));
}

function addInstrumentoComValor(val) {
    contInstrumentosUpdate++;
    $('#instrumentosUpdate').append(novoInstrumentoComValor(contInstrumentosUpdate, val));
}

function addInstrumentoComValorFirst(val) {
    contInstrumentosUpdate++;
    
    $('#instrumentosUpdate').append(novoInstrumentoComValorFirst(contInstrumentosUpdate, val));
}

function addInstrumentoSemValor() {
    contInstrumentosUpdate++;
    var val = "";
    $('#instrumentosUpdate').append(novoInstrumentoComValor(contInstrumentosUpdate, val));
}

function addInstrumentoSemValorFirst() {
    contInstrumentosUpdate++;
    var val = "";
    $('#instrumentosUpdate').append(novoInstrumentoComValorFirst(contInstrumentosUpdate, val));
}

function checkNItemsInstrumentoMusical(id){
    var cont = id[id.length-1];
    var fbEl = $('#invFB-InstrumentoMusical'+cont);
    var nomeValue = document.getElementById(id).value;
    var nomeLen = nomeValue.length;

    if(nomeLen >0 && !checkEmptyString(nomeValue)) {
        fbEl.hide();
        $(".swal2-confirm").attr('disabled', false);
    }

    if(nomeLen == 0) {
        fbEl.hide();
        $(".swal2-confirm").attr('disabled', false);
    }

    if(nomeLen >0 && checkEmptyString(nomeValue)){
        fbEl.show();
        $(".swal2-confirm").attr('disabled', 'disabled');

    }
}

$('.modal-instrumentos').click(function () {
    var instrumentos = JSON.parse(this.value);
    var html2 = '<hr>';

    instrumentos.forEach(function (instrumento, index) {
        html2 +=
            '<div style="padding-top: 0px;" class="row">' +
                '<div style="padding-top: 0px;" class="col">' +
                    `${instrumento}` +
                '</div>' +
            '</div>';
        if (index < instrumentos.length - 1) html2 += '<hr>';
    });

    swal.fire({
        title: "Instrumentos",
        html: html2

    })

});