
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoUserRepository')} obj.UserRepository
 */
export default ({ PersonRepository }) => {
  return async () => {
    return await PersonRepository.getAll()
  }
}
