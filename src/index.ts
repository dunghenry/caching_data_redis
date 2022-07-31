import { IPort } from './types/index.d';
import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import client from './configs/connectRedis';
import routes from './routes';
dotenv.config();
const app: Application = express();
const port: IPort = process.env.PORT || 4000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
(async () => {
    await client.connect();
})();
routes(app);
app.listen(port, () => console.log(`Serving listening on http://localhost:${port}`));