var sendObj = {
    "ConfSenha" : null,
    "Id" : null,
    "Nome" : null,
    "Email" : null,
    "Senha" : null,
    "Login" : null,
    "Descricao" : null,
    "Telefone" : null,
    "DataNascimento" : null,
    "Status" : null,
    "Tipo" : null,
    "Endereco" : null,
    "RedesSociais" : [],
    "Estilos" : [],
    "Instrumentos" : [],
    "Criador" : null,
    "Integrantes" : null,
    "TipoIndustria" : null,
    "Logradouro" : null
}
var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contInstrumentos = 1;
var criar = false;

const Estados =
    '<label style="padding-top: 10px;" for="estados">UF</label>' +
    '<select id="estados" class="form-control" name="estados-brasil">' +
    '<option disabled selected value="">Selecione uma opção</option>' +
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
    return '<hr>' +
        '<div style="padding-top: 0px; class="RedesSociais">' +
        '<label style="padding-top: 10px;">Nome Rede social ' + cont.toString() + ' </label>' +
        '<input id="nomeRedeSocial' + cont.toString() + '" class="form-control">' +
        '<label style="padding-top: 10px;">Link Rede social ' + contRedesSociais.toString() + ' </label>' +
        '<input id="linkRedeSocial' + cont.toString() + '" class="form-control">' +
        '</div>';
}

function novoEstilo(cont) {
    return '<hr>' +
        '<div style="padding-top: 0px; class="EstilosMusicais">' +
        '<label style="padding-top: 10px;">Nome Estilo Musical ' + cont.toString() + '</label>' +
        '<input id="nomeEstiloMusical' + cont.toString() + '" class="form-control">' +
        '</div>';
}

function novoInstrumento(cont) {
    return '<hr>' +
        '<div style="padding-top: 0px; class="InstrumentosMusicais">' +
        '<label style="padding-top: 10px;">Nome Instrumento Musical ' + cont.toString() + '</label>' +
        '<input id="nomeInstrumentoMusical' + cont.toString() + '" class="form-control">' +
        '</div>';
}

function addRede() {
    contRedesSociais++;
    $('#socials').append(novaRede(contRedesSociais));
}

function addEstilo() {
    contEstilosMusicais++;
    $('#estilos').append(novoEstilo(contEstilosMusicais));
}

function addInstrumento() {
    contInstrumentos++;
    $('#instrumentos').append(novoInstrumento(contInstrumentos));
}


