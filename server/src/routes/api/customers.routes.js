const { Router } = require("express");
const {
	getAllCustomers,
	getCustomerById,
	createCustomer,
	editCustomerById,
	deleteCustomerById
} = require("../../controlers/customer.controler");

const router = Router();

/***
 * GET all records
 */
router.get("/all", getAllCustomers);

/***
 * GET one record by Id
 */
router.get("/:id", getCustomerById);

/**
 * POST
 * Create a new customer
 */
router.post("/new", createCustomer);

/**
 * PUT
 * Edit a record by id
 */
router.put("/:id", editCustomerById);

/**
 * DELETE
 * Delete a record by id
 */
router.delete("/:id", deleteCustomerById);

module.exports = router;
