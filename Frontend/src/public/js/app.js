const Id = null;
const Nome = null;
const Email = null;
const Senha = null;
const Login = null;
const Descricao = null;
const Telefone = null;
const DataNascimento = null;

const Status = null;
const Tipo = null;

const Endereco = null;

const RedesSociais = null;

const Estilos = [];
const Instrumentos = [];

var contRedesSociais = 1;
var contEstilosMusicais = 1;
var contInstrumentos = 1;

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

function novaRede(cont){
    return '<hr>'+
        '<div style="padding-top: 0px; class="RedesSociais">'+
            '<label style="padding-top: 10px;">Nome Rede social '+cont.toString()+' </label>' +
            '<input class="form-control nomeRedeSocial">'+
            '<label style="padding-top: 10px;">Link Rede social '+contRedesSociais.toString()+' </label>' +
            '<input class="form-control linkRedeSocial">'+
        '</div>';
}

function novoEstilo(cont){
    return '<hr>'+
    '<div style="padding-top: 0px; class="EstilosMusicais">'+
        '<label style="padding-top: 10px;">Nome Estilo Musical '+cont.toString()+'</label>' +
        '<input class="form-control nomeEstiloMusical">'+
    '</div>';
}

function novoInstrumento(cont){
    return '<hr>'+
    '<div style="padding-top: 0px; class="InstrumentosMusicais">'+
        '<label style="padding-top: 10px;">Nome Instrumento Musical '+cont.toString()+'</label>' +
        '<input class="form-control nomeInstrumentoMusical">'+
    '</div>';
}








function addRede(){
    contRedesSociais++;
    $('#socials').append(novaRede(contRedesSociais));
}

function addEstilo(){
    contEstilosMusicais++;
    $('#estilos').append(novoEstilo(contEstilosMusicais));
}

function addInstrumento(){
    contInstrumentos++;
    $('#instrumentos').append(novoInstrumento(contInstrumentos));
}


async function modalCreate(){
    Swal.mixin({
        showCancelButton: true,
        progressSteps: ['1', '2', '3','4','5']
      }).queue([
        {
          title:"Informações básicas",
          html: 
        '<label style="padding-top: 10px;" for="nome">Nome</label>' +
        '<input  id="nome" class="form-control">' +
        '<label style="padding-top: 10px;" for="email">Email</label>' +
        '<input  id="email" class="form-control">' +
        '<label style="padding-top: 10px;" for="senha">Senha</label>' +
        '<input  id="senha" class="form-control">' +
        '<label style="padding-top: 10px;" for="confSenha">Confirme a senha</label>' +
        '<input  id="confSenha" class="form-control">' +
        '<label style="padding-top: 10px;" for="login">Nome de usuário</label>' +
        '<input  id="login" class="form-control">'+
        '<label style="padding-top: 10px;" for="dataNasc">Data Nascimento</label>' +
        '<input type="date" id="dataNasc" class="form-control">',
        confirmButtonText: 'Next &rarr;',
        },
        {
            title:"Endereço",
            confirmButtonText: 'Next &rarr;',
            html:
            Estados+
            '<label style="padding-top: 10px;" for="cidade">Cidade</label>' +
            '<input  id="cidade" class="form-control">'
        },
        {
            title:"Redes Sociais",
            confirmButtonText: 'Next &rarr;',
            html:
            '<div id="socials">'+
                '<div class="RedesSociais">'+
                    '<label style="padding-top: 10px;" for="cidade">Nome Rede social '+contRedesSociais.toString()+' </label>' +
                    '<input class="form-control nomeRedeSocial">'+
                    '<label style="padding-top: 10px;" for="cidade">Link Rede social '+contRedesSociais.toString()+' </label>' +
                    '<input class="form-control linkRedeSocial">'+
                '</div>'+    
            '</div>'+
            '<br>' +
            '<button id="add" type="button" onClick="addRede()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>'
            
        },
        {
            title:"Estilos Musicais",
            confirmButtonText: 'Next &rarr;',
            html:
            '<div id="estilos">'+
                '<div class="EstilosMusicais">'+
                    '<label style="padding-top: 10px;">Nome Estilo Musical '+contEstilosMusicais.toString()+'</label>' +
                    '<input class="form-control nomeEstiloMusical">'+
                '</div>'+    
            '</div>'+
            '<br>' +
            '<button id="add" type="button" onClick="addEstilo()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>'
        },
        {
            title:"Instrumentos",
            confirmButtonText: 'Next &rarr;',
            html:
            '<div id="instrumentos">'+
                '<div class="InstrumentosMusicais">'+
                    '<label style="padding-top: 10px;">Nome Instrumento Musical '+contInstrumentos.toString()+'</label>' +
                    '<input class="form-control nomeInstrumentoMusical">'+
                '</div>'+    
            '</div>'+
            '<br>' +
            '<button id="add" type="button" onClick="addInstrumento()" class="btn btn-success"><i class="fas fa-plus text-light"></i></button>'
        },
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'All done!',
            html: `
              Your answers:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Lovely!'
          })
        }
      })





    // await Swal.fire({
    //     title: 'Inserir novo músico',
    //     html:
    //         '<label for="nome">Nome</label>' +
    //         '<input id="nome" class="swal2-input">' +
    //         '<label for="email">Email</label>' +
    //         '<input id="email" class="swal2-input">' +
    //         '<label for="senha">Senha</label>' +
    //         '<input id="senha" class="swal2-input">' +
    //         '<label for="confSenha">Confirme a senha</label>' +
    //         '<input id="confSenha" class="swal2-input">' +
    //         '<label for="login">Nome de usuário</label>' +
    //         '<input id="login" class="swal2-input">',
    //     focusConfirm: false,
    //     preConfirm: () => {
    //         return [
    //         document.getElementById('swal-input1').value,
    //         document.getElementById('swal-input2').value
    //         ]
    //     }
    // })



} 

$('#add').click(async function(){
    await modalCreate();
    $('#list').append(makeRow());
});




function deleteRegister(tr){
    let id = tr.find('td')[0].innerText;
    console.log(id);
    tr.remove();

}


function editRegister(tr){
    console.log(tr);
    Swal.fire({
        title: 'WIP!!',
        text: 'Modal para editar músico de id ' + tr.find('td')[0].innerText,
        icon: 'warning',
        confirmButtonText: 'Cool'
      })

}




function editRegister(tr){
    console.log(tr);
    Swal.fire({
        title: 'WIP!!',
        text: 'Modal para editar músico de id ' + tr.find('td')[0].innerText,
        icon: 'warning',
        confirmButtonText: 'Cool'
      })

}



function makeRow()
{
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