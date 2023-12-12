import React from 'react';

import UserForm from '@/app/_components/users/form';
import Breadcrumbs from '@/app/_components/ui/heading/breadcrumb';
import Heading from '@/app/_components/ui/heading/heading';
import { Suspense } from 'react';
import { PageSkeleton } from '@/app/_components/ui/skeletons';

export default async function page() {
  const breadcrumbs = [
      { label: 'dashboard', href: '/dashboard' },
      { label: 'users', href: '/dashboard/users' },
      { label: 'create', href: '/dashboard/users/create', active: true,},
    ];

  return (
    <main>
      <Heading title='Create User' breadcrumbs={breadcrumbs}/>
       
      <Suspense fallback={<PageSkeleton/>}>
        <UserForm/>
      </Suspense>
    </main>
  )
}

