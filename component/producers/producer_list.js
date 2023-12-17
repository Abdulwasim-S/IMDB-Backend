import { ProducerModel } from "../../models/producer_model.js";

const ProducerListComp = async (req, res) => {
  try {
    const { producer_name } = req.body;

    const producers = await ProducerModel.find({ producer_name });

    res.status(201).json({ message: "Producer list with data!", producers });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default ProducerListComp;
