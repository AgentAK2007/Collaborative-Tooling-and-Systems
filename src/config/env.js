import dotenv from 'dotenv';
import path from 'path';

const ALLOWED_ENVS = ['staging', 'preprod', 'prod'];
const currentEnv = process.env.NODE_ENV || 'staging';

if (!ALLOWED_ENVS.includes(currentEnv)) {
  throw new Error(`Invalid NODE_ENV "${currentEnv}". Must be one of: ${ALLOWED_ENVS.join(', ')}`);
}

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${currentEnv}`)
});

export const config = {
  env: currentEnv,
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI
};
