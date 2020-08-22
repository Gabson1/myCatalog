import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const catalogSchema = new Schema({
	catalogId: { type: String, required: true },
	assetType: { type: String, required: true },
	description: { type: String, required: false },
	assets: [{
		assetId: { type: String, required: true },
		assetName: { type: String, required: true },
		assetQuantity: { type: Number, required: true },
		singleQuantityPrice: { type: Number, required: true },
		totalQuantityPrice: { type: Number, required: false },
		// assetApiPricePP: { type: Number, required: false, ref: 'Api' },
		// assetApiPriceT: { type: Number, required: false, ref: 'Api' },
	}],
	creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Catalog', catalogSchema);
