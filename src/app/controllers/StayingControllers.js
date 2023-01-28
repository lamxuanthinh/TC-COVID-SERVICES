const Staying = require("../models/Staying")

class StayingControllers {

    // [POST] /signup
    async signup(req, res) {
        let staying = new Staying(req.body);
        let result = await staying.save();
        res.send(result);
    }


    // [GET] /
    async show(req, res) {
        let staying = await Staying.find();
        if (staying.length > 0) {
            res.send(staying);
        }
        else {
            res.send("No Staying found");
        }
    }

    // [GET] Gửi tin nhắn
    sendSMS(req, res) {
        const dateStart = req.body.NgayBatDauTamTru;
        const dateEnd = req.body.NgayKetThucTamTru;
        const sid = 'AC9cbaaef6bcd414a7557c613ee65290a1'
        const auth_token = '2d399a856684220cd1fcd1e381c9217f'
        const twilio = require('twilio')(sid, auth_token)
        let otp = Math.floor(Math.random() * 999999) + 100000;

        twilio.messages.create({
            from: "+13187082606",
            to: '+84379124695',
            body: `Yêu cầu đăng ký tạm trú của bạn đã được chấp thuận. Thời hạn tạm trú của bạn bắt đầu từ ngày ${dateStart} đến hết ngày ${dateEnd}`
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
            body: `Yêu cầu đăng ký tạm trú của bạn không được chấp thuận. Vui lòng đến cơ quan chức năng gần nhất để biết thêm chi tiết.`
        })
            .then(() => res.send(otp))
            .catch((err) => console.log(err))
    }


}

module.exports = new StayingControllers