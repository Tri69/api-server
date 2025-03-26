import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.URI_MONGODB_ATLAS);
const db = mongoose.connection;

db.once('open', ()=> {
	console.log('connect')
})

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
		devisi : {
			type: String,
			required: true
		},
		token:{
			type:String,
			required:true
		}
	}
)

const SchemaSaran = mongoose.Schema({
	name : {
		type:String,
		required:true
	},
	devisi : {
		type:String,
		required:true
	},
	kritik : {
		type:String,
		required : true
	},
	saran :{
		type:String,
		required:true
	},
	pengalaman : {
		type:String,
		required:true
	},
	tambahbidang:{
		type:String,
		required:true
	}


})
 const User = mongoose.model('User', SchemaUser);
export const UserAbsensi = mongoose.model('UserAbsensi', SchemaUserAbsensi);
export const UserRegister = mongoose.model('UserRegister', SchemaRegister);
export const UserSaran = mongoose.model('UserSaran', SchemaSaran);

export default User;