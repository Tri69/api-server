import express from 'express';
import cors from 'cors';
import Routes from './src/Router/Route.js';

const App = express();
const PORT = 3005;

App.use(cors());
App.use(express.json());
App.use(Routes);


App.listen(PORT, () => {
    console.log("Server Running");
});