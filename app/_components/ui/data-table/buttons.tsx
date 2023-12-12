import React, {useState} from 'react';
import {  PlusIcon, EyeIcon, PencilIcon, TrashIcon, ArrowLongUpIcon, ArrowLongDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

export function SortButton({sort}: {sort?:string}) {

  return (
    <button className='flex'>
        <ArrowLongUpIcon className={clsx(sort=="asc" && "text-geen-950", "justify-self-start w-3")}/>
        <ArrowLongDownIcon  className={clsx(sort=="desc" && "text-geen-950", "justify-self-start w-3")}/>
    </button>
  )
}

export function CreateButton({ href, label}: { href: string, label?: string}) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{label}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ViewButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="rounded-md border p-1 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}

export function UpdateButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="rounded-md border p-1 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}


export function DeleteButton({ onClick }: { onClick:()=>void}) {
   return (
      <button onClick={onClick} className="rounded-md border p-1 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
  );
}


export function ActionButtons({children}: {children: React.ReactNode}){
  return (<div className="flex justify-start gap-1">
      {children}
  </div>);
}