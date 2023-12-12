import { backendService } from '@/app/_lib/services/backend-services';
import { unstable_noStore as noStore } from 'next/cache';
import type { QueryParams, RequestPagination } from '@/app/_lib/services/backend-services';
import type { User } from '../types/user';

export async function fetchFilteredUsers(queryParams: QueryParams){
    noStore();

    const res = await backendService({
        method:'get',
        endPoint: '/user/index',
        queryParams: queryParams
    });
    
    if(res.success) {
        const data = res.data;
        const users = data.map((user: User) => ({
            ...user
          }));

        return {
            success: true,
            users: users,
            pagination:res.pagination
        }
    }else{
        return {
            success: false,
            errors: res.errors
        }
    }
  }

  export async function fetchUserById(userId: string){
    noStore();

    const res = await backendService({
        method:'get',
        endPoint: '/user/'+userId,
    });

    if(res.success) {
        const user: User = res.data;
        return {
            success: true,
            user: res.data
        }
    }else{
        return {
            success: false,
            user: res.errors
        }
    }

  }