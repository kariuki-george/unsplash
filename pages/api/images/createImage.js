import dbConnect from "../../../lib/db";
import Post from "../../../models/Post";

const createImage = async (req, res) => {
  await dbConnect();
  const { label, url } = req.body;
  const post = new Post({ label, url });

  try {
    console.log(post);
    await post.save({ new: true });
    const response = await Post.find();

    res.status(200).json(response.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createImage;
