$(document).ready( function () {
    if($('#tabela')){
        $('#tabela').DataTable({
            "scrollX": true,
            "paging": false


        });
    }
} );

/* CRIAR VARS*/ 

var sendObj = {
    "ConfSenha": null,

    "Id": null,
    "Nome": null,
    "Email": null,
    "Senha": null,
    "Login": null,
    "Descricao": null,
    "Telefone": null,
    "Tipo": null,
    "Endereco": null,
    "RedesSociais": [],
    "Estilos": [],
    "Integrantes": [],

    "Instrumentos": null,
    "TipoIndustria": null,
    "Logradouro": null,
    "DataNascimento": null,
    "Criador":null
}

var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contIntegrantes = 1;
var criar = false;
const Estados =
    '<label style="padding-top: 10px;" for="estados">UF</label>' +
    '<select id="estados" class="form-control" name="estados-brasil">' +
    '<option selected value="">Selecione uma opção</option>' +
    '<option value="AC">Acre</option>' +
    '<option value="AL">Alagoas</option>' +
    '<option value="AP">Amapá</option>' +
    '<option value="AM">Amazonas</option>' +
    '<option value="BA">Bahia</option>' +
    '<option value="CE">Ceará</option>' +
    '<option value="DF">Distrito Federal</option>' +
    '<option value="ES">Espírito Santo</option>' +
    '<option value="GO">Goiás</option>' +
    '<option value="MA">Maranhão</option>' +
    '<option value="MT">Mato Grosso</option>' +
    '<option value="MS">Mato Grosso do Sul</option>' +
    '<option value="MG">Minas Gerais</option>' +
    '<option value="PA">Pará</option>' +
    '<option value="PB">Paraíba</option>' +
    '<option value="PR">Paraná</option>' +
    '<option value="PE">Pernambuco</option>' +
    '<option value="PI">Piauí</option>' +
    '<option value="RJ">Rio de Janeiro</option>' +
    '<option value="RN">Rio Grande do Norte</option>' +
    '<option value="RS">Rio Grande do Sul</option>' +
    '<option value="RO">Rondônia</option>' +
    '<option value="RR">Roraima</option>' +
    '<option value="SC">Santa Catarina</option>' +
    '<option value="SP">São Paulo</option>' +
    '<option value="SE">Sergipe</option>' +
    '<option value="TO">Tocantins</option>' +
    '</select>'

/* FIM CRIAR VARS*/ 


/* UPDATE VARS*/ 

var updateObj = {
    "ConfSenha": null,

    "Id": null,
    "Nome": null,
    "Email": null,
    "Senha": null,
    "Login": null,
    "Descricao": null,
    "Telefone": null,
    "Tipo": null,
    "Endereco": null,
    "RedesSociais": [],
    "Estilos": [],
    "Integrantes": [],

    "Instrumentos": null,
    "TipoIndustria": null,
    "Logradouro": null,
    "DataNascimento": null,
    "Criador":null
}


var contRedesSociaisUpdate = 0;
var contEstilosMusicaisUpdate = 0;
var contIntegrantesUpdate = 0;
var atualizar = false;

const EstadosUpdate =
    `<label style="padding-top: 10px;" for="estados">UF</label> 
    <select id="estadosUpdate" class="form-control" name="estados-brasil"> 
    <option selected value="">Selecione uma opção</option> 
    <option value="AC">Acre</option> 
    <option value="AL">Alagoas</option> 
    <option value="AP">Amapá</option> 
    <option value="AM">Amazonas</option> 
    <option value="BA">Bahia</option> 
    <option value="CE">Ceará</option> 
    <option value="DF">Distrito Federal</option> 
    <option value="ES">Espírito Santo</option> 
    <option value="GO">Goiás</option> 
    <option value="MA">Maranhão</option> 
    <option value="MT">Mato Grosso</option> 
    <option value="MS">Mato Grosso do Sul</option> 
    <option value="MG">Minas Gerais</option> 
    <option value="PA">Pará</option> 
    <option value="PB">Paraíba</option> 
    <option value="PR">Paraná</option> 
    <option value="PE">Pernambuco</option> 
    <option value="PI">Piauí</option> 
    <option value="RJ">Rio de Janeiro</option> 
    <option value="RN">Rio Grande do Norte</option> 
    <option value="RS">Rio Grande do Sul</option> 
    <option value="RO">Rondônia</option> 
    <option value="RR">Roraima</option> 
    <option value="SC">Santa Catarina</option> 
    <option value="SP">São Paulo</option> 
    <option value="SE">Sergipe</option> 
    <option value="TO">Tocantins</option> 
    </select>`;
/* FIM UPDATE VARS*/ 


/* REDES */
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


/* FIM REDES */

/* ESTILOS */
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


/* FIM ESTILOS */

/* INTEGRANTES */
function novoIntegrante(cont) {
    return `<hr> 
    <div style="padding-top: 0px; class="Integrantes"> 
        <label style="padding-top: 10px;">Nome Integrante ${cont.toString()}</label> 
        <input id="nomeIntegrante${cont.toString()}" class="form-control"> 
        <div id="invFB-Integrante${cont.toString()}" style="display: none" class="invalid-feedback"> 
                'Integrante' não pode conter apenas espaços.
            </div>
    </div>`;
}

function novoIntegranteComValor(cont, val) {
    return `<hr> 
    <div style="padding-top: 0px; class="Integrantes"> 
        <label style="padding-top: 10px;" for="nomeIntegrante${cont.toString()}">Nome Integrante ${cont.toString()}</label> 
        <input id="nomeIntegrante${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-Integrante${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Integrante' não pode conter apenas espaços.
        </div>
    </div>`
}

function novoIntegranteComValorFirst(cont, val) {
    return `<div style="padding-top: 0px; class="Integrantes"> 
        <label style="padding-top: 10px;" for="nomeIntegrante${cont.toString()}">Nome Integrante ${cont.toString()}</label> 
        <input id="nomeIntegrante${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-Integrante${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Instrumento' não pode conter apenas espaços.
        </div>
    </div>`
}

function addIntegrante() {
    contIntegrantes++;
    $('#integrantes').append(novoIntegrante(contIntegrantes));
}

function addIntegranteComValor(val) {
    contIntegrantesUpdate++;
    $('#integrantesUpdate').append(novoIntegranteComValor(contIntegrantesUpdate, val));
}

function addIntegranteComValorFirst(val) {
    contIntegrantesUpdate++;
    
    $('#integrantesUpdate').append(novoIntegranteComValorFirst(contIntegrantesUpdate, val));
}

function addIntegranteSemValor() {
    contIntegrantesUpdate++;
    var val = "";
    $('#integrantesUpdate').append(novoIntegranteComValor(contIntegrantesUpdate, val));
}

function addIntegranteSemValorFirst() {
    contIntegrantesUpdate++;
    var val = "";
    $('#integrantesUpdate').append(novoIntegranteComValorFirst(contIntegrantesUpdate, val));
}

