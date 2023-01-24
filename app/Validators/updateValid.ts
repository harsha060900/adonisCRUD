import { schema } from '@ioc:Adonis/Core/Validator'
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomMessages from './CommonMessage'

export default class updateValid extends CustomMessages {
  constructor() {
    super()
  }

  public schema = schema.create({
    c_name: schema.string(),
    updt: schema.string(),
  })

}
