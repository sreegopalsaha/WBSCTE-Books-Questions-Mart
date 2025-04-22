import mongoose, {Schema} from 'mongoose';
import bcrypt from "bcrypt";

const AdminSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    lowercase: true,
    maxlength: [15, "username must be at most 15 characters"],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "password must be at least 8 characters"],
  },
  refreshToken: {
    type: String,
  },
}, 
{timestamps: true});

 // password encryption
 AdminSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// custom method for password checking
AdminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export const Admin = mongoose.model("Admin", AdminSchema);