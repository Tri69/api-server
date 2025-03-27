import jsonwebtoken from 'jsonwebtoken'
import {UserRegister} from '../DataBase/connect.js';

export const ResetPassword =  async (req, res, next) => {
	const getToken = req.header('Authorization').split(' ')[1]
	const dataVerify = jsonwebtoken.verify(getToken, process.env.SECRET_CODE);
	const getNewPassword = req.body.password;
	const getupdateData = req.body;
	const updateData = await UserRegister.findOneAndUpdate({email : dataVerify.email} , {$set : getupdateData}, {new:  true})
	if(!updateData) {
		return res.json({
			'massage' : "Gagal"
		})
	}
	next()
}