const Parcel = require('../models/parcel-model')

const createParcel = (req, res) => {
    const body = req.body
    
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a parcel',
        })
    }

    const parcel = new Parcel(body)

    if (!parcel) {
        return res.status(400).json({ success: false })
    }

    parcel
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: parcel._id,
                message: 'Parcel created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Parcel not created!',
            })
        })
}

const getParcels = async (req, res) => {
    await Parcel.find({}, (err, parcels) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!parcels.length) {
            return res
                .status(404)
                .json({ success: false, error: `Parcel not found` })
        }
        return res.status(200).json({ success: true, data: parcels })
    }).catch(err => console.log(err))
}

module.exports = {
    createParcel,
    getParcels
}