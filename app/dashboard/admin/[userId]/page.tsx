import { fetchServices, fetchUser } from '@/lib/data';
import UserCard from '@/components/user/user-card';
import ServicesTable from '@/components/admin/services-table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SquaresPlusIcon } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await fetchUser(params.userId);
  const services = await fetchServices();

  return (
    <div className="w-full p-12 flex gap-4">
      <UserCard user={user} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl text-center sm:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Services
            </span>{' '}
            Table
          </h1>
          <Link href={`/dashboard/admin/${user.id}/services/create`}>
            <Button
              variant="outline"
              className="bg-transparent"
            >
              <SquaresPlusIcon className="w-8 h-8" />
            </Button>
          </Link>
        </div>
        <div className="rounded-md border border-pink-500 shadow-lg min-h-[80vh] mt-2">
          <ServicesTable services={services} />
        </div>
      </div>
    </div>
  );
}