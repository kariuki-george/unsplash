import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    label: "String",
    url: "String",
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
