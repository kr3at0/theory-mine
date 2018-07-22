import merge from 'lodash.merge'

const {
  NODE_ENV,
  PORT,
  DB_URL
} = process.env

const env = NODE_ENV || 'dev'

const baseConfig = {
  port: PORT,
  secrets: {},
  db: {
    url: DB_URL
  }
}

let envConfig = require(`./${env}`).config

export default merge(baseConfig, envConfig)
