const current_api_version = "v1";

const SERVER = {
	HOST: "localhost",
	PORT: process.env.PORT || 3000
};

const DB_TYPE = "mongodb";

const connectionPort = {
	mongodb: 27017,
	mysql: 3306
};

const DATABASE = {
	DB_TYPE: DB_TYPE,
	DB_URL_CONNECTION: process.env.JAWSDB_MARIA_URL || null,
	DB_NAME: process.env.DB_NAME || "db_gestion",
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_PORT: process.env.DB_PORT || connectionPort[DB_TYPE],
	DB_USER: process.env.DB_USER || "databaseUser",
	DB_PASSWORD: process.env.DB_PASSWORD || "userPassword"
};

const config = {
	URL_BASE: "/",
	URL_BASE_API: `/api${current_api_version}`
};

module.exports = {
	config,
	SERVER,
	DATABASE
};
