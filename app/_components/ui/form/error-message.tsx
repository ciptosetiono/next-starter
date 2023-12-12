import React from 'react'

export const ErrorMessage = ({errors} : {errors: string | string[]}) : React.ReactNode => {
    if(typeof errors === 'string'){
        return  <p className="mt-2 text-sm text-red-500" key={errors}>
            {errors}
        </p>
    }
    return (
        <>
            {errors?.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
                </p>
            ))}
        </>
    )
}