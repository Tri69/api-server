import jsonwebtoken from "jsonwebtoken";
import { UserRegister } from "../DataBase/connect.js";
import sendMailOauth from "./SendMail.js";

const SECRET = process.env.SECRET_CODE;

export const Register = async (req, res) => {
    const datas = req.body;
    
        const createRefToken = jsonwebtoken.sign(datas, process.env.SECRET_CODE);
        const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
	   devisi : req.body.devisi,
        token : createRefToken
    }
    const SaveData = new UserRegister(data);
    await SaveData.save();
	sendMailOauth(req.body.email);
	console.log(req.body.email)
   return  res.json({
        statusCode: 200,
         massage: 'Succes, silahkan login', 
         token: data });
    
    
    
}
