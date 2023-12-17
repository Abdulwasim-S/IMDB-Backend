import { ProducerModel } from "../../models/producer_model.js";

const ProducerComp = async (req, res) => {
  try {
    const { producer_name, gender, dob, bio } = req.body;

    //Check - producer already exist
    const producer = await ProducerModel.findOne({ producer_name });
    if (producer) {
      return res.status(403).json({ message: "Producer name already exist" });
    }
    //Add new producer
    const new_producer = await ProducerModel({
      producer_name,
      gender,
      dob,
      bio,
    }).save();

    res
      .status(201)
      .json({ message: "Producer added successfully!", new_producer });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ProducerComp;
