const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Parcel = new Schema(
    {
        box: { type: String, required: true },
        deadLine: { type: String, required: true },
        email: { type: String, required: true },
        pw: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('parcels', Parcel)