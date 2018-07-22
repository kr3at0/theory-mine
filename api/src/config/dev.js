const {
  JWT_SECRET,
  EXP_TIME
} = process.env

export const config = {
  expireTime: EXP_TIME,
  disableAuth: true,
  secrets: {
    JWT_SECRET
  }
}
