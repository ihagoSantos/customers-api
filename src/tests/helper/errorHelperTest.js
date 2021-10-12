const assert = require('assert');
const errorHelper = require('../../helpers/errorHelper');
let error;

describe('Teste do helper errorHelper', function(){
    this.beforeAll(function(){
        error = new TypeError("Esse é um TypeError");
    });

    describe('Teste da função retornaErroFormatado()', function(){        
        it('deve retornar um objeto contendo os parametros name, message e code', function(){
            const expected = {
                name: 'TypeError',
                message: "Esse é um TypeError",
                code: 400
            }
            assert.deepEqual(errorHelper.retornaErroFormatado(error), expected);
        });
    });

    describe('Teste da função retornaCodigoDeErroPorInstancia()', function(){
        it('deve retornar um inteiro contendo o codigo ao passar o erro', function(){
            assert.deepEqual(errorHelper.retornaCodigoDeErroPorInstancia(error), 400);
        });
    });
});