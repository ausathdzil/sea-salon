import { fetchUser } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ServiceForm from '@/components/forms/services-form';

export default async function Page({ params }: { params: { userId: string } }) {
  const id = params.userId;

  return (
    <div className="bg-zinc-50 text-zinc-950 w-full min-h-[80vh] p-12 px-8 sm:px-24 flex flex-col justify-center items-center gap-4">
      <Card className="lg:w-full border-2 border-pink-500">
        <CardHeader className="flex flex-row gap-4 justify-start items-center">
          <Link href={`/dashboard/admin/${params.userId}`}>
            <ArrowLeftIcon className="w-6 h-6 hover:scale-110 hover:stroke-pink-500 transition ease-in-out" />
          </Link>
          <CardTitle className="sm:text-4xl">
            Create a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Service
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ServiceForm userId={params.userId} />
        </CardContent>
      </Card>
    </div>
  );
}