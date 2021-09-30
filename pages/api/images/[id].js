import dbConnect from "../../../lib/db";
import Post from "../../../models/Post";

const deleteById = async (req, res) => {
  await dbConnect();

  const { id } = req.query;

  try {
    await Post.findByIdAndDelete(id);
    const response = await Post.find();
    return res.json(response.reverse());
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default deleteById;
