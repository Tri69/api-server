import { UserRegister } from "../DataBase/connect.js";
import jsonwebtoken from "jsonwebtoken";

export const Login = async (req, res, next) => {
    const getEmail = req.body.email;
    const selectdbemail = await UserRegister.findOne({ email: getEmail })
    console.log(getEmail)
    console.log(selectdbemail)
    if (selectdbemail) {
        if (selectdbemail.password !== req.body.password){
            return res.send("Password Salah")
        } 
        else {
            const parseData = {
                username: selectdbemail.username,
                email: selectdbemail.email,
                password: selectdbemail.password,
				devisi : selectdbemail.devisi
            }
            const createToken = jsonwebtoken.sign(parseData, process.env.SECRET_CODE)
            res.json({
                statusCode: 200,
                massage: "Success Login!",
                data: parseData,
                token: createToken
            })
            next()
        }
    }
    else {
        res.json({
            statusCode: 403,
            massage: "Data not devine"
        })
    }

}