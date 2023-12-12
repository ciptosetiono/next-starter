import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function UserStatus({ status }: { status: string | number}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status != '10',
          'bg-green-500 text-white': status == '10',
        },
      )}
    >
      {status == '10' ? (
        <>
          Aktif
        </>
      ) : (
        <>
          Nonaktif
        </>
      )}
    </span>
  );
}