function checkNItemsIntegrante(id){
    var cont = id[id.length-1];
    var fbEl = $('#invFB-Integrante'+cont);
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


/* FIM INSTRUMENTOS */

/* MODAIS */
async function modalCreate() {
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5', '6'],
        reverseButtons: true
    }).queue([
        {
            title: "Cadastro de Banda",
            width: "50rem",
            footer:'<span class="text-muted" >*Campos obrigatórios</span>',
            confirmButtonText: 'Next &rarr;',
            didOpen: ()=>{
                VerficadoresDeCampo(1)
            },
            html:
            `<div class="row">
            <div class="col">
                <label style="padding-top: 10px;" for="nome">Nome*</label> 
                <input  id="nome" class="form-control"> 
                <div id="invFB-Nome" style="display: none" class="invalid-feedback"> 
                
                </div> 
                <label style="padding-top: 10px;" for="email">Email*</label> 
                <input id="email" class="form-control"> 
                <div  id="invFB-Email" style="display: none" class="invalid-feedback"> 
                Formato de email inválido. 
                </div> 
                <label style="padding-top: 10px;" for="senha">Senha* &nbsp;<i onclick="showHide($(this))" title="Mostrar senha" class="fas fa-eye"></i></label> 
                <input type="password" id="senha" class="form-control"> 
                <label style="padding-top: 10px;" for="confSenha">Confirmar Senha* &nbsp;<i onclick="showHide($(this))" title="Mostrar senha" class="fas fa-eye"></i></label> 
                <input type="password" id="confSenha" class="form-control"> 
                <div id="invFB-ConfSenha" style="display: none" class="invalid-feedback"> Senha e Confirmação de Senha não coincidem. </div> 
                <label style="padding-top: 10px;" for="login">Nome de usuário*</label> 
                <input id="login" class="form-control"> 
                <div id="invFB-Login" style="display: none" class="invalid-feedback"> 
                
                </div>
            </div>
            <div class="col">
                <div class="alert alert-primary" role="alert" id="alert-senha">
                    <h4 class="alert-heading">Força da senha</h4>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos. </span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos.</span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números.</span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais.</span>
                    <br>
                </div>
            </div>
        </div>`,
            preConfirm: () => {
                sendObj.Nome = document.getElementById('nome').value;
                sendObj.Email = document.getElementById('email').value.toLowerCase();
                sendObj.Senha = document.getElementById('senha').value;
                sendObj.ConfSenha = document.getElementById('confSenha').value;
                sendObj.Login = document.getElementById('login').value;
            }
        },
        {
            title: "Informações básicas",
            footer:'<span class="text-muted" >*Campos obrigatórios</span>',
            html:
                `<label style="padding-top: 10px;" for="desc">Sobre você</label>
                <input  id="desc" class="form-control">
                <label style="padding-top: 10px;" for="telefone">Telefone</label>
                <input  id="telefone" class="form-control">`,
            confirmButtonText: 'Next &rarr;',
            preConfirm: () => {
                sendObj.Descricao = document.getElementById('desc').value;
                sendObj.Telefone = document.getElementById('telefone').value;
            }
        },
        {
            title: "Endereço",
            confirmButtonText: 'Next &rarr;',
            footer: '<span class="text-muted" id="invFB-Endereco"></span>',
            didOpen:()=>{ 
                VerficadoresDeCampo(3)
            },
            html:
                Estados +
                `<label style="padding-top: 10px;" for="cidade">Cidade</label>
                <input  id="cidade" class="form-control">`,
            preConfirm: () => {
                var e = document.getElementById("estados");

                var value = e.value;
                if (value == "") {
                    sendObj.Endereco = null;
                }
                else {
                    sendObj.Endereco = new Object();
                    sendObj.Endereco.Cidade = document.getElementById('cidade').value;
                    sendObj.Endereco.UF = e.value;
                    sendObj.Endereco.Estado = e.options[e.selectedIndex].text;
                }

            }
        },
        {
            title: "Redes Sociais",
            confirmButtonText: 'Next &rarr;',
            didOpen:()=>{ 
                VerficadoresDeCampo(4)
            },
            html:
            `<div id="socials"> 
                <div class="RedesSociais"> 
                    <label style="padding-top: 10px;" for="nomeRedeSocial${contRedesSociais.toString()}">Nome Rede social ${contRedesSociais.toString()}   </label> 
                    <input id="nomeRedeSocial${contRedesSociais.toString()}" class="form-control"> 
                    <label style="padding-top: 10px;" for="linkRedeSocial${contRedesSociais.toString()}">Link Rede social ${contRedesSociais.toString()}   </label> 
                    <input id="linkRedeSocial${contRedesSociais.toString()}" class="form-control"> 
                    <div id="invFB-RedeSocial${contRedesSociais.toString()}" style="display: none" class="invalid-feedback"> 
                        Para adicionar uma rede Social, os campos "Nome" e "Link" devem estar preenchidos 
                    </div>
                </div> 
            </div> 
            <br> 
            <button id="add" type="button" onClick="addRede()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {

                for (let index = 1; index <= contRedesSociais; index++) {
                    var nomeRedeSocial = document.getElementById("nomeRedeSocial" + index.toString());
                    var linkRedeSocial = document.getElementById("linkRedeSocial" + index.toString());
                    var obj = new Object();
                    obj.nome = nomeRedeSocial.value;
                    obj.link = linkRedeSocial.value;
                    if (!checkEmptyString(obj.nome) && !checkEmptyString(obj.link)) sendObj.RedesSociais.push(obj);
                }

            }

        },
        {
            title: "Estilos Musicais",
            confirmButtonText: 'Next &rarr;',
            didOpen:()=>{ 
                VerficadoresDeCampo(5)
            },
            html:
            `<div id="estilos"> 
                <div class="EstilosMusicais"> 
                    <label style="padding-top: 10px; for="nomeEstiloMusical${contEstilosMusicais.toString()}">Nome Estilo Musical ${contEstilosMusicais.toString()}</label> 
                    <input id="nomeEstiloMusical${contEstilosMusicais.toString()}" class="form-control"> 
                    </div> 
                    <div id="invFB-EstiloMusical${contRedesSociais.toString()}" style="display: none" class="invalid-feedback"> 
                        'Estilo' não pode conter apenas espaços.
                    </div>
                </div> 
            <br> 
            <button id="add" type="button" onClick="addEstilo()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {
                for (let index = 1; index <= contEstilosMusicais; index++) {
                    var nomeEstiloMusical = document.getElementById("nomeEstiloMusical" + index.toString());

                    if (!checkEmptyString(nomeEstiloMusical.value)) sendObj.Estilos.push(nomeEstiloMusical.value);
                }

            }
        },
        {
            title: "Integrantes",
            confirmButtonText: 'Enviar',
            didOpen:()=>{ 
                VerficadoresDeCampo(6)
            },
            html:
            `<div id="integrantes"> 
                <div class="Integrantes"> 
                    <label style="padding-top: 10px;" for="nomeIntegrante${contIntegrantes.toString()}">Nome Integrante ${contIntegrantes.toString()}</label> 
                    <input id="nomeIntegrante${contIntegrantes.toString()}" class="form-control"> 
                    <div id="invFB-Integrante${contIntegrantes.toString()}" style="display: none" class="invalid-feedback"> 
                        'Integrante' não pode conter apenas espaços.
                    </div>
                    </div> 
                </div> 
            <br> 
            <button id="add" type="button" onClick="addIntegrante()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {

                for (let index = 1; index <= contIntegrantes; index++) {
                    var nomeIntegrante = document.getElementById("nomeIntegrante" + index.toString());
                    if (!checkEmptyString(nomeIntegrante.value)) sendObj.Integrantes.push(nomeIntegrante.value);
                }
                criar = true;

            }

        },
    ]).then(() => {


        if (criar) {
            verificaDados();
            Swal.fire({
                title: 'Criando usuário...',
                icon: 'info',
                showConfirmButton: false
            }).then(
                $.ajax({
                    url: "/banda/create",
                    type: "POST",
                    data: sendObj,
                    dataType: "json",
                    success: function (resultAjax) {
                        Swal.fire({
                            title: 'Sucesso!',
                            icon: 'success',
                            text: resultAjax.result,
                            confirmButtonText: 'Ok'
                        }).then(() => {
                            resetInfos();
                            window.location.reload();

                        })


                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        var json = xhr.responseJSON;
                        var lstErros = json.mensagens;
                        if (lstErros.length > 0) {
                            var html2 = "<h4>" + json.retorno + "</h4>";
                            lstErros.forEach(element => {
                                html2 += element;
                                html2 += "<br>";
                            });

                            Swal.fire({
                                title: 'Erro!',
                                icon: 'error',
                                html: html2,
                                confirmButtonText: 'Ok'
                            })
                            resetInfos();
                        }
                    }
                })

            )

        }
        else {
            console.log("Processo de criação abortado, limpando campos...");
            resetInfos();
        }





    })
}



async function modalUpdate() {
    var data = updateObj;
    //console.log("data", data);
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5'],
        reverseButtons: true
    }).queue([
        {
            title: "Informações básicas",
            width: "50rem",
            footer:'<span class="text-muted" >*Campos obrigatórios</span>',
            confirmButtonText: 'Next &rarr;',
            didOpen: ()=>{
                $('#nomeUpdate').val(data.Nome);
                $('#emailUpdate').val(data.Email);
                $('#loginUpdate').val(data.Login);
                $('#descUpdate').val(data.Descricao);
                $('#telefoneUpdate').val(data.Telefone);
                VerficadoresDeCampoUpdate(1);
            },
            html:
            `<div class="row">
            <div class="col">

                <label style="padding-top: 10px;" for="nomeUpdate">Nome</label> 
                <input  id="nomeUpdate" class="form-control"> 
                <div id="invFB-NomeUpdate" style="display: none" class="invalid-feedback"> 
                </div> 

                <label style="padding-top: 10px;" for="emailUpdate">Email</label> 
                <input id="emailUpdate" class="form-control"> 
                <div  id="invFB-EmailUpdate" style="display: none" class="invalid-feedback"> 
                    Formato de email inválido. 
                </div>

                <label style="padding-top: 10px;" for="loginUpdate">Nome de usuário*</label> 
                <input id="loginUpdate" class="form-control"> 
                <div id="invFB-LoginUpdate" style="display: none" class="invalid-feedback"> 
                </div>
            </div>
            <div class="col">
                <label style="padding-top: 10px;" for="descUpdate">Sobre você</label>
                <input  id="descUpdate" class="form-control">

                <label style="padding-top: 10px;" for="telefoneUpdate">Telefone</label>
                <input  id="telefoneUpdate" class="form-control">

            </div>
        </div>`,
            preConfirm: () => {
                updateObj.Nome = document.getElementById('nomeUpdate').value;
                updateObj.Email = document.getElementById('emailUpdate').value.toLowerCase();
                updateObj.Login = document.getElementById('loginUpdate').value;
                updateObj.Descricao = document.getElementById('descUpdate').value;
                updateObj.Telefone = document.getElementById('telefoneUpdate').value;
                
            }
        },
        {
            title: "Endereço",
            confirmButtonText: 'Next &rarr;',
            footer: '<span class="text-muted" id="invFB-EnderecoUpdate"></span>',
            didOpen:()=>{ 
                var teste = data.Endereco;
                if(teste == null || teste == {}) {
                    $('#cidadeUpdate').val("");
                    $('#estadosUpdate').val("");
                }
                else{
                    if(teste.Cidade) $('#cidadeUpdate').val(teste.Cidade);
                    if(teste.UF) $('#estadosUpdate').val(teste.UF);
                    //{"Cidade":"dsdas","UF":"AC","Estado":"Acre"}
                }

                VerficadoresDeCampoUpdate(3)

                
            },
            html:
            EstadosUpdate +
                `<label style="padding-top: 10px;" for="cidadeUpdate">Cidade</label>
                <input  id="cidadeUpdate" class="form-control">`,
            preConfirm: () => {
                var e = document.getElementById("estadosUpdate");

                var value = e.value;
                if (value == "") {
                    updateObj.Endereco = null;
                }
                else {
                    updateObj.Endereco = new Object();
                    updateObj.Endereco.Cidade = document.getElementById('cidadeUpdate').value;
                    updateObj.Endereco.UF = e.value;
                    updateObj.Endereco.Estado = e.options[e.selectedIndex].text;
                }

            }
        },
        {
            title: "Redes Sociais",
            confirmButtonText: 'Next &rarr;',
            didOpen:()=>{

                var redes =  data.RedesSociais;
                console.log("redes", redes)
                if(redes == null || redes.length == 0) addRedeSemValorFirst();
                else{
                    redes.forEach((element, index) =>{

                        if(index == 0) addRedeComValorFirst(element);
                        else addRedeComValor(element);

                    })
                }

                VerficadoresDeCampoUpdate(4)
            },
            html:
            `<div id="socialsUpdate"> 
                
            </div> 
            <br> 
            <button id="add" type="button" onClick="addRedeSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {

                for (let index = 1; index <= contRedesSociais; index++) {
                    var nomeRedeSocial = document.getElementById("nomeRedeSocial" + index.toString());
                    var linkRedeSocial = document.getElementById("linkRedeSocial" + index.toString());
                    var obj = new Object();
                    obj.nome = nomeRedeSocial.value;
                    obj.link = linkRedeSocial.value;
                    if (!checkEmptyString(obj.nome) && !checkEmptyString(obj.link)) updateObj.RedesSociais.push(obj);
                }

            }
        },
        {
            title: "Estilos Musicais",
            confirmButtonText: 'Next &rarr;',
            didOpen:()=>{ 
                var estilos =  data.Estilos;
                if(estilos == null || estilos.length == 0) addEstiloSemValorFirst();
                else{

                    estilos.forEach((element, index) =>{

                        if(index == 0) addEstiloComValorFirst(element);
                        else addEstiloComValor(element);

                    })
                }
                VerficadoresDeCampoUpdate(5)
            },
            html:
            `<div id="estilosUpdate"> 
                
            </div> 
            <br> 
            <button id="add" type="button" onClick="addEstiloSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {
                for (let index = 1; index <= contEstilosMusicais; index++) {
                    var nomeEstiloMusical = document.getElementById("nomeEstiloMusical" + index.toString());

                    if (!checkEmptyString(nomeEstiloMusical.value)) updateObj.Estilos.push(nomeEstiloMusical.value);
                }

            }
        },
        {
            title: "Integrantes",
            confirmButtonText: 'Enviar',
            didOpen:()=>{ 
                var integrantes =  data.Integrantes;
                if(integrantes == null || integrantes.length == 0) addIntegrantesemValorFirst();
                else{

                    integrantes.forEach((element, index) =>{

                        if(index == 0) addIntegranteComValorFirst(element);
                        else addIntegranteComValor(element);

                    })
                }
                VerficadoresDeCampoUpdate(6)
            },
            html:
            `<div id="integrantesUpdate"> 
            </div> 
            <br> 
            <button id="add" type="button" onClick="addIntegranteSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {

                for (let index = 1; index <= contIntegrantes; index++) {
                    var nomeIntegrante = document.getElementById("nomeIntegrante" + index.toString());
                    if (!checkEmptyString(nomeIntegrante.value)) updateObj.Integrantes.push(nomeIntegrante.value);
                }
                atualizar = true;

            }

        },
    ]).then(() => {
        if (atualizar) {
            verificaDadosUpdate();
            console.log("after info", JSON.stringify(updateObj));
            Swal.fire({
                title: 'Atualizando usuário...',
                icon: 'info',
                showConfirmButton: false
            }).then(
                $.ajax({
                    url: "/banda/update",
                    type: "POST",
                    data: updateObj,
                    dataType: "json",
                    success: function (resultAjax,code,xhr) {
                        if(xhr.status == 200){
                            Swal.fire({
                                title: 'Sucesso!',
                                icon: 'success',
                                text: resultAjax.result,
                                confirmButtonText: 'Ok'
                            }).then(() => {
                                resetInfos();
                                window.location.reload();
    
                            })

                        }
                        if(xhr.status == 201){
                            Swal.fire({
                                title: 'Opa!',
                                icon: 'warning',
                                text: resultAjax.result,
                                confirmButtonText: 'Ok'
                            }).then(() => {
                                resetInfos();
                                window.location.reload();
    
                            })

                        }
                        


                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        var json = xhr.responseJSON;
                        var lstErros = json.mensagens;
                        if (lstErros.length > 0) {
                            var html2 = "<h4>" + json.retorno + "</h4>";
                            lstErros.forEach(element => {
                                html2 += element;
                                html2 += "<br>";
                            });

                            Swal.fire({
                                title: 'Erro!',
                                icon: 'error',
                                html: html2,
                                confirmButtonText: 'Ok'
                            })
                            resetInfos();
                        }
                    }
                })

            )

        }
        else {
            console.log("Processo de criação abortado, limpando campos...");
            resetInfos();
        }





    })
}








