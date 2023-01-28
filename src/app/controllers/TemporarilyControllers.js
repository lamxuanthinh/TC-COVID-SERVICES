const Temporarily = require("../models/Temporarily")

class TemporarilyControllers {

    // [POST] /signup
    async signup(req, res) {
        let temporarily = new Temporarily(req.body);
        let result = await temporarily.save();
        res.send(result);
    }


    // [GET] /
    async show(req, res) {
        let temporarily = await Temporarily.find();
        if (temporarily.length > 0) {
            res.send(temporarily);
        }
        else {
            res.send("No temporarily found");
        }
    }

    // [GET] Gửi tin nhắn
    sendSMS(req, res) {
        const dateStart = req.body.NgayBatDauTamVang;
        const dateEnd = req.body.NgayKetThucTamVang;
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '2d399a856684220cd1fcd1e381c9217f'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `Yêu cầu đăng ký tạm vắng của bạn đã được chấp thuận. Thời hạn tạm vắng của bạn bắt đầu từ ngày ${dateStart} đến hết ngày ${dateEnd}`
        })
            .then(() => res.send(otp))
            .catch((err) => console.log(err))
    }

    // [GET] Gửi tin nhắn
    sendRejection(req, res) {
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '2d399a856684220cd1fcd1e381c9217f'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `Yêu cầu đăng ký tạm vắng của bạn không được chấp thuận. Vui lòng đến cơ quan chức năng gần nhất để biết thêm chi tiết.`
        })
            .then(() => res.send(otp))
            .catch((err) => console.log(err))
    }


}

module.exports = new TemporarilyControllers