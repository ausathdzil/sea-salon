'use client'

import { fetchUser, fetchUserReservations } from '@/lib/data';
import UserCard from '@/components/user/user-card';
import ReservationsTable from '@/components/user/user-reservations-table';
import { useEffect, useState } from 'react';
import { QueryResultRow } from '@vercel/postgres';

export default function Page({ params }: { params: { userId: string } }) {
  const id = params.userId;
  const [user, setUser] = useState<QueryResultRow | null>(null);
  const [userReservations, setUserReservations] = useState<QueryResultRow[]>([]);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUser(id);
      const userReservationsData = await fetchUserReservations(id);
      setUser(userData);
      setUserReservations(userReservationsData);
    }

    fetchData();
  })

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-12 w-full">
      <UserCard user={user} />
      <div className="w-full">
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