/* FIM MODAIS */

//////////////////////////////////////////////////////


$('#add, #add2').click(async function () {
    resetInfos();
    await modalCreate();
});




function deleteRegister(tr) {
    let id = tr.find('td')[0].innerText;
    Swal.fire({
        titleText: 'Tem certeza que deseja excluir a banda de id ' + id + '?',
        html: '<b>Essa ação é irreversível!<b>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: `Sim`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/banda/delete/" + id,
                type: "DELETE",
                success: function (resultAjax) {
                    Swal.fire({
                        title: 'Sucesso!',
                        icon: 'success',
                        text: resultAjax.result,
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        resetInfos();
                        window.location.reload();

                    })


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.responseJSON);
                    console.log(xhr.thrownError);
                    console.log(xhr.ajaxOptions);

                    var json = xhr.responseJSON;
                    var lstErros = json.mensagens;
                    if (lstErros.length > 0) {
                        var html2 = "<h4>" + json.retorno + "</h4>";
                        lstErros.forEach(element => {
                            html2 += element;
                            html2 += "<br>";
                        });

                        Swal.fire({
                            title: 'Erro!',
                            icon: 'error',
                            html: html2,
                            confirmButtonText: 'Ok'
                        })
                        resetInfos();
                    }
                }
            })
        } else if (result.isDenied) {
            Swal.fire('Usuário NÃO foi excluído', '', 'info')
        }
    })
}


