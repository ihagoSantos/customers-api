class Validator {
    constructor() { }

    isValidInteger(number){
        return Number.isInteger(number);
    }

    isValidString(string){
        return typeof string == 'string';
    }


}

module.exports = Validator;