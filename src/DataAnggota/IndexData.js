import express, { request, response }  from "express";
import DataSiswa from "./DataSiswa.js";

const app = express();
const DataSiswaProgramming = DataSiswa;

export const getDataUser =  (req, res)=> {
    res.json(DataSiswaProgramming);
};


export const getKeyUser =   (req, res)=> {
    const User = req.params.WordKey;
    const WordKeyUser = User.toUpperCase();
    const DataList = DataSiswaProgramming;
    //Logic key get Search   Users
    const FilterKeyUser = (DataList, WordKeyUser) => {
        let GetFinalUser = new Array(); //Variable Array Data Users
        for (const datas of DataList) {
            if (datas.name.includes(WordKeyUser) || datas.class.includes(WordKeyUser)) {
                GetFinalUser.push(datas)
            }
        }
        return FilterData(GetFinalUser)
       
    }
    function FilterData(dataFil) {
        if (dataFil.length > 0) {
            return dataFil;
        } else {
            return 'Data Tidak Ditemukan'
        }
    }

    res.json(FilterKeyUser(DataList, WordKeyUser)) ;
    
}
