const User = require("../models/User")

class UserControllers {

    // [POST] /signup
    async signup(req, res) {
        let user = new User(req.body)
        let result = await user.save()
        res.send(result);
    }

    sendQR(req, res) {
        const sid = 'ACf6f5bad50d6930b2b74c9348420f9fc5'
        const auth_token = '881cab9a8fb7f341143c38cfc30dde8d'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+18086462981",
            to: '+84352786331',
            body: `OTP: ${otp}`
        })
            .then((res) => console.log('message has sent!'))
            .catch((err) => console.log(err))
    }

    // [GET] /
    async show(req, res) {
        let user = await User.find();
        if (user.length > 0) {
            res.send(user);
        }
        else {
            res.send("No user found");
        }
    }


}

module.exports = new UserControllers