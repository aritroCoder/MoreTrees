// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectToMongo = require('./middleware/db');
const User = require('./models/User');

export default async function handler(req, res) {
  connectToMongo();
  console.log(await User.find({}))
  res.status(200).json({ name: 'John Doe' })
}
