module.exports = {
    retornaErroFormatado,
    retornaCodigoDeErroPorInstancia,
    notFoundError
}

function retornaErroFormatado(error){
    return {
        name: error.name,
        message: error.message,
        code: error.code || retornaCodigoDeErroPorInstancia(error)
    }
}

function retornaCodigoDeErroPorInstancia(error){
    if(error instanceof TypeError)
        return 400;

    return 500;
}

function notFoundError(error){
    throw { name: 'NotFoundError', message: error, code: 404 };
}