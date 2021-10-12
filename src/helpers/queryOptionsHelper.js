function getQueryOptions(where, model = null){
    let queryOtions = {
        where
    }
    if(model){
        queryOtions['include'] =  {
            model: model,
            required: true
        };
    }
    return queryOtions;
    
}

module.exports = {
    getQueryOptions
}