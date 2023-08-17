import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve('.env') });

interface ENV {
  PORT: number;
  APPWRITE_ENDPOINT: string;
  APPWRITE_PROJECT: string;
  APPWRITE_KEY: string;
}

const getConfig = (): ENV => {
  return {
    PORT: Number(process.env.PORT),
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
    APPWRITE_PROJECT: process.env.APPWRITE_PROJECT,
    APPWRITE_KEY: process.env.APPWRITE_KEY,
  };
};

export default getConfig();
