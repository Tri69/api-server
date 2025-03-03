import express from 'express';
import cors from 'cors';
import { DeleteData, GetDataFind, PostData, UpdateData } from './src/DataAnggota/mongoose.js';
import { getDataUser, getKeyUser } from './src/DataAnggota/IndexData.js';
const App = express();
const PORT = 3005;

App.use(cors());
App.use(express.json())
//App.use(Route())

App.get('/api/v2', getDataUser);
App.get('/api/v2/getUser', GetDataFind);
App.post('/api/v2/postUser', PostData);
App.put('/api/v2/updateUser/:id', UpdateData);
App.delete('/api/v2/deleteUser/:id', DeleteData);
App.get('/api/v2/:WordKey', getKeyUser);

App.listen(PORT, () => {
    console.log("Server Running");
})