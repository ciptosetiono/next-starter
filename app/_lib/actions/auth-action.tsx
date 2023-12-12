'use server';

import { cookies } from 'next/headers';
import {z} from 'zod';
import { redirect } from 'next/navigation';

import { signIn, signOut } from "@/auth";
import { backendService } from '@/app/_lib/services/backend-services';

const LoginSchema = z.object({
  email: z.string()
        .email(),
  password: z.string()
});

/*** 
 * Login Handler
 * get request
 * validated request
 * login with next-auth
 * next-auth get user from backend
 * redirect to dashboard if success
 */
export type LoginState = {
  errors?: {
    email?: string[],
    password?: string[],
    invalidCredential?:string
  },
  message?: string | null
};


export async function login(prevState: LoginState | undefined, formData: FormData) {

  const LoginRequest = LoginSchema.omit({});  
  const validatedFields = LoginRequest.safeParse({
      email: formData.get('email'),
      password: formData.get('password')
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Login.',
    };
  }
 
  const { email, password} = validatedFields.data;
  let success = false;
  try {
    await  signIn('credentials',{ email: email, password: password,  redirect: false});
    success = true;
    window.location.replace('/dashboard');
  } catch (error:any) {
    if(error.type as string === 'CredentialsSignin'){
      return {
        errors:{
          invalidCredential: 'Email atau password salah'
        },
        message: 'Invalid Credential. Failed to Login' 
      };
    }
  }
  if(success==true){
    redirect('/dashboard');
  }
  
}

export async function logout(){
  await cookies().delete('authData');
  await signOut({ redirectTo: '/auth/login' });
}



export async function emailVerification(token: string) : Promise <any> {
  const res = await backendService({method:'post',endPoint: '/auth/email-verification', data: { token: token}});
  return res;
}



const SettingPasswordSchema = z.object({
  password: z.string()
});

export type SettingPasswordState = {
  success?: boolean,
  errors?: {
    password?: string[],
    invalidCredential?:string
  },
  message?: string | null
};

export async function settingPassword(token: string, prevState: SettingPasswordState, formData: FormData) {
  let result:  SettingPasswordState = {
    success: false
  }

  const SettingPassswordRequest = SettingPasswordSchema.omit({});  
  const validatedFields = SettingPassswordRequest.safeParse({
      password: formData.get('password')
  });

  if (!validatedFields.success) {
    result.errors = validatedFields.error.flatten().fieldErrors;
  }else{
    const requestData = {...validatedFields.data, token: token};
    const response = await backendService({method:'post', endPoint: '/auth/setting-password', data: requestData});
    if(response.success){
      result.success = true;
      redirect('/auth/email-verification/success');
    }
    result.errors= response.errors;
  }

  return result;
  
}




 