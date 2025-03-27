import express from 'express';
import { Register } from '../Auth/Register.js';
import { Login } from '../Auth/Login.js';
import { Dashboard, MiddlewareAuth, ProfilPerson, MiddlewareCheckEmail, EditProfil } from '../Auth/index.js';
import {ResetPassword} from '../Auth/ResetPassword.js'

const RouterAuth = express.Router();

RouterAuth.post("/api/v2/Auth/Register",MiddlewareCheckEmail,  Register);
RouterAuth.post("/api/v2/Auth/Login", Login);
RouterAuth.get("/api/v2/app/Dashboard", MiddlewareAuth, Dashboard);
RouterAuth.get("/api/v2/app/profil", ProfilPerson);
RouterAuth.put("/api/v2/app/Dashboard/edit", MiddlewareAuth, EditProfil)
RouterAuth.put("/api/v2/app/Dashbboard/reset", MiddlewareAuth, ResetPassword)
export default RouterAuth;