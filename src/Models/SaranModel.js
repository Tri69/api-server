import { UserSaran } from "../DataBase/connect.js";

export const postSaran = async (req, res)=> {
    const getDataPost = req.body;
    try{
        const ModelDataPost = new UserSaran(getDataPost);
        await ModelDataPost.save();
        res.json({
            statusCode : 201,
            massage : "Success your Created Data",
            data : getDataPost
        })
    }catch(err){
        res.json({
            statusCode: 401,
            details: "Error Data Not Valid"
        })
    }
}

export const getSaran = async (req, res)=> {
    const getDataFind = await UserSaran.find();
    res.json({
        statusCode : 200,
        Massage : 'Success umur get Data',
        data : getDataFind
    });
}
