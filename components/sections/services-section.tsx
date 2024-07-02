import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { fetchServices } from '@/lib/data';

export default async function ServicesSection() {
  const services = await fetchServices();

  return (
    <section className="flex flex-col gap-8 items-center lg:items-start justify-center p-12 w-full">
      <h1 className="text-6xl font-bold">
        Available{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Services
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className="shadow-lg border-pink-500 border-2"
          >
            <CardHeader className="gap-4">
              <CardTitle className="text-pink-500">{service.name}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Link
          href="/public-reservations/create"
          className="flex justify-end items-center gap-2 text-xl hover:text-pink-500"
        >
          <p className="w-full text-right">Create a Reservation</p>
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
