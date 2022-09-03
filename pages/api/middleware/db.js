const mongoose = require('mongoose');

const MONGODB = process.env.NEXT_PUBLIC_MONGODB

async function connectToMongo() {
    try {
        const connection = await mongoose.connect(MONGODB, { useNewUrlParser: true });
        if(connection.readyState === 1){
            console.log("Connected succcessfully");
        }
    } catch (errors) {
        return Promise.reject(errors);
    }
}

module.exports = connectToMongo;