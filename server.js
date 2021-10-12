(async () => {
    require('dotenv').config();
    const app = require('./app');
    require('./src/api/models/cidade/cidade.js');
    require('./src/api/models/cliente/cliente.js');
    const database = require('./config/database');
    
    database.sync();
    
    app.listen(process.env.NODE_DOCKER_PORT);

})();