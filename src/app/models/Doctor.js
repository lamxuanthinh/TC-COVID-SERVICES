const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Doctor = new Schema({
    IdCard: {type: String, maxlength: 255},
    phoneNumber: {type: String, maxlength: 255},
    name: {type: String, maxlength: 255},
    gender: {type: String, maxlength: 255},
    address: {type: String, maxlength: 255},
    dateOfBirth: {type: String, maxlength: 255},
    role: {type: String, maxlength: 255},
    password: {type: String},
    image: {type: String}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Doctor', Doctor);

