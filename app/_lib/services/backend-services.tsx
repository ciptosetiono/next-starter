import axios from 'axios'
import { auth } from '@/auth';
import { resolve } from 'dns';


export type Request = {
  method: string,
  endPoint: string,
  queryParams?: QueryParams,
  data?:any,
  errors?:any
}

export type Response = {
  success: boolean,
  data?: any,
  errors?:any,
  headers?:any,
  pagination?: ResponsePagination
}

export type QueryParams = {
  filters?: any,
  pagination?: RequestPagination,
  sort?: string
}

export type ResponsePagination = {
  'totalCount': number,
  'pageCount': number,
  'currentPage': number,
  'perPage': number
}

export type RequestPagination = {
  'page': number,
  'pageSize': number
}

export const backendService = async (requestOption : Request) : Promise <Response> =>{
  const {method, endPoint, data, queryParams } = requestOption;

  const filterQuery = queryParams?.filters;
  const pagination = queryParams?.pagination;
  const requestPagination = encodePagination({...pagination});
  const sort = queryParams?.sort;

  const requestParams = {
    ...filterQuery,
    ...requestPagination,
    sort: sort
  }

  let url = process.env.BACKEND_URL+endPoint;
  let response: Response = {
    success: false
  };
  const token = await getToken();
  await axios({
          method: method,
          headers: { Authorization: `Bearer ${token}`, withCredentials: true },
          url:url,
          data: data,
          params: requestParams
      }).then((res:any) => {
          response.success = res.data.success;
          response.headers = res.headers;
          response.pagination =  decodePagination(response.headers);

          if(response.success){
              response.data = res.data.data;
          }else{
            response.errors = res.data.errors;
          }
      })
      .catch((err:Error) => {
          response.errors = err.message;
      });
  
    return response;

}

export const encodeFilters = (filters: any) => {
  if(filters){
    let requestFilter = Object.entries(filters).reduce((obj: any, [key, value]) => ({ ...obj, ['filter['+key+'][like]']: value}), {});
    return requestFilter;
  }
}

//set pagination untuk dikirim ke backend
export const encodePagination = ({page, pageSize}: {page?: number, pageSize?: number}) => {
      //infrontend page start with 0, in backend start with 1, jadi di request tambahkan 1
      return {
          'page': `${page}`,
          'per-page':`${pageSize}`
      };
}

//get pagination from backend
export const decodePagination = (headers: any) : ResponsePagination => {
  return {
    'totalCount': headers['x-pagination-total-count'],
    'currentPage': headers['x-pagination-current-page'],
    'pageCount': headers['x-pagination-page-count'],
    'perPage': headers['x-pagination-per-page'],
  }
}

export const encodeSorting = (sorting:any) => {

  if(sorting.length){
    let currentSorting = sorting[0];
    let sortingRequest = currentSorting.desc ? '-'+currentSorting.id :  currentSorting.id;
    return {'sort': `${sortingRequest}` };
  }

}


export async function getToken(){
  const session = await auth();
  return session?.jwt?.token;
}