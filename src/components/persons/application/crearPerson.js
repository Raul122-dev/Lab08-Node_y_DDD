/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonRepository')} obj.NotaRepository
 */
export default ({ PersonRepository }) => {
  return async ({ name, number }) => {
    const nuevaPerson = {
      Name: name,
      Number: number,
      date: new Date().toISOString()
    }
    return await PersonRepository.add(nuevaPerson)
  }
}
