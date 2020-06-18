import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  content: { type: Array, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'Users' },
  createdAt : { type : Date, default: Date.now }
});

module.exports = mongoose.model("Tables", tableSchema);
