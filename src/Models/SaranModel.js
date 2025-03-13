import { UserSaran } from "../DataBase/connect.js";

export const postSaran = async (req, res)=> {
    const getDataPost = req.body;
    try{
        const ModelDataPost = new UserSaran(getDataPost);
        await ModelDataPost.save();
        res.json({
            status : 201,
            details: "Success",
            datas : getDataPost
        })
    }catch(err){
        res.json({
            status: 401,
            details: "Error Data Not Valid"
        })
    }
}

export const getSaran = async (req, res)=> {
    const getDataFind = await UserSaran.find();
    res.json({
        status:200,
        details: 'Success',
        datas : getDataFind
    });
}