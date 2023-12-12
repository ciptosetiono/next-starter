'use client'

import React, {Fragment} from 'react'
import { Menu, Transition,  Popover  } from '@headlessui/react'
import {BellIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const NotificationButton = () => {
  return (
    <div>
        {/* red badge */}
      <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs">
      </div>

      {/* bell icon */}
      <div className="text-gray-600 rounded-lg focus:border-none active:border-none dark:text-white">
        <BellIcon className="block text-gray-600 h-6 w-6 dark:text-white"/>
      </div>
    </div>
  )
}


const NotificationItem = ({url, children, date} : {url: string, children: React.ReactNode, date: string}) => {
  return (
    <li>
      <Link
        className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2"
        href={url}
      >
        <p className="text-sm">
          {children}
        </p>
        <p className="text-xs">{date}</p>
      </Link>
    </li>
  );
}

export default function DropdownNotification() {
  return (
    <Popover as="div" className="relative flex items-center ml-3 mr-3">
      <div>
        <Popover.Button as="div" className="relative cursor-pointer">
          <NotificationButton/> 
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel>
            <div className="absolute -right-27 px-3 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default sm:right-0 sm:w-80 dark:bg-gray-900 dark:border border-strokedark">
              <div className="px-4.5 py-3">
                <h5 className="text-sm font-medium">Notification</h5>
              </div>

              <ul className="flex h-auto flex-col overflow-y-auto">
                <NotificationItem url="/notification/1" date="12 May, 2025">
                <>
                  <span className="text-black dark:text-white">
                    Edit your information in a swipe
                  </span>{' '}
                  Sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim.
                  </>
                </NotificationItem>

                <NotificationItem url="/notification/2" date="12 May, 2025">
                <>
                  <span className="text-black dark:text-white">
                    Create your information in a swipe
                  </span>{' '}
                  Sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim.
                  </>
                </NotificationItem>
              </ul>

            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  )

}
