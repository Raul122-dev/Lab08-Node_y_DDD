import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import CrearPerson from './application/crearPerson'
import ListarPersons from './application/listarPersons'
import ListarPerson from './application/listarPerson'
import EliminarPerson from './application/eliminarPerson'
import { schemaName } from './domain/validate'

const PersonRepository = new MongoPersonRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const listarPersons = async (_, res, next) => {
  try {
    const query = ListarPersons({ PersonRepository })
    const person = await query()
    res.status(200).json({
      data: person,
      message: 'Persons listed'
    })
  } catch (e) {
    next(e)
  }
}

export const cantidadPersons = async (_, res, next) => {
  try {
    const query = ListarPersons({ PersonRepository })
    const person = await query()
    res.status(200).send('<p>Phonebook has info for ' + person.length + ' people</p>' +
    '<p>' + new Date(Date.parse('2012-01-26T13:51:50.417-07:00')) + '</p>')
  } catch (e) {
    next(e)
  }
}

export const personaEspecifica = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const query = ListarPerson({ PersonRepository })
    const person = await query(id)
    res.status(200).json(person)
  } catch (e) {
    next(e)
  }
}

export const eliminarPerson = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const query = EliminarPerson({ PersonRepository })
    await query(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

export const crearPerson = async (req, res, next) => {
  try {
    const query = CrearPerson({ PersonRepository })
    await schemaName.validateAsync(req.body)
    const person = await query(req.body)
    res.status(201).json({
      data: person,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}
