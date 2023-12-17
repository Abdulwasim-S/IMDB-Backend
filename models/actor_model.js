import mongoose from "mongoose";

const actor_schema = mongoose.Schema({
  actor_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

export const ActorModel = mongoose.model("actors", actor_schema);
