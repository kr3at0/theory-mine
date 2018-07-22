import createApiSpec from '~/apiSpecs'
import { Collection } from './collection.model'

createApiSpec(
  Collection,
  'collection',
  {title: 'study', favorite: true}
)
