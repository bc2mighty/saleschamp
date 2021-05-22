import mongoose, { connect } from "mongoose"
import log from "../logger"

export default (uri: string) => {
    return mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            log.info("Database Connected")
        })
        .catch((err) => {
            log.error("error", err)
            process.exit(1)
        })
}