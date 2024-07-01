'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ReviewSchema = z.object({
  id: z.string(),
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

const ReservationSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone_number: z.string(),
  service: z.string(),
  date: z.string(),
  time: z.string(),
});

const CreateReservation = ReservationSchema.omit({ id: true });

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

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone_number: z.string(),
  password: z.string(),
  role: z.string(),
});

const CreateUser = UserSchema.omit({ id: true });

export async function createUser(formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone_number: formData.get('phone_number'),
    password: formData.get('password'),
    role: 'customer',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { name, email, phone_number, password, role } = validatedFields.data;

  try {
    await sql`
      INSERT INTO users (name, email, phone_number, password, role)
      VALUES (${name}, ${email}, ${phone_number}, ${password}, ${role})
    `;
  } catch (error) {
    return {
      message: 'Database error: Failed to create user.',
    };
  }

  revalidatePath('/');
  redirect('/');
}
