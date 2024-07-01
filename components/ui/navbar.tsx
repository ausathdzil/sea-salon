import { auth } from '@/auth';
import { ScissorsIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import AuthButton from '../auth/AuthButton.server';

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="bg-zinc-950/70 text-zinc-50 flex items-center justify-between px-8 py-4 fixed w-[95%] mt-4 rounded-full top-0 z-10 backdrop-blur-sm border-zinc-300 border-2">
      <Link
        href="/"
        className="flex gap-4 items-center"
      >
        <ScissorsIcon className="w-6 h-6" />
        <h1 className="font-bold text-2xl">SEA Salon</h1>
      </Link>
      <AuthButton />
    </div>
  );
}
