import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const apiModel = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: Boolean },
  assignee: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Api', apiModel);
