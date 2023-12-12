import React from 'react'
import clsx from 'clsx';
import { ErrorMessage } from './error-message';

type InputTextProps = {
    id:string,
    label: string,
    type: string,
    name: string,
    disabled?: boolean
    defaultValue?: string | number,
    required?: boolean,
    isError?:boolean,
    errors?: string | string[],
    helper?:string,
    Icon?: React.ElementType,
    onChange?: () => void
}



export default function InputText(props: InputTextProps) {
  const {id, label, name, type, defaultValue, disabled, required,  Icon, isError, errors, helper, onChange, ...inputProps} = props;


  return (
    <div className="mt-4">
        <label
            className="mb-3 mt-5 block text-xs font-medium"
            htmlFor={name}
        >
            {label}
        </label>
        <div className="relative">
            <input
                className={clsx(
                        Icon && 'py-2 pl-10',
                        errors? 'border-rose-400':  'border-gray-200 dark:border-gray-600',
                        'peer block w-full rounded-md border text-sm outline-2 placeholder:text-gray-500 dark:bg-gray-700')}
                id={id}
                type={type}
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                required={required}
                {...inputProps}
            />
            {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>}
            
        </div>
        <div id={id+"-error"} aria-live="polite" aria-atomic="true">
            {errors && <ErrorMessage errors={errors}/>}
        </div>
    </div>
  )
}
