const mongoose = require('mongoose')

const Products = require('../models/product.model')
const tableName = 'products'

async function getAllRecords(req, res) {
  try {
    const data = await Products.find({})
    let message = 'No customers in DB'

    if (data.length) message = 'All records fetched'

    return res.status(200).json({
      ok: true,
      data,
      message
    })
  } catch (error) {
    const message = `*** ${tableName} table. Getting all. ERROR. ***`
    console.error(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }
}

async function getRecordById(req, res) {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        ok: false,
        message: 'Bad request. Product ID wrong format'
      })
    }
    const data = await Products.findById(id)
    if (data) {
      return res.status(200).json({
        ok: true,
        data,
        message: 'Record fetched'
      })
    }
    return res.status(404).json({
      ok: false,
      message: 'Product not found'
    })
  } catch (error) {
    const message = `*** ${tableName} table. Getting by id. ERROR. ***`
    console.log(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }
}

async function createNewRecord(req, res) {
  const { reference, name, price, margin, currency, family } = req.body
  const newBody = { reference, name, price, margin, currency, family }

  try {
    if (!name) {
      return res.json(400).json({
        ok: false,
        message: 'Bad request. Reference and Name are required'
      })
    }
    const newRecord = new Products(newBody)
    await newRecord.save()
    return res.status(201).json({
      ok: true,
      data: newRecord,
      message: 'Record created'
    })
  } catch (error) {
    const message = `*** ${tableName} table. Adding new record. ERROR. ***`
    console.error(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }
}

async function editRecordById(req, res) {
  const { id } = req.params
  const { reference, name, price, margin, currency, family } = req.body
  const newBody = { reference, name, price, margin, currency, family }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        ok: false,
        message: 'Bad request. Product ID wrong format'
      })
    }
    const recordToUpdate = await Products.findByIdAndUpdate(id, newBody, {
      new: true
    })
    if (recordToUpdate) {
      return res.status(200).json({
        ok: true,
        data: recordToUpdate,
        message: 'Record updated'
      })
    }
    return res.status(404).json({
      ok: false,
      message: 'Product not found'
    })
  } catch (error) {
    const message = `*** ${tableName} table. Updating record. ERROR. ***`
    console.error(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }
}

async function deleteRecordById(req, res) {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        ok: false,
        message: 'Bad request. Product ID wrong format'
      })
    }
    const recordDeleted = await Products.findByIdAndDelete(id)
    if (recordDeleted) {
      return res.status(200).json({
        ok: true,
        data: {},
        message: 'Record deleted'
      })
    }
    return res.status(404).json({
      ok: false,
      message: 'Product not found'
    })
  } catch (error) {
    const message = `*** ${tableName} table. Deleting record. ERROR. ***`
    console.error(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }
}


const getRecordByReference = async (req, res) => {
  const { reference } = req.params

  try {
    const record = await Products.find({ reference })
    if (record) {
      return res.status(200).json({
        ok: true,
        data: record,
        message: `reference found`
      })
    }
    return res.status(404).json({
      ok: false,
      message: `Reference not found`
    })
  } catch (error) {
    const message = `*** ${tableName} table. Searching record by reference. ERROR. ***`
    console.error(message, error)
    res.status(500).json({
      ok: false,
      message
    })
  }

}

module.exports = {
  getAllRecords,
  getRecordById,
  createNewRecord,
  editRecordById,
  deleteRecordById,
  getRecordByReference
}
