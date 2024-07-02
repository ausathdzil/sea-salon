import NextAuth, { User, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { fetchUser, fetchUsers } from '@/lib/data';

export const BASE_PATH = '/api/auth';

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },
      async authorize(credentials): Promise<User | null> {
        const users = await fetchUsers();

        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      const user = await fetchUser(token.id as string);
      if (user) {
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
      }
      return session;
    },
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
