import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';

export default function Page() {

    return (
        <div className='text-center'>
        <h1 className='text-2xl'>Session Timeout</h1>
        <p className="m-4">
        Session Anda telah habis, silahlan Login kembali
        </p>
        <div className='flex justify-center'>
            <Link href='/auth/login' className='m-t-4'>
            <Button>Login</Button>
            </Link>
        </div>
        </div>
  )
}
