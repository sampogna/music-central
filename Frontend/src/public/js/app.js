$(document).ready( function () {
    if($('#tabela')){
        $('#tabela').DataTable({
            "scrollX": true,
            "paging": false


        });
    }
    
    
} );
var sendObj = {
    "ConfSenha": null,
    "Id": null,
    "Nome": null,
    "Email": null,
    "Senha": null,
    "Login": null,
    "Descricao": null,
    "Telefone": null,
    "DataNascimento": null,
    "Status": null,
    "Tipo": null,
    "Endereco": null,
    "RedesSociais": [],
    "Estilos": [],
    "Instrumentos": [],
    "Criador": null,
    "Integrantes": null,
    "TipoIndustria": null,
    "Logradouro": null
}

var updateObj = {
    "ConfSenha": null,
    "Id": null,
    "Nome": null,
    "Email": null,
    "Senha": null,
    "Login": null,
    "Descricao": null,
    "Telefone": null,
    "DataNascimento": null,
    "Status": null,
    "Tipo": null,
    "Endereco": null,
    "RedesSociais": [],
    "Estilos": [],
    "Instrumentos": [],
    "Criador": null,
    "Integrantes": null,
    "TipoIndustria": null,
    "Logradouro": null
}
var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contInstrumentos = 1;
var criar = false;

var contRedesSociaisUpdate = 0;
var contEstilosMusicaisUpdate = 0;
var contInstrumentosUpdate = 0;
var atualizar = false;

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

function novoEstilo(cont) {
    return `<hr> 
            <div style="padding-top: 0px; class="EstilosMusicais"> 
                <label style="padding-top: 10px; for="nomeEstiloMusical${cont.toString()}">Nome Estilo Musical ${cont.toString()}</label> 
                <input id="nomeEstiloMusical${cont.toString()}" class="form-control"> 
                <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
            </div>`;
}

function novoEstiloComValor(cont, val) {
    return `<hr> 
    <div style="padding-top: 0px; class="EstilosMusicais"> 
        <label style="padding-top: 10px;" for="nomeEstiloMusical${cont.toString()}>Nome Estilo Musical ${cont.toString()}</label> 
        <input id="nomeEstiloMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
    </div>`;
}

function novoEstiloComValorFirst(cont, val) {
    return `<div style="padding-top: 0px; class="EstilosMusicais"> 
        <label style="padding-top: 10px; for="nomeEstiloMusical${cont.toString()}">Nome Estilo Musical ${cont.toString()}</label> 
        <input id="nomeEstiloMusical${cont.toString()}" class="form-control" value="${val ? val : ""}"> 
        <div id="invFB-EstiloMusical${cont.toString()}" style="display: none" class="invalid-feedback"> 
            'Estilo' não pode conter apenas espaços.
        </div>
    </div>`;
}

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

function addRede() {
    contRedesSociais++;
    
    $('#socials').append(novaRede(contRedesSociais));
}
function addRedeComValor(valObj) {
    contRedesSociaisUpdate++;
    
    $('#socials').append(novaRedeComValor(contRedesSociaisUpdate, valObj));
}

function addRedeComValorFirst(valObj) {
    contRedesSociaisUpdate++;
    
    $('#socials').append(novaRedeComValorFirst(contRedesSociaisUpdate, valObj));
}

function addRedeSemValorFirst() {
    contRedesSociaisUpdate++;
    var valObj = {
        link: "",
        nome:""
    }
    
    $('#socials').append(novaRedeComValorFirst(contRedesSociaisUpdate, valObj));
}

function addRedeSemValor() {
    contRedesSociaisUpdate++;
    var valObj = {
        link: "",
        nome:""
    }
    
    $('#socials').append(novaRedeComValor(contRedesSociaisUpdate, valObj));
}

function addEstiloComValor(val) {
    contEstilosMusicaisUpdate++;
    $('#estilos').append(novoEstiloComValor(contEstilosMusicaisUpdate, val));
}

function addEstiloComValorFirst(val) {
    contEstilosMusicaisUpdate++;
    $('#estilos').append(novoEstiloComValorFirst(contEstilosMusicaisUpdate, val));
}

