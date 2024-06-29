const express = require("express");

const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


app.use(cors());
app.use(bodyParser.json());

if (!process.env.EMAIL || !process.env.APP_SPECIFIC_PASSWORD) {
	console.error(
		"The EMAIL and APP_SPECIFIC_PASSWORD environment variables must be set."
	);
	process.exit(1);
}

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.APP_SPECIFIC_PASSWORD,
	},
	debug: true,
	logger: true,
});

app.get("/api", (req, res) => {
	res.send("Hello, your server is running!");
});

app.post("/send-email", (req, res) => {
	console.log("Received request body:", req.body);
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		console.error("Missing required fields: name, email, or message.");
		return res
			.status(400)
			.send("Missing required fields: name, email, or message.");
	}

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
			console.error("Error sending email:", error);
			console.error("Error details:", error.response);
			return res.status(500).send(`Error sending email: ${error.message}`);
		} else {
			console.log("Message sent: " + info.response);
			transporter.sendMail(
				confirmationMailOptions,
				(confirmationError, confirmationInfo) => {
					if (confirmationError) {
						console.error(
							"Error sending confirmation email:",
							confirmationError
						);
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




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
