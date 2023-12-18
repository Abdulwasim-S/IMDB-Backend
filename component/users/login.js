import decrypt from "../../helper/decryption.js";
import generate_token from "../../helper/generate_token.js";
import { UserModel } from "../../models/user_model.js";

const LoginComp = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check - User exist
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credential" });
    }
    //Password verification
    const password_verification = await decrypt(password, user.password);
    if (!password_verification) {
      return res.status(401).json({ message: "Invalid credential" });
    }

    //Generate token
    const token = await generate_token(email);
    res.status(201).json({ message: "Login success!", token, email });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default LoginComp;
