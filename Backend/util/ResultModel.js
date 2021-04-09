module.exports = class ResultModel{

    Success = true;
    Message = null;

    Errors = [];
    Exception = null;

    Result = null;

    constructor(){}
    addError(message = null, except = null){
        if(message){
            this.Errors.push(message);
        }
        if(except){
            this.Exception = except;
        }
        this.Success = false;

    }


}