import mongoose from "mongoose";

const producer_schema = mongoose.Schema({
  producer_name: {
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

export const ProducerModel = mongoose.model("producers", producer_schema);
