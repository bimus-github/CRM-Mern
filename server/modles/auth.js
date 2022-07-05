import mongoose from "mongoose";

const authChema = mongoose.Schema({
  name: String,
  role: String,
  email: { type: String, ruquired: true, unique: true },
  password: { type: String, ruquired: true },
});

var AuthModel = mongoose.model("AuthModel", authChema);

export default AuthModel;
