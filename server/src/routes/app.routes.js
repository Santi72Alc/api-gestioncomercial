const { Router } = require("express");

const app = Router();

app.get("/info", (req, res) => {
	res.status(200).json({
		ok: true,
		message: {
			title: "Gestión Comercial (API Server)",
			info: "Gestión de presupuestos para clientes.",
			author: "Veras Rubio & Santiago San Román",
			copyright: `${new Date().getFullYear()}`
		}
	});
});

module.exports = app;
