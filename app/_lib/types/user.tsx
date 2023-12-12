export type User = {
    id: string,
    name: string,
    email: string,
    status:string,
    password?: string,
    roles?: string
};

export type UserCredential = {
    id: string,
    name: string,
    email: string,
    roles?: string,
    token?:string,
    refreshToken: string
};
  
  