async function editRegister(tr) {
    resetInfosUpdate();
    var id = tr.find('td')[0].innerText;
    
    Swal.fire({
        title: 'Atualizar a banda '+id+"?",
        showCancelButton: true,
        icon: 'warning',
        confirmButtonText: 'Sim',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return fetch(`/banda/${id}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(async (result) => {
        if (result.isConfirmed) {
            var mapeado = await updateMapper(result.value);
            await modalUpdate();
        }
    });

}

async function alterarSenha(tr) {
    var id = tr.find('td')[0].innerText;
    var psswObj = new Object();
    Swal.fire({
        title: 'Atualizar senha da banda '+id+"?",
        width: "50rem",
        footer:'<span class="text-muted" >*Campos obrigatórios</span>',
        didOpen: ()=>{
            VerficadoresDeCampo(7)
        },
        preConfirm: () => {
            psswObj.newPass = document.getElementById('novaSenha').value;
            psswObj.newPassConfirm = document.getElementById('novaConfSenha').value;
            psswObj.oldPass = document.getElementById('atualSenha').value;
            
            
        },
        html:
        `<div class="row">
            <div class="col">
                <label style="padding-top: 10px;" for="atualSenha">Senha Atual* &nbsp;<i onclick="showHideChange($(this))" title="Mostrar senha" class="fas fa-eye"></i></label> 
                <input type="password" id="atualSenha" class="form-control">     
                <div id="invFB-atualSenha" style="display: none" class="invalid-feedback"> Campo inválido. </div> 
                <br>
                <label style="padding-top: 10px;" for="novaSenha">Nova Senha* &nbsp;<i onclick="showHideChange($(this))" title="Mostrar senha" class="fas fa-eye"></i></label> 
                <input type="password" id="novaSenha" class="form-control"> 
                
                <label style="padding-top: 10px;" for="novaConfSenha">Confirmar Nova Senha* &nbsp;<i onclick="showHideChange($(this))" title="Mostrar senha" class="fas fa-eye"></i></label> 
                <input type="password" id="novaConfSenha" class="form-control"> 
                <div id="invFB-novaConfSenha" style="display: none" class="invalid-feedback"> Senha e Confirmação de Senha não coincidem. </div> 
            
            </div>
            <div class="col">
                <div class="alert alert-primary" role="alert" id="alert-senha">
                    <h4 class="alert-heading">Força da senha</h4>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos. </span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos.</span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números.</span>
                    <br>
                    <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais.</span>
                    <br>
                </div>
            </div>
        </div>`,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        reverseButtons: true,
        showLoaderOnConfirm: true
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/banda/password/" + id,
                type: "POST",
                data: psswObj,
                dataType: "json",
                success: function (resultAjax, code, xhr) {
                    if(xhr.status == 200){
                            Swal.fire({
                                title: 'Sucesso!',
                                icon: 'success',
                                text: resultAjax.result,
                                confirmButtonText: 'Ok'
                            }).then(() => {
                                resetInfos();
                                window.location.reload();
    
                            })

                        }
                        if(xhr.status == 201){
                            Swal.fire({
                                title: 'Opa!',
                                icon: 'warning',
                                text: resultAjax.result,
                                confirmButtonText: 'Ok'
                            }).then(() => {
                                resetInfos();
                                window.location.reload();
    
                            })

                        }


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.responseJSON);
                    console.log(xhr.thrownError);
                    console.log(xhr.ajaxOptions);

                    var json = xhr.responseJSON;
                    var lstErros = json.mensagens;
                    if (lstErros.length > 0) {
                        var html2 = "<h4>" + json.retorno + "</h4>";
                        lstErros.forEach(element => {
                            html2 += element;
                            html2 += "<br>";
                        });

                        Swal.fire({
                            title: 'Erro!',
                            icon: 'error',
                            html: html2,
                            confirmButtonText: 'Ok'
                        })
                        resetInfos();
                    }
                }
            })
        } else if (result.isDenied) {
            Swal.fire('Usuário NÃO foi excluído', '', 'info')
        }
    })

}

async function updateMapper(data){

    var camposLista = ["RedesSociais", "Estilos", "Integrantes"];
    var camposObj = ["Endereco"]
    await Object.keys(updateObj).map(v => updateObj[v] = data[v] != null ? data[v] : (camposLista.includes(v) ? [] : (camposObj.includes(v) ? {} : null) )  );
}



$('.modal-endereco').click(function () {
    var endereco = JSON.parse(this.value);
    var html2 = `<hr>
    <div class="row">
        <div class="col"><b>Estado</b></div>
        <div class="col">${endereco.Estado}</div>
        
    <div> 
    <hr>
    <div class="row">
        <div class="col"><b>UF</b></div>
        <div class="col">${endereco.UF}</div>
    <div>
    <hr>
    <div class="row">
        <div class="col"><b>Cidade</b></div>
        <div class="col">${endereco.Cidade}</div>
    <div>
    `;
    

    swal.fire({
        title: "Endereço",
        html: html2

    })

});

$('.modal-infos').click(function () {
    var infoObj = JSON.parse(this.value);
    console.log("infoObj", infoObj)
    var Descricao = infoObj.Descricao;
    var Telefone = infoObj.Telefone;
    var RedesSociais = infoObj.RedesSociais;
    var Estilos = infoObj.Estilos;
    var Integrantes = infoObj.Integrantes;
    var html2 = `<hr>
    <div class="row">
        <div class="col"><b>Descrição</b></div>
        <div class="col">${Descricao == null ? "Vazio" : Descricao}</div>
        
    <div> 
    <hr>
    <div class="row">
        <div class="col"><b>Telefone</b></div>
        <div class="col">${Telefone == null ? "Vazio" : Telefone}</div>
    <div>
    <hr>`;

    if(RedesSociais!=null){
        if(RedesSociais.length>0){

            var opts = "";

            RedesSociais.forEach(element => {
                opts+=`<a href="${element.link}" class="dropdown-item">${element.nome}</a>`;
            });
            
            html2+=`<div class="row">
                        <div class="col"><b>Redes Sociais</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    ${opts}
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        else{
            html2+=`<div class="row">
                        <div class="col"><b>Redes Sociais</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a href="#" class="dropdown-item text-italic">Vazio</a>
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        
    }
    else{
        html2+=`<div class="row">
                    <div class="col"><b>Redes Sociais</b></div>
                    <div class="col">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Visualizar
                                </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href="#" class="dropdown-item text-italic">Vazio</a>
                            </div>
                        </div>
                
                    </div>
                </div>`;
    }
    html2+='<hr>';
    if(Estilos!=null){
        if(Estilos.length>0){

            var opts = "";

            Estilos.forEach(element => {
                opts+=`<a href="#" class="dropdown-item">${element}</a>`;
            });
            
            html2+=`<div class="row">
                        <div class="col"><b>Estilos</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    ${opts}
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        else{
            html2+=`<div class="row">
                        <div class="col"><b>Estilos</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a href="#" class="dropdown-item text-italic">Vazio</a>
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        
    }
    else{
        html2+=`<div class="row">
                    <div class="col"><b>Estilos</b></div>
                    <div class="col">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Visualizar
                                </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href="#" class="dropdown-item text-italic">Vazio</a>
                            </div>
                        </div>
                
                    </div>
                </div>`;
    }
    html2+='<hr>';
    if(Integrantes !=null){
        if(Integrantes.length>0){

            var opts = "";

            Integrantes.forEach(element => {
                opts+=`<a href="#" class="dropdown-item">${element}</a>`;
            });
            
            html2+=`<div class="row">
                        <div class="col"><b>Integrantes</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    ${opts}
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        else{
            html2+=`<div class="row">
                        <div class="col"><b>Integrantes</b></div>
                        <div class="col">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Visualizar
                                    </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a href="#" class="dropdown-item text-italic">Vazio</a>
                                </div>
                            </div>
                    
                        </div>
                    </div>`;
        }
        
    }
    else{
        html2+=`<div class="row">
                    <div class="col"><b>Integrantes</b></div>
                    <div class="col">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Visualizar
                                </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href="#" class="dropdown-item text-italic">Vazio</a>
                            </div>
                        </div>
                
                    </div>
                </div>`;
    }



    
    swal.fire({
        title: "Informações Adicionais",
        showCloseButton: true,
        showConfirmButton: false,
        didOpen: ()=>{
            $(function() {
                $( ".dropdown, .dropdown-toggle, .dropdown-item" ).hover(
                    function(   ) {
                        var el = $(this).closest('div').find('.dropdown-menu');
                        el.show();
                        
                    }, function() {
                        var el = $(this).closest('div').find('.dropdown-menu');
                        setTimeout(function(){
                            
                            el.hide(); 

                        },500)


                        
                    }
                  );
            });
        },
        html: html2

    })

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    

}

function passwordStrenghHTML(tempSenha)
{
    var hasUpperCase = /[A-Z]/.test(tempSenha);
    var hasLowerCase = /[a-z]/.test(tempSenha);
    var hasNumbers = /\d/.test(tempSenha);
    var hasNonalphas = /\W/.test(tempSenha);
    var len = tempSenha.length;

    var lenOk = len>=8 && len <=20;
    
    var iconOk = '<i class="fas fa-check text-success "></i>';


    var iconNotOk = '<i class="fas fa-times text-danger "></i>';

    var html =  '<h4 class="alert-heading">Força da senha</h4>'+
    '<span style="float: left;" class="text-dark">'+lenOk? iconOk : iconNotOk+' Possui 8 a 20 caracteres. </span>'+
    '<br>'+
    '<span style="float: left;" class="text-dark">'+hasUpperCase? iconOk : iconNotOk+' Possui caracteres maiúsculos. </span>'+
    '<br>'+
    '<span style="float: left;" class="text-dark">'+hasLowerCase? iconOk : iconNotOk+' Possui caracteres minúsculos.</span>'+
    '<br>'+
    '<span style="float: left;" class="text-dark">'+hasNumbers? iconOk : iconNotOk+' Possui números.</span>'+
    '<br>'+
    '<span style="float: left;" class="text-dark">'+hasNonalphas? iconOk : iconNotOk+' Possui caracteres especiais.</span>'+
    '<br>'+
    '<hr>';
    console.log(html);
    $('#alert-senha').html(html);


}

function VerficadoresDeCampo(passo){

    var DadosBasicos1 = function(){
        //Dados Basicos 1
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.nome = eventTrigger("nome");
        oks.email = eventTrigger("email");
        oks.senha = eventTrigger("senha");
        oks.confSenha = eventTrigger("confSenha");
        oks.login =  eventTrigger("login");

        enableDisableConfirm(oks);

        $('#nome, #email, #senha, #confSenha, #login').on('change keyup paste',function () {
            oks[this.id] = eventTrigger(this.id);
            enableDisableConfirm(oks);
        });
    }
    
    var Endereco = function(){
        // Endereço 
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.endereco = eventTrigger("endereco");

        enableDisableConfirm(oks);

        $('#estados, #cidade').on('change keyup paste',function () {
            oks["endereco"] = eventTrigger("endereco");
            enableDisableConfirm(oks);
        });
    }
    
    var RedesSociais = function(){
        //Redes Sociais
    
        var targetNode = document.getElementById('socials');
        
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeRedeSocial], *[id*=linkRedeSocial]').on('change keyup paste',function () {
            checkNItemsRedeSocial(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeRedeSocial], *[id*=linkRedeSocial]').on('change keyup paste',function () {
                        checkNItemsRedeSocial(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    var EstilosMusicais = function(){
        //Estilos Musicais
    
        var targetNode = document.getElementById('estilos');
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeEstiloMusical]').on('change keyup paste',function () {
            checkNItemsEstiloMusical(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeEstiloMusical]').on('change keyup paste',function () {
                        checkNItemsEstiloMusical(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    var Integrantes = function(){
        //Instrumentos Musicais
    
        var targetNode = document.getElementById('integrantes');
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeIntegrante]').on('change keyup paste',function () {
            checkNItemsIntegrante(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeIntegrante]').on('change keyup paste',function () {
                        checkNItemsInstrumentoMusical(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    var AlterarSenha = function(){
        //Dados Basicos 1
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.novaSenha = eventTrigger("novaSenha");
        oks.novaConfSenha = eventTrigger("novaConfSenha");
        oks.atualSenha =  eventTrigger("atualSenha");

        enableDisableConfirm(oks);

        $('#novaSenha, #novaConfSenha, #atualSenha').on('change keyup paste',function () {
            oks[this.id] = eventTrigger(this.id);
            enableDisableConfirm(oks);
        });
    }
    switch(passo)
    {
        case 1:
            DadosBasicos1();
            break;

        case 2:
            DadosBasicos2();
            break;

        case 3:
            Endereco()
            break;

        case 4:
            RedesSociais()
            break;

        case 5:
            EstilosMusicais()
            break;
        case 6:
            Integrantes();
            break;
        case 7:
            AlterarSenha();
            break;
    }   
}

function eventTrigger(id){

    switch(id)
    {
        case "nome":
            var lenNome = document.getElementById('nome').value.length;
            var el = $('#invFB-Nome');
            if(lenNome<5 || lenNome>20){
                if(lenNome<5){
                    el.html("Nome muito curto.");
                    el.show();
                
                }
                if(lenNome>20){
                    el.html("Nome muito grande");
                    el.show();
                }
                return false;
            }
            else{
                el.html("");
                el.hide();
                return true;
            }

            case "email":
            var tempEmail = document.getElementById('email').value;
            if(validateEmail(tempEmail)){
                $('#invFB-Email').hide();
                return true;
            }
            else{
                $('#invFB-Email').show();
                return false;
            }

        case "senha":
            var tempSenha = document.getElementById('senha').value;
            var hasUpperCase = /[A-Z]/.test(tempSenha);
            var hasLowerCase = /[a-z]/.test(tempSenha);
            var hasNumbers = /\d/.test(tempSenha);
            var hasNonalphas = /\W/.test(tempSenha);
            var len = tempSenha.length;

            var lenOk = len>=8 && len <=20;

            var html =  '<h4 class="alert-heading">Força da senha</h4>';
            if(lenOk)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui 8 a 20 caracteres. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>';
            }
            html+='<br>';
            if(hasUpperCase)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres maiúsculos.. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos.. </span>';
            }
            html+='<br>';
            if(hasLowerCase)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres minúsculos. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos. </span>';
            }
            html+='<br>';
            if(hasNumbers)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui números. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números. </span>';
            }
            html+='<br>';
            if(hasNonalphas)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres especiais. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais. </span>';
            }
            html+='<br>';
            $('#alert-senha').html(html);
            if(hasUpperCase == true && hasLowerCase == true && hasNumbers == true && hasNonalphas == true && lenOk) return true;
            else return false;

        case "confSenha":
            var tempSenha = document.getElementById('senha').value;
            var tempConfSenha = document.getElementById('confSenha').value;
            if(tempSenha == tempConfSenha){
                $('#invFB-ConfSenha').hide();
                return true;
            }
            else{
                $('#invFB-ConfSenha').show();
                return false;

            }

        case "login":
            var tempLogin = document.getElementById('login').value;
            var tempLoginLen = tempLogin.length;
            var hasNonalphas = /\W/.test(tempLogin);
            var containsSpace = tempLogin.includes(" ");
            var el = $('#invFB-Login');
            var html = `<ul>`;

            if(tempLoginLen>20 || tempLoginLen<8 || hasNonalphas || containsSpace)
            {

                if(tempLoginLen<8) 
                {
                    html+= "<li>Nome de usuário muito curto. Mínimo de 8 caracteres.</li>";
                }

                if(tempLoginLen>20) 
                {
                    html+= "<li>Nome de usuário muito longo. Máximo de 20 caracteres.</li>";
                }

                if(hasNonalphas || containsSpace) 
                {
                    html+= "<li>Nome de usuário inválido. Contém caracteres inválidos.</li>";
                }
                
                html+= "</ul>";
                el.html(html);
                el.show();
                return false;
            }
            {
                
                el.html("");
                el.hide();
                return true;
            }
        
        case "dataNasc":
            var dataValue = document.getElementById('dataNasc').value;
            var dataLen = dataValue.length;
    
            if(dataLen>0){
                if(dataValue[0] == "0") return false;
                else return true; 
            }
            else{
                return false;
            }
        case "endereco":
            var estadoValue = document.getElementById('estados').value;
            var estadoLen = estadoValue.length;
    
            var cidadeValue = document.getElementById('cidade').value;
            var cidadeLen = cidadeValue.length;
    
            if(estadoLen >0 && cidadeLen >0) {
                $('#invFB-Endereco').text("");
                return true;
            }
            if(estadoLen >0 && cidadeLen ==0){
                var texto = "É necessário preencher o campo 'Cidade'.";
                $('#invFB-Endereco').text(texto);
                return false;
    
            }
            if(estadoLen == 0 && cidadeLen >0){
                var texto = "É necessário selecionar uma opção em 'Estado'.";
                $('#invFB-Endereco').html(texto);
                return false;
    
            }
            if(estadoLen == 0 && cidadeLen == 0){
                $('#invFB-Endereco').text("");
                return true;
            }
        case "novaSenha":
            var tempSenha = document.getElementById('novaSenha').value;
            var hasUpperCase = /[A-Z]/.test(tempSenha);
            var hasLowerCase = /[a-z]/.test(tempSenha);
            var hasNumbers = /\d/.test(tempSenha);
            var hasNonalphas = /\W/.test(tempSenha);
            var len = tempSenha.length;

            var lenOk = len>=8 && len <=20;

            var html =  '<h4 class="alert-heading">Força da senha</h4>';
            if(lenOk)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui 8 a 20 caracteres. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>';
            }
            html+='<br>';
            if(hasUpperCase)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres maiúsculos.. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos.. </span>';
            }
            html+='<br>';
            if(hasLowerCase)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres minúsculos. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos. </span>';
            }
            html+='<br>';
            if(hasNumbers)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui números. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números. </span>';
            }
            html+='<br>';
            if(hasNonalphas)
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres especiais. </span>';
            }
            else
            {
                html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais. </span>';
            }
            html+='<br>';
            $('#alert-senha').html(html);
            if(hasUpperCase == true && hasLowerCase == true && hasNumbers == true && hasNonalphas == true && lenOk) return true;
            else return false;
       
       case "novaConfSenha":
        var tempSenha = document.getElementById('novaSenha').value;
        var tempnovaConfSenha = document.getElementById('novaConfSenha').value;
        console.log(tempSenha);
        console.log(tempnovaConfSenha);

        if(tempSenha == tempnovaConfSenha && tempSenha != "" && tempnovaConfSenha != ""){
            $('#invFB-novaConfSenha').hide();
            return true;
        }
        else{
            $('#invFB-novaConfSenha').show();
            return false;

        }

        case "atualSenha":
            var tempSenha = document.getElementById('atualSenha').value;
            
            if(tempSenha.length>=8 && tempSenha.length<=20){
                $('#invFB-atualSenha').hide();
                return true;
            }
            else{
                $('#invFB-atualSenha').show();
                return false;
    
            }

    }


}





