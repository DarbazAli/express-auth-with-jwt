import express from 'express'
import userCtrl from '../controllers/userControllers.js'

const router = express.Router()

router
  .route('/api/users')
  .post(userCtrl.create)
  .get(userCtrl.list)
  .put(userCtrl.update)

export default router
