import connectDb from "./db.js";
import User from "./models/User.js";

await connectDb()

async function find() {
    const users = await User.find()
    // const users = await User.find({_id:0}) //removes _id
    // const users = await User.find().select('-_id') //removes _id
    // const users = await User.find().select('name email -_id')
    // const users = await User.find({age: {$gt: 13, $lte: 21}})
    // const users = await User.find({$or: [{age: {$lte: 15}}, {name: "Ali"}]})
    console.log(users)
    process.exit()
}

async function findOne() {
    const user = await User.findOne({age: {$gt: 25}})
    console.log(user)
    process.exit()
}

find()