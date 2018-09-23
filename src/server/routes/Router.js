const express = require("express")
const path = require("path");
const WordSchema = require("../models/Word");
const Router = express.Router();
const buildPath = path.join(__dirname, "../../../dist/index.html");

Router.route("/add-word").post((req, res) => {
	WordSchema.create(req.body).then((data) => {
		res.send(data);
	});
});

Router.route("/get-words").get((req, res) => {
	WordSchema.find().then((data) => {
		res.send(data);
	});
});


Router.route("/get-dictionaries").get((req, res) => {
	WordSchema.find().select("language").then((data) => {
		const langArr = data.map(item => item.language);
		const arr = new Set(langArr);
		res.send(Array.from(arr));
	});
});

Router.route("/get-words-by-dict").post((req, res) => {
	WordSchema.find().then((data) => {
		const wordsArr = data.filter(item => item.language === req.body.language)
		const arr = new Set(wordsArr);
		res.send(Array.from(arr));
	});
});

Router.route("/delete-word/:id").delete((req, res) => {
	WordSchema.remove({_id: req.params.id}).then((data) => {
		res.send(data);
	});
});

Router.route("/update-word").put((req, res) => {
	WordSchema.findById(req.body.id).then(word => {
		word.from = req.body.data.from;
		word.language = req.body.data.language;
		word.to = req.body.data.to;
		word.save().then(updated => {
			res.send(updated)
		})
	})
});


// UserSchema.findOne({login: req.body.login}).then(user => {
// 	if (user === null) {
// 		UserSchema.create(req.body).then((data) => {
// 			res.cookie("userID", data._id, {maxAge: 900000}).send(data);
// 		});
// 	}
// 	else {
// 		if (user.password === req.body.password) {
// 			res.cookie("userID", user._id, {maxAge: 900000}).send(user)
// 		} else {
// 			res.status(400).send({error: {message: "Wrong password"}})
// 		}
// 	}
// })


module.exports = Router;
