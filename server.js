import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './src/config/config.js';
import ConnectDataBase from './src/db/connection.js';
import setRelations from './src/models/relations.js';
import productRoutes from './src/routes/product.routes.js';
import userRoutes from './src/routes/user.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
<<<<<<< HEAD
import buySaleRoutes from './src/routes/buy&Sale.routes.js';
=======
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
import { sequelize } from './src/db/configDB.js';



class Server {
    constructor() {
        this.app = express();
        this.port = config.PORT;
        this.connectDataBase = new ConnectDataBase();
        this.setRelations();
        this.middlewares();
        this.routes();
    };

    setRelations(){
        setRelations();
    };

    async connectDB() {
        await this.connectDataBase.connect();
        await sequelize.sync({ force: false });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    };

    routes() {
        this.app.use('/api/products', productRoutes);
        this.app.use('/api/users', userRoutes);
<<<<<<< HEAD
        this.app.use('/api/carts', cartRoutes);
        this.app.use('/api/buys', buySaleRoutes);
=======
        this.app.use('/api/cart', cartRoutes);
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
    };

    async listen() {
        try {
            this.app.listen(this.port, () => {
                console.log(`Server on http://127.0.0.1:${this.port}`);
            });
            await this.connectDB();
        } catch (err) {
            console.error('Failed to connect to the database', err);
        }
    };
};


export default Server;