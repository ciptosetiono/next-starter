
import LoginForm from '@/app/_components/auth/login/login-form';
import Logo from '@/app/_components/ui/logo';
import Link from 'next/link';
export default async function  LoginPage() {
 
  return (
    <>
        <div className="flex w-full items-end rounded-lg bg-blue-500 p-3">
            <div className="text-white">
            <Logo />
            </div>
        </div>
        <LoginForm />

    </>
  );
}