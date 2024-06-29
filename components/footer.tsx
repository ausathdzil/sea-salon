import { PhoneIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const contacts = [
  {
    name: 'Thomas',
    number: '08123456789',
  },
  {
    name: 'Sekar',
    number: '08164829372',
  },
];

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-zinc-900 text-zinc-50 w-full flex flex-col gap-4 justify-between items-center scroll-mt-12"
    >
      <div className="flex flex-col gap-8 justify-center items-center p-8">
        <h1 className="text-center text-6xl font-bold">Get in touch with us</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <PhoneIcon className="w-8 h-8" />
                <div className="flex flex-col gap-2">
                  <CardTitle>{contact.name}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-zinc-950">
                    {contact.number}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <p className="text-center p-4">© 2024 SEA Salon</p>
    </footer>
  );
}
