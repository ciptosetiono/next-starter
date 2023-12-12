import React from 'react'
import clsx from 'clsx';
import { ErrorMessage } from './error-message';

export type SelectPropsType = {
    id:string,
    label: string,
    name: string,
    placeholder?: string,
    required?: boolean,
    defaultValue?: string | number | undefined ,
    isError?:boolean,
    errors?: string[],
    helper?:string,
    Icon?: React.ElementType,
    onChange?: () => void,
    options: OptionType[]
} 

export type OptionType = {
    label: string | number,
    value: string | number
}

export default function InputSelect(props: SelectPropsType ) {
    const {id, label, name, defaultValue, placeholder, required,  Icon, isError, errors, helper, onChange,options, ...inputProps} = props;

    return (
    <div className="mb-4">
        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                name={name}
                className={clsx(Icon && 'py-2 pl-10','peer block w-full cursor-pointer rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-500')}
                defaultValue={defaultValue}
                aria-describedby={id+"-error"}
            >
                {placeholder &&
                    <option value="" disabled>
                        Select a {label}
                    </option>
                }                       
                {options?.map((option) => (
                    <option key={option.value} value={option.value} className="p-y-10">
                        {option.label}
                    </option>
                ))}
            </select>
            {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>}
        </div>
        <div id={id+"-error"} aria-live="polite" aria-atomic="true">
            {errors && <ErrorMessage errors={errors}/>}
        </div>
    </div>
  )
}
