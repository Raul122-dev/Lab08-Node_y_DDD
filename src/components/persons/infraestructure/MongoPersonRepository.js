import MongoLib from '../../../lib/mongo'

class MongoPersonRepository {
  constructor () {
    this.collection = 'Persons'
    this.mongoDB = new MongoLib()
  }

  async getAll () {
    const query = null
    return await this.mongoDB.getAll(this.collection, query)
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async getById (id) {
    return await this.mongoDB.get(this.collection, id)
  }

  async delete (id) {
    return this.mongoDB.delete(this.collection, id)
  }
}

export default MongoPersonRepository
