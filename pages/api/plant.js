const User = require('./models/User');
const connectToMongo = require('./middleware/db');
// request format:
//{
//     username: user1,
//     plantname: plant1,
// }
export default async function handler(req, res) {
    connectToMongo();
    let user = await User.findOne({ username: req.body.username });
    if (user) {
        user.plantCount += 1;
        if (user.details.length === 0) {
            // console.log("details list empty");
            user.details.push({
                name: req.body.plantname,
                count: 1,
                time: Date.now()
            });
        } else {
            for (let index = 0; index < user.details.length; index++) {
                // console.log({first: user.details[index].name, second: req.body.plantname, index: index, length: user.details.length});
                if (user.details[index].name.localeCompare(req.body.plantname) === 0){
                    // console.log("plant found");
                    user.details[index].count += 1;
                    user.details[index].time = new Date();
                    break;
                } else {
                    if (index === user.details.length - 1) {
                        // console.log("plant not found");
                        user.details.push({
                            name: req.body.plantname,
                            count: 1,
                            time: new Date()
                        });
                        break;
                    }
                }
            }
        }

        await user.save();
        res.json({ 'message': 'Plant added to user' })
    } else {
        res.status(400).send({ error: 'User not found' });
    }
}