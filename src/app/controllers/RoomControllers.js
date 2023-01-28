const Room = require("../models/Room");
const Doctor = require("../models/Doctor");

class RoomControllers {

    async create(req, res) {
        let roomID = req.body.RoomID
        let room = new Room({
            RoomID: roomID,
            RoomMaster: req.body.RoomMaster,
            IdCard: req.body.IdCard
        })
        let result = await room.save()
        if (result) {
            res.send(result);
        }
    }

    async show(req, res) {
        let rooms = await Room.find();
        if (rooms.length > 0) {
            res.send(rooms);
        }
        else {
            res.send("No rooms found");
        }
    }

    async add(req, res) {

        let roomId = req.body.RoomID
        let idCard = req.body.IdCard
        let doctor = await Doctor.findOne({ IdCard: idCard });
        let result = await Room.updateOne(
            { RoomID: roomId },
            {
                $addToSet: {
                    Data: doctor
                }
            }
        )
        res.send(doctor);
    }

    async exit(req, res) {
        let roomId = req.body.RoomID
        let idCard = req.body.IdCard
        let exitRoom = await Room.updateOne(
            { RoomID: roomId },
            {
                $pull: {
                    Data: {
                        IdCard: idCard
                    }
                }
            }
        )

        if (exitRoom) {
            res.send(true);
        }
        else {
            res.send(false);
        }

    }

}

module.exports = new RoomControllers
