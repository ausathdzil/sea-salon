import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { ScissorsIcon, HandRaisedIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

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

export const services = [
  {
    icon: ScissorsIcon,
    title: 'Haircuts and Styling',
    description: 'Experience our expert stylists touch for a perfect haircut.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Manicures and Pedicures',
    description:
      'Indulge in our luxurious nail treatments for beautiful hands and feet.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Facial Treatments',
    description:
      'Rejuvenate your skin with our rejuvenating facial treatments.',
  },
];

export const sessions = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
  '19:00 - 20:00',
  '20:00 - 21:00',
];
