const currentApiVersion = 'v1'

const SERVER = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 3000
}

const DB_TYPE = 'mongodb'

const connectionPort = {
  mongodb: 27017,
  mysql: 3306
}

// mongodb+srv://root:<password>@cluster0.bw4qz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const DATABASE = {
  DB_TYPE: DB_TYPE,
  DB_URI_CONNECTION: process.env.DB_URI || null,
  DB_NAME: process.env.DB_NAME || 'db_gestion',
  DB_HOST: process.env.DB_HOST || '0.0.0.0',
  DB_PORT: process.env.DB_PORT || connectionPort[DB_TYPE],
  DB_USER: process.env.DB_USER || 'user',
  DB_PASSWORD: process.env.DB_PASSWORD || 'userPassword'
}

const config = {
  URL_BASE: '/',
  URL_BASE_API: `/api${currentApiVersion}`
}

module.exports = Object.freeze({
  config,
  SERVER,
  DATABASE
})
