const TestComp = async (req, res) => {
  try {
    await res.status(200).json({ message: "Test Success" });
  } catch (error) {
    await res.status(500).json({ Error: "Internal Server Error", error });
  }
};
export default TestComp;
