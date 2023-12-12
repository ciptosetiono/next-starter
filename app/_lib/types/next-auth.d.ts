import NextAuth, { DefaultSession} from "next-auth"
import { JWT } from "next-auth/jwt"
import { UserCredential } from "./user"


interface User {
    id: string,
    name: string,
    email: string,
    roles?: string,
    jwt?:jwt,
}

interface jwt{
  token: string,
  iat: number,
  exp: number,
  uid: string
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: User,
    token: string,
    iat: number,
    exp: number,
    uid: string
  }
}

declare module "next-auth" {


  interface Session extends DefaultSession {
    user?: User;
    jwt?:jwt;
    error?:any;
  }
}
