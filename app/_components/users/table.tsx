import React from 'react';
import { DataTable } from '@/app/_components/ui/data-table';
import type {RowType, ColumnType }from  '@/app/_components/ui/data-table/types';
import {fetchFilteredUsers} from '@/app/_lib/data/user';
import type { User } from '@/app/_lib/types/user';
import {UserTableButtons} from '@/app/_components/users/button';
import UserStatus from '@/app/_components/users/status';
export const columns:  ColumnType[] = [
  {
    name:'name',
    label:'Name'
  },
  {
    name:'email',
    label:'Email'
  },
  {
    name:'status',
    label:'Status',
    inputFilter: {
      type: 'select',
      options: [
        {label: 'Aktif', value: 10},
        {label: 'Nonaktif', value:9}
      ]
    }
  },
  {
    name:'actions',
    label:'Action',
    inputFilter: false
  }

];

export default async function UsersTable({filters, currentPage, pageSize, currentSort}: {filters: any, currentPage: number, pageSize: number, currentSort: string}) {

  const queryParams= {
    filters:filters,
    pagination:{
      page: currentPage,
      pageSize: pageSize
    },
    sort: currentSort
  }

  let isLoading= true;
  const res = await fetchFilteredUsers(queryParams);
  isLoading= false;

  const users = res?.users;

  if(users){
    let rows: RowType[] =[];
    await users.map((user: User) =>{
      let row: RowType = {
          rowKey: user.id,
          columns:[
            user.name,
            user.email,
            <UserStatus status={user.status} key={'status-'+user.id}/>,
            <UserTableButtons userId={user.id} key={'buttons-'+user.id}/>
          ] 
      };
      rows.push(row);
    });

    const totalCount =  res.pagination?.totalCount;
    const totalPages =  res.pagination?.pageCount;

    return (
        <DataTable
          columns={columns}
          data={rows}
          isLoading={false}
          totalCount={totalCount? totalCount:0}
          totalPages={totalPages? totalPages:0}
          currentPage={currentPage}
          pageSize={pageSize}
          currentSort={currentSort}
        />
      )
  }else{
    return <p>{res.errors}</p>
  }
  
}
