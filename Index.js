import express from 'express';
import cors from 'cors';
import Routes from './src/Router/Route.js';
import ejs from 'ejs';

const App = express();
const PORT = 3005;

App.use(cors());
App.use(express.json());
App.use(Routes);
App.set('view engine', 'ejs');

App.get('/', (req, res)=> {
    const data = {
        title: "Home Page BackEnd"
    }
    res.render('index', data);
});


App.listen(PORT, () => {
    console.log("Server is Running");
});