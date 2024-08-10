import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);

export default Users;
