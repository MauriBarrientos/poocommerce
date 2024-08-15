import { sequelize } from './configDB.js';

class ConnectDataBase {
    constructor() {
        this.sequelize = sequelize;
    };

    async connect() {
        await this.sequelize.sync()
        .then(() => console.log('Base de datos conectada'))
        .catch((err) => console.log('Error al conectar la base de datos', err));
    };
};


export default ConnectDataBase;