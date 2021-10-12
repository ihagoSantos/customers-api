class Service {
    constructor(repository, validator){
        this.repository = repository;
        this.validator = validator;
    }

    create(data){
        this.validator.validarCidade(data);
        return new Promise((resolve, reject) => {
            this.repository.create(data)
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    findByName(queryOptions){
        return new Promise((resolve, reject) => {
            
            this.repository.findAll(queryOptions)
                .then(callback => resolve(callback))
                .catch(error => reject(error));
        });
    }

}

module.exports = Service;