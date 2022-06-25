//our schema file 
const { Schema, model } = require("mongoose")
//create schema in databsae called document
const Document = new Schema({
  _id: String,
  data: Object,
})

module.exports = model("Document", Document)//get data and pass it to database schema
