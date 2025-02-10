import React from 'react'

export const AuthCard = ({ children, label }) => {
    return (
        <div className='flex items-center justify-center flex-col gap-4'>
            <div className='size-20 rounded-full  text-sm border flex items-center justify-center'>
                {label}
            </div>
            {children}
        </div>
    )
}
