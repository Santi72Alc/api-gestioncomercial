const mongoose = require("mongoose");

const Customers = require("../models/customer.model");
const tableName = "customers";

/**
 *
 * @param {request} req
 * @param {response} res
 * @returns any[]
 */
async function getAllCustomers(req, res) {
	try {
		const data = await Customers.find({});
		let message = "No customers in DB";

		if (data.length) message = "All records fetched";

		return res.status(200).json({
			ok: true,
			data,
			message
		});
	} catch (error) {
		const message = `*** ${tableName} table. Getting all. ERROR. ***`;
		console.error(message, error);
		res.status(500).json({
			ok: false,
			message
		});
	}
}

async function getCustomerById(req, res) {
	let { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(400).json({
				ok: false,
				message: "Bad request. Customer ID wrong format"
			});
		const data = await Customers.findById(id);
		if (data)
			return res.status(200).json({
				ok: true,
				data,
				message: "Record fetched"
			});
		return res.status(404).json({
			ok: false,
			message: "Customer not found"
		});
	} catch (error) {
		const message = `*** ${tableName} table. Getting by id. ERROR. ***`;
		console.log(message, error);
		res.status(500).json({
			ok: false,
			message
		});
	}
}

async function createCustomer(req, res) {
	const { name, contactPerson, email, phone, comments } = req.body;
	const newBody = { name, contactPerson, email, phone, comments };

	try {
		if (!name)
			return res.json(400).json({
				ok: false,
				message: "Bad request. Name is required"
			});
		const newCustomer = new Customers(newBody);
		await newCustomer.save();
		return res.status(201).json({
			ok: true,
			data: newCustomer,
			message: "Record created"
		});
	} catch (error) {
		const message = `*** ${tableName} table. Adding new record. ERROR. ***`;
		console.error(message, error);
		res.status(500).json({
			ok: false,
			message
		});
	}
}

async function editCustomerById(req, res) {
	const { id } = req.params;
	const { name, contactPerson, email, phone, comments } = req.body;
	const newBody = { name, contactPerson, email, phone, comments };

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(400).json({
				ok: false,
				message: "Bad request. Customer ID wrong format"
			});
		const customerToEdit = await Customers.findByIdAndUpdate(id, newBody, {
			new: true
		});
		if (customerToEdit)
			return res.status(200).json({
				ok: true,
				data: customerToEdit,
				message: "Record updated"
			});
		return res.status(404).json({
			ok: false,
			message: "Customer not found"
		});
	} catch (error) {
		const message = `*** ${tableName} table. Updating record. ERROR. ***`;
		console.error(message, error);
		res.status(500).json({
			ok: false,
			message
		});
	}
}

async function deleteCustomerById(req, res) {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(400).json({
				ok: false,
				message: "Bad request. Customer ID wrong format"
			});
		const customerDeleted = await Customers.findByIdAndDelete(id);
		if (customerDeleted)
			return res.status(200).json({
				ok: true,
				data: {},
				message: "Record deleted"
			});
		return res.status(404).json({
			ok: false,
			message: "Customer not found"
		});
	} catch (error) {
		const message = `*** ${tableName} table. Deleting record. ERROR. ***`;
		console.error(message, error);
		res.status(500).json({
			ok: false,
			message
		});
	}
}

module.exports = {
	getAllCustomers,
	getCustomerById,
	createCustomer,
	editCustomerById,
    deleteCustomerById
};
