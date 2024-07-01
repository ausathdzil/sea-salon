import { services as services } from '@/lib/data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-8 items-center lg:items-end justify-center p-12 w-full">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
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
      </div>
      <Link
        href="/reservations/create"
        className="flex gap-4 items-center"
      >
        <Button>
          <p className="text-lg">Create a reservation</p>
          <ArrowRightIcon className="ml-2 w-6 h-6" />
        </Button>
      </Link>
    </section>
  );
}
