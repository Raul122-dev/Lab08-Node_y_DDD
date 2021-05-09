import express from 'express'
import { crearPerson, listarPersons, cantidadPersons, personaEspecifica, eliminarPerson } from '../components/persons/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/persons', listarPersons)

router.get('/info', cantidadPersons)

router.get('/api/persons/:id', personaEspecifica)

router.delete('/api/persons/:id', eliminarPerson)

router.post('/api/persons', crearPerson)

export default router
