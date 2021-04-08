const Estados =
    `<label style="padding-top: 10px;" for="estados">UF</label> 
    <select id="estados" class="form-control" name="estados-brasil"> 
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


var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contInstrumentos = 1;
var criar = false;


async function modalCreate() {
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5', '6'],
        reverseButtons: true
    }).queue([
        {
            title: "Informações básicas",
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
            didOpen:()=>{ 
                VerficadoresDeCampo(2)
            },
            html:
                `<label style="padding-top: 10px;" for="desc">Sobre você</label>
                <input  id="desc" class="form-control">
                <label style="padding-top: 10px;" for="telefone">Telefone</label>
                <input  id="telefone" class="form-control">
                <label style="padding-top: 10px;" for="dataNasc">Data de Nascimento*</label>
                <input type="date" id="dataNasc" class="form-control">`,
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
            title: "Instrumentos",
            confirmButtonText: 'Enviar',
            didOpen:()=>{ 
                VerficadoresDeCampo(6)
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

$('#add, #add2').click(async function () {
    resetInfos();
    await modalCreate();
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

    var DadosBasicos2 = function(){
        //Dados Basicos 2
        $(".swal2-confirm").attr('disabled', 'disabled'); // TODO remover comentario
        var oks = new Object();
        
        oks.dataNasc = eventTrigger("dataNasc");

        enableDisableConfirm(oks);

        $('#dataNasc').on('change keyup paste',function () {
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
    var InstrumentosMusicais = function(){
        //Instrumentos Musicais
    
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
            InstrumentosMusicais();
            break;
    }   
}

function eventTrigger(id){

    switch(id)
    {
        case "nome":
            var lenNome = document.getElementById('nome').value.length;
            var el = $('#invFB-Nome');
            if(lenNome<10 || lenNome>100){
                if(lenNome<10){
                    el.html("Nome muito curto.");
                    el.show();
                
                }
                if(lenNome>100){
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

function checkEmptyString(str) {
    if (str == null) return true;
    const emptyStringRegex = /^\s+$/;
    if (str.length == 0) return true;
    var isEmptyString = emptyStringRegex.test(str);
    return isEmptyString;
}

function allTrue(obj)
{
    for(var o in obj)
        if(!obj[o]) return false;
    
    return true;
}

function enableDisableConfirm(oks)
{
    if(allTrue(oks)) $(".swal2-confirm").attr('disabled', false);
    else $(".swal2-confirm").attr('disabled', 'disabled');
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