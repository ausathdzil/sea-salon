import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    await sql`
      INSERT INTO reviews (name, rating, comment) VALUES
      ('John Doe', 5, 'I love the service! The staff are very friendly and professional.'),
      ('Jane Doe', 4, 'The staff are friendly, but the service could be better.'),
      ('Jack Doe', 5, 'The best service you could ask for.'),
      ('Ausath Ikram', 5, 'Will definitely come back for more treatments.')
    `;

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const reviews = await sql`SELECT * FROM reviews`;
  return NextResponse.json({ reviews }, { status: 200 });
}
