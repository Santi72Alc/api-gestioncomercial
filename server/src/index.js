const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const app = express();

const { config, SERVER } = require("./config");

// Make ready the Database
require("./database");

// Importing routes
const customersRoutes = require("./routes/api/customers.routes");
const appRoutes = require("./routes/app.routes");

// middlewares
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


/* ROUTES */
// App routes
app.use(config.URL_BASE, appRoutes);

// API routes
app.use(path.join(config.URL_BASE_API, "customers"), customersRoutes);

// Starting the server
app.set("port", SERVER.PORT);
app.listen(app.get("port"), () =>
	console.log(`Server up and listening on port ${app.get("port")}`)
);
