const mariadb = require("mariadb");
const { DATABASE } = require("./config");

const { 
	DB_URL_CONNECTION, 
	DB_HOST, 
	DB_PORT, 
	DB_NAME, 
	DB_USER, 
	DB_PASSWORD 
} = DATABASE;

let db;

if (DB_URL_CONNECTION)
	db = mariadb.createPool({ socketPath: DB_URL_CONNECTION });
else
	db = mariadb.createPool({
		host: DB_HOST,
		port: DB_PORT,
		database: DB_NAME,
		user: DB_USER,
		password: DB_PASSWORD,
		waitForConnections: true
	});
// .then(cn => {
// 	conn = cn;
// })
// .catch(error => {
// 	if (error.code === "ECONNREFUSED")
// 		throw new Error("Can't access to DB, please check SQL service!");
// });

module.exports = Object.freeze({ db });
