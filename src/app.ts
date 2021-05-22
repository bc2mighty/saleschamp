import express from "express"
import { PORT, DB_URL } from "../config/defaults"
import log from "./logger"
import connect from "./db/connect"
import routes from "./routes"
import { contentType } from "./middleware"

let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(contentType)

app.listen(PORT, () => {
    log.info(`Listening on Port: ${PORT}`);
    connect(DB_URL as string)
    routes(app)
})