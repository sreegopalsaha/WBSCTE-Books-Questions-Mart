import mongoose ,{Schema} from 'mongoose';
const EbookSchema = new Schema({
  
}, { timestamps: true });
export const Ebook = mongoose.model("Ebook", EbookSchema);