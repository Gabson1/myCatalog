import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String },
  tables: [{ type: mongoose.Types.ObjectId, ref: 'Tables' }],
  created_at : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Users', userSchema);
