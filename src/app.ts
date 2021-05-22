require("dotenv").config({path: __dirname + '/.env'})

import express, { Application } from "express"
import { PORT } from "../config/defaults"
import log from "./logger"

let app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(PORT, () => {
    log.info(`Listening on Port: ${PORT}`);
})