import User from "./models/User.js";
import connectDb from "./db.js";

await connectDb()

async function updateOne() {
    const user = await User.updateOne({email: 'ali@example.com'}, {$set: {name: 'Ali'}})
    console.log(user);
    process.exit();
}
async function findByIdAndUpdate() {
    const user = await User.findByIdAndUpdate('684fd28ad1b85191295b9635', {$set: {age: 25}})
    console.log(user);
    process.exit();
}
async function updateMany() {
    const user = await User.updateMany({age: {$gt: 19}}, {$set: {name: 'Mazhar'}})
    console.log(user);
    process.exit();
}

updateOne()