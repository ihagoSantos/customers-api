const assert = require('assert');
const CidadeModel = require('../../api/models/cidade/cidadeModel');
const cidadeValidator = require('../../api/validators/cidadeValidator');
let params;
describe('Teste da classe CidadeValidator', function(){
    this.beforeAll(function(){
        params = {
            numero: 10,
            cidade: new CidadeModel("Garanhuns","Pernambuco"),
        }
    });


    describe('Teste da função validarCidadeCliente()', function(){        
        it('deve retornar TypeError quando a cidade do cliente não for informada', function(){
            const expected = TypeError;
            assert.throws(function(){
                cidadeValidator.validarCidadeCliente();
            }, expected);
        });
    });
    describe('Teste da função validarNome()', function(){        
        it('deve retornar TypeError quando o nome da cidade não for informado', function(){
            const expected = TypeError;
            assert.throws(function(){
                cidadeValidator.validarNome();
            }, expected);
        });
        it('deve retornar TypeError quando o nome da cidade não for string', function(){
            const expected = TypeError;
            assert.throws(function(){
                cidadeValidator.validarNome(params.numero);
            }, expected);
        });
    });
    describe('Teste da função validarEstado()', function(){        
        it('deve retornar TypeError quando o estado da cidade não for informado', function(){
            const expected = TypeError;
            assert.throws(function(){
                cidadeValidator.validarEstado();
            }, expected);
        });
        it('deve retornar TypeError quando o estado da cidade não for string', function(){
            const expected = TypeError;
            assert.throws(function(){
                cidadeValidator.validarEstado(params.numero);
            }, expected);
        });
    });

});