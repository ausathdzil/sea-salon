import { fetchUser, fetchUsers } from '@/lib/data';
import UserCard from '@/components/user/user-card';
import MembersTable from '@/components/admin/members-table';
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
  const members = await fetchUsers();

  return (
    <div className="w-full p-12 flex flex-col sm:flex-row gap-4">
      <UserCard user={user} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl text-center sm:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Members
            </span>{' '}
            Table
          </h1>
        </div>
        <div className="rounded-md border border-pink-500 shadow-lg min-h-[80vh] mt-2">
          <MembersTable members={members} />
        </div>
      </div>
    </div>
  );
}
