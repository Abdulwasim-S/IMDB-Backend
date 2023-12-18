import { ActorModel } from "../../models/actor_model.js";

const ActorListComp = async (req, res) => {
  try {
    // Get all actors name with details
    const actors = await ActorModel.find();

    res.status(200).json({ message: "Actor list with data!", actors });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ActorListComp;
