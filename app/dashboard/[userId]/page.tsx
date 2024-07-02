import UserCard from '@/components/user/user-card';
import ReservationsTable from '@/components/user/user-reservations-table';
import { fetchUser, fetchUserReservations } from '@/lib/data';

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await fetchUser(params.userId);
  const userReservations = await fetchUserReservations(params.userId);

  return (
    <div className="w-full p-12 flex gap-4">
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
