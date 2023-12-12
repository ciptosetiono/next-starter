import React from 'react';

import UserForm from '@/app/_components/users/form';
import Breadcrumbs from '@/app/_components/ui/heading/breadcrumb';
import Heading from '@/app/_components/ui/heading/heading';
import type { User } from '@/app/_lib/types/user';
import { fetchUserById } from '@/app/_lib/data/user';

export default async function page({params} : {params: {id: string}}) {
    const id = params?.id;
    const breadcrumbs = [
        { label: 'dashboard', href: '/dashboard' },
        { label: 'users', href: '/dashboard/users' },
        { label: id,  href: '/dashboard/users/'+id},
        { label: 'edit',  href: '/dashboard/users/'+id+'/edit', active: true},
        ];
    const res = await fetchUserById(id);
    const user = await res.user;
    if(!user){
        return 'Gagal mengambil data dari server';
    }
    return (
        <main>
            <Heading title='Edit User' breadcrumbs={breadcrumbs}/>
            <UserForm user={user} action='edit'/>
        </main>
    )
}

