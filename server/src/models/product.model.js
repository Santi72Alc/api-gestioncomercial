const mongoose = require('mongoose')
const Schema = mongoose.Schema

const familyTypes = {
  undefined: 'Sin definir',
  hardware: 'Hardware',
  software: 'Software',
  services: 'Services'
}

const ProductSchema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      uppercase: true,
      minlength: 3,
      index: true,
      unique: true
    },
    name: {
      type: String,
      minlength: 5,
      required: true
    },
    price: {
      type: Number,
      default: 0.0,
      min: 0
    },
    margin: Number,
    currency: {
      type: String,
      default: '€'
    },
    family: {
      type: String,
      enum: familyTypes,
      default: familyTypes.undefined
    }
    // currency: String
  },
  { versionKey: false, timestamps: true }
)

module.exports = mongoose.model('products', ProductSchema)
