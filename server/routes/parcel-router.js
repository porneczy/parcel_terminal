const express = require('express')

const ParcelCtrl = require('../controllers/parcel-ctrl')

const router = express.Router()

router.post('/parcel', ParcelCtrl.createParcel)
router.get('/parcels', ParcelCtrl.getParcels)
router.delete('/parcel/:id', ParcelCtrl.deleteParcel)

module.exports = router