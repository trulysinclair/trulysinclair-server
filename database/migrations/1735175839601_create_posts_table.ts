import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('title')
      table.string('description', 255).defaultTo('')
      table.string('content')
      table.boolean('is_published').defaultTo(false)
      table.jsonb('keywords')
      table.integer('category_id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
