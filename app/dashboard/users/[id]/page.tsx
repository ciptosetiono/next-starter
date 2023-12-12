import Link from 'next/link';
import Breadcrumbs from '@/app/_components/ui/heading/breadcrumb';
import PageTitle from '@/app/_components/ui/heading/page-title';
import { UserButtons } from '@/app/_components/users/button';
import UserDetail from '@/app/_components/users/detail';
import type { User } from '@/app/_lib/types/user';
import { fetchUserById } from '@/app/_lib/data/user';

export default async function Page({params} : {params: {id: string}}) {
    const userId = params?.id;
    
    const breadcrumbs = [
        { label: 'dashboard', href: '/dashboard' },
        { label: 'users', href: '/dashboard/users' },
        { label: userId, href: '/dashboard/users/'+userId, active: true},
    ];

    const res = await fetchUserById(userId);
    const user = res.user;
    if(!user){
        return <p>Gagal mengambil data dari server</p>
    }

    return (
    <main>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="flex items-center justify-between gap-2 md:mt-8">
            <PageTitle title='Users' desc="Data User"/>
            <UserButtons userId={userId}/>
        </div>
        <UserDetail user={user}/>
    </main>
  );
}