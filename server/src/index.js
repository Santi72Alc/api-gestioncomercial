const express = require("express");
require("dotenv").config();

const { config } = require("./config");
// const { checkTables } = require("./utils/checkDatabase");

try {
	const db = require("./database");
	// checkTables();
	if (db) console.log("DB connected!!");
} catch (error) {
	console.error("Error in database", error);
}

const app = express();

//
const customersRoutes = require("./routes/api/customers.routes");
const appRoutes = require("./routes/app.routes");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// App routes
app.use(config.URL_BASE, appRoutes);

// API routes
app.use(`${config.URL_BASE_API}/customers`, customersRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server up and listening at port ${PORT}`));
