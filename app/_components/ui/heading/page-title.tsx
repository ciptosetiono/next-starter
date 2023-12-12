'use client'
import { lusitana } from '@/app/_components/ui/fonts';

export interface HeaderProps {
    title?: string,
    color?: string,
    desc?: string
}



export default function PageTitle(props: HeaderProps) {
    const { title, desc } = props;
    return(
        <div className={`${lusitana.className}`}>
            <h1 className='text-2xl'>{title}</h1>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{desc}</p>
        </div>
    )
}