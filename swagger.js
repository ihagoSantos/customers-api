const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });

const outputFile = './swaggerOutput.json';
const routesFile = ['./routes.js'];

const doc = {
    info: {
        version: "1.0.0",
        title: "customers-api",
        description: "API utilizada para realizar cadastro de clientes e cidades"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Cliente",
            "description": "Endpoints para manipulação de clientes"
        },
        {
            "name": "Cidade",
            "description": "Endpoints para manipulação de cidades"
        }
    ],
    definitions: {
        Cliente: {
            $nomeCompleto: {
                field: "Ihago Santos",
                type: "string"
            },
            $sexo: {
                field: "masculino, feminino ou outro",
                type: "string",
            },
            $dataNascimento: {
                field: "1994-10-06",
                type: "string",
            },
            $idade: {
                field: 27,
                type: "number",
            },
            $cidadeId: {
                field: 2,
                type: "number",
            },
            
        },
        Cidade: {
            $name: {
                field: "Garanhuns",
                type: "string",
            },
            $estado: {
                field: "Pernambuco",
                type: "string",
            },
        },
        ApiResponseError: {
            name: {
                field: "TypeError",
                type: "string",
            },
            message: {
                field: "Erro ao cadastrar Cliente",
                type: "string",
            },
        },
        ApiResponseSuccess: {
            $data: {
                field: {
                    id: 12,
                    nome: "Teste 2",
                    estado: "São Paulo 2",
                    updatedAt: "2021-10-12T19:47:47.374Z",
                    createdAt: "2021-10-12T19:47:47.374Z"
                },
                type: "string",
            }
        }
    }
};


swaggerAutogen(outputFile, routesFile, doc)
    .then(() => {
        require('./server.js');
    })