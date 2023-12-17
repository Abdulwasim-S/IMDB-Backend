import { ActorModel } from "../../models/actor_model.js";

const ActorListComp = async (req, res) => {
  try {
    const { actor_name } = req.body;

    const actors = await ActorModel.find({ actor_name });

    res.status(201).json({ message: "Actor list with data!", actors });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ActorListComp;
