require("dotenv").config({path: __dirname + '/../.env'})

export const PORT = process.env.port 
export const DB_URL = process.env.DB_URL
