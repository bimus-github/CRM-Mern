import AuthModel from "../modles/auth.js";

export const createAuth = async (req, res) => {
  const { email, password, name, role } = req.body;

  const auth = new AuthModel({ email, password, name, role });

  try {
    await auth.save();

    res.status(200).json(auth);
  } catch (error) {
    res.status(404).json("Error while create auth!");
  }
};

export const getAuths = async (req, res) => {
  try {
    const auth = await AuthModel.find();

    res.status(200).json(auth);
  } catch (error) {
    res.status(404).json(`Error while get auths! ${error}`);
  }
};
