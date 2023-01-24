import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import env from 'env'
import Env from '@ioc:Adonis/Core/Env'

export default class Authen {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const x=Env.get('APP_KEY')
    console.log(x);
    
    await next()
  }
}
