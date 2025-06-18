import connectDb from "./db.js";
import User from "./models/User.js";

await connectDb();

async function deleteUser() {
  const user = await User.deleteOne({email: 'test@example.com'});
  console.log('User deleted');
  process.exit();
}

async function deleteMultUsers() {
  const user = await User.deleteMany({ email: 'test@example.com' });
  console.log('Users deleted');
  process.exit();
}

async function deleteUserById() {
  const user = await User.findByIdAndDelete('684fd28ad1b85191295b9635');
  console.log('Users deleted');
  process.exit();
}

deleteUser()