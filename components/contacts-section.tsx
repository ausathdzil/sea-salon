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

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="bg-zinc-500 text-zinc-50 w-full p-16 flex flex-col gap-8 justify-center items-center"
    >
      <h1 className="text-6xl font-bold">Get in touch with us</h1>
      <div className="flex gap-4">
        {contacts.map((contact, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <PhoneIcon className="w-6 h-6" />
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
    </section>
  );
}
