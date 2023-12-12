
import React from 'react';
import type { TablePropsType, ColumnType, CellType, RowType, InputFilterType  } from './types';
import { TableBodySkeleton } from './skeleton';
import Pagination from '@/app/_components/ui/data-table/pagination';
import TableSorter from '@/app/_components/ui/data-table/sorter';
import TableSummary from '@/app/_components/ui/data-table/summary';
import { InputTextSearch, InputSelectSearch}  from '@/app/_components/ui/data-table/input-search';


export function DataTable(props: TablePropsType ) {
  const {
    columns,
    isLoading,
    data,
    totalPages,
    pageSize,
    currentPage,
    totalCount,
    currentSort
  } = props;


  return (
    <TableWrapper>
          <TableSummary
            currentPage={currentPage}
            pageSize={pageSize}
            totalCount={totalCount}
            isLoading={isLoading}
          />
          
          <Table>
            <TableHeader
              columns={columns}
              currentSort={currentSort}
            />

            <TableBody isLoading={isLoading} numColumn={columns.length}>
              <TableRowSearch  columns={columns}/>

              {data?.map((row) => (
                <TableRow key={row.rowKey}>
                  {row.columns?.map((column: CellType, index: number) => (
                    <TableColumn key={index}>
                      {column}
                    </TableColumn>
                   ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {totalPages >1 &&
            <Pagination totalPages={totalPages} currentPage={currentPage} isLoading={isLoading}/>
          }
    </TableWrapper> 
  );
}

export const TableWrapper = ({ children }: {children: React.ReactNode} )  => {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg md:pt-0 bg-gray-50 dark:bg-gray-900">
          {children} 
        </div>
      </div>
    </div>
  )
}

export const Table = ({ children }: {children: React.ReactNode} ) => {
  return (
    <table className="min-w-full mt-2 border-2 dark:border-gray-600">
      {children}
    </table>
  )
}

export const TableHeader = ({ columns, currentSort }: {columns: ColumnType[], currentSort?: string} ) => {
  return (
  <thead className="rounded-lg border-2 text-sm font-normal dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">
      <tr>
        {columns?.map((column: ColumnType) => (
            <TableColumnHeader key={column.name} data={column}  currentSort={currentSort}/>
        ))}
      </tr>
    </thead>
  )
}

export const TableColumnHeader = ({ data, currentSort}: {data: ColumnType, currentSort?: string}) => {
  return (
    <th key={'header-'+data.name} scope="col" className="px-3 py-5 text-center font-bold font-medium">
      <div className="flex flex-col">
        <div className='flex justify-center gap-2'>
          {data.label}
          <TableSorter name={data.name} currentSort={currentSort}/>
        </div>
      </div>   
    </th>
  )
}

export const TableBody = ({isLoading, numColumn, children }: {isLoading:boolean, numColumn: number, children: React.ReactNode}) =>{
  
  if(isLoading){
    return <TableBodySkeleton numRow={3} numColumn={numColumn}/>
  }

  return (
    <tbody className="bg-white dark:bg-gray-900 dark:text-gray-50">
     {children}
    </tbody>
  );
}

export const TableRow = ({children} : {children: React.ReactNode}): React.ReactNode => {
  return   <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg dark:border-gray-600">
    {children}
  </tr>
}

export const TableColumn = ({children} : {children: React.ReactNode}) => {
  return  (
    <td className="whitespace-nowrap px-3 py-3">
        {children}
    </td>
  );
}

export const TableRowSearch = ({ columns }: {columns: ColumnType[]} ) => {
  return (
     <tr key='table-row-search'>
        {columns?.map((column: ColumnType) => (
          <TableColumnSearch key={'header-'+column.name} name={column.name} inputFilter={column.inputFilter}/>
        ))}
      </tr>
  )
}


export const TableColumnSearch = ({name, inputFilter} : {name: string, inputFilter?: InputFilterType | boolean}) => {
  let renderInput = <></>;

  if(typeof inputFilter!== 'boolean'){
    renderInput = <InputTextSearch name={name}/>;
    if(inputFilter?.options){
      renderInput = <InputSelectSearch name={name} options={inputFilter.options}/>;
    }
  }

 
  return  (
    <td className="whitespace-nowrap px-3 py-3">
       {renderInput}
    </td>
  );
}


