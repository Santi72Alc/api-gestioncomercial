const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		contactPerson: String,
		email: String,
		phone: String,
		comments: String
	},
	{ versionKey: false, timestamps: true }
);

module.exports = mongoose.model("customers", CustomerSchema);
