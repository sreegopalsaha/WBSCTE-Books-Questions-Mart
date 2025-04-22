import mongoose, {Schema} from "mongoose";
const VisitorLogSchema = new Schema({
    homepageVisits : {
        type: Number,
        default: 0,
    },
    ipaddress : {
        type: String,
        required: true,
    },
},{timestamps: true});
export const VisitorLog = mongoose.model("VisitorLog", VisitorLogSchema);

