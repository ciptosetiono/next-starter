'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { OptionType } from './types';




export function InputTextSearch({ name }: { name: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const handleSearch =  useDebouncedCallback((term) => {
    params.set('page', '1');
    if(term){
      params.set(name, term);
    }else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  
  });

  return (
    <SearchWrapper>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 dark:bg-gray-800 dark:border-gray-600"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(name)?.toString()}
      />
    </SearchWrapper>
  );
}


export const InputSelectSearch = ({ name, options }: { name: string, options: OptionType[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const value = searchParams.get(name)?.toString();
  const { replace } = useRouter();

  const handleSearch =  useDebouncedCallback((term) => {
    params.set('page', '1');
    if(term){
      params.set(name, term);
    }else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  
  });

  return (
    <SearchWrapper>
      <select
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500  dark:bg-gray-800 dark:border-gray-600"
        onChange={(e) => handleSearch(e.target.value)}
        value={value}
      >

        <option value="">
            Semua
        </option>
                    
        {options?.map((option) => (
          <option key={option.value} value={option.value} className="p-y-10">
              {option.label}
          </option>
        ))}
      </select>
    </SearchWrapper>
  )


}

export const SearchWrapper = ({ children }: {children: React.ReactNode}) => {
  return  (
    <div className="relative flex flex-1 flex-shrink-0 px-3">
      {children}
    </div>
  )
}