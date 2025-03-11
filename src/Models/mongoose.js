import ValidationDataPost from "../../utils/Validation.js";
import User from "../DataBase/connect.js";

export const GetDataFind = async (req, res) => {
	try {
		const getDataBaseUser = await User.find();
		res.json({
			status: 200,
			message: "Succes",
			datas: getDataBaseUser
		})
	} catch (error) {
		res.Status(401).json({
			error: "Not data Invalid"
		})
	}
}

export const PostData = async (req, res, next) => {
	try {
		const DataInputBody = req.body;
		ValidationDataPost(DataInputBody.name, DataInputBody.email,
			DataInputBody.class, DataInputBody.devision, DataInputBody.motivation)
		const SaveDataBase = new User(DataInputBody);
		await SaveDataBase.save();
		res.status(201).json({
			status: 201,
			massage: 'Success, you have successfully registered.',
			details: DataInputBody
		});
		next();
	} catch (error) {
		res.json({
			status: 401,
			massage: 'Data is not Validate'
		});
	}
}

export const UpdateData = async (req, res) => {
	const idUser = req.params.id;
	const datauser = req.body;
	try {
		const update = await User.findByIdAndUpdate(idUser, datauser, { new: true });
		res.json(update);
	} catch (error) {
		res.send(`Bad Gateway ${error}`);
	}
}

export const DeleteData = async (req, res) => {
	const id = req.params.id;
	try {
		await User.deleteOne({ _id: id });
		res.send("Sucess");
	} catch (error) {
		res.send(`Bad Gateway ${error}`);
	}
}




