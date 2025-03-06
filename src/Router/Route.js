import express from "express";
import { GetDataFind, PostData, UpdateData, DeleteData } from '../Models/mongoose.js';
import { getDataUser, getKeyUser } from "../DataAnggota/IndexData.js";
import { GetAbsensiData, FormAbsensiData } from "../Models/AbsensiModel.js";

const Routes = express.Router();
const MiddlewareData = () => {
    return 'tes'
}

//Routes pada Form Pendaftaran Organisasi
Routes.get('/api/v2/getUser', GetDataFind);
Routes.post('/api/v2/postUser', PostData);
Routes.put('/api/v2/updateData', UpdateData);
Routes.delete('/api/v2/deleteData', DeleteData)


//Routes pada Sistem Absensi Harian
Routes.get('/api/v2/ListAbsensi', GetAbsensiData);
Routes.post('/api/v2/Absensi', FormAbsensiData);


//Routes pada sistem List Anggota
Routes.get('/api/v2', getDataUser);
Routes.get('/api/v2/:WordKey', getKeyUser);


export default Routes;

