import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://DelishDash:skytab09@cluster0.zu4fv.mongodb.net/food-del').then(() => console.log("DB connected"));
}