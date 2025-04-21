import mongoose ,{Schema} from 'mongoose';
const SuggestionSchema = new Schema({
  
}, { timestamps: true });
export const Suggestion = mongoose.model("Suggestion", SuggestionSchema);