import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const catalogSchema = new Schema({
	asset_type: { type: String, required: true },
	description: { type: String, required: false },
	asset_id: { type: String, required: true },
	asset_name: { type: String, required: true },
	asset_quantity: { type: Number, required: true },
	asset_price: { type: Number, required: true },
	asset_api_price: { type: mongoose.Types.ObjectId, required: false, ref: 'Api' },
	creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Catalog', catalogSchema);
