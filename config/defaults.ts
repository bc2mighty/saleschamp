require("dotenv").config({path: __dirname + '/../.env'})

export const PORT = 4000
export const DB_URL = process.env.DB_URL
