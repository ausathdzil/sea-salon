import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });

export default function HeroSection() {
  return (
    <section className="bg-zinc-100 text-zinc-950 w-full p-16 flex flex-col justify-center items-center">
      <h1 className={`${lusitana.className} text-6xl font-bold`}>SEA Salon</h1>
      <p className="text-xl">Beauty and Elegance Redefined</p>
    </section>
  );
}
