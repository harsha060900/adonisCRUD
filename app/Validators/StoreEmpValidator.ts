import { rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CustomMessages from './CommonMessage'

export default class StoreEmpValidator extends CustomMessages {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    cName: schema.string(),
    email: schema.string([
      rules.email(),
      rules.normalizeEmail({
        gmailRemoveDots: true,
        gmailRemoveSubaddress: true,
      }),
    ]),
    // dob: schema.date({},[rules.before(18, 'years')]),
    dob: schema.date({format:'yyyy-MM-dd'},[rules.ageRule()]),
    age: schema.number(),
    phNo: schema.string([rules.mobile()]),
  })
}
