const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToMongo = require('./middleware/db');

const SECRET_KEY = process.env.SECRET_KEY || 'secret' ;

// ROUTE 1: Create a User profile using: POST "/api/signup". No login required
export default async function handler(req, res){
    connectToMongo();
    if(req.body.password.localeCompare(req.body.confirmPassword)!==0){
        return res.json({'error': 'Confirm password must match the password provided'})
    }
    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }
      
      // Check whether the user with this username exists already
      user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this username already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
  
      // Create a new user
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
        plantCount: 0
      });
      const authtoken = jwt.sign({
        username: user.username,
        email: user.email
      }, SECRET_KEY, {});
  
  
      // res.json(user)
      res.json({ user, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }