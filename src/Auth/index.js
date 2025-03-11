import jsonwebtoken from "jsonwebtoken";
import  { UserRegister } from "../DataBase/connect.js";
//import mongoose from "mongoose";

const SECRET = 'Kirti@2025';
export function MiddlewareData (req, res, next){
    const tokenize = req.header('authorization');
    res.send(tokenize);
    

}

export const Register = async (req, res) => {
    const {username, email, password} = req.body;
   
       
        const data = {
            username: username,
            email: email,
            password: password,
            
        }
        const token = jsonwebtoken.sign(data, SECRET);
        const SaveDataBaseN = {
            username: username,
            email : email,
            password:password,
            token:token
        }
        const SaveData = new UserRegister(SaveDataBaseN);
        await SaveData.save();
        res.json({massage: 'Succes', token : token});

  
        //res.status(401).json({message:err});
    
}
export const Login = (req, res, next)=> {
    const getUserLogin = req.headers.authorization;
    res.json(getUserLogin)
    next()
}
export const Dashboard = async (req, res)=> {
    const datas = await UserRegister.find();
    res.json(datas)
}