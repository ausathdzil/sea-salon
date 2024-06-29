import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScissorsIcon } from '@heroicons/react/24/outline';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: ScissorsIcon,
    title: 'Haircuts and Styling',
    description: 'Experience our expert stylists touch for a perfect haircut.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Manicures and Pedicures',
    description:
      'Indulge in our luxurious nail treatments for beautiful hands and feet.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Facial Treatments',
    description:
      'Rejuvenate your skin with our rejuvenating facial treatments.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="flex flex-col lg:flex-row gap-4 items-center justify-center p-12 w-full scroll-mt-12"
    >
      <h1 className="text-6xl font-bold">Available Services</h1>
      <div className='flex flex-col md:flex-row gap-4'>
        {services.map((service, index) => (
          <Card
            key={index}
            className="shadow-lg border-zinc-950 border-2"
          >
            <CardHeader className="gap-4">
              <service.icon className="w-12 h-12" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
