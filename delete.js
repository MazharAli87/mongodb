import connectDb from "./db.js";
import User from "./models/User.js";

await connectDb();

async function deleteUser() {
  const user = await User.deleteOne({email: 'test@example.com'});
  console.log('User deleted');
  process.exit();
}

deleteUser()