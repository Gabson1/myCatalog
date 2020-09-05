import mongoose from 'mongoose';

const { Schema } = mongoose;

const catalogSchema = new Schema({
  assetType: { type: String, required: true },
  description: { type: String, required: false },
  creator: { type: Schema.Types.ObjectID, required: true, ref: 'User' },
  assets: [{
    assetName: { type: String, required: false },
    assetQuantity: { type: Number, required: false },
    singleQuantityPrice: { type: Number, required: false },
    totalQuantityPrice: { type: Number, required: false },
    // assetApiPricePP: { type: Number, required: false, ref: 'Api' },
    // assetApiPriceT: { type: Number, required: false, ref: 'Api' },
  }],
});

module.exports = mongoose.model('Catalog', catalogSchema);
