class Repository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        
        return new Promise((resolve, reject) => {
            
            this.model.create(data).then(callback => {
                resolve(callback.dataValues);
            }).catch(error => {
                reject(error);
            });

        });
    }

    async find(queryOptions){
        return new Promise((resolve, reject) => {
            this.model.findOne(queryOptions)
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }

    async findAll(queryOptions){
        return new Promise((resolve, reject) => {
            this.model.findAll(queryOptions)
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }
}

module.exports = Repository;