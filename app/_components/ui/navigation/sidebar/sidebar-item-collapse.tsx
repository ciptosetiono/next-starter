import { Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { SidebarItemProps } from './sidebar-item'

export interface SidebarItemCollapseProps extends SidebarItemProps {
    items: SidebarItemProps[]
}


export default function SidebarItemCollapse(props:  SidebarItemCollapseProps) {
    const {url, label, icon, items} = props;

    return (
    <Menu as="li">
         <Menu.Button as="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true">
               {icon}
            </span>

            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
               {label}
            </span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </Menu.Button>

        <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
        >
            <Menu.Items as="ul">
                <>
                {items?.map((item, index) => {
                    return  <Menu.Item as="li" key={index}>
                                <Link href= {item.url} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    {item.label}
                                </Link>
                            </Menu.Item>
                })}
                </>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}