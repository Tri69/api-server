import express from 'express';
import { Register } from '../Auth/Register.js';
import { Login } from '../Auth/Login.js';
import { Dashboard, MiddlewareAuth, ProfilPerson } from '../Auth/index.js';

const RouterAuth = express.Router();

RouterAuth.post("/api/v2/Auth/Register", Register);
RouterAuth.post("/api/v2/Auth/Login", Login);
RouterAuth.get("/api/v2/app/Dashboard", MiddlewareAuth, Dashboard);
RouterAuth.get("/api/v2/app/profil", ProfilPerson);

export default RouterAuth;