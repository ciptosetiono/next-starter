'use client';
 
import { lusitana } from '@/app/_components/ui/fonts';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { Button } from '@/app/_components/ui/button';
import InputText from '@/app/_components/ui/form/input-text';
import { login } from '@/app/_lib/actions/auth-action';


export default function LoginForm() {

  const [state, dispatch] = useFormState(login, undefined);
 
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 pb-4 pl-4 pr-4 dark:bg-gray-700">
        <h1 className={`mb-3 text-xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
     
          <InputText
            id="email"
            type="email"
            name="email"
            label="Email"
            Icon={AtSymbolIcon}
            required={true}
            errors={state?.errors?.email}
          />
          <InputText
            id="password"
            type="password"
            name="password"
            label="Password"
            Icon={KeyIcon}
            required={true}
            errors={state?.errors?.password}
          />
  
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state?.message &&
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{state.message}</p>
            </>
          }
        </div>
        <LoginButton />      
      </div>
      <div className='mt-5 pl-4'>
          <Link href='/auth/request-reset-password'>
            Lupa password ?
          </Link>
        </div>
    </form>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="mt-4 w-full" disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}