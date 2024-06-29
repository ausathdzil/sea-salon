import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Reviews } from './definitions';

export async function fetchReviews() {
  noStore();
  try {
    const data = await sql<Reviews>`SELECT * FROM reviews ORDER BY id DESC LIMIT 5`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch reviews data.');
  }
}
