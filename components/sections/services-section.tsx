import { services as services } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-8 items-center lg:items-start justify-center p-12 w-full">
      <h1 className="text-6xl font-bold">
        Available{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Services
        </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="shadow-lg border-pink-500 border-2"
          >
            <CardHeader className="gap-4">
              <service.icon className="w-12 h-12" />
              <CardTitle className="text-pink-500">{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Link
        href="/public-reservations/create"
        className="flex justify-end items-center gap-2 text-xl hover:text-pink-500 w-full"
      >
        <p>Create a Reservation</p>
        <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </section>
  );
}
