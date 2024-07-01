'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { signOut } from '@/auth/helpers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function AuthButton() {
  const session = useSession();
  const user = session?.data?.user;

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-4">
          <p className="hidden md:block">{user.name}</p>
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
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button
                className="w-full"
                variant="destructive"
              >
                Sign Out
              </Button>
            </DialogTrigger>
            <DialogContent className=" max-w-72">
              <DialogHeader>
                <DialogTitle>Sign Out</DialogTitle>
                <DialogDescription>
                  Are you sure you want to sign out?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex">
                <DialogClose asChild>
                  <Button className="w-full">Cancel</Button>
                </DialogClose>
                <Button
                  onClick={async () => {
                    await signOut();
                    window.location.reload();
                  }}
                  className="w-full"
                  variant="destructive"
                >
                  Sign Out
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
          <Link
            href="/signin"
            className="w-full"
          >
            <Button className="w-full">Sign In</Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
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
