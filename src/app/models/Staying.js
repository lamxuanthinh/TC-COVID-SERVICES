const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Staying = new Schema({
    CCCD: {type: String, maxlength: 255},
    SDT: {type: String, maxlength: 255},
    HoTen: {type: String, maxlength: 255},
    NgaySinh: {type: String, maxlength: 255},
    NoiTamTru: {type: String, maxlength: 255},
    NoiThuongTru: {type: String, maxlength: 255},
    NgayBatDauTamTru: {type: String},
    NgayKetThucTamTru: {type: String},
    LyDoTamTru: {type: String},
    AnhXacThuc: {type: String}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Staying', Staying);

