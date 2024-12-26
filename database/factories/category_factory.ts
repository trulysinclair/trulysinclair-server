import Category from '#models/category'
import factory from '@adonisjs/lucid/factories'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    return {
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    }
  })
  .build()
