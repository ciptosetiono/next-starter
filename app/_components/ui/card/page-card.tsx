import React from 'react'

export default function PageCard({children} : {children:React.ReactNode}) {
  return (
    <div className="mt-4 border border-slate-200">
        {children}
    </div>
  )
}
