function ValidationDataPost(name, email, clas, devison, motivation) {
    if (!name || !email || !clas || !devison || !motivation) {
        return res.Status(401).json({
            status: 401,
            massage: 'Data is not Compilted'
        })
    }

}


export default ValidationDataPost;