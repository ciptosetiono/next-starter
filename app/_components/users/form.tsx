'use client'
import Link from 'next/link';
import {
  KeyIcon,
} from '@heroicons/react/24/outline';

import { Button } from '@/app/_components/ui/button';
import { createUser, updateUser } from '@/app/_lib/actions/user-action';
import { useFormState, useFormStatus } from 'react-dom';
import InputText from '@/app/_components/ui/form/input-text';
import InputSelect from '@/app/_components/ui/form/input-select';
import ErrorSummary from '@/app/_components/ui/form/error-summary';
import { undefined } from 'zod';
import type { User } from '@/app/_lib/types/user';
import { UserSubmitButton } from './button';

export default function UserForm({ action, user}:{ action?: string, user?: User}) {

  const initialState = {};
  let handleSubmit;
  if(action == 'edit' && user){
    handleSubmit = updateUser.bind(null, user.id);
  }else{
    handleSubmit  = createUser;
  }

  const [state, dispatch] = useFormState(handleSubmit, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
      {state?.errors &&  <ErrorSummary title='Terjadi kesalahan' errors={state?.errors}/>}
     
      <InputText
        id="name"
        type="text"
        name="name"
        label="Name"
        defaultValue={user?.name}
        required={true}
        errors={state?.errors?.name}
      />

      <InputText
        id="email"
        type="email"
        name="email"
        label="Email"
        defaultValue={user?.email}
        required={true}
        errors={state?.errors?.email}
      />

      <InputSelect
        id="status"
        name="status"
        label="Status"
        defaultValue={user?.status}
        options={[{label: 'Aktif', value: '10'}, {label: 'Nonaktif', value: '9'}]}
        required={true}
        errors={state?.errors?.status}
      />

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
        >
          <Button type="button" color='default'>
            Cancel
          </Button>
        </Link>
        <UserSubmitButton/>
      </div>
    </form>
  );
}
