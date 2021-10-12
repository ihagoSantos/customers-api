const assert = require('assert');
const clienteValidator = require('../../api/validators/clienteValidator');
let params;
describe('Teste da classe ClienteValidator', function(){
    this.beforeAll(function(){

        params = {
            numero: 12,
            nomeCompletoValido: "Ihago Freire Santos",
            nomeCompletoInvalido: "Iha",
            sexoValido: 'masculino',
            sexoInvalido: 'm',
            texto: 'texto',
            dataValida: "1994-10-06",
            dataInvalida: "2021/11/04",
        }
    });
    describe('Teste da função isValidNumeroCaracteresNomeCompleto()', function(){        
        it('deve retornar true quando o parametro nomeCompleto possuir pelo menos 5 caracteres', function(){
            assert.deepEqual(clienteValidator.isValidNumeroCaracteresNomeCompleto(params.nomeCompletoValido), true);
        });
        it('deve retornar false quando o parametro nomeCompleto possuir menos de 5 caracteres', function(){
            assert.deepEqual(clienteValidator.isValidNumeroCaracteresNomeCompleto(params.nomeCompletoInvalido), false);
        });
    });

    describe('Teste da função validarNomeCompleto()', function(){        
        it('deve retornar TypeError quando o parametro nomeCompleto passado for inteiro', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarNomeCompleto(params.numero);
            }, expected);
        });
        it('deve retornar TypeError quando o parametro nomeCompleto passado possuir menos do que 5 caracteres', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarNomeCompleto(params.nomeCompletoInvalido);
            }, expected);
        });
    });

    describe('Teste da função isSexoValido()', function(){        
        it('deve retornar true quando o parametro sexo for masculino, feminino ou outro', function(){
            assert.deepEqual(clienteValidator.isSexoValido(params.sexoValido), true);
        });
        it('deve retornar false quando o parametro sexo for diferente de masculino, feminino ou outro', function(){
            assert.deepEqual(clienteValidator.isSexoValido(params.sexoInvalido), false);
        });
    });

    describe('Teste da função validarSexo()', function(){        
        it('deve retornar TypeError quando o parametro sexo passado for diferente de string', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarSexo(params.numero);
            }, expected);
        });
        it('deve retornar TypeError quando o parametro sexo for diferente de masculino, feminino ou outro', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarSexo(params.sexoInvalido);
            }, expected);
        });
    });

    describe('Teste da função isValidDate()', function(){        
        it('deve retornar true quando o parametro data for no formato YYYY-MM-DD', function(){
            assert.deepEqual(clienteValidator.isValidDate(params.dataValida), true);
        });
        it('deve retornar false quando o parametro data for diferente do formato YYYY-MM-DD', function(){
            assert.deepEqual(clienteValidator.isValidDate(params.dataInvalida), false);
        });
    });

    describe('Teste da função isDataMenorQueAtual()', function(){        
        it('deve retornar true quando o parametro data for menor ou igual do que a data atual', function(){
            assert.deepEqual(clienteValidator.isDataMenorQueAtual(params.dataValida), true);
        });
        it('deve retornar false quando o parametro data for maior do que a data atual', function(){
            assert.deepEqual(clienteValidator.isDataMenorQueAtual(params.dataInvalida), false);
        });
    });

    describe('Teste da função validarDataNascimento()', function(){        
        it('deve retornar TypeError quando o parametro data for invalida', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarDataNascimento(params.numero);
            }, expected);
        });
        it('deve retornar TypeError quando o parametro data for maior do que a data atual', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarDataNascimento(params.dataInvalida);
            }, expected);
        });
    });
    describe('Teste da função validarIdade()', function(){        
        it('deve retornar TypeError quando o parametro idade for diferente de inteiro inteiro', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarIdade(params.texto);
            }, expected);
        });
        it('deve retornar TypeError quando o parametro data for maior do que a data atual', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarIdade(params.dataInvalida);
            }, expected);
        });
    });
    describe('Teste da função validarId()', function(){        
        it('deve retornar TypeError quando o parametro id não for informado', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarId();
            }, expected);
        });
        it('deve retornar TypeError quando o parametro id for diferente de inteiro inteiro', function(){
            const expected = TypeError;
            assert.throws(function(){
                clienteValidator.validarId(params.texto);
            }, expected);
        });
    });
});