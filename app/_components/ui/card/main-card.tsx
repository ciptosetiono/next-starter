import React from 'react'

export default function MainCard({children}: {children: React.ReactNode}) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto  p-6 mt-20 bg-gray-50 dark:bg-gray-900">
        {children}
    </div>
  )
}