function showHide(){
    if($('#confSenha').prop('type') == "text") $('#confSenha').prop('type', 'password');
    else $('#confSenha').prop('type', 'text');

    if($('#senha').prop('type') == "text") $('#senha').prop('type', 'password');
    else $('#senha').prop('type', 'text');
   
    $("i[title='Mostrar senha']").each(function() {
        
        if($( this ).attr("class") == "fas fa-eye"){
            $( this ).removeClass("fas fa-eye");
            $( this ).addClass("fas fa-eye-slash");
        }
        else{
            $( this ).removeClass("fas fa-eye-slash");
            $( this ).addClass("fas fa-eye");
        }
        
    });

    // $("i[title='Mostrar senha']").each(element => {
    //     if(element.css("class") == "fas fa-eye") element.css("class","fas fa-eye-slash");
    //     else element.css("class","fas fa-eye");
    // });

   
    
}

function showHideChange(){
    if($('#atualSenha').prop('type') == "text") $('#atualSenha').prop('type', 'password');
    else $('#atualSenha').prop('type', 'text');

    if($('#novaSenha').prop('type') == "text") $('#novaSenha').prop('type', 'password');
    else $('#novaSenha').prop('type', 'text');

    if($('#novaConfSenha').prop('type') == "text") $('#novaConfSenha').prop('type', 'password');
    else $('#novaConfSenha').prop('type', 'text');
   
    $("i[title='Mostrar senha']").each(function() {
        
        if($( this ).attr("class") == "fas fa-eye"){
            $( this ).removeClass("fas fa-eye");
            $( this ).addClass("fas fa-eye-slash");
        }
        else{
            $( this ).removeClass("fas fa-eye-slash");
            $( this ).addClass("fas fa-eye");
        }
        
    });    
}

