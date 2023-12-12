'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/_lib/utils/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages, currentPage, isLoading }: { totalPages: number, currentPage: number, isLoading?: boolean }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if(isLoading){
    return <PaginationSkeleton/>
  }
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }
 
   const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="mt-5 flex w-full justify-end">
    
      <div className="inline-flex">
        <div className='h-10 text-gray-500 text-sm mt-2 mr-2 md:mr-4'>
          Pergi ke Halaman
        </div>
        
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border border-gray-300 dark:border-gray-600',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-blue-600 border-blue-600 text-white': isActive,
      'hover:bg-gray-100 dark:bg-gray-700': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-600',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100 dark:bg-gray-700': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}

export const PaginationSkeleton = () => {
  return (
    <div className="mt-5 flex w-full justify-end nimate-pulse ">
        <div  className="w-10 h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 mr-2.5">
        </div>
        <div  className="w-10 h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 mr-2.5">
        </div>
        <div  className="w-10 h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 mr-2.5">
        </div>
        <div  className="w-10 h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 mr-2.5">
        </div>   
    </div>
  );
}