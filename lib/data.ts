import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Reviews, Reservations, Users } from './definitions';

export async function fetchReviews() {
  noStore();
  try {
    const data = await sql`SELECT * FROM reviews LIMIT 5`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch reviews data.');
  }
}

export async function fetchReservations() {
  noStore();
  try {
    const data = await sql`SELECT * FROM reservations`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch reservations data.');
  }
}

export async function fetchUsers() {
  noStore();
  try {
    const data = await sql`SELECT * FROM users`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch users data.');
  }
}
