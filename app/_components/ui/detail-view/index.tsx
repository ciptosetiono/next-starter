import { PaperClipIcon } from '@heroicons/react/20/solid'
import React from 'react'

export type DataDetailType = DataRowType[]

export type DataRowType = {
    label: string,
    value: string | React.ReactNode
}

export default function DetailView({data} : {data: DataDetailType}) {
  return (
    <DetailViewWrapper>
        {data.map((row: DataRowType): any => {
            <DetailViewRow label={row.label} value={row.value}/>
        })}
    </DetailViewWrapper>
  )
}

export function DetailViewWrapper({ children }: {children: React.ReactNode}){
    return (
        <div className="mt-6 border-t border-gray-200 dark:border-gray-800">
            <dl className="divide-y divide-gray-200 dark:divide-gray-800">
                {children}
            </dl>
        </div>
    )
}

export function DetailViewRow({ label, value}: {label: string, value: string | React.ReactNode}) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <DetailViewLabel label={label}/>
        <DetailViewValue value={value}/>
    </div>
  )
}

export function DetailViewLabel({ label }: {label: string}){
    return (
    <dt className="text-sm font-medium leading-6 text-gray-900 font-bold dark:text-gray-100">
        {label}
    </dt>) 
}

export function DetailViewValue({ value }: {value: string | React.ReactNode}){
    return(
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
            {value}
        </dd>
    )
}
