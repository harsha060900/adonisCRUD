// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Customer from "App/Models/Customer"

export default class CustomersController {
    async insert({request, response}){
        const valid= await request.validate()
         await Customer.create(valid)
        return response.status(200).send('Inserted Successfully')
    }
}
