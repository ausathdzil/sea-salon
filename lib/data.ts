import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchReviews() {
  noStore();
  try {
    const data = await sql`SELECT * FROM reviews LIMIT 10`;

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

export async function fetchUser(id: string) {
  noStore();
  try {
    const data = await sql`SELECT * FROM users WHERE id = ${id}`;

    return data.rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function fetchUserReservations(id: string) {
  noStore();
  try {
    const data =
      await sql`SELECT * FROM reservations WHERE user_id = ${id} ORDER BY date DESC`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch user reservations data.');
  }
}

export async function fetchServices() {
  noStore();
  try {
    const data = await sql`SELECT * FROM services`;

    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch services data.');
  }
}

export const sessions = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
];
