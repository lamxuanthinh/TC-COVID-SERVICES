const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const PatientId = new Schema({
    IdCard: {type: String, maxlength: 255},
    phoneNumber: {type: String, maxlength: 255},
    status: {type: Boolean, default: false}
}, {
    timestamps: true,
});

module.exports = mongoose.model('PatientId', PatientId);

