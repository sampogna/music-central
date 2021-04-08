const ResultModel = require('./ResultModel');

module.exports =  class UserMapper{
    fields = ["Id","Nome","Email","Senha","Login","DataNascimento","Descricao","Telefone","Tipo","Endereco","RedesSociais","Estilos","Criador","Integrantes","TipoIndustria","Logradouro","Instrumentos"];
    result = null;
    app = null;
    dstObj = null;
    src = null;

    constructor(appObj, src){
        this.src = src;
        this.app = appObj;
    }

    verifyFields(){
        var src = this.src;
        var res = new ResultModel();
        var keys = Object.keys(src);//.map(v => v.toLowerCase());    
        if(keys.length == 0) {
            res.addError("Objeto 'source' vazio");
            return res;
        }

        this.fields.forEach(field => {
            if(keys.indexOf(field) < 0)
            {
                res.addError(`Campo '${field}' não está presente.`);
            }
        });

        return res;
    }


    getNewEmptyObj(){
        var newObj = new Object();
        this.fields.map(v =>newObj[v] = null);
        return newObj;

    }

    UserBasicFields(){
        var src = this.src;
        var dstTemp = this.getNewEmptyObj();
        dstTemp.Id = src.Id;
        dstTemp.Nome = src.Nome;
        dstTemp.Email = src.Email;
        dstTemp.Senha = src.Senha;
        dstTemp.Login = src.Login;
        dstTemp.Descricao = src.Descricao;
        dstTemp.Telefone = src.Telefone;
        dstTemp.Endereco = src.Endereco? (Object.keys(src.Endereco).length>0 ? JSON.stringify(src.Endereco) : null): null;
        dstTemp.RedesSociais = src.RedesSociais? (src.RedesSociais.length>0 ? JSON.stringify(src.RedesSociais) : null): null;
        return dstTemp;
        

    }


    UserToMusico(src){
        var app = this.app;
        //User Padrao
        var dstTemp = this.UserBasicFields();
        // Particularidades Musico
        console.log("app.locals.tiposUsuarios.Musico", app.locals.tiposUsuarios.Musico);
        dstTemp.Tipo = app.locals.tiposUsuarios.Musico;
        dstTemp.Estilos = src.Estilos? (src.Estilos.length>0 ? JSON.stringify(src.Estilos) : null): null;
        dstTemp.Instrumentos = src.Instrumentos? (src.Instrumentos.length>0 ? JSON.stringify(src.Instrumentos) : null): null;
        dstTemp.DataNascimento = this.formatDate(src.DataNascimento);
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
        dstTemp.TipoIndustria = this.convertTipoIndustria(src.TipoIndustria);
        dstTemp.Logradouro = src.Logradouro? (src.Logradouro.length>0 ? JSON.stringify(src.Logradouro) : null): null;
        //this.dest = dstTemp;
        return dstTemp;
    }


    formatDate(str){
        var lst = str.split("-");
        var y,m,d;

        if(lst[2].length == 4){
            y=lst[2];
            m=lst[1];
            d=lst[0];
            return [y,m,d].join("-");
        }
        return str;
        

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

    checkUpdateDiff(old,updated){
        var obj = new Object();
        var keys = Object.keys(old);
        keys.forEach(key => {
            if(old[key] != updated[key]) obj[key] = updated[key];
        });
        return obj;


    }

    verifyFieldsUpdate(old, updated){
        var res = new ResultModel();
        var oldKeys = Object.keys(old);//.map(v => v.toLowerCase());    
        var updatedKeys = Object.keys(updated);//.map(v => v.toLowerCase());    
        if(updatedKeys.length == 0) {
            res.addError("Objeto 'source' vazio");
            return res;
        }

        oldKeys.forEach(key => {
            if(updatedKeys.indexOf(key) < 0)
            {
                res.addError(`Campo '${field}' não está presente.(Update)`);
            }
        });

        return res;
    }

    convertBack(src){
        var obj = this.getNewEmptyObj();
        var keys = Object.keys(obj);
        keys.forEach(key => {
            switch(key){
                case "DataNascimento":
                    obj.DataNascimento = src.DataNascimento !=null? this.MysqlDateToNormal(src.DataNascimento) : null;
                    break;
                case "Endereco":
                    obj.Endereco = src.Endereco !=null? this.fromBlob(src.Endereco) : null;
                    break;
                case "RedesSociais":
                    obj.RedesSociais = src.RedesSociais !=null? this.fromBlob(src.RedesSociais) : null;
                    break;
                case "Estilos":
                    obj.Estilos = src.Estilos !=null? this.fromBlob(src.Estilos) : null;
                    break;
                case "Integrantes":
                    obj.Integrantes = src.Integrantes !=null? this.fromBlob(src.Integrantes) : null;
                    break;
                case "TipoIndustria":
                    obj.TipoIndustria = src.TipoIndustria !=null? this.fromBlob(src.TipoIndustria) : null;
                    break;
                case "Logradouro":
                    obj.Logradouro = src.Logradouro !=null? this.fromBlob(src.Logradouro) : null;
                    break;
                case "Instrumentos":
                    obj.Instrumentos = src.Instrumentos !=null? this.fromBlob(src.Instrumentos) : null;
                    break;
                default:
                    obj[key] = src[key];
            }
            
        });

        return obj;
    }

    MysqlDateToNormal(date)
    {
        var teste = new Date(date);
        var y = teste.getFullYear().toString();
        var d = this.formatDateZero(teste.getDate());
        var m = this.formatDateZero((teste.getMonth())+1);
        return [d,m,y].join("-");
    }

    formatDateZero(num)
    {
        return num<10? ("0"+num.toString()) : num.toString();
    }

    fromBlob(blob)
    {
        var buf = new Buffer.from(blob, "binary").toString("utf-8");
        var json = JSON.parse(buf);
        return json;
    }

    convertAsInserting(src){
        src.Endereco = src.Endereco? (Object.keys(src.Endereco).length>0 ? JSON.stringify(src.Endereco) : null): null;
        src.RedesSociais = src.RedesSociais? (src.RedesSociais.length>0 ? JSON.stringify(src.RedesSociais) : null): null;
        src.Estilos = src.Estilos? (src.Estilos.length>0 ? JSON.stringify(src.Estilos) : null): null;
        src.Instrumentos = src.Instrumentos? (src.Instrumentos.length>0 ? JSON.stringify(src.Instrumentos) : null): null;
        src.DataNascimento = this.formatDate(src.DataNascimento);
        src.Integrantes = src.Integrantes? (src.Integrantes.length>0 ? JSON.stringify(src.Integrantes) : null): null;
        src.Logradouro = src.Logradouro? (src.Logradouro.length>0 ? JSON.stringify(src.Logradouro) : null): null;
        return src;
    }

}
