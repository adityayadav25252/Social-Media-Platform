import userModel from '../model/user.model.js'

export async function createuser(data) {
  return await userModel.create(data)
}
export async function userFind(data) {
  return await userModel.find(data)
}
export async function userFindOne(data) {
  return await userModel.findOne(data)
}