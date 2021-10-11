module.exports = {
    retornaErroFormatado,
    retornaCodigoDeErroPorInstancia
}

function retornaErroFormatado(error){
    return {
        name: error.name,
        message: error.message,
        code: retornaCodigoDeErroPorInstancia(error)
    }
}

function retornaCodigoDeErroPorInstancia(error){
    if(error instanceof TypeError)
        return 400;

    return 500;
}