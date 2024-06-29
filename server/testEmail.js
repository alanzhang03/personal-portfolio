require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.APP_SPECIFIC_PASSWORD,
	},
});

const mailOptions = {
	from: process.env.EMAIL,
	to: "recipient@example.com",
	subject: "Test Email",
	text: "This is a test email",
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.error("Error sending test email:", error);
	}
	console.log("Test email sent:", info.response);
});
