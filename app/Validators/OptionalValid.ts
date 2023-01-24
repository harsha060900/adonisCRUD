import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomMessages from './CommonMessage'

export default class OptionalValid extends CustomMessages {
  constructor(protected ctx: HttpContextContract) {
    super()
    // console.log(ctx)
  }
  

  public schema = schema.create({
    cName: schema.string.optional(),
    email: schema.string.optional([rules.email()]),
    dob: schema.date.optional({format:'yyyy-MM-dd'}),
    age: schema.number.optional(),
    phNo: schema.string.optional([rules.mobile()]),
    // requestQs: schema.object.optional().members({
    search:schema.string.optional()
    // })
    
  })
}
