import mongoose, { Schema } from "mongoose";
/*
const url = 'mongodb+srv://ilhamtauhandoyo:1oBNKnvfmJHTotql@data1.tec7t.mongodb.net/Form?retryWrites=true&w=majority&appName=Data1'
mongoose.connect(url);
const db = mongoose.connection;

db.once('open', ()=> {
	console.log('connect')
})
*/
const SchemaUser =  mongoose.Schema({
	name: {
		type:String,
		required:true
	},
	email: {
		type:String,
		required:true
	},
	class: {
		type:String,
		required:true
	},
	devision : {
		type:String,
		required:true
	},
	motivation:{
		type:String,
		required:true
	}

});

const SchemaUserAbsensi =  mongoose.Schema({
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
const SchemaRegister = new mongoose.Schema(
	{
		username: {
			type:String,
			required:true
		},
		email:{
			type:String,
			required:true
		},
		password:{
			type:String,
			required:true
		},
		token:{
			type:String,
			required:true
		}
	}
)
 const User = mongoose.model('User', SchemaUser);
export const UserAbsensi = mongoose.model('UserAbsensi', SchemaUserAbsensi);
export const UserRegister = mongoose.model('UserRegister', SchemaRegister);
export default User;