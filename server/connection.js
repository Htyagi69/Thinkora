import {Redis} from 'ioredis'
import { createAdapter } from '@socket.io/redis-adapter'
import dotenv from 'dotenv'
dotenv.config()

 const redisPublish=new Redis(
    process.env.REDIS_URL || "redis://localhost:6379"
)

 const redisSubscribe=redisPublish.duplicate()

export const socketAdapter=createAdapter(redisPublish,redisSubscribe)

export {redisPublish,redisSubscribe}