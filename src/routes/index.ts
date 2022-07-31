import { Application } from 'express';
import getData from './getData'
const routes = (app: Application) =>{
    app.use('/data', getData);
}
export default routes;