import mongoose ,{Schema} from 'mongoose';
const ResourceSchema = new Schema({
  
}, { timestamps: true });
export const Resource = mongoose.model("Resource", ResourceSchema);