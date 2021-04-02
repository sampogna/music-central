import UserView from "../entities/UserView";
import UserMusico from "../entities/UserMusico";
import { TipoStatus } from "../models/TipoStatus";
import { TipoUsuario } from "../models/TipoUsuario";
import UserBanda from "../entities/UserBanda";
import UserIndustria from "../entities/UserIndustria";
import { TipoIndustria } from "../models/TipoIndustria";

export class UserMapper{

    UserToMusico(src:UserView){
        //User Padrao
        var dst:UserMusico = new UserMusico(src.Nome, src.Email, src.Senha, src.Login);
        dst.Id = src.Id;
        dst.Descricao = src.Descricao;
        dst.Telefone = src.Telefone;
        dst.Status = src.Status;
        dst.Tipo = TipoUsuario.MUSICO;
        dst.Endereco = src.Endereco;
        dst.RedesSociais = src.RedesSociais;
        // Particularidades Musico
        dst.Estilos = src.Estilos;
        dst.Instrumentos = src.Instrumentos ? src.Instrumentos : null;
        dst.DataNascimento = src.DataNascimento;
        

    }
    
    UserToBanda(src:UserView){
        //User Padrao
        var dst:UserBanda = new UserBanda(src.Nome, src.Email, src.Senha, src.Login);
        dst.Id = src.Id;
        dst.Descricao = src.Descricao;
        dst.Telefone = src.Telefone;
        dst.Status = src.Status;
        dst.Tipo = TipoUsuario.MUSICO;
        dst.Endereco = src.Endereco;
        dst.RedesSociais = src.RedesSociais;
        // Particularidades Musico
        dst.Estilos = src.Estilos;
        dst.Criador = src.Criador ? src.Criador : null;
        dst.Integrantes = src.Integrantes;
       

    }


    UserToIndustria(src:UserView){
        //User Padrao
        var dst:UserMusico = new UserMusico(src.Nome, src.Email, src.Senha, src.Login);
        dst.Id = src.Id;
        dst.Descricao = src.Descricao;
        dst.Telefone = src.Telefone;
        dst.Status = src.Status;
        dst.Tipo = TipoUsuario.MUSICO;
        dst.Endereco = src.Endereco;
        dst.RedesSociais = src.RedesSociais;
        // Particularidades Musico
        dst.Estilos = src.Estilos;
        dst.Instrumentos = src.Instrumentos ? src.Instrumentos : null;
        dst.DataNascimento = src.DataNascimento;
    }





}
AutoMapper.create<UserView, UserMusico>("UserToMusico")
    //User Padrao
    .map(src => src.Id, dst => dst.Id)
    .map(src => src.Nome, dst => dst.Nome)
    .map(src => src.Email, dst => dst.Email)
    .map(src => src.Senha, dst => dst.Senha)
    .map(src => src.Login, dst => dst.Login)
    .map(src => src.Descricao, dst => dst.Descricao)
    .map(src => src.Telefone, dst => dst.Telefone)
    .map(src => src.Status, dst => dst.Status, {
    operation: (p:TipoStatus) => TipoStatus[p]
    })
    .map(src => src.Tipo, dst => dst.Tipo, {
    operation: (p:TipoUsuario) => TipoUsuario[p]
    })
    .map(src => src.Endereco, dst => dst.Endereco)
    .map(src => src.RedesSociais, dst => dst.RedesSociais)
    //
    // Particularidades Musico
    .map(src => src.Estilos, dst => dst.Estilos)
    .map(src => src.Instrumentos, dst => dst.Instrumentos)
    .map(src => src.DataNascimento, dst => dst.DataNascimento)

AutoMapper.create<UserView, UserBanda>("UserToBanda")
    //User Padrao
    .map(src => src.Id, dst => dst.Id)
    .map(src => src.Nome, dst => dst.Nome)
    .map(src => src.Email, dst => dst.Email)
    .map(src => src.Senha, dst => dst.Senha)
    .map(src => src.Login, dst => dst.Login)
    .map(src => src.Descricao, dst => dst.Descricao)
    .map(src => src.Telefone, dst => dst.Telefone)
    .map(src => src.Status, dst => dst.Status, {
    operation: (p:TipoStatus) => TipoStatus[p]
    })
    .map(src => src.Tipo, dst => dst.Tipo, {
    operation: (p:TipoUsuario) => TipoUsuario[p]
    })
    .map(src => src.Endereco, dst => dst.Endereco)
    .map(src => src.RedesSociais, dst => dst.RedesSociais)
    //
    // Particularidades Banda
    .map(src => src.Estilos, dst => dst.Estilos)
    .map(src => src.Criador, dst => dst.Criador)
    .map(src => src.Integrantes, dst => dst.Integrantes)

AutoMapper.create<UserView, UserIndustria>("UserToIndustria")
    //User Padrao
    .map(src => src.Id, dst => dst.Id)
    .map(src => src.Nome, dst => dst.Nome)
    .map(src => src.Email, dst => dst.Email)
    .map(src => src.Senha, dst => dst.Senha)
    .map(src => src.Login, dst => dst.Login)
    .map(src => src.Descricao, dst => dst.Descricao)
    .map(src => src.Telefone, dst => dst.Telefone)
    .map(src => src.Status, dst => dst.Status, {
    operation: (p:TipoStatus) => TipoStatus[p]
    })
    .map(src => src.Tipo, dst => dst.Tipo, {
    operation: (p:TipoUsuario) => TipoUsuario[p]
    })
    .map(src => src.Endereco, dst => dst.Endereco)
    .map(src => src.RedesSociais, dst => dst.RedesSociais)
    //
    // Particularidades Banda
    .map(src => src.TipoIndustria, dst => dst.TipoIndustria, {
    operation: (p:TipoIndustria) => TipoIndustria[p]
    })
    .map(src => src.Logradouro, dst => dst.Logradouro)

