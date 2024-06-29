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
