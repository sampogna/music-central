function novoEstilo(cont) {
    return `<hr> 
            <div style="padding-top: 0px;" class="EstilosMusicais"> 
                <label style="padding-top: 10px;" for="nomeEstiloMusical${cont.toString()}">Nome Estilo Musical ${cont.toString()}</label> 
                <input id="nomeEstiloMusical${cont.toString()}" class="form-control"> 
                <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
            </div>`;
}

function novoEstiloComValor(cont, val) {
    debugger;
    return `<hr> 
    <div style="padding-top: 0px;" class="EstilosMusicais"> 
        <label style="padding-top: 10px;" for="nomeEstiloMusical${cont.toString()}">Nome Estilo Musical ${cont.toString()}</label> 
        <input id="nomeEstiloMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
    </div>`;
}

function novoEstiloComValorFirst(cont, val) {
    return `<div style="padding-top: 0px;" class="EstilosMusicais"> 
        <label style="padding-top: 10px; for="nomeEstiloMusical${cont.toString()}">Nome Estilo Musical ${cont.toString()}</label> 
        <input id="nomeEstiloMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
    </div>`;
}

function addEstiloComValor(val) {
    contEstilosMusicaisUpdate++;
    $('#estilosUpdate').append(novoEstiloComValor(contEstilosMusicaisUpdate, val));
}

function addEstiloComValorFirst(val) {
    contEstilosMusicaisUpdate++;    
    $('#estilosUpdate').append(novoEstiloComValorFirst(contEstilosMusicaisUpdate, val));
}

function addEstiloSemValor() {
    debugger;
    contEstilosMusicaisUpdate++;
    var val = "";
    $('#estilosUpdate').append(novoEstiloComValor(contEstilosMusicaisUpdate, val));
}

function addEstiloSemValorFirst() {
    contEstilosMusicaisUpdate++;
    var val = "";
    $('#estilosUpdate').append(novoEstiloComValorFirst(contEstilosMusicaisUpdate, val));
}

function addEstilo() {
    contEstilosMusicais++;
    $('#estilos').append(novoEstilo(contEstilosMusicais));
}

function checkNItemsEstiloMusical(id){
    var cont = id[id.length-1];
    var fbEl = $('#invFB-EstiloMusical'+cont);
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

$('.modal-estilos').click(function () {
    var estilos = JSON.parse(this.value);
    var html2 = '<hr>';

    estilos.forEach(function (estilo, index) {
        html2 +=
            '<div style="padding-top: 0px;" class="row">' +
                '<div style="padding-top: 0px;" class="col">' +
                    `${estilo}` +
                '</div>' +
            '</div>';
        if (index < estilos.length - 1) html2 += '<hr>';
    });

    swal.fire({
        title: "Estilos",
        html: html2

    })
});