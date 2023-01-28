const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Room3 = new Schema({
    RoomId: {type: String},
    RoomMaster: {type: String, maxlength: 255},
    IdCard: {type: String, maxlength: 255},
    Data: {type: Array},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Room3', Room3);