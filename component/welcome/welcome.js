const WelcomeComp = async (req, res) => {
  try {
    await res.status(200).json({ message: "Welcome to IMDb Clone Backend" });
  } catch (error) {
    await res.status(500).json({ Error: "Internal Server Error", error });
  }
};
export default WelcomeComp;
