import { Suspense } from 'react';
import UsersTable from '@/app/_components/users/table';
import { CreateButton } from '@/app/_components/ui/data-table/buttons';
import TableSkeleton from '@/app/_components/ui/data-table/skeleton';
import PageTitle from '@/app/_components/ui/heading/page-title';
import Breadcrumbs from '@/app/_components/ui/heading/breadcrumb';
export default async function Page({
  searchParams
}: {searchParams?: any}) {
  
  const breadcrumbs = [
    { label: 'dashboard', href: '/dashboard' },
    { label: 'users', href: '/dashboard/users', active: true }
  ];


  const {page, sort, ...filters} =  searchParams;
  const currentPage = Number(page) || 1;
  const currentSort = sort || '';
  const pageSize = 2;

  return (
    <div className="w-full">
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <div className="flex items-center justify-between gap-2 md:mt-8">
        <PageTitle title='Users' desc="Data User"/>
        <CreateButton href='/dashboard/users/create' label='Create User'/>
      </div>

      <Suspense key={filters + currentPage} fallback={<TableSkeleton/>}>
        <UsersTable
          filters={filters}
          currentPage={currentPage}
          pageSize={pageSize}
          currentSort={currentSort}/>
      </Suspense>

    </div>
  );
}