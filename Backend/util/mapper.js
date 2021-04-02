const ResultModel = require('./ResultModel');

module.exports =  class UserMapper{
    fields = ["Id","Nome","Email","Senha","Login","DataNascimento","Descricao","Telefone","Tipo","Endereco","RedesSociais","Estilos","Criador","Integrantes","TipoIndustria","Logradouro","Instrumentos"].map(v => v.toLowerCase());
    result = null;
    app = null;

    constructor(appObj){
        this.app = appObj;
    }

    verifyFields(src){
        var res = new ResultModel();
        var keys = Object.keys(src).map(v => v.toLowerCase());    
        console.log("keys",keys);
        if(keys.length == 0) {
            res.addError("Objeto 'source' vazio");
            //this.result = res;
            return res;
        }

        this.fields.forEach(field => {
            if(keys.indexOf(field) < 0)
            {
                res.addError(`Campo '${field}' não está presente.`);
            }
        });
        //this.result = res;
        return res;
    }

    UserBasicFields(src){
        var dstTemp = new Object();
        dstTemp.Id = src.Id;
        dstTemp.Descricao = src.Descricao;
        dstTemp.Telefone = src.Telefone;
        dstTemp.Endereco = src.Endereco? (Object.keys(src.Endereco).length>0 ? JSON.stringify(src.Endereco) : null): null;
        dstTemp.RedesSociais = src.RedesSociais? (src.RedesSociais.length>0 ? JSON.stringify(src.RedesSociais) : null): null;
        return dstTemp;
        

    }


    UserToMusico(src){
        var app = this.app;
        //User Padrao
        var dstTemp = this.UserBasicFields(src);
        // Particularidades Musico
        console.log("app.locals.tiposUsuarios.Musico", app.locals.tiposUsuarios.Musico);
        dstTemp.Tipo = app.locals.tiposUsuarios.Musico;
        dstTemp.Estilos = src.Estilos? (src.Estilos.length>0 ? JSON.stringify(src.Estilos) : null): null;
        dstTemp.Instrumentos = src.Instrumentos? (src.Instrumentos.length>0 ? JSON.stringify(src.Instrumentos) : null): null;
        dstTemp.DataNascimento = this.formatDate(src.DataNascimento);;
        //this.dest = dstTemp;
        return dstTemp;

    }
    
    UserToBanda(src){
        var app = this.app;
        //User Padrao
        var dstTemp = this.UserBasicFields(src);
        // Particularidades Banda
        dstTemp.Tipo = app.locals.tiposUsuarios.Banda;
        dstTemp.Estilos = src.Estilos? (src.Estilos.length>0 ? JSON.stringify(src.Estilos) : null): null;
        dstTemp.Criador = src.Criador;
        dstTemp.Integrantes = src.Integrantes? (src.Integrantes.length>0 ? JSON.stringify(src.Integrantes) : null): null;
        //this.dest = dstTemp;
        return dstTemp;
       

    }


    UserToIndustria(src){
        var app = this.app;
        //User Padrao
        var dstTemp = this.UserBasicFields(src);
        // Particularidades Industria
        dstTemp.Tipo = app.locals.tiposUsuarios.Industria;
        dstTemp.TipoIndustria = this.convertTipoIndustria(src.Estilos);
        dstTemp.Logradouro = src.Logradouro;
        //this.dest = dstTemp;
        return dstTemp;
    }


    formatDate(str){
        var lst = str.split("-");
        var y,m,d;
        y=lst[2];
        m=lst[1];
        d=lst[0];
        return [y,m,d].join("-");

    }

    convertTipoIndustria(str){
        var app = this.app;
        var json = app.locals.tiposIndustrias;
        var opc = json[str];
        if(typeof(opc) == "undefined"){
            var res = new ResultModel();
            res.addError("Falha ao obter tipo de Industria");
            this.result = res;
            return null;
        }
        return opc;

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