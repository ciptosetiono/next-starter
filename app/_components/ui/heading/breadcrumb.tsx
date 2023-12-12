import { clsx } from 'clsx';
import Link from 'next/link';
import { lusitana } from '@/app/_components/ui/fonts';

export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {

  
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx(lusitana.className, 'flex justify-end text-sm')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-400' :'text-gray-600 dark:text-gray-100',
            )}
          >

            {breadcrumb.active ? (
              <div>{breadcrumb.label}</div>
            ) : (
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            )}
            
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
