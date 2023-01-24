import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Employee from 'App/Models/Employee'
import StoreEmpValidator from 'App/Validators/StoreEmpValidator'
import OptionalValid from 'App/Validators/OptionalValid'

export default class EmployeesController {
  async displayData(ctx: HttpContextContract) {
    const param = ctx.params.id
    if (param) return ctx.response.send(await Employee.find(param))

    const payload = await ctx.request.validate(OptionalValid)
    console.log('payload',payload)

    if (payload.search) {
      const search = payload.search

      return Employee.query().where('cName', 'like', '%' + search + '%')
    } else return ctx.response.send(await Employee.all())
  }

  async store(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(StoreEmpValidator)
    await Employee.create(payload)
    return ctx.response.status(200).send('Inserted Successfully')
  }

  async delete(ctx: HttpContextContract) {
    const data = await Employee.find(ctx.params.id)
    if (data) {
      data.delete()
      return ctx.response.send('Deleted')
    } else return ctx.response.send('Record not found to delete')
  }

  async updt(ctx: HttpContextContract) {
    const data = await Employee.find(ctx.params.id)
    const validData = await ctx.request.validate(OptionalValid)
    console.log('validData', validData)

    if (data) {
      data.merge(validData).save()
      return ctx.response.status(200).send('updated')
    } else {
      return ctx.response.status(200).json('No Record Found')
    }
  }
}
