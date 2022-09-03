const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToMongo = require('./middleware/db');

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

// ROUTE 2: Login to a User profile using: POST "/api/login". No login required
export default async function handler(req, res) {
  connectToMongo();
  const { username, password } = req.body;
  try {
    // Check whether the user is present
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(500).json({ error: "Wrong Login Credentials" });
    }
    var authtoken = jwt.sign({
      username: user.username,
      email: user.email
    }, SECRET_KEY, {});
    res.json({ user, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}