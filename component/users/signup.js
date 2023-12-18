import encrypt from "../../helper/encryption.js";
import { UserModel } from "../../models/user_model.js";

const SignupComp = async (req, res) => {
  try {
    const { user_name, email, password } = req.body;

    //Check - User already exist
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(403).json({ message: "User already exist" });
    }
    //Password encryption
    const hashedPassword = await encrypt(password);
    //Add new user
    const new_user = await UserModel({
      user_name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({ message: "User created successfully!", new_user });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default SignupComp;
