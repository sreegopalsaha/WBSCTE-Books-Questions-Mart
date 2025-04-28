import mongoose, { Schema } from "mongoose";
const SuggestionSchema = new Schema(
  {
    title: {
      type: String,
    },
    branch: {
      type: String,
    },
    semester: {
      type: String,
    },
    year: {
      type: String,
    },
    downloadUrl: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const Suggestion = mongoose.model("Suggestion", SuggestionSchema);
