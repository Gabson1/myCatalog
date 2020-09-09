import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  catalogs: [{ type: mongoose.Types.ObjectId, ref: 'Catalog' }],
});

module.exports = mongoose.model('User', userSchema);