function addEstiloSemValor() {
    contEstilosMusicaisUpdate++;
    var val = "";
    $('#estilos').append(novoEstiloComValor(contEstilosMusicaisUpdate, val));
}

function addEstiloSemValorFirst() {
    contEstilosMusicaisUpdate++;
    var val = "";
    $('#estilos').append(novoEstiloComValorFirst(contEstilosMusicaisUpdate, val));
}

function addEstilo() {
    contEstilosMusicais++;
    $('#estilos').append(novoEstilo(contEstilosMusicais));
}

function addInstrumento() {
    contInstrumentos++;
    $('#instrumentos').append(novoInstrumento(contInstrumentos));
}

function addInstrumentoComValor(val) {
    contInstrumentosUpdate++;
    $('#instrumentos').append(novoInstrumentoComValor(contInstrumentosUpdate, val));
}

function addInstrumentoComValorFirst(val) {
    contInstrumentosUpdate++;
    
    $('#instrumentos').append(novoInstrumentoComValorFirst(contInstrumentosUpdate, val));
}

function addInstrumentoSemValor() {
    contInstrumentosUpdate++;
    var val = "";
    $('#instrumentos').append(novoInstrumentoComValor(contInstrumentosUpdate, val));
}

function addInstrumentoSemValorFirst() {
    contInstrumentosUpdate++;
    var val = "";
    $('#instrumentos').append(novoInstrumentoComValorFirst(contInstrumentosUpdate, val));
}






