import React from 'react'
import Link from 'next/link'


export interface SidebarItemProps  {
    url: string,
    label: string,
    icon?: React.ReactNode
}


export default function SidebarItem(props : SidebarItemProps) {
    const {url, label, icon} = props;

    return (
        <li>
            <Link href={url} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true">
                    {icon}
                </span>
                <span className="ms-3">
                    {label}
                </span>
            </Link>
        </li>
    )
}
