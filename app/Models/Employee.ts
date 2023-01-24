import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseStrategy from 'App/Strategies/CamelCaseStrategy'

export default class Employee extends BaseModel {
  public static namingStrategy = new CamelCaseStrategy()
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public cName: string

  @column()
  public email: string
  
  @column()
  public dob: DateTime
  
  @column()
  public age: number

  @column()
  public phNo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
