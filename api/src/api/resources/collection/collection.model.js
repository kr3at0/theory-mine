import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Collections must have title']
  },

  entries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'entry'
  }],

  favorite: {
    type: Boolean,
    required: true,
    default: false
  }
})

export const Collection = mongoose.model('collection', collectionSchema)
