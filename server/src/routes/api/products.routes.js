const { Router } = require('express')
const {
  getAllRecords,
  getRecordById,
  createNewRecord,
  editRecordById,
  deleteRecordById,
  getRecordByQuery
} = require('../../controlers/product.controler')

const router = Router()

/***
 * GET all records
 */
router.get('/all', getAllRecords)

/**
 * GET
 * Get a record by reference
 */
 router.get('/search', getRecordByQuery)


/***
 * GET one record by Id
 */
router.get('/:id', getRecordById)

/**
 * POST
 * Create a new product
 */
router.post('/new', createNewRecord)

/**
 * PUT
 * Edit a record by id
 */
router.put('/:id', editRecordById)

/**
 * DELETE
 * Delete a record by id
 */
router.delete('/:id', deleteRecordById)


module.exports = router
