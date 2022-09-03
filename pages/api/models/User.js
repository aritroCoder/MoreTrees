import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username:  String, // String is shorthand for {type: String}
  password: String,
  email: String,
  plantCount: Number,
  details: [{ name: String, count: Number, time: Date }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);