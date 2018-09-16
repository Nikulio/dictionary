const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require('helmet');

const {mongo} = require("./db");
const Router = require("./routes/Router");
const PORT = process.env.PORT || 5000;
const db = process.env.MONGOLAB_URI || mongo;
const buildPath = path.join(__dirname, "../../dist");
const buildIndexPath = path.join(__dirname, "../../dist/index.html");

mongoose.connect(db).then(() => {
	console.log("--- mongo is up right here: ", db);
}, (err) => {
	console.log("--- db error at", err);
});


const app = express();
app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}));
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'"],
		scriptSrc: ["'self'"],
		styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
		fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com'],
		imgSrc: ["'self'", 'data:']
	}
}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", Router);

app.use(express.static(buildPath));
app.get("*", (req, res) => {
	res.sendFile(buildIndexPath);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
