import React from 'react'

export default function LogoutButton({action}:{action: any}) {
  return (
    <form action={action}>
        <button className="block px-4 py-2 text-sm text-gray-700 hover:underline dark:text-gray-100' : 'block px-4 py-2 text-sm text-gray-700 hover:underline dark:text-gray-100">
          <div className="hidden md:block">Sign Out</div>
        </button>
    </form>
  )
}
