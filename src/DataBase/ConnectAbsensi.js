import mongoose from "mongoose";

const url1 = 'mongodb+srv://ilhamtauhandoyo:1oBNKnvfmJHTotql@data1.tec7t.mongodb.net/FormAbsensi?retryWrites=true&w=majority&appName=Data1'
mongoose.connect(url1);
const db1 = mongoose.connection;

db1.once('open', ()=> {
    console.log('connect')
})
const SchemaUsern =  mongoose.Schema({
    NamaLengkap: {
        type:String,
        required:true
    },
    Kelas: {
        type:String,
        required:true
    },
    TanggalPertemuan: {
        type:String,
        required:true
    },
    BidangExtra:{
        type:String,
        required:true
    },
    StatusPertemuan : {
        type:String,
        required:true
    },
    

});

const UserAbsensin = mongoose.model('UserAbsensi', SchemaUsern);
export  default UserAbsensin;