const { Router } = require("express");

const router = Router();

router.get("/info", (req, res) => {
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

module.exports = router;
