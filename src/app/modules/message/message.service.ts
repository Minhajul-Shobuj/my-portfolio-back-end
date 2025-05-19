import { TMessage } from './message.interface'
import { Message } from './message.model'

const postMessageInDB = async (payload: TMessage) => {
  const result = await Message.create(payload)
  return result
}
const getAllMessageFromDB = async () => {
  const result = await Message.find()
  return result
}
const deleteMessageFromDb = async (id: string) => {
  const result = await Message.findByIdAndDelete(id)
  return result
}

export const MessageService = {
  postMessageInDB,
  getAllMessageFromDB,
  deleteMessageFromDb,
}