async function modalCreate() {
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5', '6']
    }).queue([
        {
            title: "Informações básicas",
            width: "50rem",
            footer:'<span class="text-muted" >*Campos obrigatórios</span>',
            html:
                '<div class="row">'+
                    '<div class="col">'+
                        '<label style="padding-top: 10px;" for="nome">Nome*</label>' +
                        '<input  id="nome" class="form-control">' +
                        '<div id="invFB-Nome" style="display: none" class="invalid-feedback">' +
                        'Nome muito curto ou muito longo.' +
                        '</div>' +
                        '<label style="padding-top: 10px;" for="email">Email*</label>' +
                        '<input id="email" class="form-control">' +
                        '<div  id="invFB-Email" style="display: none" class="invalid-feedback">' +
                        'Formato de email inválido.' +
                        '</div>' +
                        '<label style="padding-top: 10px;" for="senha">Senha*</label>' +
                        '<input id="senha" class="form-control">' +
                        '<div  id="invFB-Senha" style="display: none" class="invalid-feedback">' +
                        'Senha insegura ou inválida.' +
                        '</div>' +
                        '<label style="padding-top: 10px;" for="confSenha">Confirmação de senha*</label>' +
                        '<input id="confSenha" class="form-control" data-toggle="tooltip" data-placement="right" title="Tooltip on right">' +
                        '<div id="invFB-ConfSenha" style="display: none" class="invalid-feedback"> Senha e Confirmação de Senha não coincidem. </div>' +
                        '<label style="padding-top: 10px;" for="login">Nome de usuário*</label>' +
                        '<input id="login" class="form-control">' +
                        '<div id="invFB-Login" style="display: none" class="invalid-feedback">' +
                        'Login muito curto ou muito longo.' +
                        '</div>'+
                    '</div>'+
                    '<div class="col">'+
                        '<div class="alert alert-primary" role="alert" id="alert-senha">'+
                            '<h4 class="alert-heading">Força da senha</h4>'+
                            '<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>'+
                            '<br>'+
                            '<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos. </span>'+
                            '<br>'+
                            '<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos.</span>'+
                            '<br>'+
                            '<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números.</span>'+
                            '<br>'+
                            '<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais.</span>'+
                            '<br>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                
            confirmButtonText: 'Next &rarr;',
            didOpen: () => {
                //$(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
                var okNome = false;
                var okEmail = false;
                var okSenha = false;
                var okConfSenha = false;
                var okLogin = false;
                
                $('#nome').on('change keyup paste',function () {
                    var lenNome = document.getElementById('nome').value.length;
                    if(lenNome>10 && lenNome<100){
                        $('#invFB-Nome').hide();
                        okNome = true;
                    }
                    else{
                        $('#invFB-Nome').show();
                        okNome = false;
                    }
                });

                $('#email').on('change keyup paste',function () {
                    var tempEmail = document.getElementById('email').value;
                    console.log("email", validateEmail(tempEmail)   );
                    if(validateEmail(tempEmail)){
                        $('#invFB-Email').hide();
                        okEmail = true;
                    }
                    else{
                        $('#invFB-Email').show();
                        okEmail = false;
                    }
                    
                });

                $('#senha').on('change keyup paste',function () {
                    var tempSenha = this.value;
                    
                    var hasUpperCase = /[A-Z]/.test(tempSenha);
                    var hasLowerCase = /[a-z]/.test(tempSenha);
                    var hasNumbers = /\d/.test(tempSenha);
                    var hasNonalphas = /\W/.test(tempSenha);
                    var len = tempSenha.length;

                    var lenOk = len>=8 && len <=20;

                    if(hasUpperCase == true && hasLowerCase == true && hasNumbers == true && hasNonalphas == true && lenOk) okSenha = true;
                    else okSenha = false;

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
                    console.log(html);
                    $('#alert-senha').html(html);
            
                });

                $('#confSenha').on('change keyup paste',function () {
                    var tempSenha = document.getElementById('senha').value;
                    var tempConfSenha = document.getElementById('confSenha').value;
                    if(tempSenha == tempConfSenha){
                        $('#invFB-ConfSenha').hide();
                        okConfSenha = true;
                    }
                    else{
                        $('#invFB-ConfSenha').show();
                        okConfSenha = false;

                    }
                });

                $('#login').on('change keyup paste',function () {
                    var tempLoginLen = document.getElementById('login').value.length;
                    if(tempLoginLen>=8 && tempLoginLen<=20){
                        $('#invFB-Login').hide();
                        okLogin = true;
                    }
                    else{
                        $('#invFB-Login').show();
                        okLogin = false;
                    }
                });

                $('#nome, #email, #senha, #confSenha, #login').on('change keyup paste',function () {
                    
                    if(okNome == true && okEmail == true && okSenha == true && okConfSenha == true && okLogin == true) $(".swal2-confirm").attr('disabled', false);
                    else $(".swal2-confirm").attr('disabled', 'disabled');
                });

            },
            preConfirm: () => {
                sendObj.Nome = document.getElementById('nome').value;
                sendObj.Email = document.getElementById('email').value.toLowerCase();
                sendObj.Senha = document.getElementById('senha').value;
                sendObj.ConfSenha = document.getElementById('confSenha').value;
                sendObj.Login = document.getElementById('login').value;

                // $('#confSenha').keydown(function() {

                // });

                // if(sendObj.Senha != sendObj.ConfSenha){
                //     document.getElementById('confSenha').classList.add('was-validated');
                //     $(".swal2-confirm").attr('disabled', 'disabled');
                // }  

            }
        },
        {
            title: "Informações básicas",
            footer:'<span class="text-muted" >*Campos obrigatórios</span>',
            didOpen: () => {
                //$(".swal2-confirm").attr('disabled', 'disabled'); TODO remover comentario

                $('#dataNasc').on('change keyup paste',function () {
                    var dataValue = document.getElementById('dataNasc').value;
                    var dataLen = dataValue.length;

                    if(dataLen>0){
                        if(dataValue[0] == "0") $(".swal2-confirm").attr('disabled', 'disabled');
                        else $(".swal2-confirm").attr('disabled', false);
                        
                    }
                    else{
                        $(".swal2-confirm").attr('disabled', 'disabled');
                    }
                });

            },
            html:
                '<label style="padding-top: 10px;" for="desc">Sobre você</label>' +
                '<input  id="desc" class="form-control">' +
                '<label style="padding-top: 10px;" for="telefone">Telefone</label>' +
                '<input  id="telefone" class="form-control">' +
                '<label style="padding-top: 10px;" for="dataNasc">Data de Nascimento*</label>' +
                '<input type="date" id="dataNasc" class="form-control">',
            confirmButtonText: 'Next &rarr;',
            preConfirm: () => {
                sendObj.Descricao = document.getElementById('desc').value;
                sendObj.Telefone = document.getElementById('telefone').value;
                sendObj.DataNascimento = document.getElementById('dataNasc').value;
                //verificaDadosObr(); //TODO remover comentario
            }
        },
        {
            title: "Endereço",
            confirmButtonText: 'Next &rarr;',
            footer: '<span class="text-muted" id="invFB-Endereco"></span>',
            didOpen: () => {
                
                $('#estados, #cidade').on('change keyup paste',function () {
                    var estadoValue = document.getElementById('estados').value;
                    var estadoLen = estadoValue.length;

                    var cidadeValue = document.getElementById('cidade').value;
                    var cidadeLen = cidadeValue.length;

                    if(estadoLen >0 && cidadeLen >0) {
                        $('#invFB-Endereco').text("");
                        $(".swal2-confirm").attr('disabled', false);
                    }
                    if(estadoLen >0 && cidadeLen ==0){
                        var texto = "É necessário preencher o campo 'Cidade'.";
                        $('#invFB-Endereco').text(texto);
                        $(".swal2-confirm").attr('disabled', 'disabled');

                    }
                    if(estadoLen == 0 && cidadeLen >0){
                        var texto = "É necessário selecionar uma opção em 'Estado'.";
                        $('#invFB-Endereco').html(texto);
                        $(".swal2-confirm").attr('disabled', 'disabled');

                    }
                    if(estadoLen == 0 && cidadeLen == 0){
                        $('#invFB-Endereco').text("");
                        $(".swal2-confirm").attr('disabled', false);
                    }
                });

            },
            html:
                Estados +
                '<label style="padding-top: 10px;" for="cidade">Cidade</label>' +
                '<input  id="cidade" class="form-control">',
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
            didOpen: () => {
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
            didOpen: () => {
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
            title: "Instrumentos",
            confirmButtonText: 'Next &rarr;',
            didOpen: () => {
                var targetNode = document.getElementById('instrumentos');
                var config = { attributes: false, childList: true };
                
                $('*[id*=nomeInstrumentoMusical]').on('change keyup paste',function () {
                    checkNItemsInstrumentoMusical(this.id)
                });


                var callback = function(mutationsList) {
                    for(var mutation of mutationsList) {
                        if (mutation.type == 'childList') {
                            $('*[id*=nomeInstrumentoMusical]').on('change keyup paste',function () {
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
                

            },
            html:
            `<div id="instrumentos"> 
                <div class="InstrumentosMusicais"> 
                    <label style="padding-top: 10px;" for="nomeInstrumentoMusical${contInstrumentos.toString()}">Nome Instrumento Musical ${contInstrumentos.toString()}</label> 
                    <input id="nomeInstrumentoMusical${contInstrumentos.toString()}" class="form-control"> 
                    <div id="invFB-InstrumentoMusical${contInstrumentos.toString()}" style="display: none" class="invalid-feedback"> 
                        'Instrumento' não pode conter apenas espaços.
                    </div>
                    </div> 
                </div> 
            <br> 
            <button id="add" type="button" onClick="addInstrumento()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>`,
            preConfirm: () => {

                for (let index = 1; index <= contInstrumentos; index++) {
                    var nomeInstrumento = document.getElementById("nomeInstrumentoMusical" + index.toString());
                    if (!checkEmptyString(nomeInstrumento.value)) sendObj.Instrumentos.push(nomeInstrumento.value);
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
                    url: "/musico/create",
                    type: "POST",
                    data: sendObj,
                    dataType: "json",
                    success: function (resultAjax) {
                        Swal.fire({
                            title: 'Sucesso!',
                            icon: 'success',
                            text: "Usuário criado com sucesso!",
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



$('#add, #add2').click(async function () {
    resetInfos();
    await modalCreate();
});




function deleteRegister(tr) {
    let id = tr.find('td')[0].innerText;
    Swal.fire({
        titleText: 'Tem certeza que deseja excluir o usuário de id ' + id + '?',
        html: '<b>Essa ação é irreversível!<b>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: `Sim`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/musico/delete/" + id,
                type: "DELETE",
                success: function (resultAjax) {
                    Swal.fire({
                        title: 'Sucesso!',
                        icon: 'success',
                        text: "Usuário excluído com sucesso!",
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
        title: 'Atualizar o usuário '+id+"?",
        showCancelButton: true,
        confirmButtonText: 'Sim',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return fetch(`/musico/${id}`)
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
            
          Swal.fire({
            html: JSON.stringify(result.value)
          }).then(async () =>{

            await modalUpdate();

          });
        }
    });

}

async function updateMapper(data){

    
    await Object.keys(updateObj).map(v => updateObj[v] = data[v]);
}

// async function modalUpdate() {
//     var data = updateObj;
//     Swal.mixin({
//         title: `Atualizar usuário ${data.Id}`,
//         showCancelButton: true,
//         progressSteps: ['1', '2', '3', '4', '5', '6'],
//         didOpen:()=>{
//             //$(".swal2-confirm").attr('disabled', 'true');
//         }
//     }).queue([
//         {
//             title: "Informações básicas",
//             width: "50rem",
//             html:
//             `<div class="row">
//                 <div class="col">
//                     <label style="padding-top: 10px;" for="nome">Nome</label>
//                     <input  id="nome" class="form-control" value="${data.Nome}">
//                     <div id="invFB-Nome" style="display: none" class="invalid-feedback">
//                     Nome muito curto ou muito longo.
//                     </div>
//                     <label style="padding-top: 10px;" for="email">Email</label>
//                     <input id="email" class="form-control" value="${data.Email}">
//                     <div  id="invFB-Email" style="display: none" class="invalid-feedback">
//                     Formato de email inválido.
//                     </div>
//                     <label style="padding-top: 10px;" for="senha">Senha</label>
//                     <input id="senha" class="form-control" value="${data.Senha}">
//                     <div  id="invFB-Senha" style="display: none" class="invalid-feedback">
//                     Senha insegura ou inválida.
//                     </div>
//                     <label style="padding-top: 10px;" for="confSenha">Confirmação de senha</label>
//                     <input id="confSenha" class="form-control" value="${data.Senha}">
//                     <div id="invFB-ConfSenha" style="display: none" class="invalid-feedback"> Senha e Confirmação de Senha não coincidem. </div>
//                     <label style="padding-top: 10px;" for="login">Nome de usuário</label>
//                     <input id="login" class="form-control" value="${data.Login}">
//                     <div id="invFB-Login" style="display: none" class="invalid-feedback">
//                     Login muito curto ou muito longo.
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="alert alert-primary" role="alert">
//                         <h4 class="alert-heading">Força da senha</h4>
//                         <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>
//                         <br>
//                         <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos. </span>
//                         <br>
//                         <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos.</span>
//                         <br>
//                         <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números.</span>
//                         <br>
//                         <span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais.</span>
//                         <br>
//                     </div>
//                 </div>
//             </div>`,
                
//             confirmButtonText: 'Next &rarr;',
//             didOpen: () => {
//                 //$(".swal2-confirm").attr('disabled', 'disabled');
                
//                 $('#nome').on('change keyup paste',function () {
//                     var lenNome = document.getElementById('nome').value.length;
//                     console.log(lenNome);
//                     if(lenNome>10 && lenNome<100){
//                         $('#invFB-Nome').hide();
//                         //$(".swal2-confirm").attr('disabled', false);
//                     }
//                     else{
//                         $('#invFB-Nome').show();
//                         //$(".swal2-confirm").attr('disabled', 'disabled');
//                     }
//                 });

//                 $('#email').on('change keyup paste',function () {
//                     var tempEmail = document.getElementById('email').value;
//                     console.log("email", validateEmail(tempEmail)   );
//                     if(validateEmail(tempEmail)){
//                         $('#invFB-Email').hide();
//                         //$(".swal2-confirm").attr('disabled', false);
//                     }
//                     else{
//                         $('#invFB-Email').show();
//                         //$(".swal2-confirm").attr('disabled', 'disabled');
//                     }
                    
//                 });

//                 $('#senha').on('change keyup paste',function () {
//                     var tempSenha = this.value;
                    
//                     var hasUpperCase = /[A-Z]/.test(tempSenha);
//                     var hasLowerCase = /[a-z]/.test(tempSenha);
//                     var hasNumbers = /\d/.test(tempSenha);
//                     var hasNonalphas = /\W/.test(tempSenha);
//                     var len = tempSenha.length;

//                     var lenOk = len>=8 && len <=20;
                    
//                     var iconOk = '<i class="fas fa-check text-success "></i>';


//                     var iconNotOk = '<i class="fas fa-times text-danger "></i>';

//                     var html =  '<h4 class="alert-heading">Força da senha</h4>';
//                     if(lenOk)
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui 8 a 20 caracteres. </span>';
//                     }
//                     else
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui 8 a 20 caracteres. </span>';
//                     }
//                     html+='<br>';
//                     if(hasUpperCase)
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres maiúsculos.. </span>';
//                     }
//                     else
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres maiúsculos.. </span>';
//                     }
//                     html+='<br>';
//                     if(hasLowerCase)
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres minúsculos. </span>';
//                     }
//                     else
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres minúsculos. </span>';
//                     }
//                     html+='<br>';
//                     if(hasNumbers)
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui números. </span>';
//                     }
//                     else
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui números. </span>';
//                     }
//                     html+='<br>';
//                     if(hasNonalphas)
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-check text-success "></i> Possui caracteres especiais. </span>';
//                     }
//                     else
//                     {
//                         html+='<span style="float: left;" class="text-dark"><i class="fas fa-times text-danger "></i> Possui caracteres especiais. </span>';
//                     }
//                     html+='<br>';
//                     $('#alert-senha').html(html);
            
//                 });

//                 $('#confSenha').on('change keyup paste',function () {
//                     var tempSenha = document.getElementById('senha').value;
//                     var tempConfSenha = document.getElementById('confSenha').value;
//                     if(tempSenha == tempConfSenha){
//                         $('#invFB-ConfSenha').hide();
//                         //$(".swal2-confirm").attr('disabled', false);
//                     }
//                     else{
//                         $('#invFB-ConfSenha').show();
//                         //$(".swal2-confirm").attr('disabled', 'disabled');
//                     }
//                 });

//                 $('#login').on('change keyup paste',function () {
//                     var tempSenha = document.getElementById('senha').value;
//                     var tempConfSenha = document.getElementById('confSenha').value;
//                     if(tempSenha == tempConfSenha){
//                         $('#invFB-ConfSenha').hide();
//                         //$(".swal2-confirm").attr('disabled', false);
//                     }
//                     else{
//                         $('#invFB-ConfSenha').show();
//                         //$(".swal2-confirm").attr('disabled', 'disabled');
//                     }
//                 });
//             },
//             preConfirm: () => {
//                 sendObj.Nome = document.getElementById('nome').value;
//                 sendObj.Email = document.getElementById('email').value.toLowerCase();
//                 sendObj.Senha = document.getElementById('senha').value;
//                 sendObj.ConfSenha = document.getElementById('confSenha').value;
//                 sendObj.Login = document.getElementById('login').value;

//                 // $('#confSenha').keydown(function() {

//                 // });

//                 // if(sendObj.Senha != sendObj.ConfSenha){
//                 //     document.getElementById('confSenha').classList.add('was-validated');
//                 //     //$(".swal2-confirm").attr('disabled', 'disabled');
//                 // }  

//             }
//         },
//         {
//             title: "Informações básicas",
//             html:
//             `<label style="padding-top: 10px;" for="desc">Sobre você</label> 
//             <input  id="desc" class="form-control" value="${data.Descricao ? data.Descricao : ""}"> 
//             <label style="padding-top: 10px;" for="telefone">Telefone</label> 
//             <input  id="telefone" class="form-control" value="${data.Telefone ? data.Telefone : ""}"> 
//             <label style="padding-top: 10px;" for="dataNasc">Data de Nascimento</label> 
//             <input type="date" id="dataNasc" class="form-control"value="${data.DataNascimento.split("-").reverse().join("-")}">`,
//             confirmButtonText: 'Next &rarr;',
//             preConfirm: () => {
//                 sendObj.Descricao = document.getElementById('desc').value;
//                 sendObj.Telefone = document.getElementById('telefone').value;
//                 sendObj.DataNascimento = document.getElementById('dataNasc').value;
//                 verificaDadosObr();
//             }
//         },
//         {
//             title: "Endereço",
//             confirmButtonText: 'Next &rarr;',
//             didOpen:()=>{
//                 if(data.Endereco){
//                     if(data.Endereco.UF) $('#estados').val(data.Endereco.UF);
//                     if(data.Endereco.Cidade) $('#cidade').val(data.Endereco.Cidade);
//                 }
                
//             },
//             html:
//                 Estados +
//                 `<label style="padding-top: 10px;" for="cidade">Cidade</label>
//                 <input  id="cidade" class="form-control">`,
//             preConfirm: () => {
//                 var e = document.getElementById("estados");

//                 var value = e.value;
//                 if (value == "") {
//                     sendObj.Endereco = null;
//                 }
//                 else {
//                     sendObj.Endereco = new Object();
//                     sendObj.Endereco.Cidade = document.getElementById('cidade').value;
//                     sendObj.Endereco.UF = e.value;
//                     sendObj.Endereco.Estado = e.options[e.selectedIndex].text;
//                 }

//             }
//         },
//         {
//             title: "Redes Sociais",
//             confirmButtonText: 'Next &rarr;',
//             didOpen:()=>{
//                 if(data.RedesSociais && data.RedesSociais.length > 0){
//                     data.RedesSociais.forEach((element,index) => {
//                         console.log(index);
//                         if(index == 0) addRedeComValorFirst(element);
//                         else{
//                             addRedeComValor(element);
//                         }
                        
//                     });
//                 }
//                 else{
//                     addRedeSemValorFirst();
//                 }


//             },
//             html:
//                 '<div id="socials">' +
//                 '</div>' +
//                 '<br>' +
//                 '<button id="add" type="button" onClick="addRedeSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
//             preConfirm: () => {

//                 for (let index = 1; index <= contRedesSociais; index++) {
//                     var nomeRedeSocial = document.getElementById("nomeRedeSocial" + index.toString());
//                     var linkRedeSocial = document.getElementById("linkRedeSocial" + index.toString());
//                     var obj = new Object();
//                     obj.nome = nomeRedeSocial.value;
//                     obj.link = linkRedeSocial.value;
//                     if (!checkEmptyString(obj.nome) && !checkEmptyString(obj.link)) sendObj.RedesSociais.push(obj);
//                 }

//             }

//         },
//         {
//             title: "Estilos Musicais",
//             confirmButtonText: 'Next &rarr;',
//             didOpen:()=>{
//                 if(data.Estilos && data.Estilos.length > 0){
//                     data.Estilos.forEach((element,index) => {
                        
//                         if(index == 0) addEstiloComValorFirst(element);
//                         else{
//                             addEstiloComValor(element);
//                         }
                        
                        
//                     });
//                 }
//                 else{
//                     addEstiloSemValorFirst();
//                 }


//             },
//             html:
//                 '<div id="estilos">' +
//                 '</div>' +
//                 '<br>' +
//                 '<button id="add" type="button" onClick="addEstiloSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
//             preConfirm: () => {
//                 for (let index = 1; index <= contEstilosMusicais; index++) {
//                     var nomeEstiloMusical = document.getElementById("nomeEstiloMusical" + index.toString());

//                     if (!checkEmptyString(nomeEstiloMusical.value)) sendObj.Estilos.push(nomeEstiloMusical.value);
//                 }

//             }
//         },
//         {
//             title: "Instrumentos",
//             confirmButtonText: 'Next &rarr;',
//             didOpen:()=>{
//                 if(data.Instrumentos && data.Instrumentos.length > 0){
//                     data.Instrumentos.forEach((element,index) => {
//                         console.log(index);
//                         if(index == 0) addInstrumentoComValorFirst(element);
//                         else{
//                             addInstrumentoComValor(element);
//                         }
                        
//                     });
//                 }
//                 else{
//                     addInstrumentoSemValorFirst();
//                 }


//             },
//             html:
//                 '<div id="instrumentos">' +
//                 '</div>' +
//                 '<br>' +
//                 '<button id="add" type="button" onClick="addInstrumentoSemValor()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
//             preConfirm: () => {

//                 for (let index = 1; index <= contInstrumentos; index++) {
//                     var nomeInstrumento = document.getElementById("nomeInstrumentoMusical" + index.toString());
//                     if (!checkEmptyString(nomeInstrumento.value)) sendObj.Instrumentos.push(nomeInstrumento.value);
//                 }
//                 criar = true;

//             }

//         },
//     ]).then(() => {


//         if (criar) {
//             verificaDados();
//             Swal.fire({
//                 title: 'Criando usuário...',
//                 icon: 'info',
//                 showConfirmButton: false
//             }).then(
//                 $.ajax({
//                     url: "/musico/create",
//                     type: "POST",
//                     data: sendObj,
//                     dataType: "json",
//                     success: function (resultAjax) {
//                         Swal.fire({
//                             title: 'Sucesso!',
//                             icon: 'success',
//                             text: "Usuário criado com sucesso!",
//                             confirmButtonText: 'Ok'
//                         }).then(() => {
//                             resetInfos();
//                             window.location.reload();

//                         })


//                     },
//                     error: function (xhr, ajaxOptions, thrownError) {
//                         var json = xhr.responseJSON;
//                         var lstErros = json.mensagens;
//                         if (lstErros.length > 0) {
//                             var html2 = "<h4>" + json.retorno + "</h4>";
//                             lstErros.forEach(element => {
//                                 html2 += element;
//                                 html2 += "<br>";
//                             });

//                             Swal.fire({
//                                 title: 'Erro!',
//                                 icon: 'error',
//                                 html: html2,
//                                 confirmButtonText: 'Ok'
//                             })
//                             resetInfos();
//                         }
//                     }
//                 })

//             )

//         }
//         else {
//             console.log("Processo de atualização abortado, limpando campos...");
//             resetInfosUpdate();
//         }





//     })
// }

// function makeRow() {
//     var html = `
//     <tr>
//     <td class="text-light text-center">${1}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-light text-center">${"a"}</td>
//     <td class="text-center"> 
//         <i onclick="editRegister($(this).closest('td').closest('tr'))" class="text-warning fas fa-pencil-alt"></i>
//         &nbsp;&nbsp;&nbsp;
//         <i onclick="deleteRegister($(this).closest('td').closest('tr'))" class="text-danger fas fa-trash-alt"></i>
//     </td>
//     `;
//     return html;


// }

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
        "DataNascimento": null,
        "Status": null,
        "Tipo": null,
        "Endereco": null,
        "RedesSociais": [],
        "Estilos": [],
        "Instrumentos": [],
        "Criador": null,
        "Integrantes": null,
        "TipoIndustria": null,
        "Logradouro": null
    }

    contRedesSociaisUpdate = 0;
    contEstilosMusicaisUpdate = 0;
    contInstrumentosUpdate = 0;

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
        "DataNascimento": null,
        "Status": null,
        "Tipo": null,
        "Endereco": null,
        "RedesSociais": [],
        "Estilos": [],
        "Instrumentos": [],
        "Criador": null,
        "Integrantes": null,
        "TipoIndustria": null,
        "Logradouro": null
    }

    contRedesSociais = 1;
    contEstilosMusicais = 1;
    contInstrumentos = 1;

    criar = false;

}

function showInfo() {
    console.log("sendObj = ", sendObj);
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
    if (checkEmptyString(sendObj.DataNascimento)) lstErros.push("'Data de Nascimento' é obrigatório e deve ser preenchido.");
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
    sendObj.Instrumentos = sendObj.Instrumentos.length > 0 ? sendObj.Instrumentos : null;
    showInfo();
    return sendObj;
}


$('.modal-redes-sociais').click(function () {
    var redes = JSON.parse(this.value);
    var html2 =
        '<div class="row">' +
        '<div class="col">' +
        'Nome' +
        '</div>' +
        '<div class="col">' +
        'Link' +
        '</div>' +
        '</div>' +
        '<hr>';

    redes.forEach(function (rede, index) {
        html2 +=
            '<div style="padding-top: 0px;" class="row">' +
            '<div style="padding-top: 0px;" class="col">' +
            `${rede.nome}` +
            '</div>' +
            '<div class="col">' +
            `<a target="_blank" href="${rede.link}">Link</a>` +
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



$('.modal-estilos').click(function () {
    var estilos = JSON.parse(this.value);
    var html2 =
        '<div class="row">' +
        '</div>' +
        '<hr>';

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

$('.modal-instrumentos').click(function () {
    var instrumentos = JSON.parse(this.value);
    var html2 =
        '<div class="row">' +
        '</div>' +
        '<hr>';

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