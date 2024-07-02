import { BASE_PATH, auth } from '@/auth';
import UserCard from '@/components/user/user-card';
import ReservationsTable from '@/components/user/user-reservations-table';
import { fetchUser, fetchUserReservations } from '@/lib/data';
import { SessionProvider } from 'next-auth/react';

export default async function Page() {
  const session = await auth();

  if (session && session.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
    };
  }

  const user = await fetchUser(session?.user?.id as string);
  const userReservations = await fetchUserReservations(
    session?.user?.id as string
  );

  return (
    <div className="w-full p-12 flex flex-col sm:flex-row gap-4">
      <UserCard user={user} />
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-3xl text-center sm:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Reservations
          </span>{' '}
          Table
        </h1>
        <div className="rounded-md border border-pink-500 shadow-lg min-h-[80vh] mt-2">
          <ReservationsTable userReservations={userReservations} />
        </div>
      </div>
    </div>
  );
}
