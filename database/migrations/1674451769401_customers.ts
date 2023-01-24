import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('c_name', 50).notNullable()
      table.string('email', 100).unique().notNullable()
      table.integer('age').defaultTo(0)
      table.integer('ph_no',10).unique()
      

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
