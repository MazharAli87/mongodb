import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practiceDb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDb connected")
    } catch (error) {
        console.log("Error connecting mongodb", error)
    }
}

export default connectDb