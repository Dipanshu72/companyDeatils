
import { connectToDatabase } from '../../lib/db';


export default async function handler(req, res) {
    try {
      const client = await connectToDatabase();
      
      const result = await client.query('SELECT * FROM companies');
      res.status(200).json(result?.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }

    try {
      const client = await connectToDatabase();
      
      const result = await client.query('SELECT * FROM your_table WHERE your_column = $1', [query.value]);
      res.status(200).json(result?.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  }