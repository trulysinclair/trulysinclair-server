import Category from '#models/category'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare content: string

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @column()
  declare categoryId: number

  @column()
  declare isPublished: boolean

  @column()
  declare keywords: string[]
}
