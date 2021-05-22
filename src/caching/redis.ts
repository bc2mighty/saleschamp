import redis from "redis"
import log from "../logger"
import bluebird from "bluebird"
bluebird.promisifyAll(redis)

const client: any = redis.createClient()

client.on("error", function(error: any) {
    log.error(error);
});

export default client