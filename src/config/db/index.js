const mongoose = require('mongoose');
require('dotenv').config()

let username = process.env.MONGO_USER
let password = process.env.MONGO_PASSWORD
let http = `mongodb+srv://${username}:${password}@tc-covid.evjlnjx.mongodb.net/tc-covid?retryWrites=true&w=majority`

async function connect() {
    try {
        await mongoose.connect(http, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Failure!');
    }
}

module.exports = { connect };
