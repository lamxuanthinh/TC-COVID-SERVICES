const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Temporarily = new Schema({
    CCCD: {type: String, maxlength: 255},
    SDT: {type: String, maxlength: 255},
    HoTen: {type: String, maxlength: 255},
    GioiTinh: {type: String, maxlength: 255},
    NgaySinh: {type: String, maxlength: 255},
    NoiTamTru: {type: String, maxlength: 255},
    NoiThuongTru: {type: String, maxlength: 255},
    NgayBatDauTamVang: {type: String},
    NgayKetThucTamVang: {type: String},
    LyDoTamVang: {type: String},
    DiaChiNoiDen: {type: String},
    AnhXacThuc: {type: String}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Temporarily', Temporarily);

