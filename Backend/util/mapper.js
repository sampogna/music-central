const ResultModel = require('./ResultModel');

module.exports =  class UserMapper{
    fields = ["Id","Nome","Email","Senha","Login","DataNascimento","Descricao","Telefone","Status","Tipo","Endereco","RedesSociais","Estilos","Criador","Integrantes","TipoIndustria","Logradouro","Instrumentos"].map(v => v.toLowerCase());

    source = null;

    result = null;
    app = null;

    dest = null;

    constructor(src, appObj){
        this.source = src;
        this.app = appObj;
    }

    verifyFields(){
        var res = new ResultModel();
        var keys = Object.keys(this.source);
        if(keys.length == 0) {
            res.addError("Objeto 'source' vazio");
            //this.result = res;
            return res;
        }

        this.fields.forEach(field => {
            if(!field.toLowerCase() in keys)
            {
                res.addError(`Campo '${field}' não está presente.`);
            }
        });
        //this.result = res;
        return res;
    }

    UserBasicFields(){
        var src = this.source;
        var dstTemp = new Object();
        dstTemp.Id = src.Id;
        dstTemp.Descricao = src.Descricao;
        dstTemp.Telefone = src.Telefone;
        dstTemp.Status = src.Status;
        dstTemp.Endereco = src.Endereco;
        dstTemp.RedesSociais = src.RedesSociais;
        this.dest = dstTemp;


    }


    UserToMusico(){
        var src = this.source;
        var app = this.app;
        //User Padrao
        if(!this.dest) this.UserBasicFields();
        var dstTemp = this.dest;
        // Particularidades Musico
        dstTemp.Tipo = app.locals.tiposUsuarios.Musico;
        dstTemp.Estilos = src.Estilos;
        dstTemp.Instrumentos = src.Instrumentos ? src.Instrumentos : null;
        dstTemp.DataNascimento = src.DataNascimento;
        this.dest = dstTemp;
        return dstTemp;

    }
    
    UserToBanda(){
        var src = this.source;
        var app = this.app;
        //User Padrao
        if(!this.dest) this.UserBasicFields();
        var dstTemp = this.dest;
        // Particularidades Banda
        dstTemp.Tipo = app.locals.tiposUsuarios.Banda;
        dstTemp.Estilos = src.Estilos;
        dstTemp.Criador = src.Criador ? src.Criador : null;
        dstTemp.Integrantes = src.Integrantes;
        this.dest = dstTemp;
        return dstTemp;
       

    }


    UserToIndustria(){
        var src = this.source;
        var app = this.app;
        //User Padrao
        if(!this.dest) this.UserBasicFields();
        var dstTemp = this.dest;
        // Particularidades Industria
        dstTemp.Tipo = app.locals.tiposUsuarios.Industria;
        dstTemp.Estilos = src.Estilos;
        dstTemp.Instrumentos = src.Instrumentos ? src.Instrumentos : null;
        dstTemp.DataNascimento = src.DataNascimento;
        this.dest = dstTemp;
        return dstTemp;
    }

}



// }
// AutoMapper.create<UserView, UserMusico>("UserToMusico")
//     //User Padrao
//     .map(src => src.Id, dst => dst.Id)
//     .map(src => src.Nome, dst => dst.Nome)
//     .map(src => src.Email, dst => dst.Email)
//     .map(src => src.Senha, dst => dst.Senha)
//     .map(src => src.Login, dst => dst.Login)
//     .map(src => src.Descricao, dst => dst.Descricao)
//     .map(src => src.Telefone, dst => dst.Telefone)
//     .map(src => src.Status, dst => dst.Status, {

//     .map(src => src.Tipo, dst => dst.Tipo, {
//     operation: (p:TipoUsuario) => TipoUsuario[p]
//     })
//     .map(src => src.Endereco, dst => dst.Endereco)
//     .map(src => src.RedesSociais, dst => dst.RedesSociais)
//     //
//     // Particularidades Musico
//     .map(src => src.Estilos, dst => dst.Estilos)
//     .map(src => src.Instrumentos, dst => dst.Instrumentos)
//     .map(src => src.DataNascimento, dst => dst.DataNascimento)

// AutoMapper.create<UserView, UserBanda>("UserToBanda")
//     //User Padrao
//     .map(src => src.Id, dst => dst.Id)
//     .map(src => src.Nome, dst => dst.Nome)
//     .map(src => src.Email, dst => dst.Email)
//     .map(src => src.Senha, dst => dst.Senha)
//     .map(src => src.Login, dst => dst.Login)
//     .map(src => src.Descricao, dst => dst.Descricao)
//     .map(src => src.Telefone, dst => dst.Telefone)
//     .map(src => src.Status, dst => dst.Status, {
//     operation: (p:TipoStatus) => TipoStatus[p]
//     })
//     .map(src => src.Tipo, dst => dst.Tipo, {
//     operation: (p:TipoUsuario) => TipoUsuario[p]
//     })
//     .map(src => src.Endereco, dst => dst.Endereco)
//     .map(src => src.RedesSociais, dst => dst.RedesSociais)
//     //
//     // Particularidades Banda
//     .map(src => src.Estilos, dst => dst.Estilos)
//     .map(src => src.Criador, dst => dst.Criador)
//     .map(src => src.Integrantes, dst => dst.Integrantes)

// AutoMapper.create<UserView, UserIndustria>("UserToIndustria")
//     //User Padrao
//     .map(src => src.Id, dst => dst.Id)
//     .map(src => src.Nome, dst => dst.Nome)
//     .map(src => src.Email, dst => dst.Email)
//     .map(src => src.Senha, dst => dst.Senha)
//     .map(src => src.Login, dst => dst.Login)
//     .map(src => src.Descricao, dst => dst.Descricao)
//     .map(src => src.Telefone, dst => dst.Telefone)
//     .map(src => src.Status, dst => dst.Status, {
//     operation: (p:TipoStatus) => TipoStatus[p]
//     })
//     .map(src => src.Tipo, dst => dst.Tipo, {
//     operation: (p:TipoUsuario) => TipoUsuario[p]
//     })
//     .map(src => src.Endereco, dst => dst.Endereco)
//     .map(src => src.RedesSociais, dst => dst.RedesSociais)
//     //
//     // Particularidades Banda
//     .map(src => src.TipoIndustria, dst => dst.TipoIndustria, {
//     operation: (p:TipoIndustria) => TipoIndustria[p]
//     })
//     .map(src => src.Logradouro, dst => dst.Logradouro)