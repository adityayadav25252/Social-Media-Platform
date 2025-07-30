import userModel from '../model/user.model.js'

export async function createUser(data) {
  return await userModel.create(data)
}
export async function findUser(data) {
  return await userModel.find(data)
}
export async function findOneUser(data) {
  return await userModel.findOne(data)
}