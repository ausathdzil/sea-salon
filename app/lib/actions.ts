'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ReviewSchema = z.object({
  id: z.number(),
  name: z.string(),
  rating: z.number(),
  comment: z.string(),
});

const CreateReview = ReviewSchema.omit({ id: true });

export async function createReview(formData: FormData) {
  const validatedFields = CreateReview.safeParse({
    name: formData.get('name'),
    rating: Number(formData.get('rating')),
    comment: formData.get('comment'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { name, rating, comment } = validatedFields.data;

  try {
    await sql`
      INSERT INTO reviews (name, rating, comment)
      VALUES (${name}, ${rating}, ${comment})
    `;
  } catch (error) {
    return {
      message: 'Database error: Failed to create review.',
    };
  }

  revalidatePath('/');
  redirect('/');
}

const ReservationsSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone_number: z.string(),
  service: z.string(),
  date: z.string(),
  time: z.string(),
});

const CreateReservation = ReservationsSchema.omit({ id: true });

export async function createReservation(formData: FormData) {
  const validatedFields = CreateReservation.safeParse({
    name: formData.get('name'),
    phone_number: formData.get('phone_number'),
    service: formData.get('service'),
    date: formData.get('date'),
    time: formData.get('time'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Reservation.',
    };
  }

  const { name, phone_number, service, date, time } = validatedFields.data;

  try {
    await sql`
      INSERT INTO reservations (name, phone_number, service, date, time)
      VALUES (${name}, ${phone_number}, ${service}, ${date}, ${time})
    `;
  } catch (error) {
    return {
      message: 'Database error: Failed to create reservation.',
    };
  }

  revalidatePath('/');
  redirect('/');
}
