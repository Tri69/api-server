import User from "../DataBase/connect.js";



export const GetDataFind = async (req, res)=>{
 try{
	const datass = await User.find();
	res.json(datass)
 }catch(error){
	res.send('error')
 }
}
export const PostData = async (req, res)=> {
	const bb = req.body;
   const use = new User(bb);
   await use.save();
   res.send('ok');
}




