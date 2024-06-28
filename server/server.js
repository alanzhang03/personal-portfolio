const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "../build")));


const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.APP_SPECIFIC_PASSWORD,
	},
});

if (!process.env.EMAIL || !process.env.APP_SPECIFIC_PASSWORD) {
	console.error("The EMAIL and PASSWORD environment variables must be set.");
	process.exit(1);
}


app.post("/send-email", (req, res) => {
	const { name, email, message } = req.body;

	const mailOptions = {
		from: process.env.EMAIL,
		to: "alan.s.zhang@gmail.com",
		subject: `New message from ${name}`,
		text: `You received a message from: ${name} (${email})\n\nMessage: ${message}`,
		replyTo: email,
	};

	const confirmationMailOptions = {
		from: process.env.EMAIL,
		to: email,
		subject: `I received your message!`,
		text: `Hello ${name},\n\nI received your message and will get back to you soon. Here's what you sent me:\n\n${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error);
			return res.status(500).send("Error sending email");
		} else {
			console.log("Message sent: " + info.response);
			transporter.sendMail(
				confirmationMailOptions,
				(confirmationError, confirmationInfo) => {
					if (confirmationError) {
						console.error(confirmationError);
					} else {
						console.log(
							"Confirmation email sent: " + confirmationInfo.response
						);
					}
				}
			);
			return res.status(200).send("Email successfully sent");
		}
	});
});


app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
