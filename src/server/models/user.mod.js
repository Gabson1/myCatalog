const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  avatar: { type: String },
  tables: [{ type: mongoose.Types.ObjectId, ref: 'Tables' }],
  date : { type: Date, default: Date.now }
});

module.exports = Users = mongoose.model('users', UserSchema);
