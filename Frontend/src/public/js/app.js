var Id = null;
var Nome = null;
var Email = null;
var Senha = null;
var ConfSenha = null;
var Login = null;
var Descricao = null;
var Telefone = null;
var DataNascimento = null;
var Status = null;
var Tipo = null;
var Endereco = null;
var RedesSociais = [];
var Estilos = [];
var Instrumentos = [];
var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contInstrumentos = 1;

var criar = false;

// public Nome: string;
// public Email: string;
// public Senha: string;
// public Login: string;
// public Descricao?: string | null = null;
// public Telefone?: string | null = null;
// public DataNascimento?: Date | null = null; //DateTime?;

// public Status?: string | null = null; 
// public Tipo?: string | null = null; 

// public Endereco?: Endereco | null = null;
// public RedesSociais?: Array<Social> | null = null; 
const Estados =
    '<label style="padding-top: 10px;" for="estados">UF</label>' +
    '<select id="estados" class="form-control" name="estados-brasil">' +
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
        progressSteps: ['1', '2', '3', '4', '5']
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
                '<input  id="login" class="form-control">' +
                '<label style="padding-top: 10px;" for="desc">Sobre você</label>' +
                '<input  id="desc" class="form-control">' +
                '<label style="padding-top: 10px;" for="telefone">Telefone</label>' +
                '<input  id="telefone" class="form-control">' +
                '<label style="padding-top: 10px;" for="dataNasc">Data de Nascimento</label>' +
                '<input type="date" id="dataNasc" class="form-control">',
            confirmButtonText: 'Next &rarr;',
            preConfirm: () => {
                Nome = document.getElementById('nome').value;
                Email = document.getElementById('email').value;
                Senha = document.getElementById('senha').value;
                ConfSenha = document.getElementById('confSenha').value;
                Login = document.getElementById('login').value;
                Descricao = document.getElementById('desc').value;
                Telefone = document.getElementById('telefone').value;
                DataNascimento = document.getElementById('dataNasc').value;
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
                Endereco = new Object();
                Endereco.Cidade = document.getElementById('cidade').value;
                var e = document.getElementById("estados");
                Endereco.UF = e.value;
                Endereco.Estado = e.options[e.selectedIndex].text;
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
                    if (obj.nome && obj.link) RedesSociais.push(obj);
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
                    if (nomeEstiloMusical) Estilos.push(nomeEstiloMusical.value);
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
                    if (nomeInstrumento) Instrumentos.push(nomeInstrumento.value);
                }
                criar = true;

            }

        },
    ]).then(() => {


        if (criar) {
            Swal.fire({
                title: 'Criando usuário...',
                icon: 'info',
                showConfirmButton: false
            }).then(

                $.ajax({
                    url: "/musico/create",
                    type: "POST",
                    data: verificaDados(),
                    dataType: "json",
                    success: function (resultAjax) {
                        Swal.fire({
                            title: 'Sucesso!',
                            icon: 'success',
                            text: "Usuário criado com sucesso!",
                            confirmButtonText: 'Ok'
                        })
                        resetInfos();
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

$('#add').click(async function () {
    resetInfos();
    await modalCreate();
    $('#list').append(makeRow());
});


function deleteRegister(tr) {
    let id = tr.find('td')[0].innerText;
    console.log(id);
    tr.remove();

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

    Id = null;
    Nome = null;
    Email = null;
    Senha = null;
    Login = null;
    Descricao = null;
    Telefone = null;
    DataNascimento = null;

    Status = null;
    Tipo = null;

    Endereco = null;

    RedesSociais = [];
    Estilos = [];
    Instrumentos = [];

    contRedesSociais = 1;
    contEstilosMusicais = 1;

    criar = false;

}

function showInfo() {
    console.log("Id = ", Id);
    console.log("Nome = ", Nome);
    console.log("Email = ", Email);
    console.log("Senha = ", Senha);
    console.log("Login = ", Login);
    console.log("Descricao = ", Descricao);
    console.log("Telefone = ", Telefone);
    console.log("DataNascimento = ", DataNascimento);

    console.log("Status = ", Status);
    console.log("Tipo = ", Tipo);

    console.log("Endereco = ", Endereco);

    console.log("RedesSociais = ", RedesSociais);

    console.log("Estilos = ", Estilos)
    console.log("Instrumentos = ", Instrumentos)

    console.log("contRedesSociais = ", contRedesSociais);
    console.log("contEstilosMusicais = ", contEstilosMusicais);


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
    if (checkEmptyString(Nome)) lstErros.push("'Nome' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(Email)) lstErros.push("'Email' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(Senha)) lstErros.push("'Senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(ConfSenha)) lstErros.push("'Confirmação de senha' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(Login)) lstErros.push("'Nome de usuário' é obrigatório e deve ser preenchido.");
    if (checkEmptyString(DataNascimento)) lstErros.push("'Data de Nascimento' é obrigatório e deve ser preenchido.");
    if (Senha != ConfSenha) lstErros.push("'Senhas' e 'Confirmação de senha' são diferentes.");
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
    var data = new Object();
    data.Id = Id;
    data.Nome = Nome;
    data.Email = Email;
    data.Senha = Senha;
    data.ConfSenha = ConfSenha;
    data.Login = Login;
    data.DataNascimento = DataNascimento;
    data.Descricao = checkEmptyString(Descricao) ? null : Descricao;
    data.Telefone = checkEmptyString(Telefone) ? null : Telefone;
    data.Status = 'ATIVO';
    data.Tipo = 'MUSICO';
    data.Endereco = typeof (Endereco) == "object" ? Endereco : null;
    data.RedesSociais = RedesSociais.length > 0 ? RedesSociais : null;
    data.Estilos = Estilos.length > 0 ? Estilos : null;
    data.Instrumentos = Instrumentos.length > 0 ? Instrumentos : null;
    console.log("data", JSON.stringify(data));
    return data;
}

var Id = null;
var Nome = null;
var Email = null;
var Senha = null;
var ConfSenha = null;
var Login = null;
var Descricao = null;
var Telefone = null;
var DataNascimento = null;

var Status = null;
var Tipo = null;

var Endereco = null;

var RedesSociais = [];
var Estilos = [];
var Instrumentos = [];