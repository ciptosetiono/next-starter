'use client'
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import LogoutButton from './logout-button'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function UserButton({user, logoutAction}:{user: any, logoutAction: any}) {
  return (
    <Menu as="div" className="flex items-center ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full  text-sm">
          {/*
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        */}
          <div>{user?.name}xx</div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-10 z-10 mt-2 w-48 origin-top-right rounded-md border border-stroke bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900">
            <UserMenuItem label="Your Profile" href="/user/profile"/>
            <UserMenuItem label="Settings" href="/user/setting"/>
            <Menu.Item>
              <LogoutButton action={logoutAction}/>
            </Menu.Item>
        
        </Menu.Items>
        
      </Transition>
      </div>
    </Menu>
  )
}

function UserMenuItem({href, label,active} : {href: string, label:string, active?: boolean}){
  return (
    <Menu.Item>
      <Link
        href={href}
        className={active ? 'block px-4 py-2 text-sm text-gray-700 hover:underline dark:text-gray-100' : 'block px-4 py-2 text-sm text-gray-700 hover:underline dark:text-gray-100'}
      >
        {label}
      </Link>
    </Menu.Item>
  );
}