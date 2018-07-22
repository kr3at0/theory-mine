import { Collection } from './collection.model'

const getCollection = (_, {id}) => {
  return Collection.findById(id).exec()
}

const allCollections = () => {
  return Collection.find({}).exec()
}

const newCollection = (_, {input}) => {
  return Collection.create(input)
}

const updateCollection = (_, {input}) => {
  const {id, ...update} = input

  return Collection.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const collectionResolvers = {
  Query: {
    Collection: getCollection,
    allCollections
  },

  Mutation: {
    newCollection,
    updateCollection
  }
}
