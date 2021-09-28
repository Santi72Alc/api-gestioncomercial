const current_api_version = "v1";

const SERVER = {
	HOST: "localhost",
	PORT: process.env.PORT || 3000
};

const DATABASE = {
	DB_NAME: "db_gestion",
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_PORT: process.env.DB_PORT || 3306,
	DB_USER: process.env.DB_USER || 'databaseUser',
	DB_PASSWORD: process.env.DB_PASSWORD || 'userPassword'
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
