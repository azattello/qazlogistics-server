const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    videoLink: {
        type: String,
        default: ''
    },
    chinaAddress: {
        type: String,
        default: ''
    },
    whatsappNumber: {
        type: String,
        default: ''
    },
    aboutUsText: {
        type: String,
        default: ''
    },
    prohibitedItemsText: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    currency: {
        type: String,
        default:''
    },
    globalReferralBonusPercentage: { // Глобальный процент бонуса
        type: Number,
        default: 4 // Значение по умолчанию 4%
    },

});

module.exports = mongoose.model('Settings', SettingsSchema);
