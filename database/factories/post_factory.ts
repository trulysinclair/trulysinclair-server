import { CategoryFactory } from '#database/factories/category_factory'
import Post from '#models/post'
import factory from '@adonisjs/lucid/factories'

export const PostFactory = factory
  .define(Post, async ({ faker }) => {
    return {
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(faker.number.int({ max: 5 })),
      isPublished: faker.datatype.boolean(),
      keywords: faker.lorem.words().split(' '),
    }
  })
  .relation('category', () => CategoryFactory)
  .build()
