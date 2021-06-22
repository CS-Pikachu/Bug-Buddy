const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
});

const accountsSchema = new Schema({
  googleId: String,
  type: String,
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

// creates schema if it doesn't exist
mongoose.model('users', userSchema);
mongoose.model('accounts', accountsSchema);