async function modalCreate() {
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5','6']
    }).queue([
        {
            title: "Informações básicas",
            html:
                '<label style="padding-top: 10px;" for="nome">Nome</label>' +
                '<input  id="nome" class="form-control">' +
                '<label style="padding-top: 10px;" for="email">Email</label>' +
                '<input  id="email" class="form-control">' +
                '<label style="padding-top: 10px;" for="senha">Senha</label>' +
                '<input  id="senha" class="form-control">' +
                '<label style="padding-top: 10px;" for="confSenha">Confirmação de senha</label>' +
                '<input  id="confSenha" class="form-control">' +
                '<label style="padding-top: 10px;" for="login">Nome de usuário</label>' +
                '<input  id="login" class="form-control">',
            confirmButtonText: 'Next &rarr;',
            preConfirm: () => {
                sendObj.Nome = document.getElementById('nome').value;
                sendObj.Email = document.getElementById('email').value;
                sendObj.Senha = document.getElementById('senha').value;
                sendObj.ConfSenha = document.getElementById('confSenha').value;
                sendObj.Login = document.getElementById('login').value;
                
            }
        },
        {
            title: "Informações básicas",
            html:
                '<label style="padding-top: 10px;" for="desc">Sobre você</label>' +
                '<input  id="desc" class="form-control">' +
                '<label style="padding-top: 10px;" for="telefone">Telefone</label>' +
                '<input  id="telefone" class="form-control">' +
                '<label style="padding-top: 10px;" for="dataNasc">Data de Nascimento</label>' +
                '<input type="date" id="dataNasc" class="form-control">',
            confirmButtonText: 'Next &rarr;',
            preConfirm: () => {
                sendObj.Descricao = document.getElementById('desc').value;
                sendObj.Telefone = document.getElementById('telefone').value;
                sendObj.DataNascimento = document.getElementById('dataNasc').value;
                verificaDadosObr();
            }
        },
        {
            title: "Endereço",
            confirmButtonText: 'Next &rarr;',
            html:
                Estados +
                '<label style="padding-top: 10px;" for="cidade">Cidade</label>' +
                '<input  id="cidade" class="form-control">',
            preConfirm: () => {
                var e = document.getElementById("estados");

                var value = e.value;
                if(value == ""){
                    sendObj.Endereco = null;
                }
                else{
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
            html:
                '<div id="socials">' +
                '<div class="RedesSociais">' +
                '<label style="padding-top: 10px;" for="cidade">Nome Rede social ' + contRedesSociais.toString() + ' </label>' +
                '<input id="nomeRedeSocial' + contRedesSociais.toString() + '" class="form-control">' +
                '<label style="padding-top: 10px;" for="cidade">Link Rede social ' + contRedesSociais.toString() + ' </label>' +
                '<input id="linkRedeSocial' + contRedesSociais.toString() + '" class="form-control">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<button id="add" type="button" onClick="addRede()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
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
            html:
                '<div id="estilos">' +
                '<div class="EstilosMusicais">' +
                '<label style="padding-top: 10px;">Nome Estilo Musical ' + contEstilosMusicais.toString() + '</label>' +
                '<input id="nomeEstiloMusical' + contEstilosMusicais.toString() + '" class="form-control">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<button id="add" type="button" onClick="addEstilo()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
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
            html:
                '<div id="instrumentos">' +
                '<div class="InstrumentosMusicais">' +
                '<label style="padding-top: 10px;">Nome Instrumento Musical ' + contInstrumentos.toString() + '</label>' +
                '<input id="nomeInstrumentoMusical' + contInstrumentos.toString() + '" class="form-control">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<button id="add" type="button" onClick="addInstrumento()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>',
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
                        }).then(() =>{
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

$('#add, #add2').click(async function () {
    resetInfos();
    await modalCreate();
    $('#list').append(makeRow());
});


function deleteRegister(tr) {
    let id = tr.find('td')[0].innerText;
    Swal.fire({
        titleText: 'Tem certeza que deseja excluir o usuário de id '+id+'?',
        html: '<b>Essa ação é irreversível!<b>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: `Sim`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: "/musico/delete/"+id,
                type: "DELETE",
                success: function (resultAjax) {
                    Swal.fire({
                        title: 'Sucesso!',
                        icon: 'success',
                        text: "Usuário excluído com sucesso!",
                        confirmButtonText: 'Ok'
                    }).then(() =>{
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
    // 
        // $.ajax({
        //     url: "/musico/create",
        //     type: "POST",
        //     data: sendObj,
        //     dataType: "json",
        //     success: function (resultAjax) {
        //         Swal.fire({
        //             title: 'Sucesso!',
        //             icon: 'success',
        //             text: "Usuário criado com sucesso!",
        //             confirmButtonText: 'Ok'
        //         }).then(() =>{
        //             resetInfos();
        //             window.location.reload();

        //         })
                
                
        //     },
        //     error: function (xhr, ajaxOptions, thrownError) {
        //         var json = xhr.responseJSON;
        //         var lstErros = json.mensagens;
        //         if (lstErros.length > 0) {
        //             var html2 = "<h4>" + json.retorno + "</h4>";
        //             lstErros.forEach(element => {
        //                 html2 += element;
        //                 html2 += "<br>";
        //             });

        //             Swal.fire({
        //                 title: 'Erro!',
        //                 icon: 'error',
        //                 html: html2,
        //                 confirmButtonText: 'Ok'
        //             })
        //             resetInfos();
        //         }
        //     }
        // })


    //tr.remove();

}


function editRegister(tr) {
    console.log(tr);
    Swal.fire({
        title: 'WIP!!',
        text: 'Modal para editar músico de id ' + tr.find('td')[0].innerText,
        icon: 'warning',
        confirmButtonText: 'Cool'
    })

}


function makeRow() {
    var html = `
    <tr>
    <td class="text-light text-center">${1}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-light text-center">${"a"}</td>
    <td class="text-center"> 
        <i onclick="editRegister($(this).closest('td').closest('tr'))" class="text-warning fas fa-pencil-alt"></i>
        &nbsp;&nbsp;&nbsp;
        <i onclick="deleteRegister($(this).closest('td').closest('tr'))" class="text-danger fas fa-trash-alt"></i>
    </td>
    `;
    return html;


}

function resetInfos() {

    sendObj = {
        "ConfSenha" : null,
        "Id" : null,
        "Nome" : null,
        "Email" : null,
        "Senha" : null,
        "Login" : null,
        "Descricao" : null,
        "Telefone" : null,
        "DataNascimento" : null,
        "Status" : null,
        "Tipo" : null,
        "Endereco" : null,
        "RedesSociais" : [],
        "Estilos" : [],
        "Instrumentos" : [],
        "Criador" : null,
        "Integrantes" : null,
        "TipoIndustria" : null,
        "Logradouro" : null
    }

    contRedesSociais = 1;
    contEstilosMusicais = 1;

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
    '<div class="row">'+
        '<div class="col">'+
            'Nome'+
        '</div>'+
        '<div class="col">'+
            'Link'+
        '</div>'+
    '</div>'+
    '<hr>';

    redes.forEach(function (rede, index) {
        html2 += 
        '<div style="padding-top: 0px;" class="row">'+
            '<div style="padding-top: 0px;" class="col">'+
                `${rede.nome}`+
            '</div>'+
            '<div class="col">'+
            `<a target="_blank" href="${rede.link}">Link</a>`+
            '</div>'+
        '</div>';
        if(index < redes.length-1) html2+= '<hr>';
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
    '<div class="row">'+
    '</div>'+
    '<hr>';

    estilos.forEach(function (estilo, index) {
        html2 += 
        '<div style="padding-top: 0px;" class="row">'+
            '<div style="padding-top: 0px;" class="col">'+
                `${estilo}`+
            '</div>'+
        '</div>';
        if(index < estilos.length-1) html2+= '<hr>';
    });

    swal.fire({
        title: "Estilos",
        html: html2
    
    })
});

$('.modal-instrumentos').click(function () {
    var instrumentos = JSON.parse(this.value);
    var html2 = 
    '<div class="row">'+
    '</div>'+
    '<hr>';

    instrumentos.forEach(function (instrumento, index) {
        html2 += 
        '<div style="padding-top: 0px;" class="row">'+
            '<div style="padding-top: 0px;" class="col">'+
                `${instrumento}`+
            '</div>'+
        '</div>';
        if(index < instrumentos.length-1) html2+= '<hr>';
    });
    
    swal.fire({
        title: "Instrumentos",
        html: html2
    
    })
    
});






// var Id = null;
// var Nome = null;
// var Email = null;
// var Senha = null;
// var ConfSenha = null;
// var Login = null;
// var Descricao = null;
// var Telefone = null;
// var DataNascimento = null;

// var Status = null;
// var Tipo = null;

// var Endereco = null;

// var RedesSociais = [];
// var Estilos = [];
// var Instrumentos = [];