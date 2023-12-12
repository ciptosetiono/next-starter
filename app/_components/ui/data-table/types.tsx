export type TablePropsType = {
    columns: ColumnType[],
    isLoading: boolean,
    data: RowType[],
    totalCount: number,
    pageSize: number,
    totalPages: number,
    currentPage: number,
    currentSort?:string
}

export type RowType = {
  rowKey:string | number,
  columns: CellType[]
}


export type ColumnType = {
    name: string,
    label: string,
    sortable?: boolean,
    inputFilter?: InputFilterType | boolean
}

export type CellType = string | React.ReactNode;

export type InputFilterType = {
  type?: string,
  options?: OptionType[]
}

export type OptionType = {
  label: string | number,
  value:  string | number
}
