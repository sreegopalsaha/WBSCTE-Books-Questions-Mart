import mongoose ,{Schema} from 'mongoose';
const EbookSchema = new Schema({
  title : {
    type: String,
  },
  branch : {
    type: String,
  },
  semester : {
    type: String,
  },
  downloadUrl : {
    type: String,
  },
  tags : {
    type: [String],
  },
}, { timestamps: true });

export const Ebook = mongoose.model("Ebook", EbookSchema);