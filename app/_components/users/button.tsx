'use client'
import React from 'react'
import Link from 'next/link';
import { ActionButtons, ViewButton, UpdateButton, DeleteButton } from '@/app/_components/ui/data-table/buttons';
import { Button } from '@/app/_components/ui/button';
import UserDelete from './delete';
import { useFormState, useFormStatus } from 'react-dom';
export const UserButtons = ({ userId }: {userId: string}) => {
  return (
    <div className='flex'>
      <EditUserButton userId={userId}/>
      <UserDelete TriggerButton={DeleteUserButton} userId={userId }/>
    </div>
  )
}

export function UserTableButtons({userId}: {userId: string}) {
  return (<ActionButtons>
        <ViewButton href={`/dashboard/users/${userId}`}/>
        <UpdateButton href={`/dashboard/users/${userId}/edit`}/>
        <UserDelete TriggerButton={DeleteButton} userId={userId }/>
    </ActionButtons>
  )
}

export function EditUserButton({ userId }: {userId: string}) {
  return (
  <Link href={'/dashboard/users/'+userId+'/edit'}>
    <Button color='blue'>
      Update
    </Button>
  </Link>)
}

export function DeleteUserButton({ onClick }: {onClick: () => void} ) {
  return (
    <Button color='red' onClick={()=>onClick()}>
      Delete
    </Button>
  )
}

export function UserSubmitButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button disabled={pending} type='submit'>
      Simpan User
    </Button>
  );
}


