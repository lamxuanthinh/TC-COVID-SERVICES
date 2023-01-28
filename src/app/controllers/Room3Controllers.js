const Room3 = require("../models/Room3")

class Room3Controllers {
    async getFirstUser(req, res) {
        let idCard
        let roomId = req.params.RoomId
        let room3 = await Room3.findOne({ RoomId: roomId });
        if (room3) {
            let user, firstUser
            let users = room3.Data;
            for (user of users) {
                firstUser = user
                idCard = user.IdCard
                break;
            }
            if (firstUser) {
                res.send(firstUser);
            }
            else {
                res.send("khong co user");
            }
        }
    }

    async delete(req, res) {
        // Xóa user đó ở vị trí đầu
        let idCard = req.body.IdCard
        let roomId = req.body.RoomId
        let removeUser = await Room3.updateOne(
            { RoomId: roomId },
            {
                $pull: {
                    Data: {
                        IdCard: idCard
                    }
                }
            }
        )

        if (removeUser) {
            res.send(true);
        }
        else {
            res.send(false)
        }
    }
    async endList(req, res) {
        let roomId = req.body.RoomId
        let idCard = req.body.IdCard
        let user = await User.findOne({ IdCard: idCard })

        if (user) {
            // Xóa user đó ở vị trí đầu
            let removeUser = await Room3.updateOne(
                { RoomId: roomId },
                {
                    $pull: {
                        Data: {
                            IdCard: idCard
                        }
                    }
                }
            )
            // Đẩy xuống cuối list

            let udateUser = await Room3.updateOne(
                { RoomId: roomId },
                {
                    $addToSet: {
                        Data: user
                    }
                }
            )
                
            res.send(true)
        }
        else {
            res.send(false)
        }

    }

}

module.exports = new Room3Controllers