// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Detail from 'App/Models/Detail'
import Validator from 'App/Validators/Validator'
import updateValid from 'App/Validators/updateValid'

export default class DetailsController {
  public async disp({ response, params }) {
    let posts
    if (params.id) {
      console.log('id', params)
      posts = await Detail.find(parseInt(params.id))
    } else {
      posts = await Detail.all()
    }
    return response.send(posts)
  }

  public async ins({ request, response }) {
    // Validation
    // const res = await validator.validate({
    //   schema: schema.create({

    //   }),
    //   data: {
    //     name: name,
    //     age: age,
    //   },
    // })
    const res = await request.validate(Validator)
    const data = await Detail.create(res)
    return response.status(200).json(data)
  }

  public async updt({ request, response }) {
    // const { name} = request.body() //desturcturing
    const res = await request.validate(updateValid)
    console.log(res);
    const data = await Detail.findBy('name', res.name)
    if (data) {
      data.merge({ name: res.updt }).save()
      return response.status(200).send('updated')
    } else {
      return response.status(200).json('No Record Found')
    }
  }

  public async del({ request, response, params }) {
    const data = await Detail.find(params.id)
    if (data) {
      data.delete()
      return response.send('Deleted')
    } else return response.send('Record not found to delete')
    // return response.status(200).json(data)
  }
}
