'use client'

import { lusitana } from '@/app/_components/ui/fonts';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
  } from '@heroicons/react/24/outline';

import { Button } from '@/app/_components/ui/button';
import { settingPassword } from '@/app/_lib/actions/auth-action';
import { useFormState, useFormStatus } from 'react-dom';
import InputText from '@/app/_components/ui/form/input-text';
import ErrorSummary from '@/app/_components/ui/form/error-summary';
import type { User } from '@/app/_lib/types/user';
import SuccessEmailVerification from '@/app/_components/auth/email-verification/success-email-verification';
export default function SettingPasswordForm({ user }:{ user: any }) {

  const initialState = {};

  const [state, dispatch] = useFormState(settingPassword.bind(null, user.verification_token), initialState);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
        <div className="flex-1 rounded-lg bg-gray-50 pb-4 pt-8 pl-4 pr-4 dark:bg-gray-700">
            <p className={`${lusitana.className} mb-3 text-md`}>
                Silahkan setting password untuk melanjutkan verifikasi akun
            </p>
            <div className="w-full">
                {state?.errors &&  <ErrorSummary title='Terjadi kesalahan' errors={state?.errors}/>}
     
                <InputText
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    defaultValue={user?.email}
                    disabled={true}
                    Icon={AtSymbolIcon}
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
                <div className="mt-6 flex justify-end gap-4">
                    <Button type="submit" isLoading={pending} color='blue'>
                    Submit
                    </Button>
                </div>
            </div>
        </div>
    </form>
  );
}
