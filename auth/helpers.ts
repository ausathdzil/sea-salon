'use server';

import { signIn as naSignIn, signOut as naSignOut } from '.';

export async function signIn() {
  await naSignIn('Credentials', { redirectTo: '/' });
}

export async function signOut() {
  await naSignOut();
}
