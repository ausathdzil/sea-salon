'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { signIn, signOut } from '@/auth/helpers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function AuthButton() {
  const session = useSession();
  const user = session?.data?.user;
  console.log(user);

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4">
          <p>{user.name}</p>
          <Button
            size="icon"
            className="rounded-full"
          >
            <Avatar>
              <AvatarFallback>{user.name ? user.name[0] : ''}</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full">
            <Link href={`/user/${user.id}/dashboard`}>Dashboard</Link>
          </Button>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            className="w-full"
            variant="destructive"
            onClick={async () => {
              await signOut();
              window.location.reload();
            }}
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="rounded-full"
        >
          <UserCircle />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button
            className="w-full"
            onClick={async () => {
              await signIn();
            }}
          >
            Sign In
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/register"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full text-pink-500 border-pink-500 hover:text-pink-600"
            >
              Register
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
