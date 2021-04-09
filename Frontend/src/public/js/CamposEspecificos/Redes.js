function novaRede(cont) {
    return `<hr> 
            <div style="padding-top: 0px; class="RedesSociais"> 
                <label style="padding-top: 10px;" for="nomeRedeSocial${cont.toString()}">Nome Rede social ${cont.toString()}   </label> 
                <input id="nomeRedeSocial${cont.toString()}" class="form-control"> 
                <label style="padding-top: 10px;" for="linkRedeSocial${cont.toString()}">Link Rede social ${cont.toString()}   </label> 
                <input id="linkRedeSocial${cont.toString()}" class="form-control"> 
                <div id="invFB-RedeSocial${cont.toString()}" style="display: none" class="invalid-feedback"> 
                        Para adicionar uma rede Social, os campos 'Nome' e 'Link' devem estar preenchidos 
                    </div>
            </div>`;
}

function novaRedeComValor(cont, valObj) {
    return `<hr> 
            <div style="padding-top: 0px; class="RedesSociais"> 
                <label style="padding-top: 10px;" for="nomeRedeSocial${cont.toString()}">Nome Rede social ${cont.toString()}  </label> 
                <input id="nomeRedeSocial${cont.toString()}" class="form-control" value="${valObj.nome ? valObj.nome : ""}"> 
                <label style="padding-top: 10px;" for="linkRedeSocial${cont.toString()}">Link Rede social ${cont.toString()}  </label> 
                <input id="linkRedeSocial${cont.toString()}" class="form-control"  value="${valObj.link ? valObj.link : ""}">
                <div id="invFB-RedeSocial${cont.toString()}" style="display: none" class="invalid-feedback"> 
                        Para adicionar uma rede Social, os campos 'Nome' e 'Link' devem estar preenchidos 
                    </div>
            </div>`;
}

function novaRedeComValorFirst(cont, valObj) {
    return `<div style="padding-top: 0px; class="RedesSociais"> 
                <label style="padding-top: 10px;" for="nomeRedeSocial${cont.toString()}">Nome Rede social ${cont.toString()}  </label> 
                <input id="nomeRedeSocial${cont.toString()}" class="form-control" value="${valObj.nome ? valObj.nome : ""}"> 
                <label style="padding-top: 10px;" for="linkRedeSocial${cont.toString()}">Link Rede social ${cont.toString()}  </label> 
                <input id="linkRedeSocial${cont.toString()}" class="form-control"  value="${valObj.link ? valObj.link : ""}">
                <div id="invFB-RedeSocial${cont.toString()}" style="display: none" class="invalid-feedback"> 
                        Para adicionar uma rede Social, os campos 'Nome' e 'Link' devem estar preenchidos 
                    </div>
            </div>`;
}


function addRede() {
    contRedesSociais++;
    
    $('#socials').append(novaRede(contRedesSociais));
}
function addRedeComValor(valObj) {
    contRedesSociaisUpdate++;
    
    $('#socialsUpdate').append(novaRedeComValor(contRedesSociaisUpdate, valObj));
}

function addRedeComValorFirst(valObj) {
    contRedesSociaisUpdate++;
    
    $('#socialsUpdate').append(novaRedeComValorFirst(contRedesSociaisUpdate, valObj));
}

function addRedeSemValorFirst() {
    contRedesSociaisUpdate++;
    var valObj = {
        link: "",
        nome:""
    }
    
    $('#socialsUpdate').append(novaRedeComValorFirst(contRedesSociaisUpdate, valObj));
}

function addRedeSemValor() {
    contRedesSociaisUpdate++;
    var valObj = {
        link: "",
        nome:""
    }
    
    $('#socialsUpdate').append(novaRedeComValor(contRedesSociaisUpdate, valObj));
}

function checkNItemsRedeSocial(id){
    var cont = id[id.length-1];
    var linkValue = document.getElementById('linkRedeSocial'+cont).value;
    var linkLen = linkValue.length;
    var fbEl = $('#invFB-RedeSocial'+cont);
    var nomeValue = document.getElementById('nomeRedeSocial'+cont).value;
    var nomeLen = nomeValue.length;

    if(linkLen >0 && nomeLen >0) {
        fbEl.hide();
        $(".swal2-confirm").attr('disabled', false);
    }
    if(linkLen >0 && nomeLen ==0){
        fbEl.show();
        $(".swal2-confirm").attr('disabled', 'disabled');

    }
    if(linkLen == 0 && nomeLen >0){
        fbEl.show();
        $(".swal2-confirm").attr('disabled', 'disabled');

    }
    if(linkLen == 0 && nomeLen == 0){
        fbEl.hide();
        $(".swal2-confirm").attr('disabled', false);
    }
}

$('.modal-redes-sociais').click(function () {
    var redes = JSON.parse(this.value);
    var html2 = `<hr>
    `
    redes.forEach(function (rede, index) {
        html2 +=
            '<div style="padding-top: 0px;" class="row">' +
                '<div style="padding-top: 0px;" class="col">' +
                    `<a target="_blank" href="${rede.link}">${rede.nome}</a>` +
                '</div>' +
            '</div>';
        if (index < redes.length - 1) html2 += '<hr>';
    });

    console.log(redes);
    swal.fire({
        title: "Redes Sociais",
        html: html2

    })
});