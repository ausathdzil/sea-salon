import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SignInForm from '@/components/forms/signin-form';

export default function Page() {
  return (
    <div className="bg-zinc-50 text-zinc-950 p-12 px-8 sm:px-24 flex flex-col justify-center w-full items-center gap-4">
      <Card className="w-full sm:w-2/3 lg:w-1/2 border-2 border-pink-500">
        <CardHeader className="flex flex-row gap-4 justify-start items-center">
          <Link href="/">
            <ArrowLeftIcon className="w-6 h-6 hover:scale-110 hover:stroke-pink-500 transition ease-in-out" />
          </Link>
          <CardTitle className="sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Sign In
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
