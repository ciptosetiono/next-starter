'use client'

import { lusitana } from '@/app/_components/ui/fonts';
import Link from 'next/link';
import { Button } from '../../ui/button';

export default function SuccessEmailVerification() {

  return (
    <div className='flex justify-center'>
        <div>Verifikasi Akun berhasil, silahkan Login</div>
        <Link href='/auth/login'>
            <Button color='blue'>
                Login
            </Button>
        </Link>
    </div>
  );
}
