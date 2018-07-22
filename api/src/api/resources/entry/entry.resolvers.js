import { Entry } from './entry.model'

const getEntry = (_, {id}, {user}) => {
  return Entry.findById(id).exec()
}

const allEntries = () => {
  return Entry.find({}).exec()
}

const newEntry = (_, {input}) => {
  return Entry.create(input)
}

const updateEntry = (_, {input}) => {
  const { id, ...update } = input

  return Entry.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const entryResolvers = {
  Query: {
    Entry: getEntry,
    allEntries
  },

  Mutation: {
    newEntry,
    updateEntry
  }
}