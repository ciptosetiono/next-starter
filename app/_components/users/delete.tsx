'use client'
import { useState } from "react";
import { Modal } from "@/app/_components/ui/modal";
import { Button} from "@/app/_components/ui/button";
import { deleteUser } from "@/app/_lib/actions/user-action";
import ErrorSummary from "@/app/_components/ui/form/error-summary";
export default function UserDelete({ userId, TriggerButton }: {userId: string, TriggerButton: React.ElementType}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const handleDelete = async () => {
        setIsLoading(true);
        const res = await deleteUser(userId);
        if(res?.errors){
            setErrors(res.errors);
        }
        setIsLoading(false);
    }

    return (
        <>
            <TriggerButton onClick={()=>{setIsOpen(true)}}/>

            <Modal
                isOpen={isOpen}
                title='Delete User'
                onClose={() => {setIsOpen(false)}}>

                <p className='text-md text-gray-600 dark:text-gray-400'>
                    Apakah kamu yakin ingin menghapus data ini ?
                </p>

                {errors && <ErrorSummary errors={errors}/>}
              
                <div className="flex mt-5">
                    <Button color='default'  onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button isLoading={isLoading} color='red' type="button" onClick={()=>{handleDelete();}}>
                        Delete
                    </Button>
                </div>
            </Modal>
        </>
    )
}
