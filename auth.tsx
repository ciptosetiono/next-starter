import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { backendService } from '@/app/_lib/services/backend-services';    

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Adresse email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials.email as string;
        const password = credentials.password as string;
        try {
          const res = await backendService({method:'post',endPoint: '/auth/login',data: { email: email, password:password }});
          if(res.success){
            return res.data;
          }
        } catch (error) {
          throw new Error( JSON.stringify({ message: 'Invalid credential', status: false }));
        }
        return null;
      },
    }),
  ],
});