import express from 'express';
import cors from 'cors';
import Routes from './src/Router/Route.js';
import RouterAuth from './src/Router/AuthRoute.js';
import dotenv from 'dotenv';

dotenv.config();
const App = express();

App.use(cors());
App.use(express.json());
App.set('view engine', 'ejs');

App.get('/', (req, res)=> {
    const data = {
        title: "Home Page BackEnd"
    }
    res.render('index', data);
});

App.use(Routes);
App.use(RouterAuth);

App.listen(process.env.PORT_SERVER, () => {
    console.log(`Server  Running in port ${process.env.PORT_SERVER}`);
});