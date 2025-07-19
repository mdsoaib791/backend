import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const initDB = async () => {
  try {
    await pool.connect();
    console.log('✅ Connected to PostgreSQL database');
  } catch (err) {
    console.error('❌ Failed to connect to PostgreSQL', err);
    process.exit(1);
  }
};
