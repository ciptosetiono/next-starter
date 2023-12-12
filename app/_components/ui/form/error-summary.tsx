import React from 'react'
import {ExclamationCircleIcon} from '@heroicons/react/24/outline';

export default function ErrorSummary({title, errors}: { title?: string, errors: any }) {
    var errorMessages = [];
    if(errors){
        if(typeof errors == 'string'){
            errorMessages.push(errors);
        }else{
            errors= Object.values(errors); //convert object to array
            {errors?.map((error:any)=> {
                if(typeof error == 'string'){
                    errorMessages.push(error);
                }else{
                    error?.map((err:any) => {
                        errorMessages.push(err);
                    });
                }
            })}
        }
    }

  return (
    <div className='p-3 border-2 border-rose-400'>
        {title && <ErrorTitle title={title}/>}
        {errorMessages.map((errorMessage, index) => {
            return <ErrorMessage message={errorMessage } key={index}/>
        })}
    </div>
  )
}


export const ErrorMessage = ({ message}: {message:string}) => {
    return <div
            className="flex items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
        >
    <p className="text-sm text-red-500">
        {message}
    </p>
</div>
}

export const ErrorTitle = ({ title }: {title: string}) => {
    return (
    <div className="flex h-6 mb-5">
        <ExclamationCircleIcon className="text-red-500 mt-1" />
        <h3 className="text-lg text-red-500">{title}</h3>
    </div>
    );
}