function resetInfosUpdate() {

    updateObj = {
        "ConfSenha": null,

        "Id": null,
        "Nome": null,
        "Email": null,
        "Senha": null,
        "Login": null,
        "Descricao": null,
        "Telefone": null,
        "Tipo": null,
        "Endereco": null,
        "RedesSociais": [],
        "Estilos": [],
        "Integrantes": [],

        "Instrumentos": null,
        "TipoIndustria": null,
        "Logradouro": null,
        "DataNascimento": null,
        "Criador":null
    }

    contRedesSociaisUpdate = 0;
    contEstilosMusicaisUpdate = 0;
    contIntegrantesUpdate = 0;

    atualizar = false;

}

function resetInfos() {

    sendObj = {
        "ConfSenha": null,

        "Id": null,
        "Nome": null,
        "Email": null,
        "Senha": null,
        "Login": null,
        "Descricao": null,
        "Telefone": null,
        "Tipo": null,
        "Endereco": null,
        "RedesSociais": [],
        "Estilos": [],
        "Integrantes": [],

        "Instrumentos": null,
        "TipoIndustria": null,
        "Logradouro": null,
        "DataNascimento": null,
        "Criador":null
    }

    
    contRedesSociais = 1;
    contEstilosMusicais = 1;
    contIntegrantes = 1;

    criar = false;

}

