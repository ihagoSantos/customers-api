module.exports = {
    success: {
        clienteCadastradoSucesso: "Cliente cadastrado com sucesso",
        clienteEditadoSucesso: "Cliente editado com sucesso",
        clienteRemovidoSucesso: "Cliente removido com sucesso",
    },
    error: {
        nomeCompletoString: "O nome do cliente deve ser uma string",
        nomeCompletoNumeroCaracteres: "O nome do cliente deve ter no mínimo 5 caracteres",
        sexoDeveSerString: "O sexo do cliente deve ser string",
        sexoValoresValidos: "O sexo deve possuir os valores 'masculino', 'feminino' ou 'outro'",
        dataFormatoValido: "A data deve ser uma string no formato 'yyyy-mm-dd'",
        dataDeveSerMenorQueDataAtual: "A data deve ser menor do que a data atual",
        idadeDeveSerInteiro: "A idade do cliente deve ser um inteiro",
        erroCadastrarCliente: "Erro ao cadastrar cliente",
        idNaoInformado: "O parametro 'id' deve ser informado",
        idDeveSerInteiro: "O parametro 'id' do cliente deve ser um inteiro",
        clienteNaoEncontrado: "Cliente não encontrado",
    }
}