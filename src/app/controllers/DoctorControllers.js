const Doctor = require("../models/Doctor")
const User = require("../models/User")

class DoctorControllers {

    // [POST] /signup
    async signup(req, res) {
        let doctor = new Doctor(req.body)
        let result = await doctor.save()
        if (result) {
            const sid = 'ACf6f5bad50d6930b2b74c9348420f9fc5'
            const auth_token = '881cab9a8fb7f341143c38cfc30dde8d'
            const twilio = require('twilio')(sid, auth_token)
            let otp = Math.floor(Math.random() * 999999) + 100000;

            twilio.messages.create({
                from: "+18086462981",
                to: '+84352786331',
                body: `TC-COVID: Mã xác thực của bạn là ${otp}`
            })
                .then((res) => 
                    res.send(otp)
                )
                .catch((err) => console.log(err))
        }
        else {
            res.send('false')
        }
    }

    // [POST] /login
    async login(req, res) {
        if (req.body.IdCard && req.body.password) {
            let doctor = await Doctor.findOne(req.body).select("-password");
            if (doctor) {
                res.send(doctor);
            }
            else {
                res.send('false');
            }
        }
        else {
            res.send('false');
        }
    }

    // [GET] /
    async show(req, res) {
        let doctors = await Doctor.find();
        if (doctors.length > 0) {
            res.send(doctors);
        }
        else {
            res.send("No doctors found");
        }
    }

    sendSMS(req, res) {
        const sid = 'ACf6f5bad50d6930b2b74c9348420f9fc5'
        const auth_token = '881cab9a8fb7f341143c38cfc30dde8d'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;
        let str = otp + "";
        twilio.messages.create({
            from: "+18086462981",
            to: '+84352786331',
            body: `OTP: ${otp}`
        })
            .then(() => res.send(str))
            .catch((err) => console.log(err))
    }

    async finish(req, res) {
        let result = await User.updateOne(
            { IdCard: req.params.IdCard },
            {
                $set: {
                    status: 3
                }
            }
        )
        res.send(result);
    }
}

module.exports = new DoctorControllers