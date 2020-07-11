import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  tableName: { type: String, required: true },
  tableCategorie: { type: String, required: true },
  tableColumnNames: { type: Array, required: true },
  tableContent: { type: String },
  image: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "Users" },
});

module.exports = mongoose.model("Tables", TableSchema);
