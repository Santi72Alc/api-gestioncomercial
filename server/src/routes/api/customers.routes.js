const { Router } = require("express");
const { config, DATABASE } = require("../../config");
const { db } = require("../../database");

const app = Router();

app.get("/all", async (req, res) => {
	const tableName = "customers";

	try {
		const conn = await db.getConnection();
		const data = await conn.query(`SELECT * FROM ${tableName}`);
		if (data.length === 0)
			return res.status(200).json({
				ok: true,
				data,
				message: "No customer in DB"
			});
		return res.status(200).json({
			ok: true,
			data
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: `Error reading ${tableName} table. ${error}`
		});
	}
});

/***
 * GET by Id
 */
app.get("/:customerId", async (req, res) => {
	const tableName = "customers";
	let { customerId } = req.params;

	customerId = +customerId;

	try {
		if (isNaN(customerId))
			return res.status(400).json({
				ok: false,
				message: "Bad request. Customer ID must to be numeric."
			});
		const conn = await db.getConnection();
		const data = await conn.query(
			`SELECT * FROM ${tableName} WHERE id=${customerId}`
		);
		if (data.length === 0)
			return res.status(404).json({
				ok: false,
				data,
				message: "No customer found"
			});
		return res.status(200).json({
			ok: true,
			data
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: `Error reading ${tableName} table. ${error}`
		});
	}
});

/***
 * GET by name (may be partial name)
 */
app.get("/search", async (req, res) => {
	const tableName = "customers";
	const { name } = req.query;

	try {
		const conn = await db.getConnection();
		const data = await conn.query(
			`SELECT * FROM ${tableName} WHERE name LIKE "%${name}%"`
		);
		if (data.length === 0)
			return res.status(404).json({
				ok: false,
				data,
				message: "No customers found"
			});
		return res.status(200).json({
			ok: true,
			data
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: `Error reading ${tableName} table. ${error}`
		});
	}
});

module.exports = app;
