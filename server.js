(async () => {
    require('dotenv').config();
    const app = require('./app');
    // require('./models/cliente.js');
    // require('./models/endereco.js');
    // const database = require('../config/database.js');
    
    // database.sync();
    
    app.listen(process.env.NODE_DOCKER_PORT);

})();