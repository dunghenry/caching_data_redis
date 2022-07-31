import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import client from '../configs/connectRedis';
class getDataController {
    static async getTodos(req: Request, res: Response) {
        try {
            const dataR = await client.get('todos');
            if (!dataR) {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
                const data = response.data;
                await client.set('todos', JSON.stringify(data));
                return res.status(200).json(data);
            }
            else {
                return res.status(200).json(JSON.parse(dataR));
            }
        } catch (error: any) {
            return res.status(500).json('Internal Server Error');
        }
    }
}

export default getDataController;