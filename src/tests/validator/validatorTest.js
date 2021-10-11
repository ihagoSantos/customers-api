const assert = require('assert');
const Validator = require('../../api/validators/validator');
const validator = new Validator();
let params;
describe('Teste da classe Validator', function(){
    this.beforeAll(function(){
        params = {
            numero: 12,
            texto: 'texto',
            dataValida: new Date("2015-03-25"),
        }
    });

    describe('Teste da função isValidInteger()', function(){        
        it('deve retornar true quando o parametro passado for inteiro', function(){
            assert.deepEqual(validator.isValidInteger(params.numero), true);
        });
        it('deve retornar false quando o parametro passado for diferente de inteiro', function(){
            assert.deepEqual(validator.isValidInteger(params.texto), false);
        });
    });

    describe('Teste da função isValidString()', function(){
        it('deve retornar true quando o parametro passado for string', function(){
            assert.deepEqual(validator.isValidString(params.texto), true);
        });
        it('deve retornar false quando o parametro passado não for string', function(){
            assert.deepEqual(validator.isValidString(params.numero), false);
        });
    });
});