import { ProducerModel } from "../../models/producer_model.js";

const ProducerListComp = async (req, res) => {
  try {
    // Get all producers name with details
    const producers = await ProducerModel.find();

    res.status(200).json({ message: "Producer list with data!", producers });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ProducerListComp;
