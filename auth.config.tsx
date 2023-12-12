import type { NextAuthConfig } from 'next-auth';
import type { Session } from 'next-auth/types';
import { publicRoutes } from './app/_lib/routes';
import axios from 'axios';


function retrieveTokenFromUser(token:any, user:any){
  const backendJWT = user.jwt;
  token = {
    ...token,
    user: user.user,
    jwt: backendJWT,

  };
  return  token;
}

export const ErrorRefreshToken = "RefreshTokenError";

async function refreshToken(token: any): Promise<any>{
 
  const refreshToken = token.jwt.refresh_token;
  const refreshTokenExp = token.jwt.refresh_token_exp;

  let isRefreshSuccess = false;
  let error = ErrorRefreshToken ;

  if(token && (Date.now() < (refreshTokenExp*1000))){
    await axios({
        method: 'post',
        headers: { withCredentials: true },
        url:process.env.BACKEND_URL+'/auth/refresh-token',
        data: { 'refresh_token': refreshToken},
      })
      .then((res:any) => {
        if(res.data.success){
          isRefreshSuccess = true;
          error="";
          const data = res.data.data;
          token = retrieveTokenFromUser(token, data);
        }
      })
      .catch((err:Error) => {
          
      });
    }
    return {
      ...token,
      error: error
    }
  }

export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  session: {
   //maxAge: 60 * 30, //1 jam timeout
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const pathname = nextUrl.pathname;
      const isPublicRoute = publicRoutes.includes(pathname);
      const isLoggedIn = !!auth?.user;
      const isRefreshTokenError = auth?.error === ErrorRefreshToken;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
     
      console.log(isRefreshTokenError);
      //rule for public route
      if(isPublicRoute){
        if(isLoggedIn){
          if(isRefreshTokenError){
            return true;
          }
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      }

      if (isOnDashboard) {
        if (isLoggedIn) {
          if(isRefreshTokenError){
            return Response.redirect(new URL('/auth/timeout', nextUrl));
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } 

      return true;
    },

    jwt: async ({ token, user}: {token: any, user: any}) => {
      //inject data token dari data user
      if(user){
        token = retrieveTokenFromUser(token, user);
      }
      token = {
        ...token,
        error: undefined // s
      }

      //if jwt is not expired, returnd it
      if (Date.now() < (token.jwt.exp*1000)) {
        return token;
      }

      return await refreshToken(token);

    },
    
    session: async ({ session, token}: { session: Session, token: any}) => {
      //inject data token ke session.user
      session = token;
      return session;
    },
    /*
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl  
    }
    */
    
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;