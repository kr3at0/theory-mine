const {
  JWT_SECRET,
  DB_URL,
  EXP_TIME
} = process.env

export const config = {
  expireTime: EXP_TIME,
  secrets: {
    JWT_SECRET
  },
  db: {
    url: DB_URL
  }
}
