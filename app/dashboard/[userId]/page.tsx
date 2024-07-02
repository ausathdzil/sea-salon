'use client';

import { useState, useEffect } from 'react';
import UserCard from '@/components/user/user-card';
import ReservationsTable from '@/components/user/user-reservations-table';

export default function Page({ params }: { params: { userId: string } }) {
  const [user, setUser] = useState(null);
  const [userReservations, setUserReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await fetch(`/api/users/${params.userId}`);
        const userData = await userResponse.json();
        setUser(userData);

        const reservationsResponse = await fetch(
          `/api/users/${params.userId}/reservations`
        );
        const reservationsData = await reservationsResponse.json();
        setUserReservations(reservationsData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
