import { fetchUser, fetchServices } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ReservationForm from '@/components/forms/reservation-form';
import { auth } from '@/auth';

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
  const services = await fetchServices();

  return (
    <div className="bg-zinc-50 text-zinc-950 p-12 px-8 sm:px-24 flex flex-col justify-center w-full items-center gap-4">
      <Card className="lg:w-full border-2 border-pink-500">
        <CardHeader className="flex flex-row gap-4 justify-start items-center">
          <Link href={`/dashboard/${user.id}`}>
            <ArrowLeftIcon className="w-6 h-6 hover:scale-110 hover:stroke-pink-500 transition ease-in-out" />
          </Link>
          <CardTitle className="sm:text-4xl">
            Hello {user.name.split(' ')[0]}! Let&apos;s Create a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Reservation
            </span>{' '}
            For You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReservationForm userId={user.id} services={services} />
        </CardContent>
      </Card>
    </div>
  );
}
