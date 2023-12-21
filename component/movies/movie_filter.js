import { MovieModel } from "../../models/movies_model.js";

const MovieFilterListComp = async (req, res) => {
  try {
    // Filter key and value
    // Input params should be in formate of "key=value"
    const input = req.params.filter.split("=");
    const filter_value = {};
    filter_value[input[0]] = input[1];
    const { movie_name, producer, language, year } = filter_value;

    // Movies based on filter value

    const movies = await MovieModel.find(
      (movie_name && {
        movie_name: { $regex: movie_name, $options: "i" },
      }) ||
        (producer && {
          producer: { $regex: producer, $options: "i" },
        }) ||
        (language && {
          language: { $regex: language, $options: "i" },
        }) ||
        (year && {
          year,
        })
    );

    res.status(200).json({ message: "Movie list with data!", movies });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default MovieFilterListComp;
