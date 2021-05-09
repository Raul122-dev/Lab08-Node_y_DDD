import Joi from 'joi'

export const schemaName = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  number: Joi.number()
    .integer()
    .min(0)
    .max(999999999)
})
