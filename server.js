import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './src/config/config.js';
import ConnectDataBase from './src/db/connection.js';
import productRoutes from './src/routes/product.routes.js';


class Server {
    constructor() {
        this.app = express();
        this.port = config.PORT;
        this.connectDataBase = new ConnectDataBase();
        this.middlewares();
        this.routes();
    };

    async connectDB() {
        await this.connectDataBase.connect();
    };

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    };

    routes() {
        this.app.use('/api/products', productRoutes);
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