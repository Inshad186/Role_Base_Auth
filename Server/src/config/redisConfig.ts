import { createClient, RedisClientType } from "redis";

const redisClient:RedisClientType = createClient({
    url: process.env.REDIS_URL
})

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

redisClient.on("connect", () => {
  console.log("Redis connected successfully");
});

export const connectRedis = async() : Promise<void> => {
    if(!redisClient.isOpen){
        await redisClient.connect()
    }
}

export default redisClient;