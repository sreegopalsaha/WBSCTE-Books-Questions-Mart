import mongoose ,{Schema} from 'mongoose';
const PyqSchema = new Schema({
  
}, { timestamps: true });
export const Pyq = mongoose.model("Pyq", PyqSchema);