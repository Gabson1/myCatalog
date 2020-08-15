import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const catalogSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: false },
	price: { type: Number},
	creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Catalog', catalogSchema);
