const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    IdCard: {type: String, maxlength: 255},
    phoneNumber: {type: String, maxlength: 255},
    name: {type: String, maxlength: 255},
    gender: {type: String, maxlength: 255},
    address: {type: String, maxlength: 255},
    province: {type: String, maxlength: 255},
    district: {type: String, maxlength: 255},
    wards: {type: String, maxlength: 255},
    nationality: {type: String, maxlength: 255},
    numberBHYT: {type: String, maxlength: 255},
    ethnic: {type: String, maxlength: 255},
    dateOfBirth: {type: String, maxlength: 255},
    status: {type: String, maxlength: 255},
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);

