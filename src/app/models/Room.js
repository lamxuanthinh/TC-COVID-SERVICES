const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Room = new Schema({
    RoomID: {type: String, maxlength: 255},
    RoomMaster: {type: String, maxlength: 255},
    IdCard: {type: String, maxlength: 255},
    Data: {type: Array},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Room', Room);

