const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  tableName: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  columnName: { type: Array, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'Users' },
  date: { type : Date, default: Date.now }
});

const Tables = module.exports = mongoose.model("Tables", TableSchema);
