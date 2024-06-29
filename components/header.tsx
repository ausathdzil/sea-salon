import { ScissorsIcon } from '@heroicons/react/24/outline';
import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });

export default function Header() {
  return (
    <header className="bg-zinc-950 text-zinc-50 flex items-center justify-between p-6">
      <div className="flex gap-4 items-center">
        <ScissorsIcon className="w-6 h-6" />
        <h1 className={`${lusitana.className} font-bold text-2xl`}>
          SEA Salon
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
