import { User } from '../resources/user/user.model'
import jwt from 'jsonwebtoken'
import config from '../../config'
import expressJwt from 'express-jwt'

const checkToken = expressJwt({ secret: config.secrets.JWT_SECRET })

export const signin = (req, res, next) => {
  const token = signToken(req.user.id)
  res.json({token: token})
}

export const decodeToken = () => (req, res, next) => {
  if (config.disableAuth) {
    return next()
  }
  if (req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = 'Bearer ' + req.query.access_token
  }
  checkToken(req, res, next)
}

export const getFreshUser = () => (req, res, next) => {
  if (config.disableAuth) {
    return next()
  }
  return User.findById(req.user.id)
    .then(function(user) {
      if (!user) {
        // the user was deleted since receiving JWT or
        // JWT was from another source
        res.status(401).send('Unauthorized')
      } else {
        // update req.user with fresh user from
        req.user = user
        next()
      }
    })
    .catch(error => next(error))
}

export const verifyUser = () => (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || !password) {
    res.status(400).send('You need a username and password')
    return
  }

  User.findOne({username: username})
    .then(function(user) {
      if (!user) {
        res.status(401).send('No user with the given username')
      } else {
        if (!user.authenticate(password)) {
          res.status(401).send('Wrong password')
        } else {
          req.user = user;
          next()
        }
      }
    })
    .catch(error => next(err))
}

export const signToken = (id) => jwt.sign(
  {id},
  config.secrets.JWT_SECRET,
  {expiresIn: config.expireTime}
)

export const protect = [decodeToken(), getFreshUser()]
