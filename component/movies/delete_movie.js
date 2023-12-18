import { MovieModel } from "../../models/movies_model.js";

const DeleteMovieComp = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(409).json({ message: "ID not given" });
    }
    await MovieModel.deleteOne({
      _id: id,
    });
    res.status(202).json({ message: "Deleted Success", id });
  } catch (error) {
    console.log(error);
  }
};

export default DeleteMovieComp;
