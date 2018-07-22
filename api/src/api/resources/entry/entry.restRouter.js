import express from 'express'
import entryController from './entry.controller'

export const entryRouter = express.Router()

entryRouter.param('id', entryController.findByParam)

entryRouter.route('/')
  .get(entryController.getAll)
  .post(entryController.createOne)

entryRouter.route('/:id')
  .get(entryController.getOne)
  .put(entryController.updateOne)
  .delete(entryController.createOne)