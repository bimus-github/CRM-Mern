import TeacherModel from "../modles/teacher.js";

export const createTeacher = async (req, res) => {
  const {
    email,
    firstNumber,
    lastNumber,
    phoneNumber,
    homeNumber,
    about,
    languages,
    subjects,
  } = req.body();
  const newTeacher = new TeacherModel({
    email,
    firstNumber,
    lastNumber,
    phoneNumber,
    homeNumber,
    about,
    languages,
    subjects,
  });

  try {
    await newTeacher.save();

    res.json(newTeacher);
  } catch (error) {
    res.status(404).json("Error while crate Teacher");
  }
};

export const getTeacher = async (req, res) => {
  const teachers = TeacherModel.find();
  try {
    res.json(teachers);
  } catch (error) {
    console.log(error);
  }
};
