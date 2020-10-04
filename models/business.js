const mongoose = require("mongoose");

var SchemaTypes = mongoose.Schema.Types;

// define schema of data
const businessSchema = new mongoose.Schema({
  lat: SchemaTypes.Decimal128,
  lon: SchemaTypes.Decimal128,
  address: String,
  name: String,
  description: String,
  imageUrl: String,
});

// exports schema to a model
const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
