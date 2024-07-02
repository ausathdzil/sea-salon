import { NextResponse } from 'next/server';
import { fetchUserReservations } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    const reservations = await fetchUserReservations(userId);
    return NextResponse.json(reservations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user reservations data' },
      { status: 500 }
    );
  }
}
