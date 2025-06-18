import connectDb from "./db.js";
import User from "./models/User.js";

await connectDb();

async function createUser() {
  const user = new User({ name: 'test', age: 14, email: 'test@example.com' });
  await user.save();
  console.log('User created:', user);
  process.exit();
}

createUser();