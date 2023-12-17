import { ActorModel } from "../../models/actor_model.js";

const ActorComp = async (req, res) => {
  try {
    const { actor_name, gender, dob, bio } = req.body;

    //Check - actor already exist
    const actor = await ActorModel.findOne({ actor_name });
    if (actor) {
      return res.status(403).json({ message: "actor name already exist" });
    }
    //Add new actor
    const new_actor = await ActorModel({
      actor_name,
      gender,
      dob,
      bio,
    }).save();

    res.status(201).json({ message: "Actor added successfully!", new_actor });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ActorComp;
