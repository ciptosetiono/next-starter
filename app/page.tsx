import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/app/components/ui/home.module.css'
import Logo from '@/app/_components/ui/logo';
import { lusitana } from '@/app/_components/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <Logo />
      </div>
    </main>
  );
}
