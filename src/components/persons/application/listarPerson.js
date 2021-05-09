
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoUserRepository')} obj.UserRepository
 */
export default ({ PersonRepository }) => {
  return async (id) => {
    return await PersonRepository.getById(id)
  }
}
