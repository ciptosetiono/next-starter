
'use client'
import clsx from 'clsx';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({ children, className, color, disabled, isLoading, ...rest }: ButtonProps) {
  return (

    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg  px-4 text-sm font-medium  transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
        (!color || color=='blue') && 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500 active:bg-blue-600',
        (color=='red') && 'bg-rose-700 text-white hover:bg-rose-800 focus-visible:outline-rose-500 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800',
        (color=='default') && 'text-gray-600 bg-gray-100 hover:bg-gray-200',
        (color=='dark') && 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
        (color=='light') && 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
       )}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

