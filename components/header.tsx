import { ScissorsIcon } from '@heroicons/react/24/outline';
import { Lusitana } from 'next/font/google';
import Link from 'next/link';

const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });

export default function Header() {
  return (
    <header className="bg-zinc-950/95 text-zinc-50 flex items-center justify-between px-6 py-4 sticky top-0 z-10 backdrop-blur-sm">
      <Link
        href="/"
        className="flex gap-4 items-center"
      >
        <ScissorsIcon className="w-6 h-6" />
        <h1 className={`${lusitana.className} font-bold text-2xl`}>
          SEA Salon
        </h1>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#reviews">Reviews</Link>
          </li>
          <li>
            <Link href="#contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
