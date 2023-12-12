'use client'
// @/components/Layout/Sidebar.js
import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import SidebarItem from './sidebar-item';
import SidebarItemCollapse from './sidebar-item-collapse';
import { usePathname } from 'next/navigation'
import { HomeIcon, UsersIcon} from '@heroicons/react/24/solid'
import SidebarButton from './/sidebar-button'

const sidebarLinks = [
  {
    'label': 'Dashboard',
    'url': '/',
    'icon':<HomeIcon/>
  },
  {
    'label': 'User',
    'url': '/dashboard/users',
    'icon':<UsersIcon/>
  },
  {
    'label': 'Order',
    'url': '/order',
    'icon':<HomeIcon/>,
    'subs':[
      {
        'label': 'In Proses',
        'url': '/order/proses'
      },
      {
        'label': 'Done',
        'url': '/order/done',
      },
    ]
  },
  {
    'label': 'Invoice',
    'url': '/invoice',
    'icon':<HomeIcon/>,
    'subs':[
      {
        'label': 'Unpaid',
        'url': '/invoice/unpaid'
      },
      {
        'label': 'Paid',
        'url': '/invoice/paid',
      },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Disclosure>
      {({ open }) => (
      <>
      <Disclosure.Button as="div">
        <SidebarButton
          show={open}
        />
      </Disclosure.Button>
      <Transition
        show={open}
        enter="ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Disclosure.Panel>

      <aside id="sidebar-multi-level-sidebar" className="fixed bg-white top-20 left-0 z-40 w-64 h-screen border-r-2 dark:bg-zinc-950 dark:border-r-0">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link) => {
              return link.subs?
                (
                  <SidebarItemCollapse
                    key={link.url}
                    url={link.url}
                    label={link.label}
                    icon={<HomeIcon/>} 
                    items={link.subs}
                  />
                ) : (
                  <SidebarItem
                    key={link.url}
                    url={link.url}
                    label={link.label}
                    icon={link.icon}
                  />);
            })}
          </ul>
        </div>
      </aside>
      </Disclosure.Panel>
                </Transition>
                </>
              )}
    </Disclosure>
  );
}