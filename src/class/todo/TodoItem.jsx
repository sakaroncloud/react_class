import React from 'react'

export const TodoItem = ({ title, id, onDelete, onEdit, isCompleted, onCheckedChange }) => {
    const [isEditing, setIsEditing] = React.useState(false)
    return (
        <div className='flex gap-x-2 items-end'>
            <input
                onChange={() => onCheckedChange(id)}
                checked={isCompleted}
                type="checkbox" className='text-xs' />

            {
                !isEditing && (
                    <div label className='leading-none text-sm' >
                        {title}
                    </div >
                )
            }

            {isEditing && (
                <input
                    value={title}
                    onChange={(e) => onEdit(id, e.target.value)}
                />
            )}

            {isEditing && (
                <button
                    onClick={() => setIsEditing(false)}
                    className='w-fit text-xs !py-0.5'>Ok</button>
            )}

            {
                !isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className='w-fit text-xs !py-0.5'>Edit</button>

                )
            }


            <button
                onClick={() => onDelete(id)}
                className='w-fit text-xs !py-0.5'>Delete</button>
        </div >
    )
}
