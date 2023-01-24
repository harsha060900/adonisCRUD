// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class Validate {
  public async handle({ request, response }, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    // const { n1, n2 } = c.request.qs()
    // if (!isNaN(n1) && !isNaN(n2)) {
    //   return await next()

    // }
    //   console.log('Not number');
    //   return 'enter a number'
    const envAppKey: string = Env.get('APP_KEY')
    const appKey = request.headers()
    // console.log(appKey)
    if (envAppKey === appKey.appkey) await next()
    // else return response.send('Authentication Error !!')
  }
}
