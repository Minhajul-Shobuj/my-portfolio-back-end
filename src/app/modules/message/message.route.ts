import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { MessageValidation } from './message.validation'
import { MessageController } from './message.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/',
  validateRequest(MessageValidation.messageSchemaValidation),
  MessageController.postMessage,
)
router.get('/', MessageController.getAllMessages)
router.delete('/:id', auth('Admin'), MessageController.deleteMessage)

export const MessageRoute = router
