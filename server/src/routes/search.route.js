import express from 'express'
import placesCtr from '../controller/places.controller.js'
const router = express.Router()

router.route('/search')
      .post(placesCtr.getPlace)


export default router