import * as Redis from 'ioredis';
import config from '../../config/db';
import { Logger } from '../utils/log4js';

let num: number = 0;
const redisList = [];
const redisIndex = [];

export class RedisInstance {
  static async initRedis(method: string, db: number = 0) {
    const isExsit = redisIndex.some(i => i === db);
    if (!isExsit) {
      Logger.debug(`[Redis ${db}]来自 ${method} 方法调用, Redis实例化了 ${++num} 次`);
      redisList[db] = new Redis({ ...config.redis, db });
      redisIndex.push(db);
    } else {
      Logger.debug(`[Redis ${db}]来子 ${method} 方法调用`);
    }
    return redisList[db];
  }
}
