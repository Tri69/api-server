import nodemailer from 'nodemailer';


async function sendMailOauth(email){
	const transporter = nodemailer.createTransport({
	host : 'smtp.gmail.com',
	port : 465,
	secure : true,
	auth : {
		user : process.env.EMAIL_OAUTH,
		pass : process.env.PASSWORD_OAUTH,
	},
});

const token = Math.floor(Math.random(340) * 10000);
const urlParse= `https://web-kirti.vercel.app/app/auth?authtoken=${token}`
const EmailOption = {
	from : process.env.EMAIL_OAUTH,
	to : email,
	subject : "E-mail Authentication KIRTI Course",
	text : `E-mail Authentication KIRTI Course`,
	html : `
		<html>
			<head></head>
			<body>
			<div style="text-align:center;">
				<h1 style="color: blue;">E-mail Authentication Akun KIRTI Course</h1>
				<hr/>
				<text style="color:violet; text-size:20px;">Klik Link Berikut untuk melakukan Verifikasi Akun Anda!. 
				Maksimal 5 Menit Link Berlaku.</text><br><br>
				<button style="background:blue; 
				border: .1px solid rgba(0,0,0,.1); padding: 7px; color:white;border-radius:8px; font-size:24px;font-weight:bold;"><a href=${urlParse}> Verifikasi</a> </button>
				<br/><h3>Terimakasih</h3>
				<br/><br/>
				<text>KIRTI COURSE | 2025 - Sekarang </text>
			</div>
			</body>
		</html>
	`
}
await transporter.sendMail(EmailOption, (error, info) => {
	if(error){
		console.log(error)
	}else{
		console.log(info.response)
	} 
})
}

export default sendMailOauth;