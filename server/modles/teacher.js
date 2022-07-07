import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  email: String,
  firstNumber: String,
  lastNumber: String,
  phoneNumber: String,
  homeNumber: String,
  about: String,
  languages: String,
  subjects: String,
  created: Date,
});

var TeacherModel = mongoose.model("TeacherModel", teacherSchema);

export default TeacherModel;
