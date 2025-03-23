import { UserSaran } from "../DataBase/connect.js";

export const postSaran = async (req, res) => {
    const getDataPost = req.body;
    try {
        const PostDataModel = new UserSaran(getDataPost);
        await PostDataModel.save();
        res.json({
            statusCode: 201,
            massage: "Success data is created.",
            datas: getDataPost
        });
    } catch (err) {
        res.json({
            statusCode: 401,
            massage: "Error Data Not Valid",
            datas: null
        });
    }
}

export const getSaran = async (req, res) => {
    try {
        const getDataFind = await UserSaran.find();
        res.json({
            statusCode: 200,
            massage: 'Success, your get Data.',
            datas: getDataFind
        });
    } catch (err) {
        res.json({
            statusCode: 403,
            massage: "Bad Gateway"
        });
    }
}