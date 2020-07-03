import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String },
  products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("User", userSchema);
