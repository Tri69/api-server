import User from "../DataBase/connect.js";

export const GetDataFind = async (req, res) => {
	try {
		const datass = await User.find();
		res.json(datass)
	} catch (error) {
		res.send('error')
	}
}

export const PostData = async (req, res, next) => {
	try {
		const bb = req.body;
		const use = new User(bb);
		await use.save();
		res.send('ok');
		next();
	} catch (error) {
		res.send(`Bad Gateway ${error}`);
	}
}

export const UpdateData = async (req, res) => {
	const id = req.params.id;
	const datauser = req.body;
	try {
		const update = await User.findByIdAndUpdate(id, datauser, { new: true });
		res.json(update);
	} catch (error) {
		res.send(`Bad Gateway ${error}`);
	}
}

export const DeleteData = async (req, res) => {
	const id = req.params.id;
	try {
		await User.deleteOne({_id : id});
		res.send("Sucess");
	} catch (error) {
		res.send(`Bad Gateway ${error}`);
	}
}




