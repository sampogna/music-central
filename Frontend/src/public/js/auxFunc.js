

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