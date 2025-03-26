import jsonwebtoken from "jsonwebtoken";
import {UserRegister} from "../DataBase/connect.js";
import mongoose from 'mongoose';

export async function MiddlewareAuth(req, res, next) {
    const getToken = req.header('Authorization')
    if (!getToken || getToken == null) {
       console.log("Token Kadaluwarsa")
       return res.json({data : false})
    }
        const token = getToken.split(' ')[1];
        const verifyToken = jsonwebtoken.verify(token, process.env.SECRET_CODE)
        if (verifyToken) {
            console.log("Login Behasil")
            next()
        }
        else {
           console.log("Gagal Password Salah")
        }
    }


export async function MiddlewareCheckEmail(req, res, next) {
	const getBodyEmail = req.body.email;

const getEmailDB = await UserRegister.findOne({email : getBodyEmail});
console.log(typeof getEmailDB);
console.log(getEmailDB)
if( getEmailDB == null) {
	return next()
}
else if( getEmailDB.email == getBodyEmail) {
	return res.json({
	"status" : 403,
	"massage": "Email Sudah Terdaftar"
});
}else {
	res.json({"massage" : "Internal Error"})
}
}


export  function Dashboard(req, res) {
    const getDataUser = req.header("Authorization").split(" ")[1];
    const verifyData = jsonwebtoken.verify(getDataUser, process.env.SECRET_CODE)
    console.log(verifyData)

    res.json({
        statusCode: 200,
        massage: "Berhasil Masuk",
        DataProfile: verifyData
    })
}

export  function ProfilPerson(req, res){
    res.send("Selamat Datang");
}

export async function EditProfil(req, res) {
	try{
		const getToken = req.header("Authorization").split(" ")[1]
		const getDataToken = jsonwebtoken.verify(getToken, process.env.SECRET_CODE);
		const TokenEdit = req.body
		const UpdateData = await UserRegister.findOneAndUpdate({email : getDataToken.email}, {
			$set : TokenEdit
		}, {new: true})
		console.log(UpdateData)
	}catch(err){
		
	}
	res.send("test edit")
}