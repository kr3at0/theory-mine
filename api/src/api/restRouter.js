import express from 'express'
import { userRouter } from './resources/user'
import { entryRouter } from './resources/entry'
import { collectionRouter } from './resources/collection'
import { apiErrorHandler } from './modules/errorHandler'

export const restRouter = express.Router()

restRouter.use('/user', userRouter)
restRouter.use('/entry', entryRouter)
restRouter.use('/collection', collectionRouter)
restRouter.use(apiErrorHandler)
