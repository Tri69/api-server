const express = require('express');
const app = express();
const port = 2001;
const cors = require('cors')
//const DataSiswa = require('./DataAnggota/DataSiswa')


//router cors acess to file secure 
app.use(cors());

//Examples data with data base
const DataSiswaProgramming = [
    {
        id:1,
        name:'Pasha Mulyanto Utomo',
        class:'X TSM C',
        nis: 9774
    },{
        id:2,
        name: 'Dinda Saputri',
        class:'XI TJKT A',
        nis: 9252
    },{
        id:3,
        name: 'Isnaeni Maylinda Werdianingrum ',
        class:'X DKV C',
        nis: 9980
    },{
        id:4,
        name: 'Yuniata Muzaemi',
        class:'X DKV C',
        nis: 9998
    },{
        id:5,
        name: 'Akhmad Muta`alli Wahab ',
        class:'X TP C',
        nis:9533
    },{
        id:6,
        name: 'Ahmad Rokhmi Kamaluddin',
        class:'X TP X',
        nis:9531
    },{
        id:7,
        name: 'Oby Wiko Wijaya ',
        class:'X TP C',
        nis: 9557
    },{
        id:8,
        name: 'Bima Adesca Camara ',
        class:'X DKV B',
        nis:9935
    },{
        id:9,
        name: 'Bhima Dharma Sutajaya',
        class:'X TP B',
        nis:9502
    },{
        id:10,
        name: 'Muhammad Widwan Mulyawan',
        class:'X TP B',
        nis:9518
    },{
        id:11,
        name: 'Anggoro Ndaru Bekti',
        class:'X TJKT C',
        nis: 9859
    },{
        id:12,
        name: 'Ilham Tias Arystiono',
        class:'XI TKRO C',
        nis: 9112
    },{
        id:13,
        name: 'Chaira Pika Vallyta',
        class:'XII DKV C',
        nis: 8889
    },{
        id:14,
        name: 'Meylani Endah Palupi',
        class:'XII DKV C',
        nis:8904
    },{
        id:15,
        name: 'Lukman Arrahman',
        class:'XI TKR C',
        nis:9115
    }
        
];


//Router and Midlleware Default Get All Users
app.get('/api/v2', (req,res, next)=> {
    const urut = DataSiswaProgramming;
    res.json(urut)
    next()
})

//Router and Midlleware Search Fitur User
app.get('/api/v2/:GetUser', (req, res)=> {
    //Get Key in Url Parameter
    const User = req.params.GetUser;
    const WordKeyUser = User.toUpperCase();
    const DataList = DataSiswaProgramming;
    //Logic key get Search   Users
    const FilterKeyUser = (DataList, WordKeyUser) => {
        let GetFinalUser = []; //Variable Data Users 
        for(const datas of DataList) {
            if(datas.name.includes(WordKeyUser) || datas.class.includes(WordKeyUser)) {
                GetFinalUser.push(datas)
            }
        }
        return FilterData(GetFinalUser)
    }
    function FilterData(data) {
        if(data.length > 0) {
            return data
        }else {
            return 'Data Tidak Ditemukan'
        }
    }
 
    res.json(FilterKeyUser(DataList, WordKeyUser))
}) 
 /* const Filter = data.filter((a)=> {
        return  a.name.toLowerCase() == datas;
    })*/

//Server Running in PORT 2002
app.listen(port, ()=> {
    console.log('Run server')
})