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

    async find(where){
        return new Promise((resolve, reject) => {
            this.model.findOne({ where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }

    async findAll(where){
        return new Promise((resolve, reject) => {
            this.model.findAll({ where })
                .then(callback => {
                    resolve(callback);
                })
                .catch(error => reject(error));
        });
    }
}

module.exports = Repository;