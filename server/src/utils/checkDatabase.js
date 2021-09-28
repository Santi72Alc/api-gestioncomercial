const { DATABASE } = require("../config");
const conn = require("../database");

const checkCustomerTable = async () => {
	const tableName = "customers";
	await conn.query(
		`CREATE TABLE IF NOT EXISTS ${DATABASE.DB_NAME}.${tableName} (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL,
            contactPerson VARCHAR(50),
            email VARCHAR(50),
            phone VARCHAR(10)
            )
            ENGINE=InnoDB;`
	);
};

const checkTables = () => {
	try {
		checkCustomerTable();
	} catch (error) {
		throw new Error("Error checking tables" + error);
	}
};

module.exports = {
	checkTables
};
