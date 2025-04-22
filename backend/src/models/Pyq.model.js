import mongoose ,{Schema} from 'mongoose';
const PyqSchema = new Schema({
  title : {
    type: String,
  },
  branch : {
    type: String,
  },
  semester : {
    type: String,
  },
  year : {
    type: String,
  },
  downloadUrl : {
    type: String,
  },
  tags : {
    type: [String],
  },
}, { timestamps: true });
export const Pyq = mongoose.model("Pyq", PyqSchema);