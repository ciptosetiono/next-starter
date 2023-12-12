'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'


export type ModalProps = {
    isOpen: boolean,
    title: string,
    titleDesc?: string,
    children: React.ReactNode,
    onClose: () => void
}

export function Modal(props: ModalProps) {
    
    const {isOpen, title, titleDesc, children, onClose} = props;
  
    function handleClose(){
        onClose();
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => handleClose}
            className="relative z-50">
            
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex w-screen items-center justify-center">
                <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white dark:bg-gray-900">
                    <div className="px-4 pt-4 dark:border-gray-800">
                        <Dialog.Title className='text-lg text-gray-900 dark:text-white'>
                            {title}
                        </Dialog.Title>
                        {titleDesc &&  <Dialog.Description> {titleDesc}</Dialog.Description>}
                    </div>

                    <div className="px-4 py-2">
                    {children}
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}