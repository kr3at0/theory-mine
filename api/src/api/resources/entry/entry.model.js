import mongoose from 'mongoose'

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Entry must have a title']
  },
  type: {
    type: String,
    required: [true, 'Entry must have a type']
  },
  contentUrl: String,
  priority: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  favorite: {
    type: Boolean,
    default: false
  }
})

export const Entry = mongoose.model('entry', entrySchema)
