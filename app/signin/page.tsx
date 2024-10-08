'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { signIn } from '@/auth/helpers';
import { KeyIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="bg-zinc-50 text-zinc-950 p-12 px-8 sm:px-24 flex flex-col justify-center items-center gap-4 w-full h-screen max-h-[90vh]">
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
        <CardContent className="flex flex-col gap-4">
          <Button
            className="w-full text-base"
            onClick={async () => {
              await signIn();
            }}
          >
            <KeyIcon className="w-6 h-6 mr-2" />
            Sign in with Credentials
          </Button>
          <Link
            href="/register"
            className="text-pink-500 hover:underline"
          >
            <p className="text-center">Don&apos;t have an account?</p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
