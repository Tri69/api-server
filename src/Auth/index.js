import jsonwebtoken from "jsonwebtoken";

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