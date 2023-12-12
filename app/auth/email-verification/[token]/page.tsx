import React from 'react';
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation'
import Link from 'next/link';
import { emailVerification } from '@/app/_lib/actions/auth-action';
import { Button } from '@/app/_components/ui/button';
import SettingPasswordForm from '@/app/_components/auth/login/setting-password-form';

export default async function Page({params} : {params: {token: string}}) {

  const token = params.token;

  const res = await emailVerification(token);
  const user = res.data;
  if(!res.success) {
    notFound();
  }



  return (
    
      <div className='flex justify-center'>
        <SettingPasswordForm user={user}/>
      </div>
  )
}
