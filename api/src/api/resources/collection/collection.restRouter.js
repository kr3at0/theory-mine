import express from 'express'
import collectionController from './collection.controller'

export const collectionRouter = express.Router()

collectionRouter.param('id', collectionController.findByParam)

collectionRouter.route('/')
  .get(collectionController.getAll)
  .post(collectionController.createOne)

collectionRouter.route('/:id')
  .get(collectionController.getOne)
  .put(collectionController.updateOne)
  .delete(collectionController.createOne)
