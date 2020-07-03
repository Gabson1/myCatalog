const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const apiSchema = new Schema({
  name: { type: String, required: true },
  activationStatus: { type: Boolean, default: false },
  description: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'Users' },
  createdAt : { type : Date, default: Date.now }
});

const Apis = module.exports = mongoose.model("Apis", apiSchema);
