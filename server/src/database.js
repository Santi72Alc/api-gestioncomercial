const mongoose = require("mongoose");
const { DATABASE } = require("./config");

const { DB_HOST, DB_PORT, DB_URI_CONNECTION, DB_TYPE, DB_NAME, DB_USER, DB_PASSWORD } = DATABASE;



const uri_connection = DB_URI_CONNECTION 
	? DB_URI_CONNECTION 
	: `${DB_TYPE}://${DB_HOST}:${DB_PORT}/${DB_NAME}`
mongoose
	.connect(uri_connection, {
		heartbeatFrequencyMS: 3000
	})
	.then(db => console.log("DB connected!"))
	.catch(err => {
		if (err.reason.type === "Unknown")
			console.log(
				"*** Unknown error getting connection to DB. Check MongoDB status, please!"
			);
		else console.error(err);
	});
