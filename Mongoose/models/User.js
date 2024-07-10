import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  contact: {
    type: Number,
    minlength: 10,
    maxlength: 10,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestfriend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi = function(){
    console.log(`Hi my name is ${this.name}`);
}

// middleware
userSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model("User", userSchema);
