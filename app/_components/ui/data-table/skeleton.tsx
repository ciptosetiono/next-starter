import React from 'react'
import { TableSummarySkeleton } from './summary'
import { PaginationSkeleton } from './pagination'
export default function TableSkeleton() {
  return (
    <div className="mt-5">
        <TableSummarySkeleton/>
        <table>
            <TableBodySkeleton numRow={3} numColumn={4}/>
        </table>
        <PaginationSkeleton/>
    </div>
  )
}

export const TableBodySkeleton = ({numRow, numColumn }: {numRow: number, numColumn: number}) : React.ReactNode => {
    const renderSkeleton = () => {
        let skeletons = [];
        for (let i = 1; i <= 3; i++) {
            skeletons.push(<RowSkeleton  key={i} numColumn={numColumn}/>);
        }
        return skeletons;
    }
    return (
    <tbody className="bg-white dark:bg-gray-700 dark:text-gray-50">
       {renderSkeleton()}
    </tbody>
    )
}

const RowSkeleton = ({numColumn}: {numColumn: number}) => {
    const renderColumns= () => {
        let skeletons = [];
        for (let i = 1; i <= numColumn; i++) {
            skeletons.push(<ColumnSkeleton key={i}/>);
        }
        return skeletons;
    }

    return  (
    <tr className="max-w animate-pulse">
       {renderColumns()}
    </tr>
    )
}

export const ColumnSkeleton = () => {
    return (
        <td>
            <div  className="max-w h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5">

            </div>
        </td>
    )
}

