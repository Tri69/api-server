//import UserAbsensi from "../DataBase/ConnectAbsensi.js";
import { UserAbsensi } from "../DataBase/connect.js";

export const FormAbsensiData = async (req, res)=> {
    const DataAbsensi = req.body;
    const getDataAbsensi = new UserAbsensi(DataAbsensi);
    const result = await getDataAbsensi.save();
    res.send("Absensi Berhasil");
}


export const GetAbsensiData = async (req, res)=>{
    const getResultData = await UserAbsensi.find();
    res.json(getResultData);
}