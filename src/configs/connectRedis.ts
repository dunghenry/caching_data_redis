import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();
const client = createClient({
    // url: process.env.REDIS_ENDPOINT_URI,
    // password: process.env.REDIS_PASSWORD
}
);
client.on('error', (err) => {
    console.log(err);
    console.log("Redis Client Error");
    process.exit(1);
});
client.on('connect', () => {
    console.log('Redis plugged in.');
});

export default client;