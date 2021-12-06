import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  sex: String,
  age: String,
  password: String
});

export default mongoose.model("User", UserSchema);
