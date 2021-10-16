const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familyTypes = ['Hardware', 'Software', 'Service']

const ProductSchema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      uppercase: true,
      index: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      min: 0
    },
    margin: Number,
    family: {
      type: String,
      enum: familyTypes,
      default: familyTypes[0]
    }
    // currency: String
  },
  { versionKey: false, timestamps: true }
)

module.exports = mongoose.model('products', ProductSchema)
