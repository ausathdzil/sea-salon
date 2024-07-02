import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UserCard({ user }: { user: any }) {
  const userRole = user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarFallback>{user.name ? user.name[0] : ''}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{user.name}</CardTitle>
          {userRole === 'Admin' && (
            <CardDescription>{userRole}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <form className="grid w-full items-center gap-4">
          <Label>Email</Label>
          <Input
            disabled
            value={user.email}
          />
          <Label>Phone Number</Label>
          <Input
            disabled
            value={user.phone_number}
          />
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Link
          className="w-full"
          href={`/reservations/${user.id}/create`}
        >
          <Button className="w-full">Create a reservation</Button>
        </Link>
        <Link
          className="w-full"
          href={`/`}
        >
          <Button
            variant="outline"
            className="w-full text-pink-500 border-pink-500 hover:text-pink-600"
          >
            Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