function showInfo() {
    console.log("sendObj = ", sendObj);
}

function showInfoUpdate() {
    console.log("updateObj show info= ", updateObj);
}

function checkEmptyString(str) {
    if (str == null) return true;
    const emptyStringRegex = /^\s+$/;
    if (str.length == 0) return true;
    var isEmptyString = emptyStringRegex.test(str);
    return isEmptyString;
}


function verificaDadosObr() {
    var lstErros = [];
    var html2 = "";
    if (checkEmptyString(sendObj.Nome)) lstErros.push("'Nome' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(sendObj.Email)) lstErros.push("'Email' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(sendObj.Senha)) lstErros.push("'Senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(sendObj.ConfSenha)) lstErros.push("'Confirmação de senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(sendObj.Login)) lstErros.push("'Nome de usuário' é obrigatório e deve ser preenchido.");
    if (sendObj.Senha != sendObj.ConfSenha) lstErros.push("'Senhas' e 'Confirmação de senha' são diferentes.");
    if (lstErros.length > 0) {
        lstErros.forEach(element => {
            html2 += element;
            html2 += "<br>";
        });

        Swal.fire({
            title: 'Erro!',
            icon: 'error',
            html: html2,
            confirmButtonText: 'Ok'
        })
        resetInfos();
    }
}

function verificaDados() {
    sendObj.Descricao = checkEmptyString(sendObj.Descricao) ? null : sendObj.Descricao;
    sendObj.Telefone = checkEmptyString(sendObj.Telefone) ? null : sendObj.Telefone;
    sendObj.Endereco = typeof (sendObj.Endereco) == "object" ? sendObj.Endereco : null;
    sendObj.RedesSociais = sendObj.RedesSociais.length > 0 ? sendObj.RedesSociais : null;
    sendObj.Estilos = sendObj.Estilos.length > 0 ? sendObj.Estilos : null;
    sendObj.Integrantes = sendObj.Integrantes.length > 0 ? sendObj.Integrantes : null;
    showInfo();
    return sendObj;
}

function verificaDadosUpdate() {
    showInfoUpdate();
    updateObj.Descricao = checkEmptyString(updateObj.Descricao) ? null : updateObj.Descricao;
    updateObj.Telefone = checkEmptyString(updateObj.Telefone) ? null : updateObj.Telefone;
    updateObj.Endereco = typeof (updateObj.Endereco) == "object" ? updateObj.Endereco : null;
    updateObj.RedesSociais = updateObj.RedesSociais.length > 0 ? updateObj.RedesSociais : null;
    updateObj.Estilos = updateObj.Estilos.length > 0 ? updateObj.Estilos : null;
    updateObj.Integrantes = updateObj.Integrantes.length > 0 ? updateObj.Integrantes : null;

    return updateObj;
}

function verificaDadosObrUpdate() {
    var lstErros = [];
    var html2 = "";
    if (checkEmptyString(updateObj.Nome)) lstErros.push("'Nome' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(updateObj.Email)) lstErros.push("'Email' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(updateObj.Senha)) lstErros.push("'Senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(updateObj.ConfSenha)) lstErros.push("'Confirmação de senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(updateObj.Login)) lstErros.push("'Nome de usuário' é obrigatório e deve ser preenchido.");
    if (updateObj.Senha != updateObj.ConfSenha) lstErros.push("'Senhas' e 'Confirmação de senha' são diferentes.");
    if (lstErros.length > 0) {
        lstErros.forEach(element => {
            html2 += element;
            html2 += "<br>";
        });

        Swal.fire({
            title: 'Erro!',
            icon: 'error',
            html: html2,
            confirmButtonText: 'Ok'
        })
        resetInfos();
    }
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

function allTrue(obj)
{
    for(var o in obj)
        if(!obj[o]) return false;
    
    return true;
}

function enableDisableConfirm(oks)
{
    console.log(oks);
    if(allTrue(oks)) $(".swal2-confirm").attr('disabled', false);
    else $(".swal2-confirm").attr('disabled', 'disabled');
}


function VerficadoresDeCampoUpdate(passo){

    var DadosBasicos1 = function(){
        //Dados Basicos 1
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.nome = eventTriggerUpdate("nomeUpdate");
        oks.email = eventTriggerUpdate("emailUpdate");
        oks.login =  eventTriggerUpdate("loginUpdate");

        enableDisableConfirm(oks);

        $('#nomeUpdate, #emailUpdate, #senhaUpdate, #confSenhaUpdate, #loginUpdate').on('change keyup paste',function () {
            oks[this.id] = eventTriggerUpdate(this.id);
            enableDisableConfirm(oks);
        });
    }

    // var DadosBasicos2 = function(){
    //     //Dados Basicos 2
    //     $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
    //     var oks = new Object();
        
    //     oks.dataNasc = eventTriggerUpdate("dataNascUpdate");

    //     enableDisableConfirm(oks);

    //     $('#dataNascUpdate').on('change keyup paste',function () {
    //         oks[this.id] = eventTriggerUpdate(this.id);
    //         enableDisableConfirm(oks);
    //     });
    // }
    
    var Endereco = function(){
        // Endereço 
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.endereco = eventTriggerUpdate("enderecoUpdate");

        enableDisableConfirm(oks);

        $('#estadosUpdate, #cidadeUpdate').on('change keyup paste',function () {
            console.log("entrou2");
            oks["endereco"] = eventTriggerUpdate("enderecoUpdate");
            enableDisableConfirm(oks);
        });
    }
    
    var RedesSociais = function(){
        //Redes Sociais
    
        var targetNode = document.getElementById('socialsUpdate');
        
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeRedeSocial], *[id*=linkRedeSocial]').on('change keyup paste',function () {
            checkNItemsRedeSocial(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeRedeSocial], *[id*=linkRedeSocial]').on('change keyup paste',function () {
                        checkNItemsRedeSocial(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    var EstilosMusicais = function(){
        //Estilos Musicais
    
        var targetNode = document.getElementById('estilosUpdate');
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeEstiloMusical]').on('change keyup paste',function () {
            checkNItemsEstiloMusical(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeEstiloMusical]').on('change keyup paste',function () {
                        checkNItemsEstiloMusical(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    var Integrantes = function(){
        //Instrumentos Musicais
    
        var targetNode = document.getElementById('integrantesUpdate');
        var config = { attributes: false, childList: true };
        
        $('*[id*=nomeIntegrante]').on('change keyup paste',function () {
            checkNItemsInstrumentoMusical(this.id)
        });
    
    
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    $('*[id*=nomeIntegrante]').on('change keyup paste',function () {
                        checkNItemsInstrumentoMusical(this.id);
                    });
                }
                else if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
                else{
                    console.log("bataaa")
                }
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    switch(passo)
    {
        case 1:
            DadosBasicos1();
            break;

        case 2:
            DadosBasicos2();
            break;

        case 3:
            Endereco()
            break;

        case 4:
            RedesSociais()
            break;

        case 5:
            EstilosMusicais()
            break;
        case 6:
            Integrantes();
            break;
    }   
}

function eventTriggerUpdate(id){

    switch (id) {
        case "nomeUpdate":
            var lenNome = document.getElementById('nomeUpdate').value.length;
            var el = $('#invFB-NomeUpdate');
            if (lenNome < 5 || lenNome > 20) {
                if (lenNome < 5) {
                    el.html("Nome muito curto.");
                    el.show();

                }
                if (lenNome > 20) {
                    el.html("Nome muito grande");
                    el.show();
                }
                return false;
            }
            else {
                el.html("");
                el.hide();
                return true;
            }

        case "emailUpdate":
            var tempEmail = document.getElementById('emailUpdate').value;
            if (validateEmail(tempEmail)) {
                $('#invFB-EmailUpdate').hide();
                return true;
            }
            else {
                $('#invFB-EmailUpdate').show();
                return false;
            }

        case "loginUpdate":
            var tempLogin = document.getElementById('loginUpdate').value;
            var tempLoginLen = tempLogin.length;
            var hasNonalphas = /\W/.test(tempLogin);
            var containsSpace = tempLogin.includes(" ");
            var el = $('#invFB-LoginUpdate');
            var html = `<ul>`;

            if (tempLoginLen > 20 || tempLoginLen < 8 || hasNonalphas || containsSpace) {

                if (tempLoginLen < 8) {
                    html += "<li>Nome de usuário muito curto. Mínimo de 8 caracteres.</li>";
                }

                if (tempLoginLen > 20) {
                    html += "<li>Nome de usuário muito longo. Máximo de 20 caracteres.</li>";
                }

                if (hasNonalphas || containsSpace) {
                    html += "<li>Nome de usuário inválido. Contém caracteres inválidos.</li>";
                }

                html += "</ul>";
                el.html(html);
                el.show();
                return false;
            }
            {

                el.html("");
                el.hide();
                return true;
            }

        case "dataNascUpdate":
            var dataValue = document.getElementById('dataNascUpdate').value;
            var dataLen = dataValue.length;

            if (dataLen > 0) {
                if (dataValue[0] == "0") return false;
                else return true;
            }
            else {
                return false;
            }
        case "enderecoUpdate":
            console.log("entrou");
            var estadoValue = document.getElementById('estadosUpdate').value;
            var estadoLen = estadoValue.length;

            var cidadeValue = document.getElementById('cidadeUpdate').value;
            var cidadeLen = cidadeValue.length;

            if (estadoLen > 0 && cidadeLen > 0) {
                $('#invFB-EnderecoUpdate').text("");
                return true;
            }
            if (estadoLen > 0 && cidadeLen == 0) {
                var texto = "É necessário preencher o campo 'Cidade'.";
                $('#invFB-EnderecoUpdate').text(texto);
                return false;

            }
            if (estadoLen == 0 && cidadeLen > 0) {
                var texto = "É necessário selecionar uma opção em 'Estado'.";
                $('#invFB-EnderecoUpdate').html(texto);
                return false;

            }
            if (estadoLen == 0 && cidadeLen == 0) {
                $('#invFB-EnderecoUpdate').text("");
                return true;
            }

    }


}