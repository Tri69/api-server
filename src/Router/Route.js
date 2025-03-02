import express from "express";
import {getDataFind, PostData} from '../DataAnggota/mongoose';
import { getDataUser, getKeyUser } from "../DataAnggota/IndexData";

const Routes = express.Route();
const Route = ()=> {
Routes.get('/api/v2', getDataUser);
Routes.get('/api/v2/:WordKey', getKeyUser);
Routes.get('/api/v2/getUser', getDataFind);
Routes.get('/api/v2/postUser', PostData);
}
export default Route;

