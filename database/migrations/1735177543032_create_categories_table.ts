import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name')
      table.string('description', 255).defaultTo('')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
