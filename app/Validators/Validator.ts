import { schema } from '@ioc:Adonis/Core/Validator'
import CustomMessages from './CommonMessage'
//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Validator extends CustomMessages {
  constructor() {
    super()
    // this.name=ctx.requestBody.name
    
  }
  public schema = schema.create({
    name: schema.string(),
    age: schema.number(),
  })

}
