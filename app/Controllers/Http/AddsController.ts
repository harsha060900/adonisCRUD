import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Detail from 'App/Models/Detail'

export default class AddsController {
  public async index({ response }: HttpContextContract) {
    const posts = await Detail.all()

    return response.send(posts)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
