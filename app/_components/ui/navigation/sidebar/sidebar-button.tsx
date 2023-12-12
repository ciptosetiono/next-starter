import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function SidebarButton({show, onClick } : {show: boolean, onClick?:any}): React.ReactNode {
  return (
    <button
      className="text-gray-600 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:text-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={onClick}
    >
      {show?(
        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
      )}
    </button>
  )
}
