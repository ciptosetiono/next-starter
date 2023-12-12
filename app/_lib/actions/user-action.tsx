'use server';
import {z} from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { backendService } from '@/app/_lib/services/backend-services';   



const UserScheme = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: 'Masukan Name.',
    }),
    email: z.string({
        invalid_type_error: 'Masukan Email.',
    }),
    /*
    password: z.string({
        invalid_type_error: 'Masukan Password.',
    }),
    */
    
    status: z.enum(['10', '9'], {
        invalid_type_error: 'Pilih status.',
    })
  });

  export type UserState = {
    success?: boolean,
    errors?: {
      name?: string[],
      email?: string[],
      password?: string[],
      status?: string[],
    }
  };

export async function createUser(prevState: UserState, formData: FormData) {
    let result: UserState  = {
        success: false
    }
 
    const CreateUser = UserScheme.omit({ id: true});  
    
    const validatedFields =  CreateUser.safeParse({
        name:formData.get('name'),
        email: formData.get('email'),
        //password: formData.get('password'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        console.log('invalid form input frontend');
        result.errors = validatedFields.error.flatten().fieldErrors;
    }else{
        const requestData = {...validatedFields.data};
        const response = await backendService({method:'post', endPoint: '/user/create',data: requestData});
        if(response.success){
            result.success = true
            revalidatePath('/dashboard/users');
            redirect('/dashboard/users');
        }
        console.log('invalid form input backendtend');
        result.errors= response.errors;
    }
    return result;
}


export async function updateUser(id: string, prevState: UserState, formData: FormData) {

    const UpdateUser = UserScheme.omit({ id: true});
    
    let result: UserState  = {
        success: false
    }
    
    const validatedFields =  UpdateUser.safeParse({
        name:formData.get('name'),
        email: formData.get('email'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        result.errors = validatedFields.error.flatten().fieldErrors;
    }else{
        const requestData = {...validatedFields.data};
        const response = await backendService({ method:'put', endPoint: '/user/'+id, data: requestData});
        if(response.success){
            result.success = true
            revalidatePath('/dashboard/users');
            revalidatePath('/dashboard/users/'+id);
            redirect('/dashboard/users/'+id);
        }
        result.errors= response.errors;
    }
    return result;
}

export async function deleteUser(id: string) {
    const res = await backendService({ method:'DELETE', endPoint: '/user/'+id});
    if(res.success){
        revalidatePath('/dashboard/users');
        redirect('/dashboard/users/');
    }else{
        return {
            success: false,
            errors: 'Data user gagal dihapus!.' 
        };
    }
}

