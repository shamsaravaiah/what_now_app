import express from 'express'
import searchRoute from './search.route.js'
const router = express.Router()

router.use('/api/v1',searchRoute)
export default router