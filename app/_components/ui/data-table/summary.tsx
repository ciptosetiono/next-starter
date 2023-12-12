import React from 'react'

export default function TableSummary({currentPage, pageSize, totalCount, isLoading}: {currentPage:number, pageSize: number, totalCount: number, isLoading?: boolean}) {
    
    if(isLoading){
      return <TableSummarySkeleton/>
    }

    let totalPage = Math.round(totalCount / pageSize);
    let itemStart = ((currentPage - 1) *  pageSize) +1;

    let itemEnd = currentPage * pageSize;   
    if(currentPage === totalPage){
      itemEnd = totalCount;
    }

    return (
    <div className='text-right text-sm text-gray-500'>
        Menampilkan {itemStart} - {itemEnd} dari {totalCount} data
    </div>
  )
}


export const TableSummarySkeleton = () => {
  return(
    <div className='flex justify-end animate-pulse'>
        <div  className="w-1/4 h-5 bg-gray-200 dark:bg-gray-700 mb-2.5 mr-2.5">
        </div>
    </div>
  )


}