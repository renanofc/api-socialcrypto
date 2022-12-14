const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  posts: Number
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;