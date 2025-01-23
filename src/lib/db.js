// // lib/db.js
// import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'postgre',
//     host: 'http://localhost:5432',
//     database: 'companyDetails',
//     password: 'Password',
//     port: 5432,
// });

// export default pool;
// lib/db.js
import { Client } from 'pg';

const client = new Client({
   //connectionString: 'postgresql://postgres:Password@localhost:5432/companyDetails',
  connectionString: 'postgresql://cmp_db_owner:npg_xYmIQc7TqO6a@ep-hidden-salad-a59z8opx-pooler.us-east-2.aws.neon.tech/cmp_db?sslmode=require'
});

export const connectToDatabase = async () => {
  try {
    if (!client._connected) {
      await client.connect();
      console.log('Connected to PostgreSQL');
    }
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await client.end();
    console.log('Disconnected from PostgreSQL');
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
    throw error;
  }
};
