import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  DB_URI: process.env.DB_URI ?? 'postgres://user:pass@l:5432/dbname',
};

export default config;
