import jsonwebtoken from "jsonwebtoken";
import { UserRegister } from "../DataBase/connect.js";

const SECRET = process.env.SECRET_CODE;

export const Register = async (req, res) => {
    const datas = req.body;
    try{
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
    res.json({
        statusCode: 200,
         massage: 'Succes, silahkan login', 
         token: data });
    }catch(err){
        res.json(
            {
                statusCode : 403,
                massage : "Erro silahkan daftar kembali"
            }
        )
    }
    
    
}
