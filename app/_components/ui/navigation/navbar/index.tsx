
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbrand from './navbrand'
import SidebarButton from '../sidebar/sidebar-button'
import DarkModeSwitcher from './dark-mode-switcher'
import Searchbar from './searchbar'
import DropdownNotification from './dropdown-notification'
import DropdownUser from './dropdown-user'
import Sidebar from '@/app/_components/ui/navigation/sidebar'
import { logout } from '@/app/_lib/actions/auth-action'


export default function Navbar({user, onLogout} : {user:any, onLogout: any}) {
  return (
   
      <nav className="shadow bg-white px-4 py-2.5 fixed left-0 right-0 top-0 z-50 dark:bg-zinc-950">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Sidebar/>
              <Navbrand/>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Searchbar/>
              <DarkModeSwitcher/> 
              <DropdownNotification/>
              <DropdownUser
                user={user}
                logoutAction={onLogout}
              />
            </div>
          </div>
        </div>
    </nav>
  )
}
