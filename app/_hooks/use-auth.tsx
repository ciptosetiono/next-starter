'use client'

import React, {createContext} from "react";
import { useCookies } from 'next-client-cookies';

const AuthContext = createContext({});

const { Provider } = AuthContext;


const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [authState, setAuthState] = React.useState();

    const cookies = useCookies();
  
    const setUserAuthInfo = ({ userData }: {userData:any}) => {
        cookies.set('user', userData );
        setAuthState(userData);
    };

    // checks if the user is authenticated or not
    const isUserAuthenticated = () => {
        if (!authState) {
            return false;
        }
    };

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo:any) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };