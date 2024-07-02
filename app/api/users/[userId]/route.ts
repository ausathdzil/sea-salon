import { NextResponse } from 'next/server';
import { fetchUser } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    const user = await fetchUser(userId);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}
