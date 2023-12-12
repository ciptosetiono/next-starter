import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbrand() {
  return (
    <div className="flex flex-shrink-0 items-center ml-2">
      <Link href="/"className="flex ml-2 md:mr-24">
        <Image
          className="h-8 w-auto ml-2"
          src="/images/logo.png"
          width={100}
          height={50}
          alt="My Company Logo"
        />
        {/*
        <span className="flex self-center ml-2 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          My App
        </span>
      */}
      </Link>
    </div>
  )
}
