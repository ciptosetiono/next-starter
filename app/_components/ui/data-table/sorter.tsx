'use client';

import React from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function TableSorter({name, currentSort}: {name: string, currentSort?: string}) {
  const sortAsc = name; //ASCENDING
  const sortDesc = '-'+name;// DESCENEDING  ==> '-'
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createSortURL = () => {
    const params = new URLSearchParams(searchParams);

    //toggle sort ASC OR DESC
    const nextSort = (currentSort === sortAsc) ? sortDesc: sortAsc;
    params.set('sort', nextSort);
    return `${pathname}?${params.toString()}`;
  }


  return (
    <Link href={createSortURL()} className='flex flex-col'>
        <ChevronUpIcon className={clsx(currentSort==sortAsc? "stroke-2 text-gray-950 dark:text-gray-100":'text-gray-400 dark:text-gray-700', "justify-self-start w-3")}/>
        <ChevronDownIcon  className={clsx(currentSort==sortDesc? "stroke-2 text-gray-950 dark:text-gray-100":'text-gray-400 dark:text-gray-700', "justify-self-start w-3")}/>
    </Link>
  )
}

