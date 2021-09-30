import dbConnect from "../../../lib/db";
import Post from "../../../models/Post";

const getImages = async (req, res) => {
  await dbConnect();

  try {
    const posts = await Post.find();
    res.status(200).json(posts.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getImages;
