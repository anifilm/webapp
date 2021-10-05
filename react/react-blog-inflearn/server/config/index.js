import dotenv from 'dotenv'

dotenv.config()

const userId = process.env.USER_ID;
const userPw = process.env.USER_PW;

export default {
  MONGO_URI: `mongodb+srv://${userId}:${userPw}@cluster0.yhhud.mongodb.net/my-mongodb?retryWrites=true&w=majority`,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT
}
